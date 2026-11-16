'use client'

import { useEffect, useRef } from 'react'

const parallaxLayerStyle = { transform: 'translate3d(0,var(--parallax-y,0),0)' }

export default function Background() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const background = backgroundRef.current
    if (!background) return

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const layers = Array.from(background.querySelectorAll<HTMLElement>('[data-parallax-speed]'))
    let frame = 0
    const update = () => {
      if (motionPreference.matches) {
        layers.forEach(layer => layer.style.removeProperty('--parallax-y'))
        return
      }

      const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange))
      const distance = Math.min(window.innerHeight * 0.72, window.innerHeight * progress)

      layers.forEach(layer => {
        const speed = Number(layer.dataset.parallaxSpeed ?? 0)
        layer.style.setProperty('--parallax-y', `${-distance * speed}px`)
      })
    }
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    motionPreference.addEventListener('change', scheduleUpdate)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      motionPreference.removeEventListener('change', scheduleUpdate)
    }
  }, [])

  return (
    <div ref={backgroundRef} aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Separate layers move at different rates as the page scrolls. */}
      <div data-parallax-speed="0.18" style={parallaxLayerStyle} className="absolute inset-0 will-change-transform">
        <div className="absolute rounded-full blur-[90px] opacity-25 dark:opacity-30 bg-violet-600 w-[650px] h-[650px] -top-56 -left-28 animate-drift-1" />
      </div>
      <div data-parallax-speed="0.42" style={parallaxLayerStyle} className="absolute inset-0 will-change-transform">
        <div className="absolute rounded-full blur-[80px] opacity-20 dark:opacity-25 bg-blue-500 w-[520px] h-[520px] top-[20%] -right-40 animate-drift-2" />
      </div>
      <div data-parallax-speed="0.72" style={parallaxLayerStyle} className="absolute inset-0 will-change-transform">
        <div className="absolute rounded-full blur-[100px] opacity-20 dark:opacity-25 bg-violet-800 w-[450px] h-[450px] bottom-[8%] left-[28%] animate-drift-3" />
      </div>
      {/* Subtle grid overlay */}
      <div
        data-parallax-speed="0.95"
        style={{ ...parallaxLayerStyle, backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        className="absolute -inset-y-[72%] left-0 right-0 opacity-[0.025] dark:opacity-[0.04] will-change-transform"
      />
    </div>
  )
}
