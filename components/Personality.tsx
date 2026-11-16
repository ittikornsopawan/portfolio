'use client'

import Image from 'next/image'
import { Heart, Lightbulb, Compass, Leaf, Users, Brain } from 'lucide-react'
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
    <section id="personality" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* Section header */}
      {/* Supporting section: compact left-aligned header so the main sections keep the big centered ones */}
      <RevealWrapper className="mb-6 flex items-center gap-4 sm:mb-8">
        <div className="icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-[0_6px_16px_rgba(124,58,237,0.32)]">
          <Brain size={22} strokeWidth={2} aria-hidden="true" />
        </div>
        <div>
          <h2 className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] font-extrabold leading-tight tracking-tight text-theme">
            {T.title[lang]}
          </h2>
          <p className="text-[0.92rem] text-theme2">{T.subtitle[lang]}</p>
        </div>
      </RevealWrapper>

      {/* Illustration beside the type and traits instead of a full-width banner */}
      <RevealWrapper>
        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="relative flex flex-col justify-end border-b border-[var(--border2)] lg:border-b-0 lg:border-r">
              <Image
                src="/mediator-desktop.svg"
                alt="INFP-T The Mediator illustration"
                width={900}
                height={350}
                className="h-auto w-full lg:h-full lg:object-cover lg:object-[30%_50%]"
              />
              {/* MBTI badge: under the image on mobile, overlaid on wide screens */}
              <div className="m-4 flex w-fit items-center gap-3 lg:absolute lg:left-4 lg:top-4 lg:m-0 rounded-2xl border border-white/40 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/70">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 shadow-[0_6px_16px_rgba(124,58,237,0.35)]">
                  <span className="font-display text-[0.8rem] font-extrabold tracking-wider text-white">INFP</span>
                </div>
                <div>
                  <div className="font-display text-[0.95rem] font-extrabold leading-tight gradient-text">{T.mediator[lang]}</div>
                  <div className="text-[0.7rem] font-medium uppercase tracking-wider text-theme3">{T.type[lang]}</div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <p className="mb-6 text-[0.92rem] leading-[1.85] text-theme2">{T.desc[lang]}</p>

              <ul className="grid list-none grid-cols-1 gap-2.5 sm:grid-cols-2">
                {traits.map(t => (
                  <li
                    key={t.label}
                    className="group flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3 transition-all duration-200 hover:border-violet-500/25 hover:bg-violet-500/[0.06]"
                  >
                    <div className="icon-box flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-600/15 to-blue-500/15 transition-all duration-200 group-hover:from-violet-600 group-hover:to-blue-500">
                      <t.Icon size={15} className="text-violet-500 transition-colors group-hover:text-white dark:text-violet-400" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-[0.85rem] font-bold leading-tight text-theme">{t.label}</div>
                      <div className="mt-0.5 text-[0.75rem] leading-snug text-theme3">{t.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}
