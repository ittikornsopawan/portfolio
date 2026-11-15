'use client'

import Image from 'next/image'
import { Heart, Lightbulb, Compass, Leaf, Users, Brain, Quote } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

export default function Personality() {
  const { lang } = useLang()
  const T = i18n.personality

  const traits = [
    { Icon: Heart,    label: T.traits.empathetic[lang],    desc: T.traits.empatheticDesc[lang]    },
    { Icon: Lightbulb,label: T.traits.idealistic[lang],    desc: T.traits.idealisticDesc[lang]    },
    { Icon: Compass,  label: T.traits.principled[lang],    desc: T.traits.principledDesc[lang]    },
    { Icon: Users,    label: T.traits.collaborative[lang], desc: T.traits.collaborativeDesc[lang] },
    { Icon: Leaf,     label: T.traits.adaptive[lang],      desc: T.traits.adaptiveDesc[lang]      },
  ]

  return (
    <section id="personality" className="max-w-6xl mx-auto px-6 py-24">

      {/* Section header */}
      <RevealWrapper className="text-center mb-16">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <Brain size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
        <p className="text-theme2 text-base max-w-md mx-auto">
          {T.subtitle[lang]}
        </p>
      </RevealWrapper>

      {/* SVG illustration banner */}
      <RevealWrapper className="mb-6">
        <div className="glass-card overflow-hidden">
          <Image
            src="/mediator-desktop.svg"
            alt="INFP-T The Mediator illustration"
            width={900}
            height={350}
            className="w-full h-auto"
            priority
          />
        </div>
      </RevealWrapper>

      {/* MBTI badge + description + traits */}
      <RevealWrapper delay={80}>
        <div className="glass-card p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* MBTI badge */}
            <div className="shrink-0 flex flex-col items-center lg:items-start">
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-[0_8px_30px_rgba(124,58,237,0.4)]">
                  <span className="font-display text-2xl font-extrabold text-white tracking-widest">INFP</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-xl bg-gradient-to-br from-violet-500 to-blue-400 flex items-center justify-center shadow-md icon-box">
                  <span className="text-white text-[0.6rem] font-bold">-T</span>
                </div>
              </div>
              <div className="mt-4 text-center lg:text-left">
                <div className="font-display font-extrabold text-[1.05rem] gradient-text">{T.mediator[lang]}</div>
                <div className="text-[0.72rem] text-theme3 font-medium mt-0.5 uppercase tracking-wider">{T.type[lang]}</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
            <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

            {/* Description + traits */}
            <div className="flex-1">
              <p className="text-[0.92rem] text-theme2 leading-[1.85] mb-7">
                {T.desc[lang]}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {traits.map(t => (
                  <div
                    key={t.label}
                    className="flex flex-col items-center text-center p-3.5 rounded-xl bg-[var(--surface2)] border border-[var(--border)] hover:border-violet-500/25 hover:bg-violet-500/[0.06] transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600/15 to-blue-500/15 border border-violet-500/20 flex items-center justify-center mb-2.5 icon-box group-hover:from-violet-600 group-hover:to-blue-500 transition-all duration-200">
                      <t.Icon size={15} className="text-violet-500 dark:text-violet-400 group-hover:text-white transition-colors" strokeWidth={2} />
                    </div>
                    <div className="text-[0.75rem] font-bold text-theme leading-tight">{t.label}</div>
                    <div className="text-[0.65rem] text-theme3 mt-1 leading-snug hidden sm:block">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={140} className="mt-6">
        <div className="glass-card p-8 relative overflow-hidden">
          <div className="absolute top-3 right-6 font-display text-[8rem] font-extrabold gradient-text opacity-10 leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-[0_6px_16px_rgba(124,58,237,0.3)] shrink-0 icon-box">
              <Quote size={16} className="text-white" strokeWidth={2} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-theme3 mb-3">
                {T.philosophy.label[lang]}
              </div>
              <blockquote className="font-display font-semibold text-[1.05rem] text-theme leading-relaxed max-w-2xl">
                {T.philosophy.quote[lang]}
              </blockquote>
              <div className="mt-3 text-sm text-theme2">{T.philosophy.quoteBy[lang]}</div>
            </div>
          </div>
        </div>
      </RevealWrapper>

    </section>
  )
}
