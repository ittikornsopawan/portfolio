'use client'

import { GraduationCap, Globe, BookOpen, Sparkles } from './PixelIcon'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const languages: { lang: 'thai' | 'english'; level: 'native' | 'intermediate'; pct: number }[] = [
  { lang: 'thai', level: 'native', pct: 100 },
  { lang: 'english', level: 'intermediate', pct: 60 },
]

export default function Certifications() {
  const { lang } = useLang()
  const T = i18n.certifications

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Supporting section: compact left-aligned header so the main sections keep the big centered ones */}
      <RevealWrapper className="mb-6 flex items-center gap-4 sm:mb-8">
        <div className="icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-[0_6px_16px_rgba(124,58,237,0.32)]">
          <BookOpen size={22} strokeWidth={2} aria-hidden="true" />
        </div>
        <div>
          <h2 className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] font-extrabold leading-tight tracking-tight text-theme">
            {T.title[lang]}
          </h2>
          <p className="text-[0.92rem] text-theme2">{T.subtitle[lang]}</p>
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Education */}
        <RevealWrapper>
          <div className="glass-card p-5 sm:p-7 h-full">
            <div className="flex flex-col gap-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-[0_8px_20px_rgba(124,58,237,0.35)] shrink-0 icon-box">
                <GraduationCap size={22} className="text-white" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-theme3 mb-2">{T.edLabel[lang]}</div>
                <div className="font-display font-bold text-[1.15rem] text-theme mb-1 leading-tight">
                  {T.degree[lang]}
                </div>
                <div className="text-sm font-semibold gradient-text mb-1">
                  Rajamangala University of Technology Thanyaburi
                </div>
                <div className="text-xs text-theme3 font-medium">{T.degreeLevel[lang]}</div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Next certification: a placeholder that shows intent until the cert is earned */}
        <RevealWrapper delay={60}>
          <div className="h-full rounded-[20px] border-2 border-dashed border-violet-500/30 bg-violet-500/[0.04] p-5 sm:p-7">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                  <Sparkles size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <span className="tag-chip tag-chip--highlight">
                  <span className="tag-chip-dot" aria-hidden="true" />
                  {T.nextStatus[lang]}
                </span>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-theme3 mb-2">{T.nextLabel[lang]}</div>
                <div className="font-display font-bold text-[1.15rem] text-theme mb-1 leading-tight">{T.nextTitle[lang]}</div>
                <p className="text-sm text-theme2">{T.nextDesc[lang]}</p>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Languages */}
        <RevealWrapper delay={120}>
          <div className="glass-card p-5 sm:p-7 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-[0_6px_14px_rgba(124,58,237,0.3)] icon-box">
                <Globe size={16} className="text-white" strokeWidth={2} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-theme3">{T.langLabel[lang]}</div>
            </div>

            <div className="flex flex-col gap-5">
              {languages.map(l => (
                <div key={l.lang}>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="font-display font-bold text-[0.95rem] text-theme">{T[l.lang][lang]}</span>
                    <span className="tag-chip tag-chip--neutral">
                      {T[l.level][lang]}
                    </span>
                  </div>
                  <div className="h-1.5 surface-3 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-blue-500 rounded-full"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
