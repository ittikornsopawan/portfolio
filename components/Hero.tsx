'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Sparkles, Download, FileText, Layers, Users, Briefcase, X, CheckCircle2, MapPin } from './PixelIcon'
import Image from 'next/image'
import RevealWrapper from './RevealWrapper'
import Fireworks from './Fireworks'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'
import { OPEN_TO_WORK_EVENT } from '@/lib/open-to-work'

const T = i18n.hero

// Decorative positions for banner sparkles and the confetti burst around the avatar
const SPARKLES = [[8, 20], [22, 70], [38, 12], [55, 78], [68, 25], [82, 62], [92, 18], [46, 45]]
const CONFETTI = ['#7c3aed', '#facc15', '#f472b6', '#38bdf8', '#a78bfa', '#fb923c']
  .flatMap((color, i) => [0, 1].map(k => ({ color, angle: (i * 2 + k) * 30 })))

function calculateAge() {
  const today = new Date()
  const birthdayThisYear = new Date(today.getFullYear(), 6, 9)
  return today.getFullYear() - 1994 - Number(today < birthdayThisYear)
}

export default function Hero() {
  const { lang } = useLang()
  const openToWorkDialog = useRef<HTMLDialogElement>(null)
  const resumePreviewDialog = useRef<HTMLDialogElement>(null)
  const [age, setAge] = useState<number | null>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    const dialog = openToWorkDialog.current
    if (!dialog || dialog.open) return
    dialog.showModal()
    setModalOpen(true)
  }

  const openResumePreview = () => {
    const dialog = resumePreviewDialog.current
    if (!dialog || dialog.open) return
    dialog.showModal()
  }

  useEffect(() => {
    const handleOpenToWorkRequest = () => {
      const dialog = openToWorkDialog.current
      if (!dialog || dialog.open) return
      dialog.showModal()
      setModalOpen(true)
    }
    window.addEventListener(OPEN_TO_WORK_EVENT, handleOpenToWorkRequest)
    return () => window.removeEventListener(OPEN_TO_WORK_EVENT, handleOpenToWorkRequest)
  }, [])

  useEffect(() => {
    setAge(calculateAge())
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
    <section id="about" className="flex items-center pt-6 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-stretch w-full">

        {/* ── Left glass card ── */}
        <RevealWrapper className="h-full">
          <div className="glass-card p-5 sm:p-8 lg:p-10 h-full">

            <div className="flex flex-wrap items-center gap-2.5 mb-7">
              {/* Availability badge */}
              <div className="tag-chip tag-chip--highlight">
                <span className="tag-chip-dot" aria-hidden="true" />
                {T.badge[lang]}
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-5 mb-6">
              <div className="relative h-14 w-12 shrink-0 sm:h-20 sm:w-16 lg:h-24 lg:w-20 xl:h-28 xl:w-24">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 96px, (min-width: 1024px) 80px, (min-width: 640px) 64px, 48px"
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
                    <div className="text-[0.75rem] text-theme3 mt-0.5 leading-snug">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={openModal}
                aria-haspopup="dialog"
                aria-label={T.openToWork.viewDetails[lang]}
                className="otw-shine otw-attract group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-700 via-fuchsia-600 to-blue-600 px-4 text-left text-white shadow-[0_8px_24px_rgba(124,58,237,0.36)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(124,58,237,0.48)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 sm:h-14 sm:w-[168px]"
              >
                <span className="text-center text-[0.95rem] font-extrabold">{T.openToWork.viewDetails[lang]}</span>
                <ArrowUpRight size={17} className="ml-1 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={openResumePreview}
                aria-haspopup="dialog"
                aria-label={T.resumePreview.title[lang]}
                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-violet-500/30 bg-violet-500/[0.06] px-4 text-[0.85rem] font-semibold text-violet-800 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/55 hover:bg-violet-500/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:h-14 sm:w-[168px] dark:text-violet-200"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10 transition-transform group-hover:translate-y-0.5">
                  <Download size={14} strokeWidth={2.5} />
                </span>
                {T.cta.download[lang]}
              </button>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-1 text-[0.82rem] font-medium text-theme3 sm:ml-1">
                <a href="#projects" className="group inline-flex min-h-11 items-center gap-1.5 rounded-lg transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:hover:text-violet-300">
                  {T.cta.projects[lang]}
                  <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="group inline-flex min-h-11 items-center gap-1.5 rounded-lg transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:hover:text-violet-300">
                  {T.cta.contact[lang]}
                  <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* ── Right profile card ── */}
        <RevealWrapper delay={140} className="h-full">
          <div className="glass-card p-5 sm:p-8 h-full flex flex-col justify-between shadow-[0_8px_40px_rgba(124,58,237,0.2)] animate-float">

            {/* Avatar */}
            {/* Same #OpenToWork avatar as the modal; opens it */}
            <button
              type="button"
              onClick={openModal}
              aria-haspopup="dialog"
              aria-label={T.openToWork.badge[lang]}
              className="group relative mx-auto mb-3 block h-28 w-28 rounded-full"
            >
              <span className="otw-ring absolute -inset-1.5 rounded-full shadow-[0_0_32px_rgba(124,58,237,0.45)]" />
              <Image
                src="/profile.jpeg"
                alt={lang === 'en' ? 'Portrait of Ittikorn Sopawan' : 'ภาพถ่ายของอิทธิกร โสภาวรรณ'}
                width={160}
                height={160}
                priority
                className="relative h-full w-full rounded-full border-[3px] border-white object-cover object-top shadow-xl transition-transform duration-300 group-hover:scale-[1.03] dark:border-slate-900"
              />
              <span className="absolute -bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-violet-700 px-3 py-0.5 text-[0.7rem] font-extrabold uppercase tracking-wider text-white shadow-[0_4px_12px_rgba(124,58,237,0.5)]">
                <span className="tag-chip-dot tag-chip-dot--light" aria-hidden="true" />
                #OpenToWork
              </span>
            </button>

            {/* Current position (name and role already lead the left card) */}
            <div className="text-center">
              <div className="tag-chip tag-chip--highlight">
                <span className="tag-chip-dot" aria-hidden="true" />
                <Sparkles size={10} strokeWidth={2.5} />
                {T.supervisor[lang].split(' @ ')[0]}{' '}
                <span className="supervisor-company">@ Socket9</span>
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
                  <div className="text-[0.7rem] text-theme3 font-medium leading-tight px-1">{T[s.labelKey][lang]}</div>
                </div>
              ))}
            </div>

            {/* Specialties */}
            <div>
              <div className="text-xs font-semibold text-theme3 uppercase tracking-wider mb-3">
                {T.specialties[lang]}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['DDD', 'EDA', 'Microservices', '.NET', 'Cloud Architecture', 'API Design', 'Database Design'].map((tag, index) => {
                  const highlighted = [0, 2, 4].includes(index)
                  return (
                    <span key={tag} className={`tag-chip ${highlighted ? 'tag-chip--highlight' : 'tag-chip--neutral'}`} style={highlighted ? { animationDelay: `${index * 55}ms` } : undefined}>
                      {highlighted && <span className="tag-chip-dot" aria-hidden="true" />}
                      {tag}
                    </span>
                  )
                })}
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
        className="open-to-work-dialog fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none overflow-hidden border-0 bg-transparent p-0 text-left shadow-none"
      >
        <Fireworks active={modalOpen} lang={lang} />
        {/* Full-screen layer: clicking the empty space around the card closes it */}
        <div
          className="relative z-10 flex h-full w-full items-stretch justify-start p-0"
          onClick={event => {
            if (event.target === event.currentTarget) openToWorkDialog.current?.close()
          }}
        >
          <button
            type="button"
            onClick={() => openToWorkDialog.current?.close()}
            aria-label={T.openToWork.close[lang]}
            className="absolute right-5 top-5 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-slate-900/70 text-white shadow-[0_6px_20px_rgba(0,0,0,0.45)] backdrop-blur-md transition-colors hover:bg-slate-900/90 sm:right-8 sm:top-8 lg:hidden"
          >
            <X size={18} />
          </button>
          <div className="otw-card glass-card relative flex h-full max-h-full w-full max-w-6xl flex-col overflow-y-auto rounded-none p-0 shadow-[0_24px_100px_rgba(0,0,0,0.5)] lg:flex-row lg:overflow-hidden">
            {/* Left: who I am + logistics */}
            <aside className="flex flex-col lg:w-[40%] lg:shrink-0 lg:overflow-y-auto lg:border-r lg:border-[var(--border2)]">
          {/* Hero banner */}
          <div className="otw-banner relative shrink-0 overflow-hidden px-6 pb-7 pt-6 text-white sm:px-8 sm:pt-8">
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
              className="absolute right-4 top-4 z-10 hidden h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-violet-700 lg:inline-flex"
            >
              <X size={18} />
            </button>
            <div className="relative flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left lg:flex-col lg:gap-0 lg:text-center">
              <div className="otw-rise relative mb-4 h-24 w-24 shrink-0 sm:mb-0 lg:mb-4">
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
                <span className="absolute -bottom-1 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-violet-700 px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-white shadow-[0_4px_12px_rgba(124,58,237,0.45)]">
                  <span className="tag-chip-dot tag-chip-dot--light" aria-hidden="true" />
                  #OpenToWork
                </span>
              </div>
              <div className="min-w-0">
                <div className="otw-celebrate mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur">
                  <span className="tag-chip-dot tag-chip-dot--light" aria-hidden="true" />
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

              <div className="flex shrink-0 grow flex-col gap-6 p-6 sm:p-8">
            <p id="open-to-work-description" className="otw-rise text-sm leading-relaxed text-theme2" style={{ animationDelay: '260ms' }}>
              {T.openToWork.pitch[lang]}
            </p>

            {/* Quick facts */}
            <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              {[
                { value: '10', label: T.openToWork.facts.years[lang] },
                { value: '6', label: T.openToWork.facts.companies[lang] },
                { value: T.openToWork.facts.levelValue[lang], label: T.openToWork.facts.level[lang] },
                { value: T.openToWork.facts.noticeValue[lang], label: T.openToWork.facts.notice[lang] },
              ].map(f => (
                <div key={f.label} className="rounded-xl border border-[var(--border2)] bg-[var(--surface2)] px-3 py-2.5 text-center">
                  <div className="font-display text-base font-extrabold leading-tight gradient-text">{f.value}</div>
                  <div className="mt-0.5 text-[0.75rem] font-medium text-theme3">{f.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-theme2">
              <span className="inline-flex items-center gap-1.5"><MapPin size={13} className="text-violet-500" />{T.openToWork.location[lang]}</span>
              <span className="inline-flex items-center gap-1.5"><Sparkles size={13} className="text-blue-500" />{T.openToWork.packageNote[lang]}</span>
            </div>

            {/* Employment type + work style */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { title: T.openToWork.employmentTitle[lang], items: T.openToWork.employment, tone: 'border-blue-500/20 bg-blue-500/5', icon: 'text-blue-500' },
                { title: T.openToWork.conditionsTitle[lang], items: T.openToWork.conditions, tone: 'border-violet-500/20 bg-violet-500/5', icon: 'text-violet-500' },
              ].map(group => (
                <div key={group.title}>
                  <h3 className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-[2px] text-theme3">{group.title}</h3>
                  <div className={`grid gap-2 ${group.items.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {group.items.map(c => (
                      <div key={c.title} className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 ${group.tone}`}>
                        <CheckCircle2 size={16} className={`shrink-0 ${group.icon}`} />
                        <div>
                          <div className="text-[0.8rem] font-bold text-theme">{c.title}</div>
                          <div className="text-[0.75rem] leading-snug text-theme2">{c.desc[lang]}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

                <div className="mt-auto">
            {/* CTAs */}
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <a
                href="#contact"
                onClick={() => openToWorkDialog.current?.close()}
                className="otw-shine relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(124,58,237,0.45)]"
              >
                {T.openToWork.contact[lang]}
                <ArrowRight size={15} />
              </a>
              <button
                type="button"
                onClick={openResumePreview}
                aria-haspopup="dialog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface2)] px-5 py-3 text-sm font-semibold text-theme transition-colors hover:border-violet-500/40"
              >
                <Download size={16} />
                {T.cta.download[lang]}
              </button>
            </div>
                </div>
              </div>
            </aside>

            {/* Right: what I'm looking for, per role */}
            <section
              className="flex-1 p-6 sm:p-8 lg:overflow-y-auto"
            >
            {/* Culture and environment */}
            <h3 className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-[2px] text-theme3">{T.openToWork.cultureTitle[lang]}</h3>
            <div className="otw-rise mb-7 grid gap-2 sm:grid-cols-2" style={{ animationDelay: '300ms' }}>
              {T.openToWork.culture.map(item => (
                <div key={item.en} className="flex items-start gap-2.5 rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.07] to-blue-500/[0.05] p-3">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-violet-500 dark:text-violet-400" />
                  <p className="text-[0.76rem] leading-relaxed text-theme">{item[lang]}</p>
                </div>
              ))}
            </div>

            {/* Fit check */}
            <h3 className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-[2px] text-theme3">{T.openToWork.fitTitle[lang]}</h3>
            <ul className="otw-rise mb-7 space-y-2" style={{ animationDelay: '320ms' }}>
              {T.openToWork.fit[lang].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-theme">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-violet-500 dark:text-violet-400" />
                  {item}
                </li>
              ))}
            </ul>

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
                    onClick={() => setRoleIndex(i)}
                    className={`relative w-full min-w-0 overflow-hidden rounded-xl px-1.5 py-2.5 text-center text-[0.66rem] font-bold leading-tight transition-all sm:px-2 sm:text-xs ${
                      selected
                        ? 'bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-[0_4px_16px_rgba(124,58,237,0.35)]'
                        : 'text-theme2 hover:bg-violet-500/10 hover:text-theme'
                    }`}
                  >
                    {role.name}
                  </button>
                )
              })}
            </div>
            <div
              id="otw-tabpanel"
              role="tabpanel"
              aria-labelledby={`otw-tab-${roleIndex}`}
              key={roleIndex}
              className="otw-panel mb-8 space-y-5 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 p-4 sm:p-5"
            >
              {/* Headline + why me */}
              <div>
                <p className="mb-2 font-display text-base font-extrabold leading-snug text-theme sm:text-lg">{T.openToWork.roles[roleIndex].tagline[lang]}</p>
                <p className="border-l-2 border-violet-500 pl-3 text-sm italic leading-relaxed text-theme2">{T.openToWork.roles[roleIndex].why[lang]}</p>
              </div>

              {/* Proof metrics */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {T.openToWork.roles[roleIndex].metrics.map((m, i) => (
                  <div key={m.value} style={{ animationDelay: `${i * 80}ms` }} className="otw-panel flex items-center gap-3 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 p-3 text-white sm:block shadow-[0_6px_20px_rgba(124,58,237,0.25)]">
                    <div className="shrink-0 font-display text-xl font-extrabold leading-none sm:text-2xl">{m.value}</div>
                    <div className="text-[0.72rem] leading-snug text-white/85 sm:mt-1.5 sm:text-[0.7rem]">{m.label[lang]}</div>
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
                    <span key={tool} className="tag-chip tag-chip--neutral">{tool}</span>
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

            </section>
          </div>
        </div>
      </dialog>

      <dialog
        ref={resumePreviewDialog}
        aria-labelledby="resume-preview-title"
        onCancel={event => {
          event.preventDefault()
          event.currentTarget.close()
        }}
        onClick={event => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        className="resume-preview-dialog fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none border-0 bg-transparent p-3 text-left shadow-none sm:p-6"
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[var(--border2)] bg-[var(--surface)] shadow-[0_24px_100px_rgba(0,0,0,0.55)]">
            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-[var(--border2)] px-4 py-3 sm:px-6">
              <h2 id="resume-preview-title" className="flex items-center gap-2 font-display text-base font-bold text-theme sm:text-lg">
                <FileText size={18} className="text-violet-500" />
                {T.resumePreview.title[lang]}
              </h2>
              <button
                type="button"
                onClick={() => resumePreviewDialog.current?.close()}
                aria-label={T.openToWork.close[lang]}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border2)] bg-[var(--surface2)] text-theme2 transition-colors hover:border-violet-500/40 hover:text-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <X size={17} />
              </button>
            </header>
            <div
              role="region"
              aria-label={T.resumePreview.title[lang]}
              className="min-h-0 flex-1 overflow-y-auto bg-slate-200/80 px-3 py-5 sm:px-6 sm:py-7 dark:bg-slate-950/80"
            >
              <div className="mx-auto flex w-full max-w-[900px] flex-col gap-5">
                {Array.from({ length: 4 }, (_, index) => index + 1).map(page => (
                  <Image
                    key={page}
                    src={`/resume-preview/page-${page}.webp`}
                    alt={lang === 'th' ? `หน้า ${page} ของเรซูเม่` : `Resume page ${page}`}
                    width={1600}
                    height={2263}
                    sizes="(max-width: 768px) calc(100vw - 48px), 900px"
                    loading={page === 1 ? 'eager' : 'lazy'}
                    className="h-auto w-full rounded-sm bg-white shadow-[0_8px_28px_rgba(15,23,42,0.18)] ring-1 ring-black/10"
                  />
                ))}
              </div>
            </div>
            <footer className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[var(--border2)] px-4 py-3 sm:px-6">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-theme3 underline-offset-4 transition-colors hover:text-violet-500 hover:underline">
                {T.resumePreview.openInNewTab[lang]}
              </a>
              <a
                href="/resume.pdf"
                download="Ittikorn_Sopawan_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(124,58,237,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.45)]"
              >
                <Download size={15} />
                {T.cta.download[lang]}
              </a>
            </footer>
          </div>
        </div>
      </dialog>
    </section>
  )
}
