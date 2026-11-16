'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import Image from 'next/image'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'
import { OPEN_TO_WORK_EVENT } from '@/lib/open-to-work'

const VOLUME = 0.05

export default function BackgroundMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const clusterRef = useRef<HTMLDivElement>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [promptDismissed, setPromptDismissed] = useState(false)
  const { lang } = useLang()
  const T = i18n.musicPlayer
  const heroT = i18n.hero

  // Must run inside a user gesture: a suspended AudioContext would silence the routed <audio>.
  const startVisualizer = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audioCtxRef.current) {
      void audioCtxRef.current.resume()
      return
    }
    try {
      const ctx = new AudioContext()
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 256
      analyser.smoothingTimeConstant = 0.6
      // Safari ignores <audio>.volume once the element feeds Web Audio (and iOS ignores it always),
      // so set the level with a gain node and leave the element at full volume.
      const gain = ctx.createGain()
      gain.gain.value = VOLUME
      ctx.createMediaElementSource(audio).connect(gain).connect(analyser)
      analyser.connect(ctx.destination)
      audio.volume = 1 // only once the gain node is in the path
      audioCtxRef.current = ctx
      analyserRef.current = analyser
    } catch (error) {
      console.error('Music visualizer unavailable', error)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Browsers block autoplay with sound until the first interaction; start on that interaction instead.
    const events = ['click', 'keydown', 'touchend'] as const
    const onFirstGesture = (event: Event) => {
      if (clusterRef.current?.contains(event.target as Node)) return // the controls handle their own clicks
      events.forEach(name => window.removeEventListener(name, onFirstGesture))
      startVisualizer()
      if (audio.paused) void audio.play().catch(() => {})
    }
    events.forEach(name => window.addEventListener(name, onFirstGesture))

    let cancelled = false
    audio.volume = VOLUME // until the first gesture routes audio through the gain node
    void audio.play().catch(error => {
      if (cancelled) return

      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        setAutoplayBlocked(true)
        return
      }

      console.error('Background music could not be played', error)
    })

    return () => {
      cancelled = true
      events.forEach(name => window.removeEventListener(name, onFirstGesture))
      audio.pause()
    }
  }, [])

  // Feed bass energy into --beat (0..1) on the player; CSS turns it into the pulse.
  useEffect(() => {
    const el = playerRef.current
    if (!el) return
    if (!isPlaying || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--beat', '0')
      return
    }
    const bins = new Uint8Array(128)
    let beat = 0
    let avg = 0
    let frame = requestAnimationFrame(function tick() {
      const analyser = analyserRef.current
      if (analyser) {
        analyser.getByteFrequencyData(bins)
        const bass = (bins[1] + bins[2] + bins[3] + bins[4]) / (4 * 255)
        avg = avg * 0.95 + bass * 0.05
        // energy above the running average = a hit; fast attack, smooth decay
        beat = Math.max(Math.min(1, Math.max(0, (bass - avg) * 6 + 0.1)), beat * 0.9)
        el.style.setProperty('--beat', beat.toFixed(3))
      }
      frame = requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(frame)
  }, [isPlaying])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      return
    }

    startVisualizer()
    try {
      await audio.play()
      setAutoplayBlocked(false)
    } catch (error) {
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        setAutoplayBlocked(true)
        return
      }

      console.error('Background music could not be played', error)
    }
  }

  const buttonLabel = isPlaying ? T.pause[lang] : T.play[lang]

  return (
    <>
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        className="hidden"
        loop
        preload="auto"
        onPlay={() => {
          setIsPlaying(true)
          setAutoplayBlocked(false)
        }}
        onPause={() => setIsPlaying(false)}
        onError={() => console.error('Background music failed to load from /background-music.mp3')}
      />
      <div ref={clusterRef} className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_TO_WORK_EVENT))}
            aria-haspopup="dialog"
            aria-label={heroT.openToWork.viewDetails[lang]}
            title={heroT.openToWork.viewDetails[lang]}
            className="floating-otw-avatar group relative h-[72px] w-[72px] shrink-0 overflow-visible rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[3px] shadow-[0_0_0_4px_rgba(124,58,237,0.22),0_8px_28px_rgba(124,58,237,0.58)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-400"
          >
            <Image src="/profile.jpeg" alt="" width={144} height={144} priority className="relative z-10 h-full w-full rounded-full border-2 border-white object-cover object-top dark:border-slate-950" />
          </button>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-violet-300/70 bg-violet-700 px-3 py-1.5 text-[0.68rem] font-extrabold tracking-[0.01em] text-white shadow-[0_4px_18px_rgba(124,58,237,0.42)] ring-2 ring-white/80 dark:border-violet-300/50 dark:bg-violet-600 dark:ring-slate-950">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-300 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            {heroT.openToWork.badge[lang]}
          </span>
        </div>
        <div ref={playerRef} className="vinyl-player relative h-[72px] w-[72px] shrink-0">
          {autoplayBlocked && !isPlaying && !promptDismissed && (
          <div
            role="dialog"
            aria-label={T.promptTitle[lang]}
            className="absolute bottom-0 right-[88px] w-64 max-w-[calc(100vw-7.75rem)] animate-[music-prompt-in_0.35s_ease-out] rounded-2xl border border-violet-200/70 bg-white/90 p-4 text-left shadow-[0_12px_32px_rgba(76,29,149,0.18)] backdrop-blur-md dark:border-violet-400/20 dark:bg-slate-900/90 dark:shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
          >
            <p className="text-sm font-semibold text-slate-900 dark:text-white">♪ {T.promptTitle[lang]}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{T.promptBody[lang]}</p>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={togglePlayback}
                className="flex-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition hover:brightness-110"
              >
                {T.promptAccept[lang]}
              </button>
              <button
                type="button"
                onClick={() => setPromptDismissed(true)}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5"
              >
                {T.promptDismiss[lang]}
              </button>
            </div>
          </div>
          )}
          <span aria-hidden="true" className={`vinyl-glow ${isPlaying ? 'is-playing' : ''}`} />
          <span aria-hidden="true" className="vinyl-beat-ring" />
          <span aria-hidden="true" className={`vinyl-ripple ${isPlaying ? 'is-playing' : ''}`} />
          <span aria-hidden="true" className={`vinyl-ripple is-delayed ${isPlaying ? 'is-playing' : ''}`} />
          <div
            aria-hidden="true"
            className={`vinyl-disc absolute inset-0 rounded-full ${
              isPlaying ? 'is-playing' : ''
            } ${isPlaying ? 'animate-[spin_3s_linear_infinite] motion-reduce:animate-none' : ''}`}
          >
            <span aria-hidden="true" className={`vinyl-liquid ${isPlaying ? 'is-playing' : ''}`} />
          </div>
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={buttonLabel}
            aria-pressed={isPlaying}
            title={!isPlaying && autoplayBlocked ? T.autoplayBlocked[lang] : buttonLabel}
            className="absolute inset-0 m-auto inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 bg-gradient-to-br from-white to-violet-100 text-violet-700 shadow-[0_3px_8px_rgba(15,23,42,0.3),inset_0_1px_2px_rgba(255,255,255,0.9)] transition-transform hover:scale-105 dark:border-violet-200/30 dark:from-slate-900 dark:to-violet-950 dark:text-violet-200 dark:shadow-[0_3px_10px_rgba(0,0,0,0.65),inset_0_1px_2px_rgba(255,255,255,0.12)]"
          >
            {isPlaying ? <Pause size={15} fill="currentColor" aria-hidden="true" /> : <Play size={15} fill="currentColor" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </>
  )
}
