'use client'

import { Target, Users, BarChart2, Rocket, Layers, Settings2, Wrench } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import type { LucideIcon } from 'lucide-react'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const skillGroups = [
  {
    label: 'Programming & Frameworks',
    skills: [
      { name: 'C#',             hot: true  },
      { name: '.NET Core',      hot: true  },
      { name: '.NET Framework', hot: true  },
      { name: 'JavaScript',     hot: false },
      { name: 'TypeScript',     hot: false },
      { name: 'Node.js',        hot: false },
      { name: 'React',          hot: false },
      { name: 'Python',         hot: false },
      { name: 'Nest.js',        hot: false },
    ],
  },
  {
    label: 'Architecture & Design',
    skills: [
      { name: 'System Design',          hot: true  },
      { name: 'Solution Architecture',  hot: true  },
      { name: 'RESTful API Design',     hot: true  },
      { name: 'Microservices',          hot: true  },
      { name: 'Domain-Driven Design',   hot: true  },
      { name: 'Event-Driven Arch.',     hot: false },
      { name: 'Database Design',        hot: false },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MySQL',      hot: true  },
      { name: 'SQL Server', hot: true  },
      { name: 'PostgreSQL', hot: false },
    ],
  },
  {
    label: 'AI & Automation',
    skills: [
      { name: 'AI Prompt Engineering',   hot: true  },
      { name: 'AI-assisted Automation',  hot: true  },
      { name: 'ML Concepts',             hot: false },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'Docker',     hot: true  },
      { name: 'Git',        hot: true  },
      { name: 'GitHub',     hot: false },
      { name: 'JIRA',       hot: false },
      { name: 'Confluence', hot: false },
      { name: 'Postman',    hot: false },
      { name: 'VS Code',    hot: false },
    ],
  },
  {
    label: 'Frontend Frameworks',
    skills: [
      { name: 'Angular',   hot: false },
      { name: 'jQuery',    hot: false },
      { name: 'Bootstrap', hot: false },
    ],
  },
]

interface Competency {
  Icon: LucideIcon
  label: string
  desc: string
  span: boolean
}

const competencies: Competency[] = [
  { Icon: Target,    label: 'Requirement Analysis',          desc: 'Requirement gathering, business analysis, stakeholder alignment, translating business needs into precise technical solutions.', span: false },
  { Icon: Settings2, label: 'Process & Workflow Design',     desc: 'Workflow optimization, feature design, process improvement, and a continuous improvement mindset.', span: false },
  { Icon: Users,     label: 'Collaboration & Communication', desc: 'Cross-functional team collaboration, clear technical and non-technical communication, stakeholder management.', span: false },
  { Icon: BarChart2, label: 'Leadership & Team Management',  desc: 'Leading teams, mentoring and coaching, driving project execution, ownership and accountability.', span: false },
  { Icon: Layers,    label: 'End-to-End Solution Architecture', desc: 'Designing enterprise solutions from concept to deployment — covering API design, database schema, microservices, and architectural governance aligned to business goals.', span: true },
  { Icon: Rocket,    label: 'Digital Transformation & Pre-Sales', desc: 'Leading modernization initiatives, proposing solutions in pre-sales, defining key features, and delivering client-facing architecture presentations.', span: true },
]

export default function Skills() {
  const { lang } = useLang()
  const T = i18n.skills

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <RevealWrapper className="text-center mb-16">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <Wrench size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
        <p className="text-theme2 text-base max-w-md mx-auto">
          {T.subtitle[lang]}
        </p>
      </RevealWrapper>

      {/* Technical skill groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        {skillGroups.map((group, i) => (
          <RevealWrapper key={group.label} delay={i * 55}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-[var(--border2)]" />
                <span className="text-[0.7rem] font-bold uppercase tracking-[1.5px] text-theme3 shrink-0">{group.label}</span>
                <div className="h-px flex-1 bg-[var(--border2)]" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill.name}
                    className={`text-[0.8rem] font-medium px-3 py-1.5 rounded-full border transition-all duration-150 cursor-default select-none ${
                      skill.hot
                        ? 'bg-gradient-to-r from-violet-500/12 to-blue-500/12 border-violet-500/28 text-violet-600 dark:text-violet-300 hover:from-violet-500/22 hover:to-blue-500/22'
                        : 'surface-2 border-theme text-theme2 hover:border-violet-500/25 hover:bg-violet-500/6'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* Soft skills */}
      <RevealWrapper className="text-center mb-10">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <Users size={12} />
          {T.softEyebrow[lang]}
        </div>
        <h3 className="font-display font-extrabold tracking-tight text-theme text-[1.9rem]">
          {T.softTitle[lang]}
        </h3>
      </RevealWrapper>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {competencies.map((c, i) => (
          <RevealWrapper key={c.label} delay={i * 60} className={c.span ? 'col-span-2' : ''}>
            <div className="glass-card p-6 h-full flex flex-col gap-4">
              <div
                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-[0_6px_16px_rgba(124,58,237,0.32)] shrink-0 icon-box"
              >
                <c.Icon size={18} className="text-white" strokeWidth={2} />
              </div>
              <div>
                <div className="font-display font-bold text-[0.9rem] text-theme mb-2 leading-tight">{c.label}</div>
                <div className="text-[0.8rem] text-theme2 leading-[1.65]">{c.desc}</div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
