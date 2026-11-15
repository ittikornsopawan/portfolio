'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Mail, Sparkles, Download, Layers, Users, Briefcase, X, CheckCircle2, MapPin } from 'lucide-react'
import Image from 'next/image'
import RevealWrapper from './RevealWrapper'
import Fireworks from './Fireworks'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const T = i18n.hero

// Decorative positions for banner sparkles and the confetti burst around the avatar
const SPARKLES = [[8, 20], [22, 70], [38, 12], [55, 78], [68, 25], [82, 62], [92, 18], [46, 45]]
const CONFETTI = ['#22c55e', '#facc15', '#f472b6', '#38bdf8', '#a78bfa', '#fb923c']
  .flatMap((color, i) => [0, 1].map(k => ({ color, angle: (i * 2 + k) * 30 })))

function calculateAge() {
  const today = new Date()
  const birthdayThisYear = new Date(today.getFullYear(), 6, 9)
  return today.getFullYear() - 1994 - Number(today < birthdayThisYear)
}

export default function Hero() {
  const { lang } = useLang()
  const openToWorkDialog = useRef<HTMLDialogElement>(null)
  const [age, setAge] = useState<number | null>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [rolePicked, setRolePicked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    const dialog = openToWorkDialog.current
    if (!dialog || dialog.open) return
    dialog.showModal()
    setModalOpen(true)
  }

  // Auto-cycle the role tabs until the visitor picks one
  useEffect(() => {
    if (rolePicked || !modalOpen) return
    const timer = setInterval(() => setRoleIndex(i => (i + 1) % T.openToWork.roles.length), 4500)
    return () => clearInterval(timer)
  }, [rolePicked, modalOpen])

  useEffect(() => {
    setAge(calculateAge())
    // Greet every visitor with the open-to-work modal once the page has settled
    const timer = setTimeout(openModal, 700)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { num: age?.toString() ?? '—', labelKey: 'ageLabel' },
    { num: '2', labelKey: 'languagesLabel' },
    { num: '5', labelKey: 'referencesLabel' },
    { num: '10', labelKey: 'yearsLabel' },
    { num: '6', labelKey: 'companiesLabel' },
    { num: '30d', labelKey: 'noticeLabel' },
  ] as const

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

            <div className="flex flex-wrap items-center gap-2.5 mb-7">
              <button
                type="button"
                onClick={openModal}
                aria-haspopup="dialog"
                className="otw-attract group inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-500/15 to-blue-500/15 px-4 py-1.5 text-xs font-semibold text-violet-700 transition-all hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] dark:text-violet-300"
              >
                <Sparkles size={13} strokeWidth={2.2} />
                {T.openToWork.badge[lang]}
                <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-600 dark:text-green-400 rounded-full px-4 py-1.5 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                {T.badge[lang]}
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-5 mb-6">
              <div className="relative h-16 w-14 shrink-0 sm:h-24 sm:w-20 lg:h-32 lg:w-28 xl:h-44 xl:w-40">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 160px, (min-width: 1024px) 112px, (min-width: 640px) 80px, 56px"
                  loading="eager"
                  className="object-contain"
                />
              </div>
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
                className="inline-flex items-center gap-2 bg-[var(--surface2)] border border-[var(--border)] text-theme font-semibold px-6 py-3 rounded-xl text-[0.92rem] hover:border-violet-500/30 hover:bg-violet-500/[0.08] hover:-translate-y-0.5 transition-all duration-200"
              >
                <ArrowRight size={15} strokeWidth={2.5} />
                {T.cta.projects[lang]}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--surface2)] border border-[var(--border)] text-theme font-semibold px-6 py-3 rounded-xl text-[0.92rem] hover:border-violet-500/30 hover:bg-violet-500/[0.08] hover:-translate-y-0.5 transition-all duration-200"
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
                {['DDD', 'EDA', 'Microservices', '.NET Core', 'Cloud Architecture', 'API Design', 'Database Design'].map(tag => (
                  <span
                    key={tag}
                    className="text-[0.72rem] font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-500/[0.12] to-blue-500/[0.12] border border-violet-500/20 text-violet-600 dark:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>

      </div>

      <dialog
        ref={openToWorkDialog}
        aria-labelledby="open-to-work-title"
        aria-describedby="open-to-work-description"
        onClose={() => setModalOpen(false)}
        onCancel={event => {
          event.preventDefault()
          event.currentTarget.close()
        }}
        onKeyDown={event => {
          if (event.key === 'Escape') {
            event.preventDefault()
            event.currentTarget.close()
          }
        }}
        onClick={event => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        className="open-to-work-dialog fixed inset-0 m-auto w-[calc(100vw-2rem)] max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto border-0 bg-transparent p-0 text-left shadow-none"
      >
        <Fireworks active={modalOpen} lang={lang} />
        <div className="otw-card glass-card relative w-full overflow-hidden p-0 shadow-[0_24px_100px_rgba(0,0,0,0.5)]">
          {/* Hero banner */}
          <div className="otw-banner relative overflow-hidden px-6 pb-7 pt-6 text-white sm:px-8 sm:pt-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />
            {SPARKLES.map(([x, y], i) => (
              <span
                key={i}
                aria-hidden="true"
                className="otw-sparkle"
                style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.45}s` }}
              />
            ))}
            <button
              type="button"
              onClick={() => openToWorkDialog.current?.close()}
              aria-label={T.openToWork.close[lang]}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25"
            >
              <X size={18} />
            </button>
            <div className="relative flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
              <div className="otw-rise relative mb-4 h-24 w-24 shrink-0 sm:mb-0">
                <span className="otw-ring absolute -inset-1.5 rounded-full" />
                {CONFETTI.map(({ color, angle }) => (
                  <span
                    key={angle}
                    aria-hidden="true"
                    className="otw-confetti"
                    style={{ background: color, '--angle': `${angle}deg` } as React.CSSProperties}
                  />
                ))}
                <Image src="/profile.jpeg" alt="" width={192} height={192} className="relative h-full w-full rounded-full border-[3px] border-white object-cover object-top shadow-xl" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-green-500 px-2.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-white shadow-md">
                  #OpenToWork
                </span>
              </div>
              <div className="min-w-0">
                <div className="otw-celebrate mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-90" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  {T.openToWork.celebrate[lang]}
                </div>
                <h2 id="open-to-work-title" className="otw-rise font-display text-[1.7rem] font-extrabold leading-[1.1] tracking-tight drop-shadow-sm sm:text-[2.1rem]" style={{ animationDelay: '140ms' }}>
                  {T.openToWork.title[lang]}
                </h2>
                <p className="otw-rise mt-1.5 text-sm font-medium text-white/85" style={{ animationDelay: '200ms' }}>
                  {T.name[lang]}
                </p>
                <p className="otw-rise mt-3 inline-flex items-center gap-2 rounded-lg bg-black/15 px-3 py-1.5 text-sm" style={{ animationDelay: '240ms' }} aria-live="polite">
                  <span className="text-white/75">{T.openToWork.lookingFor[lang]}</span>
                  <ArrowRight size={14} className="text-white/60" />
                  <span key={roleIndex} className="otw-swap font-bold">{T.openToWork.roles[roleIndex].name}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-6 sm:p-8">
            <p id="open-to-work-description" className="otw-rise mb-6 text-sm leading-relaxed text-theme2" style={{ animationDelay: '260ms' }}>
              {T.openToWork.pitch[lang]}
            </p>

            {/* Role tabs */}
            <h3 className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-[2px] text-theme3">{T.openToWork.rolesTitle[lang]}</h3>
            <div role="tablist" aria-label={T.openToWork.rolesTitle[lang]} className="otw-rise mb-3 grid grid-cols-3 gap-1.5 rounded-2xl border border-[var(--border2)] bg-[var(--surface2)] p-1.5" style={{ animationDelay: '320ms' }}>
              {T.openToWork.roles.map((role, i) => {
                const selected = i === roleIndex
                return (
                  <button
                    key={role.name}
                    type="button"
                    role="tab"
                    id={`otw-tab-${i}`}
                    aria-selected={selected}
                    aria-controls="otw-tabpanel"
                    onClick={() => {
                      setRoleIndex(i)
                      setRolePicked(true)
                    }}
                    className={`relative overflow-hidden rounded-xl px-2 py-2.5 text-[0.72rem] font-bold leading-tight transition-all sm:text-xs ${
                      selected
                        ? 'bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-[0_4px_16px_rgba(124,58,237,0.35)]'
                        : 'text-theme2 hover:bg-violet-500/10 hover:text-theme'
                    }`}
                  >
                    {role.name}
                    {selected && !rolePicked && (
                      <span key={roleIndex} aria-hidden="true" className="otw-progress absolute bottom-0 left-0 h-0.5 bg-white/80" />
                    )}
                  </button>
                )
              })}
            </div>
            <div
              id="otw-tabpanel"
              role="tabpanel"
              aria-labelledby={`otw-tab-${roleIndex}`}
              key={roleIndex}
              className="otw-panel mb-6 space-y-5 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 p-4 sm:p-5"
            >
              {/* Headline + why me */}
              <div>
                <p className="mb-2 font-display text-base font-extrabold leading-snug text-theme sm:text-lg">{T.openToWork.roles[roleIndex].tagline[lang]}</p>
                <p className="border-l-2 border-violet-500 pl-3 text-sm italic leading-relaxed text-theme2">{T.openToWork.roles[roleIndex].why[lang]}</p>
              </div>

              {/* Proof metrics */}
              <div className="grid grid-cols-3 gap-2">
                {T.openToWork.roles[roleIndex].metrics.map((m, i) => (
                  <div key={m.value} style={{ animationDelay: `${i * 80}ms` }} className="otw-panel rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 p-3 text-white shadow-[0_6px_20px_rgba(124,58,237,0.25)]">
                    <div className="font-display text-lg font-extrabold leading-none sm:text-2xl">{m.value}</div>
                    <div className="mt-1.5 text-[0.65rem] leading-snug text-white/85 sm:text-[0.7rem]">{m.label[lang]}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Focus areas */}
                <div>
                  <h4 className="mb-2 text-[0.68rem] font-bold uppercase tracking-[1.5px] text-violet-600 dark:text-violet-400">{T.openToWork.tabLabels.focus[lang]}</h4>
                  <ul className="space-y-2">
                    {T.openToWork.roles[roleIndex].focus.map(f => (
                      <li key={f.title} className="rounded-xl border border-[var(--border2)] bg-[var(--surface)]/70 p-2.5 transition-all hover:-translate-y-0.5 hover:border-violet-500/40">
                        <div className="text-[0.8rem] font-bold text-theme">{f.title}</div>
                        <p className="text-[0.72rem] leading-snug text-theme2">{f.desc[lang]}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Evidence */}
                <div>
                  <h4 className="mb-2 text-[0.68rem] font-bold uppercase tracking-[1.5px] text-violet-600 dark:text-violet-400">{T.openToWork.tabLabels.proof[lang]}</h4>
                  <ol className="relative space-y-3 border-l border-violet-500/30 pl-4">
                    {T.openToWork.roles[roleIndex].evidence.map(e => (
                      <li key={e.company} className="relative">
                        <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-[var(--surface)] bg-violet-500" />
                        <div className="text-[0.72rem] font-bold gradient-text">{e.company}</div>
                        <p className="text-[0.75rem] leading-snug text-theme">{e.text[lang]}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Toolkit */}
              <div>
                <h4 className="mb-2 text-[0.68rem] font-bold uppercase tracking-[1.5px] text-violet-600 dark:text-violet-400">{T.openToWork.tabLabels.toolkit[lang]}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {T.openToWork.roles[roleIndex].toolkit.map(tool => (
                    <span key={tool} className="rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/[0.12] to-blue-500/[0.12] px-2.5 py-1 text-[0.7rem] font-medium text-violet-700 dark:text-violet-300">{tool}</span>
                  ))}
                </div>
              </div>

              {/* First 90 days */}
              <div>
                <h4 className="mb-2 text-[0.68rem] font-bold uppercase tracking-[1.5px] text-violet-600 dark:text-violet-400">{T.openToWork.tabLabels.plan[lang]}</h4>
                <div className="grid gap-2 sm:grid-cols-3">
                  {T.openToWork.roles[roleIndex].plan.map((step, i) => (
                    <div key={i} className="flex gap-2.5 rounded-xl border border-[var(--border2)] bg-[var(--surface)]/70 p-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-500 text-[0.7rem] font-bold text-white">{i + 1}</span>
                      <p className="text-[0.72rem] leading-snug text-theme">{step[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Employment type + work style */}
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: T.openToWork.employmentTitle[lang], items: T.openToWork.employment, tone: 'border-blue-500/20 bg-blue-500/5', icon: 'text-blue-500' },
                { title: T.openToWork.conditionsTitle[lang], items: T.openToWork.conditions, tone: 'border-green-500/20 bg-green-500/5', icon: 'text-green-500' },
              ].map(group => (
                <div key={group.title}>
                  <h3 className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-[2px] text-theme3">{group.title}</h3>
                  <div className={`grid gap-2 ${group.items.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {group.items.map(c => (
                      <div key={c.title} className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 ${group.tone}`}>
                        <CheckCircle2 size={16} className={`shrink-0 ${group.icon}`} />
                        <div>
                          <div className="text-[0.8rem] font-bold text-theme">{c.title}</div>
                          <div className="text-[0.68rem] leading-snug text-theme2">{c.desc[lang]}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Fit check */}
            <h3 className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-[2px] text-theme3">{T.openToWork.fitTitle[lang]}</h3>
            <ul className="mb-6 space-y-2">
              {T.openToWork.fit[lang].map((item, i) => (
                <li key={item} style={{ animationDelay: `${500 + i * 60}ms` }} className="otw-rise flex items-start gap-2.5 text-sm leading-snug text-theme">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Quick facts */}
            <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { value: '10+', label: T.openToWork.facts.years[lang] },
                { value: '6', label: T.openToWork.facts.companies[lang] },
                { value: T.openToWork.facts.levelValue[lang], label: T.openToWork.facts.level[lang] },
                { value: T.openToWork.facts.noticeValue[lang], label: T.openToWork.facts.notice[lang] },
              ].map(f => (
                <div key={f.label} className="rounded-xl border border-[var(--border2)] bg-[var(--surface2)] px-3 py-2.5 text-center">
                  <div className="font-display text-base font-extrabold leading-tight gradient-text">{f.value}</div>
                  <div className="mt-0.5 text-[0.65rem] font-medium text-theme3">{f.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-theme2">
              <span className="inline-flex items-center gap-1.5"><MapPin size={13} className="text-violet-500" />{T.openToWork.location[lang]}</span>
              <span className="inline-flex items-center gap-1.5"><Sparkles size={13} className="text-blue-500" />{T.openToWork.packageNote[lang]}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="#contact"
                onClick={() => openToWorkDialog.current?.close()}
                className="otw-shine relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(124,58,237,0.45)]"
              >
                <Mail size={16} />
                {T.openToWork.contact[lang]}
                <ArrowUpRight size={15} />
              </a>
              <a
                href="/resume.pdf"
                download="Ittikorn_Sopawan_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface2)] px-5 py-3 text-sm font-semibold text-theme transition-colors hover:border-violet-500/40"
              >
                <Download size={16} />
                {T.cta.download[lang]}
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  )
}
