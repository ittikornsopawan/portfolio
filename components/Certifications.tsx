'use client'

import { GraduationCap, Globe, BookOpen } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const languages = [
  { lang: 'Thai',    level: 'Native',       pct: 100 },
  { lang: 'English', level: 'Intermediate', pct: 60  },
]

export default function Certifications() {
  const { lang } = useLang()
  const T = i18n.certifications

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <RevealWrapper className="text-center mb-10 sm:mb-14">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <BookOpen size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
        <p className="text-theme2 text-base max-w-md mx-auto">
          {T.subtitle[lang]}
        </p>
      </RevealWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Education */}
        <RevealWrapper className="lg:col-span-2">
          <div className="glass-card p-5 sm:p-8 h-full">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-[0_8px_20px_rgba(124,58,237,0.35)] shrink-0 icon-box">
                <GraduationCap size={26} className="text-white" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-theme3 mb-2">{T.edLabel[lang]}</div>
                <div className="font-display font-bold text-[1.15rem] text-theme mb-1 leading-tight">
                  Bachelor of Science in Computer Engineering
                </div>
                <div className="text-sm font-semibold gradient-text mb-1">
                  Rajamangala University of Technology Thanyaburi
                </div>
                <div className="text-xs text-theme3 font-medium">{T.degreeLevel[lang]}</div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Languages */}
        <RevealWrapper delay={100}>
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
                    <span className="font-display font-bold text-[0.95rem] text-theme">{l.lang}</span>
                    <span className="text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
                      {l.level}
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
