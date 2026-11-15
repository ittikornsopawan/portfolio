'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

export default function BackgroundMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [promptDismissed, setPromptDismissed] = useState(false)
  const { lang } = useLang()
  const T = i18n.musicPlayer

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
      ctx.createMediaElementSource(audio).connect(analyser)
      analyser.connect(ctx.destination)
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
      if (playerRef.current?.contains(event.target as Node)) return // the play button handles itself
      events.forEach(name => window.removeEventListener(name, onFirstGesture))
      startVisualizer()
      if (audio.paused) void audio.play().catch(() => {})
    }
    events.forEach(name => window.addEventListener(name, onFirstGesture))

    let cancelled = false
    audio.volume = 0.05
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
      <div ref={playerRef} className="vinyl-player fixed bottom-6 right-6 z-[60] h-[72px] w-[72px]">
        {/* Inside playerRef so its clicks don't trigger the first-gesture autoplay */}
        {autoplayBlocked && !isPlaying && !promptDismissed && (
          <div
            role="dialog"
            aria-label={T.promptTitle[lang]}
            className="absolute bottom-[88px] right-0 w-64 animate-[music-prompt-in_0.35s_ease-out] rounded-2xl border border-violet-200/70 bg-white/90 p-4 text-left shadow-[0_12px_32px_rgba(76,29,149,0.18)] backdrop-blur-md dark:border-violet-400/20 dark:bg-slate-900/90 dark:shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
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
        <span
          aria-hidden="true"
          className={`vinyl-glow ${isPlaying ? 'is-playing' : ''}`}
        />
        <span aria-hidden="true" className="vinyl-beat-ring" />
        <span
          aria-hidden="true"
          className={`vinyl-ripple ${isPlaying ? 'is-playing' : ''}`}
        />
        <span
          aria-hidden="true"
          className={`vinyl-ripple is-delayed ${isPlaying ? 'is-playing' : ''}`}
        />
        <div
          aria-hidden="true"
          className={`vinyl-disc absolute inset-0 rounded-full ${
            isPlaying ? 'is-playing' : ''
          } ${
            isPlaying ? 'animate-[spin_3s_linear_infinite] motion-reduce:animate-none' : ''
          }`}
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
    </>
  )
}
