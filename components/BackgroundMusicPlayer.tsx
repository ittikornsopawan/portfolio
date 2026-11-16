'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'
import { OPEN_TO_WORK_EVENT } from '@/lib/open-to-work'
import { Briefcase, Pause, Phone, Play } from './PixelIcon'

const VOLUME = 0.05

export default function BackgroundMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const clusterRef = useRef<HTMLDivElement>(null)
  const mobileControlsRef = useRef<HTMLDivElement>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
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
      if (clusterRef.current?.contains(event.target as Node) || mobileControlsRef.current?.contains(event.target as Node)) return // the controls handle their own clicks
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

  // Keep the mobile dock out of the way of text, links, and buttons beneath it.
  useEffect(() => {
    const dock = mobileControlsRef.current
    if (!dock) return

    const nav = document.querySelector('nav')
    const candidates = ['top-right', 'bottom-right', 'top-left', 'bottom-left'] as const
    const blockers = Array.from(document.querySelectorAll<HTMLElement>(
      'main h1, main h2, main h3, main p, main blockquote, main a, main button, main li',
    )).filter(blocker => !dock.contains(blocker))
    let frame = 0

    const placeDock = () => {
      const navBottom = nav?.getBoundingClientRect().bottom ?? 0
      const applyPosition = (corner: typeof candidates[number]) => {
        dock.style.left = corner.endsWith('left') ? '0.5rem' : 'auto'
        dock.style.right = corner.endsWith('right') ? '0.5rem' : 'auto'
        dock.style.top = corner.startsWith('top') ? `${navBottom + 8}px` : 'auto'
        dock.style.bottom = corner.startsWith('bottom') ? 'calc(env(safe-area-inset-bottom) + 0.75rem)' : 'auto'
        return dock.getBoundingClientRect()
      }
      const isClear = (rect: DOMRect) => blockers.every(blocker => {
        const box = blocker.getBoundingClientRect()
        return box.width === 0 || box.height === 0 || box.right <= rect.left || box.left >= rect.right || box.bottom <= rect.top || box.top >= rect.bottom
      })

      const current = dock.dataset.corner as typeof candidates[number] | undefined
      const ordered = current ? [current, ...candidates.filter(corner => corner !== current)] : [...candidates]
      const clearCorner = ordered.find(corner => isClear(applyPosition(corner)))
      dock.style.visibility = clearCorner ? 'visible' : 'hidden'
      if (clearCorner) {
        dock.dataset.corner = clearCorner
      } else {
        dock.dataset.corner = ''
      }
    }

    const schedulePlacement = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(placeDock)
    }
    schedulePlacement()
    window.addEventListener('scroll', schedulePlacement, { passive: true })
    window.addEventListener('resize', schedulePlacement)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedulePlacement)
      window.removeEventListener('resize', schedulePlacement)
      dock.style.left = ''
      dock.style.right = ''
      dock.style.top = ''
      dock.style.bottom = ''
      dock.style.visibility = ''
      delete dock.dataset.corner
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
      <div
        ref={clusterRef}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] right-3 z-[60] hidden h-[4.25rem] flex-row items-center gap-2 overflow-visible rounded-full border border-violet-200/80 bg-white/95 px-2 shadow-[0_10px_30px_rgba(76,29,149,0.32),0_2px_8px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-violet-300/20 dark:bg-slate-950/95 dark:shadow-[0_10px_30px_rgba(0,0,0,0.62),0_0_18px_rgba(124,58,237,0.24)] sm:bottom-6 sm:right-6 sm:flex sm:h-auto sm:flex-col sm:gap-8 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none"
      >
        <div className="relative flex h-16 w-[5.25rem] shrink-0 items-center justify-center sm:h-auto sm:w-auto sm:flex-col sm:gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_TO_WORK_EVENT))}
            aria-haspopup="dialog"
            aria-label={heroT.openToWork.viewDetails[lang]}
            title={heroT.openToWork.viewDetails[lang]}
            className="floating-otw-avatar group absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 shrink-0 overflow-visible rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[3px] shadow-[0_0_0_4px_rgba(124,58,237,0.22),0_8px_28px_rgba(124,58,237,0.58)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-400 sm:static sm:h-[72px] sm:w-[72px] sm:translate-x-0"
          >
            <Image src="/profile.jpeg" alt="" width={144} height={144} priority className="relative z-10 h-full w-full rounded-full border-2 border-white object-cover object-top dark:border-slate-950" />
          </button>
          <span className="absolute bottom-0 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-violet-300/80 bg-violet-700 px-2 py-0.5 text-[0.62rem] font-extrabold leading-none tracking-[0.01em] text-white shadow-[0_3px_10px_rgba(124,58,237,0.45)] ring-2 ring-white dark:border-violet-300/50 dark:bg-violet-600 dark:ring-slate-950 sm:static sm:translate-x-0 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[0.68rem]">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-300 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            {heroT.openToWork.badge[lang]}
          </span>
        </div>
        <div ref={playerRef} className="vinyl-player relative h-12 w-12 shrink-0 sm:h-[72px] sm:w-[72px]">
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
            <span className="music-icon-swap" aria-hidden="true"><Play size={20} className={`music-icon ${isPlaying ? 'music-icon--hidden' : 'music-icon--shown'}`} /><Pause size={20} className={`music-icon ${isPlaying ? 'music-icon--shown' : 'music-icon--hidden'}`} /></span>
          </button>
        </div>
      </div>
      <div
        ref={mobileControlsRef}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] right-2 z-[60] flex flex-row items-center gap-2 rounded-full border border-violet-200/80 bg-white/95 px-2 py-1 shadow-[0_8px_24px_rgba(76,29,149,0.26)] backdrop-blur-xl dark:border-violet-300/20 dark:bg-slate-950/95 dark:shadow-[0_8px_24px_rgba(0,0,0,0.55)] sm:hidden"
      >
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(OPEN_TO_WORK_EVENT))}
          aria-haspopup="dialog"
          aria-label={`${heroT.openToWork.badge[lang]} — ${heroT.openToWork.viewDetails[lang]}`}
          title={`${heroT.openToWork.badge[lang]} — ${heroT.openToWork.viewDetails[lang]}`}
          className="relative isolate inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-visible rounded-full border border-violet-300/70 bg-white/95 text-violet-700 shadow-[0_5px_18px_rgba(76,29,149,0.28)] backdrop-blur-md transition hover:scale-105 hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-violet-300/35 dark:bg-slate-950/95 dark:text-violet-200 dark:hover:bg-slate-900 active:scale-95"
        >
          <span aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-full border border-emerald-400/80 motion-safe:animate-ping" />
          <Briefcase size={22} aria-hidden="true" />
          <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-400 shadow-sm dark:border-slate-950">
            <span className="absolute inset-0 rounded-full bg-emerald-300 motion-safe:animate-ping" />
          </span>
        </button>
        <a
          href="tel:+66991161274"
          aria-label={`${heroT.openToWork.call[lang]}: +66 99 116 1274`}
          title={`${heroT.openToWork.call[lang]}: +66 99 116 1274`}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-300/70 bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-[0_5px_18px_rgba(16,185,129,0.34)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:scale-95 dark:border-emerald-300/40"
        >
          <Phone size={21} aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={buttonLabel}
          aria-pressed={isPlaying}
          title={buttonLabel}
          className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-violet-300/70 bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-[0_5px_18px_rgba(124,58,237,0.4)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 active:scale-95 dark:border-violet-300/35"
        >
          <span aria-hidden="true" className="music-icon-swap">
            <Play size={20} className={`music-icon ${isPlaying ? 'music-icon--hidden' : 'music-icon--shown'}`} />
            <Pause size={20} className={`music-icon ${isPlaying ? 'music-icon--shown' : 'music-icon--hidden'}`} />
          </span>
          {isPlaying && <span aria-hidden="true" className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-emerald-300 ring-2 ring-violet-700 motion-safe:animate-pulse" />}
        </button>
      </div>
    </>
  )
}
