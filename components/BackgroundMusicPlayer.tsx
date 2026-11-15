'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

export default function BackgroundMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const { lang } = useLang()
  const T = i18n.musicPlayer

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    let cancelled = false
    audio.volume = 0.12
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
      audio.pause()
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      return
    }

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
      <div className="fixed bottom-6 right-6 z-[60] h-[72px] w-[72px]">
        <span
          aria-hidden="true"
          className={`vinyl-glow ${isPlaying ? 'is-playing' : ''}`}
        />
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
