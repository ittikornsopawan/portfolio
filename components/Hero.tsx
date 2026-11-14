'use client'

import { ArrowRight, Mail, Sparkles, Download, Layers, Users, Briefcase } from 'lucide-react'
import Image from 'next/image'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const T = i18n.hero

const stats = [
  { num: '10',  labelKey: 'yearsLabel'     },
  { num: '6',   labelKey: 'companiesLabel' },
  { num: '30d', labelKey: 'noticeLabel'    },
] as const

const techTags = ['DDD', 'EDA', 'Microservices', '.NET Core', 'API Design', 'Multi-Cloud', 'System Architecture']

export default function Hero() {
  const { lang } = useLang()

  const strengths = [
    { Icon: Layers,   label: T.strengths.s1label[lang], desc: T.strengths.s1desc[lang] },
    { Icon: Users,    label: T.strengths.s2label[lang], desc: T.strengths.s2desc[lang] },
    { Icon: Briefcase,label: T.strengths.s3label[lang], desc: T.strengths.s3desc[lang] },
  ]

  return (
    <section id="about" className="min-h-[calc(100vh-64px)] flex items-center py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-stretch w-full">

        {/* ── Left glass card ── */}
        <RevealWrapper className="h-full">
          <div className="glass-card p-8 lg:p-10 h-full">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-600 dark:text-green-400 rounded-full px-4 py-1.5 text-xs font-semibold mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {T.badge[lang]}
            </div>

            <div className="flex items-start gap-3 sm:gap-5 mb-6">
              <Image
                src="/logo.png"
                alt=""
                width={160}
                height={176}
                className="h-16 w-14 shrink-0 object-contain sm:h-24 sm:w-20 lg:h-32 lg:w-28 xl:h-44 xl:w-40"
              />
              <div className="min-w-0 flex-1">
                {/* Name */}
                <p className="text-[0.7rem] font-bold uppercase tracking-[2px] text-theme3 mb-2">
                  {T.name[lang]}
                </p>

                {/* Hero headline — hiring pitch */}
                <h1 className="font-display font-extrabold leading-[1.08] tracking-tight mb-3">
                  <span className="block text-theme text-[clamp(1.8rem,4vw,2.8rem)]">
                    {T.h1a[lang]}
                  </span>
                  <span className="block gradient-text text-balance text-[clamp(1.15rem,1.8vw,1.6rem)] leading-[1.2]">
                    {T.h1b[lang]}
                  </span>
                </h1>

                {/* Role badge */}
                <span className="text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 px-3 py-1 rounded-full">
                  {T.levelBadge[lang]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[0.97rem] text-theme2 leading-[1.85] mb-8 max-w-[560px]">
              {T.desc[lang]}
            </p>

            {/* 3 strength highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-9">
              {strengths.map(s => (
                <div key={s.label} className="flex items-start gap-3 bg-[var(--surface2)] border border-[var(--border)] rounded-xl p-3.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-500/20 border border-violet-500/20 flex items-center justify-center shrink-0 icon-box">
                    <s.Icon size={14} className="text-violet-500 dark:text-violet-400" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[0.75rem] font-bold text-theme leading-tight">{s.label}</div>
                    <div className="text-[0.68rem] text-theme3 mt-0.5 leading-snug">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-9">
              {techTags.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-theme2 hover:border-violet-500/30 hover:bg-violet-500/8 transition-colors duration-150 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download="Ittikorn_Sopawan_Resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-[0.92rem] shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download size={15} strokeWidth={2} />
                {T.cta.download[lang]}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[var(--surface2)] border border-[var(--border)] text-theme font-semibold px-6 py-3 rounded-xl text-[0.92rem] hover:border-violet-500/30 hover:bg-violet-500/8 hover:-translate-y-0.5 transition-all duration-200"
              >
                <ArrowRight size={15} strokeWidth={2.5} />
                {T.cta.projects[lang]}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--surface2)] border border-[var(--border)] text-theme font-semibold px-6 py-3 rounded-xl text-[0.92rem] hover:border-violet-500/30 hover:bg-violet-500/8 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={15} strokeWidth={2} />
                {T.cta.contact[lang]}
              </a>
            </div>
          </div>
        </RevealWrapper>

        {/* ── Right profile card ── */}
        <RevealWrapper delay={140} className="h-full">
          <div className="glass-card p-8 h-full flex flex-col justify-between shadow-[0_8px_40px_rgba(124,58,237,0.2)] animate-float">

            {/* Avatar */}
            <div className="relative w-28 h-28 mx-auto">
              <Image
                src="/profile.jpeg"
                alt={lang === 'en' ? 'Portrait of Ittikorn Sopawan' : 'ภาพถ่ายของอิทธิกร โสภาวรรณ'}
                width={160}
                height={160}
                className="w-full h-full rounded-full object-cover object-top border-2 border-violet-500/30 shadow-[0_0_40px_rgba(124,58,237,0.35)]"
              />
              <div className="avatar-ring" />
            </div>

            {/* Name */}
            <div className="text-center">
              <div className="font-display font-bold text-[1.05rem] text-theme mb-1">
                {lang === 'en' ? 'Ittikorn Sopawan' : 'อิทธิกร โสภาวรรณ'}
              </div>
              <div className="text-sm text-theme2">{T.role[lang]}</div>
              <div className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-violet-500 dark:text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                <Sparkles size={10} strokeWidth={2.5} />
                {T.supervisor[lang]}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2.5">
              {stats.map(s => (
                <div
                  key={s.labelKey}
                  className="bg-[var(--surface2)] border border-[var(--border2)] rounded-2xl py-4 text-center hover:border-violet-500/30 hover:bg-violet-500/5 transition-colors duration-200"
                >
                  <div className="font-display text-[1.45rem] font-extrabold gradient-text leading-none mb-1">{s.num}</div>
                  <div className="text-[0.62rem] text-theme3 font-medium leading-tight px-1">{T[s.labelKey][lang]}</div>
                </div>
              ))}
            </div>

            {/* Specialties */}
            <div>
              <div className="text-xs font-semibold text-theme3 uppercase tracking-wider mb-3">
                {T.specialties[lang]}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['DDD', 'EDA', 'Microservices', '.NET Core', 'Cloud Architecture', 'API Design'].map(tag => (
                  <span
                    key={tag}
                    className="text-[0.72rem] font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-500/12 to-blue-500/12 border border-violet-500/20 text-violet-600 dark:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
