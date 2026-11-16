'use client'

import { Smile, Tv, Trophy, PawPrint, UtensilsCrossed, Heart, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const ICONS: Record<string, LucideIcon> = {
  tv: Tv,
  sport: Trophy,
  paw: PawPrint,
  food: UtensilsCrossed,
  heart: Heart,
  ai: Sparkles,
}

export default function Hobbies() {
  const { lang } = useLang()
  const T = i18n.hobbies

  return (
    <section id="hobbies" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <RevealWrapper className="text-center mb-10 sm:mb-14">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <Smile size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
        <p className="text-theme2 text-base max-w-md mx-auto">{T.subtitle[lang]}</p>
      </RevealWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {T.items.map((item, i) => {
          const Icon = ICONS[item.icon]
          return (
          <RevealWrapper key={item.title.en} delay={i * 60}>
            <div
              className={`group relative h-full overflow-hidden rounded-[20px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
                'highlight' in item
                  ? 'bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-[0_12px_36px_rgba(124,58,237,0.35)]'
                  : 'glass-card hover:shadow-[0_14px_40px_rgba(124,58,237,0.18)]'
              }`}
            >
              {/* big faded emoji in the corner */}
              <Icon
                aria-hidden="true"
                size={96}
                strokeWidth={1.25}
                className={`pointer-events-none absolute -right-4 -top-4 opacity-[0.1] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${'highlight' in item ? 'text-white' : 'text-violet-500'}`}
              />

              <div
                className={`icon-box mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${
                  'highlight' in item
                    ? 'bg-white/20 text-white'
                    : 'bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-[0_6px_16px_rgba(124,58,237,0.32)]'
                }`}
              >
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </div>

              <h3 className={`font-display text-[1.05rem] font-bold mb-1.5 ${'highlight' in item ? 'text-white' : 'text-theme'}`}>
                {item.title[lang]}
              </h3>
              <p className={`text-[0.88rem] leading-relaxed ${'highlight' in item ? 'text-white/85' : 'text-theme2'}`}>
                {item.desc[lang]}
              </p>

              {item.tags && item.tagsLabel && (
                <div className="mt-4">
                  <div className="mb-2 text-[0.7rem] font-bold uppercase tracking-[1.5px] text-violet-600 dark:text-violet-400">
                    {item.tagsLabel[lang]}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/[0.12] to-blue-500/[0.12] px-2.5 py-1 text-[0.72rem] font-medium text-violet-700 dark:text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </RevealWrapper>
          )
        })}
      </div>
    </section>
  )
}
