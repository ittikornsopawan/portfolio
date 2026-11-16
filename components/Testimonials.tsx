'use client'

import { Star, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const testimonials: {
  name: string
  role: string
  company: string
  relation: keyof typeof i18n.testimonials.relations
  text: string
  initials: string
  highlights: string[]
  gradient: string
}[] = [
  {
    name: 'Soopalerk Roddech',
    role: 'Head of Solution Design & Architect',
    company: 'True Internet Data Center',
    relation: 'manager',
    text: "Aof has demonstrated exceptional diligence and dedication. His expertise in system analysis — particularly in developing billing systems for multi-cloud environments — is remarkable. His innovative thinking and proficiency have resulted in the accurate and efficient development of systems that meet clients' needs comprehensively. Aof possesses excellent communication skills and the ability to collaborate effectively with team members, invaluable for complex project work.",
    initials: 'SR',
    // exact phrases from the quote to emphasize; wording stays untouched
    highlights: ["exceptional diligence and dedication", "billing systems for multi-cloud environments", "excellent communication skills"],
    gradient: 'from-violet-600 to-blue-500',
  },
  {
    name: 'Kan Utaipaisalwong',
    role: 'Strategic Partner Alliance',
    company: 'True Internet Data Center',
    relation: 'stakeholder',
    text: "Khun Aof was instrumental in finding solutions for the project we worked on, even with its complex details. I also appreciated his ability to coordinate smoothly across departments. He took the lead to ensure the project was completed on time and explained technical knowledge clearly and politely. It was a pleasure working together.",
    initials: 'KU',
    // exact phrases from the quote to emphasize; wording stays untouched
    highlights: ["instrumental in finding solutions", "coordinate smoothly across departments", "completed on time"],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Thongtong Hanpongsachitt',
    role: 'Project Manager (Product Owner)',
    company: 'True Internet Data Center',
    relation: 'productOwner',
    text: "I worked with him for years on web application development projects. His ability to break down complex issues into understandable solutions is exceptional. He is a trustworthy system analyst with an open mind, good teamwork skills, and fast learning.",
    initials: 'TH',
    // exact phrases from the quote to emphasize; wording stays untouched
    highlights: ["break down complex issues into understandable solutions", "trustworthy system analyst"],
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    name: 'Wirach Semwong',
    role: 'Development Manager',
    company: 'Socket9',
    relation: 'engineeringLead',
    text: "Despite joining the project at a later stage, he quickly developed a strong understanding of the system architecture and data structures. He consistently proposed thoughtful optimizations that improved system efficiency, and brings valuable experience, standards, and best practices. He communicates well with both technical teams and non-technical stakeholders, and is a fast learner always open to feedback and new technologies. He would be a valuable addition to any team.",
    initials: 'WS',
    // exact phrases from the quote to emphasize; wording stays untouched
    highlights: ["quickly developed a strong understanding", "thoughtful optimizations that improved system efficiency", "valuable addition to any team"],
    gradient: 'from-violet-600 to-blue-500',
  },
  {
    name: 'Duangkamol Uttayanwittaya',
    role: 'Head of Business Analyst',
    company: 'Socket9',
    relation: 'baLead',
    text: "His ability to provide end-to-end consultation — covering enterprise solution architecture, technical design, and data modeling — is consistently impressive and always tailored to client needs. He doesn't just meet requirements — he enhances them. He works with speed, clarity, and a proactive mindset. His multitasking skills and collaborative spirit shine through in both project implementation and pre-sales engagements. A true asset to any team.",
    initials: 'DU',
    // exact phrases from the quote to emphasize; wording stays untouched
    highlights: ["end-to-end consultation", "He doesn't just meet requirements — he enhances them.", "A true asset to any team."],
    gradient: 'from-blue-500 to-indigo-500',
  },
]

/** Splits the quote so its own key phrases can be emphasized without changing any words. */
function Highlighted({ text, phrases }: { text: string; phrases: string[] }) {
  const pattern = new RegExp(`(${phrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`)
  return (
    <>
      {text.split(pattern).map((part, i) =>
        phrases.includes(part) ? <mark key={i} className="testimonial-mark">{part}</mark> : part,
      )}
    </>
  )
}

export default function Testimonials() {
  const { lang } = useLang()
  const T = i18n.testimonials
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <RevealWrapper className="text-center mb-10 sm:mb-14">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <MessageSquare size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
        <p className="text-theme2 text-base max-w-md mx-auto">
          {T.subtitle[lang]}
        </p>
      </RevealWrapper>

      {/* Star rating bar */}
      <RevealWrapper className="flex items-center justify-center gap-1.5 mb-12">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
        ))}
        <span className="text-sm font-semibold text-theme2 ml-2">{T.references[lang]}</span>
      </RevealWrapper>

      <p className="mb-5 text-center text-xs text-theme3">{T.originalQuote[lang]}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.slice(0, showAll ? testimonials.length : 3).map((t, i) => (
          <RevealWrapper key={t.name} delay={i * 75} className={i === 4 ? 'md:col-span-2' : ''}>
            <div className={`testimonial-card glass-card group relative flex h-full flex-col gap-5 overflow-hidden p-5 sm:p-7 ${i === 4 ? 'md:p-9' : ''}`}>
              {/* Accent bar in the author's colour */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.gradient}`} />
              <div className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${t.gradient} opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

              {/* Decorative quote mark */}
              <div className="absolute right-5 top-2 select-none font-display text-[6.5rem] font-extrabold leading-none gradient-text opacity-[0.14] transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-25 pointer-events-none">
                &ldquo;
              </div>

              {/* Stars + relation */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.45)]" />
                  ))}
                </div>
                <span className={`mr-14 rounded-full bg-gradient-to-r ${t.gradient} px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-white shadow-sm`}>
                  {T.relations[t.relation][lang]}
                </span>
              </div>

              {/* Quote */}
              <blockquote className={`relative flex-1 text-theme leading-[1.85] ${i === 4 ? 'text-[0.98rem] md:text-[1.05rem]' : 'text-[0.92rem]'}`}>
                &ldquo;<Highlighted text={t.text} phrases={t.highlights} />&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3.5 border-t border-[var(--border2)] pt-4">
                <div className={`relative h-12 w-12 shrink-0 rounded-full bg-gradient-to-br ${t.gradient} p-[2px] shadow-[0_6px_18px_rgba(124,58,237,0.35)]`}>
                  <div className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-display text-sm font-bold text-white ring-2 ring-white/40`}>
                    {t.initials}
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="font-display text-[0.95rem] font-bold text-theme">{t.name}</div>
                  <div className="text-[0.8rem] text-theme2">{t.role}</div>
                  <div className="mt-0.5 text-[0.72rem] font-semibold gradient-text">{t.company}</div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setShowAll(value => !value)}
          aria-expanded={showAll}
          className="min-h-11 rounded-full border border-violet-500/25 px-5 py-2 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-500/[0.08] dark:text-violet-300"
        >
          {showAll ? T.showLess[lang] : T.showAll[lang]}
        </button>
      </div>
    </section>
  )
}
