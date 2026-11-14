'use client'

import { Quote, Star, MessageSquare } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const testimonials = [
  {
    name: 'Soopalerk Roddech',
    role: 'Head of Solution Design & Architect',
    company: 'True Internet Data Center',
    relation: 'Direct Manager',
    text: "Aof has demonstrated exceptional diligence and dedication. His expertise in system analysis — particularly in developing billing systems for multi-cloud environments — is remarkable. His innovative thinking and proficiency have resulted in the accurate and efficient development of systems that meet clients' needs comprehensively. Aof possesses excellent communication skills and the ability to collaborate effectively with team members, invaluable for complex project work.",
    initials: 'SR',
    gradient: 'from-violet-600 to-blue-500',
  },
  {
    name: 'Kan Utaipaisalwong',
    role: 'Strategic Partner Alliance',
    company: 'True Internet Data Center',
    relation: 'Stakeholder',
    text: "Khun Aof was instrumental in finding solutions for the project we worked on, even with its complex details. I also appreciated his ability to coordinate smoothly across departments. He took the lead to ensure the project was completed on time and explained technical knowledge clearly and politely. It was a pleasure working together.",
    initials: 'KU',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Thongtong Hanpongsachitt',
    role: 'Project Manager (Product Owner)',
    company: 'True Internet Data Center',
    relation: 'Product Owner',
    text: "I worked with him for years on web application development projects. His ability to break down complex issues into understandable solutions is exceptional. He is a trustworthy system analyst with an open mind, good teamwork skills, and fast learning.",
    initials: 'TH',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    name: 'Wirach Semwong',
    role: 'Development Manager',
    company: 'Socket9',
    relation: 'Engineering Lead',
    text: "Despite joining the project at a later stage, he quickly developed a strong understanding of the system architecture and data structures. He consistently proposed thoughtful optimizations that improved system efficiency, and brings valuable experience, standards, and best practices. He communicates well with both technical teams and non-technical stakeholders, and is a fast learner always open to feedback and new technologies. He would be a valuable addition to any team.",
    initials: 'WS',
    gradient: 'from-violet-600 to-blue-500',
  },
  {
    name: 'Duangkamol Uttayanwittaya',
    role: 'Head of Business Analyst',
    company: 'Socket9',
    relation: 'BA Lead',
    text: "His ability to provide end-to-end consultation — covering enterprise solution architecture, technical design, and data modeling — is consistently impressive and always tailored to client needs. He doesn't just meet requirements — he enhances them. He works with speed, clarity, and a proactive mindset. His multitasking skills and collaborative spirit shine through in both project implementation and pre-sales engagements. A true asset to any team.",
    initials: 'DU',
    gradient: 'from-blue-500 to-indigo-500',
  },
]

export default function Testimonials() {
  const { lang } = useLang()
  const T = i18n.testimonials

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-24">
      <RevealWrapper className="text-center mb-16">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <RevealWrapper key={t.name} delay={i * 75} className={i === 4 ? 'md:col-span-2' : ''}>
            <div className="glass-card p-7 h-full flex flex-col gap-5 relative overflow-hidden">
              {/* Decorative quote mark */}
              <div className="absolute -top-2 -right-2 font-display text-[7rem] font-extrabold gradient-text opacity-[0.06] leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="flex gap-3 items-start flex-1">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-violet-600/15 to-blue-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 icon-box">
                  <Quote size={12} className="text-violet-500 dark:text-violet-400" strokeWidth={2} />
                </div>
                <p className="text-[0.875rem] text-theme2 leading-[1.8] italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[var(--border2)]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-display font-bold text-white text-sm shadow-[0_4px_14px_rgba(124,58,237,0.3)] shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-[0.9rem] text-theme">{t.name}</div>
                  <div className="text-[0.78rem] text-theme2">{t.role}</div>
                  <div className="text-[0.7rem] text-theme3 font-medium mt-0.5">
                    {t.relation} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
