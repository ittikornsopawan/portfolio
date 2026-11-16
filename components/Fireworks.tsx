'use client'

import { useEffect, useRef } from 'react'
import type { Lang } from '@/lib/i18n'

const COLORS = ['#a78bfa', '#f472b6', '#facc15', '#4ade80', '#38bdf8', '#fb923c', '#f87171']
const GRAVITY = 0.05
const FINALE_MS = 4200
const YAY_MS = 450

type Kind = 'peony' | 'ring' | 'willow' | 'crossette' | 'glitter'
type Particle = {
  x: number; y: number; px: number; py: number; vx: number; vy: number
  life: number; max: number; color: string; size: number
  rocket?: Kind; split?: boolean; flicker?: boolean; drag: number; gravity: number
}
type Flash = { x: number; y: number; r: number; life: number; color: string }

const YAY = {
  shout: { en: 'Yay!', th: 'เย้!' },
  text: { en: "I'm open to work!", th: 'เปิดหางานแล้วจ้า!' },
} as const

/** Synthesized firework sounds; no audio files. Silent until the browser allows audio. */
function createSfx() {
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
  const ctx = new AC()
  const master = ctx.createGain()
  master.gain.value = 0.7
  const limiter = ctx.createDynamicsCompressor() // keeps the louder mix from clipping
  limiter.threshold.value = -10
  limiter.ratio.value = 8
  master.connect(limiter).connect(ctx.destination)

  const noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate)
  const data = noise.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1

  const out = (pan: number) => {
    const p = ctx.createStereoPanner()
    p.pan.value = Math.max(-1, Math.min(1, pan))
    p.connect(master)
    return p
  }
  const noiseSource = () => {
    const src = ctx.createBufferSource()
    src.buffer = noise
    return src
  }

  return {
    ctx,
    whistle(pan: number) {
      const t = ctx.currentTime
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(500, t)
      osc.frequency.exponentialRampToValueAtTime(1700, t + 0.9)
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(0.05, t + 0.1)
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.95)
      osc.connect(g).connect(out(pan))
      osc.start(t)
      osc.stop(t + 1)
    },
    boom(pan: number, size: number, crackle: boolean) {
      const t = ctx.currentTime
      const src = noiseSource()
      const lp = ctx.createBiquadFilter()
      lp.type = 'lowpass'
      lp.frequency.setValueAtTime(900, t)
      lp.frequency.exponentialRampToValueAtTime(60, t + 1.4)
      const g = ctx.createGain()
      g.gain.setValueAtTime(2.2 * size, t)
      g.gain.exponentialRampToValueAtTime(0.001, t + 1.6)
      src.connect(lp).connect(g).connect(out(pan))
      src.start(t, Math.random())
      src.stop(t + 1.7)
      if (!crackle) return
      // a burst of tiny high clicks after the bang
      for (let i = 0; i < 26; i++) {
        const at = t + 0.25 + Math.random() * 1.1
        const c = noiseSource()
        const hp = ctx.createBiquadFilter()
        hp.type = 'highpass'
        hp.frequency.value = 2500
        const cg = ctx.createGain()
        cg.gain.setValueAtTime(0.55 * Math.random(), at)
        cg.gain.exponentialRampToValueAtTime(0.001, at + 0.03)
        c.connect(hp).connect(cg).connect(out(pan + (Math.random() - 0.5) * 0.4))
        c.start(at, Math.random())
        c.stop(at + 0.04)
      }
    },
  }
}

