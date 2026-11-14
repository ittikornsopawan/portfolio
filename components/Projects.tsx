'use client'

import { Cloud, Factory, ShoppingCart, FileCode2, Building2, Lock, FolderKanban } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import type { LucideIcon } from 'lucide-react'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

type Accent = 'violet' | 'blue' | 'indigo'

interface Project {
  Icon: LucideIcon
  accent: Accent
  impact: string
  name: string
  company: string
  period: string
  desc: string
  tags: string[]
}

const projects: Project[] = [
  {
    Icon: Cloud,
    accent: 'blue',
    impact: '90%+ Accuracy',
    name: 'Multi-Cloud Billing ELT Platform',
    company: 'True Internet Data Center',
    period: '2022 – 2024',
    desc: 'Designed ELT pipelines across AWS, GCP, and Huawei for unified billing insights. Improved billing data accuracy from near-zero to over 90% through workflow redesign and validation logic.',
    tags: ['AWS', 'GCP', 'Huawei', 'ELT', 'Database Design', 'API Spec'],
  },
  {
    Icon: Factory,
    accent: 'violet',
    impact: 'Multi-Platform',
    name: 'Manufacturing & Logistics System',
    company: 'Socket9',
    period: '2024 – Present',
    desc: 'Led system design for manufacturing and logistics projects covering factory operations and distribution workflows. Designed architecture, database schemas, and API specifications.',
    tags: ['System Architecture', 'Workflow Design', 'API Design', 'Pre-Sales'],
  },
  {
    Icon: ShoppingCart,
    accent: 'indigo',
    impact: '−30% Int. Errors',
    name: 'E-Commerce Integration Platform',
    company: 'Buzzebees',
    period: '2021 – 2022',
    desc: 'Designed standardized integration interfaces and APIs reducing integration errors by 30%+. Modernized legacy .NET Framework to .NET Core 5 and validated e-commerce APIs.',
    tags: ['.NET Core 5', 'API Integration', 'Workflow Optimization', 'Legacy Migration'],
  },
  {
    Icon: FileCode2,
    accent: 'violet',
    impact: 'DDD + Microservices',
    name: 'Contract Renewal System',
    company: 'True Corporation (X10)',
    period: '2021',
    desc: 'Designed and delivered a contract renewal system with personalized promotion-based offers. Translated business requirements into API specs using DDD and microservices.',
    tags: ['DDD', 'Microservices', 'API Spec', 'Scrum', 'Event-Driven'],
  },
  {
    Icon: Building2,
    accent: 'blue',
    impact: 'Role-Based Workflow',
    name: 'Real Estate Approval Workflow',
    company: 'Puksa Real Estate (ADI)',
    period: '2019 – 2020',
    desc: 'Designed and implemented role-based approval workflows using K2 Black Pearl. Developed full-stack solutions using ASP.NET MVC (Core) and SQL Server.',
    tags: ['ASP.NET MVC', 'SQL Server', 'K2 Black Pearl', 'Workflow Design'],
  },
  {
    Icon: Lock,
    accent: 'indigo',
    impact: 'Performance+',
    name: 'Online Access Control System',
    company: 'PTT Digital Solution (Infinite)',
    period: '2016 – 2019',
    desc: 'Led development of an online access control system using .NET MVC, improving performance and code efficiency through stored procedures and legacy refactoring.',
    tags: ['.NET MVC', 'SQL Server', 'Stored Procedures', 'Waterfall'],
  },
]

const accentIcon: Record<Accent, string> = {
  violet: 'from-violet-600 to-violet-500',
  blue:   'from-blue-600 to-blue-500',
  indigo: 'from-indigo-600 to-indigo-500',
}

const accentGlow: Record<Accent, string> = {
  violet: '0 8px 20px rgba(124,58,237,0.35)',
  blue:   '0 8px 20px rgba(59,130,246,0.35)',
  indigo: '0 8px 20px rgba(99,102,241,0.35)',
}

export default function Projects() {
  const { lang } = useLang()
  const T = i18n.projects

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <RevealWrapper className="text-center mb-16">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <FolderKanban size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
        <p className="text-theme2 text-base max-w-md mx-auto">
          {T.subtitle[lang]}
        </p>
      </RevealWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <RevealWrapper key={p.name} delay={i * 65} className="flex">
            <div className="glass-card flex flex-col w-full overflow-hidden group">
              {/* Top gradient bar */}
              <div className={`h-0.5 bg-gradient-to-r ${accentIcon[p.accent]}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + impact */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${accentIcon[p.accent]} flex items-center justify-center icon-box`}
                    style={{ boxShadow: accentGlow[p.accent] }}
                  >
                    <p.Icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold text-green-500 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
                    {p.impact}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-[1rem] text-theme mb-1 group-hover:gradient-text transition-all duration-200">
                  {p.name}
                </h3>
                <div className="text-xs text-theme3 mb-3">
                  {p.company} · {p.period}
                </div>

                {/* Desc */}
                <p className="text-[0.875rem] text-theme2 leading-relaxed flex-1 mb-5">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[0.72rem] font-medium px-2.5 py-1 rounded-full surface-2 border border-theme2 text-theme2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