/** Full-screen fireworks show with a finale, launched from the screen edges so they frame a centered modal. */
export default function Fireworks({ active, lang }: { active: boolean; lang: Lang }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!active || !canvas || !ctx || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    // Sound plays only if the browser lets audio run; a click during the show unlocks it.
    let sfx: ReturnType<typeof createSfx> | null = null
    try {
      sfx = createSfx()
      void sfx.ctx.resume()
    } catch {
      sfx = null
    }
    const unlock = () => void sfx?.ctx.resume()
    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)
    const canPlay = () => sfx?.ctx.state === 'running'
    const panOf = (x: number) => (x / window.innerWidth) * 2 - 1

    const particles: Particle[] = []
    const flashes: Flash[] = []
    const pick = () => COLORS[Math.floor(Math.random() * COLORS.length)]
    const kinds: Kind[] = ['peony', 'ring', 'willow', 'crossette', 'glitter']

    const launch = (side: 'left' | 'right', kind: Kind) => {
      const w = window.innerWidth
      const h = window.innerHeight
      const x = side === 'left' ? w * (0.03 + Math.random() * 0.22) : w * (0.75 + Math.random() * 0.22)
      const targetY = h * (0.08 + Math.random() * 0.42)
      particles.push({
        x, y: h, px: x, py: h, vx: (Math.random() - 0.5) * 1.4,
        vy: -Math.sqrt(2 * GRAVITY * 2 * (h - targetY)), // peaks at targetY
        life: 0, max: Infinity, color: '#fde68a', size: 2.4, rocket: kind, drag: 1, gravity: GRAVITY * 2,
      })
      if (canPlay()) sfx!.whistle(panOf(x))
    }

    const spawn = (x: number, y: number, count: number, opts: (i: number) => Partial<Particle> & { speed: number }) => {
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.05
        const { speed, ...rest } = opts(i)
        particles.push({
          x, y, px: x, py: y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          life: 0, max: 70, color: pick(), size: 2, drag: 0.975, gravity: GRAVITY, ...rest,
        })
      }
    }

    const explode = (p: Particle) => {
      const color = pick()
      const color2 = pick()
      const big = p.rocket === 'willow' || p.rocket === 'peony'
      flashes.push({ x: p.x, y: p.y, r: big ? 160 : 120, life: 0, color })
      if (canPlay()) sfx!.boom(panOf(p.x), big ? 1 : 0.8, p.rocket === 'glitter' || p.rocket === 'willow')

      switch (p.rocket) {
        case 'peony':
          spawn(p.x, p.y, 90, i => ({ speed: 2.5 + Math.random() * 5.5, color: i % 3 ? color : color2, max: 60 + Math.random() * 40 }))
          break
        case 'ring':
          spawn(p.x, p.y, 64, () => ({ speed: 6, color, max: 65, size: 2.4 }))
          spawn(p.x, p.y, 32, () => ({ speed: 3, color: color2, max: 55 }))
          break
        case 'willow':
          spawn(p.x, p.y, 110, () => ({ speed: 1.5 + Math.random() * 4, color: '#fbbf24', max: 130 + Math.random() * 50, drag: 0.985, gravity: GRAVITY * 0.6, flicker: true }))
          break
        case 'crossette':
          spawn(p.x, p.y, 10, () => ({ speed: 4.5, color, max: 32, size: 2.6, split: true }))
          break
        case 'glitter':
          spawn(p.x, p.y, 80, () => ({ speed: 2 + Math.random() * 5, color: Math.random() < 0.5 ? '#ffffff' : color, max: 80 + Math.random() * 40, flicker: true }))
          break
      }
    }

    const timers: number[] = []
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms))
    let pending = 0
    const schedule = (ms: number, side: 'left' | 'right', kind: Kind) => {
      pending++
      at(ms, () => {
        launch(side, kind)
        pending--
      })
    }

    // Opening volley, alternating sides with mixed shells
    for (let i = 0; i < 18; i++) schedule(120 + i * 210 + Math.random() * 120, i % 2 ? 'right' : 'left', kinds[i % kinds.length])
    // Finale: both sides at once
    for (let i = 0; i < 12; i++) schedule(FINALE_MS + i * 70, i % 2 ? 'right' : 'left', i % 3 === 0 ? 'willow' : i % 3 === 1 ? 'peony' : 'glitter')

    let frame = 0
    const tick = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = 'rgba(0,0,0,0.2)' // fade old frames into trails
      ctx.fillRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      for (let i = flashes.length - 1; i >= 0; i--) {
        const f = flashes[i]
        const a = 0.35 * (1 - f.life / 12)
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r)
        g.addColorStop(0, `rgba(255,255,255,${a})`)
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = g
        ctx.fillRect(f.x - f.r, f.y - f.r, f.r * 2, f.r * 2)
        if (++f.life > 12) flashes.splice(i, 1)
      }

      ctx.lineCap = 'round'
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.px = p.x
        p.py = p.y
        if (p.rocket) {
          p.vy += p.gravity
          if (p.vy >= -0.4) {
            explode(p)
            particles.splice(i, 1)
            continue
          }
        } else {
          p.vx *= p.drag
          p.vy = p.vy * p.drag + p.gravity
          if (++p.life > p.max) {
            if (p.split) spawn(p.x, p.y, 12, () => ({ speed: 2.5, color: '#ffffff', max: 40 }))
            particles.splice(i, 1)
            continue
          }
        }
        p.x += p.vx
        p.y += p.vy
        const fade = p.rocket ? 1 : 1 - p.life / p.max
        ctx.globalAlpha = p.flicker && Math.random() < 0.3 ? fade * 0.2 : fade
        ctx.strokeStyle = p.color
        ctx.lineWidth = p.size
        ctx.beginPath()
        ctx.moveTo(p.px, p.py)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()
      }
      ctx.globalAlpha = 1

      if (particles.length || flashes.length || pending) frame = requestAnimationFrame(tick)
      else ctx.clearRect(0, 0, w, h)
    }
    // keeps running until every shell has launched and faded
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      timers.forEach(clearTimeout)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
      void sfx?.ctx.close()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [active])

  return (
    <>
      <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />
      {active && (
        <div aria-hidden="true" className="otw-yay pointer-events-none absolute left-1/2 top-[4%] z-20" style={{ animationDelay: `${YAY_MS}ms` }}>
          <div className="otw-yay-inner flex items-center gap-3 whitespace-nowrap rounded-full px-6 py-2.5 sm:px-8 sm:py-3">
            <span className="otw-yay-emoji text-2xl sm:text-3xl">🎉</span>
            <span className="font-display text-2xl font-black tracking-tight sm:text-4xl">
              <span className="otw-yay-shout">{YAY.shout[lang]}</span>{' '}
              <span className="otw-yay-text">{YAY.text[lang]}</span>
            </span>
            <span className="otw-yay-emoji text-2xl sm:text-3xl" style={{ animationDelay: '0.15s' }}>🥳</span>
          </div>
        </div>
      )}
    </>
  )
}
