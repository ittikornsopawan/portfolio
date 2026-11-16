'use client'

import { Target, Users, BarChart2, Rocket, Layers, Settings2, Wrench, Compass, Code2, Server, Sparkles } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import type { LucideIcon } from 'lucide-react'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

// Brand logos from devicon (pinned); items without one fall back to a lucide icon
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'

interface Tech {
  name: string
  logo?: string // devicon path, e.g. 'csharp/csharp-original'
  logoSrc?: string // local brand asset
  logoDark?: string // alternate devicon path for dark mode
  darkClass?: string // tweak for logos whose own colors vanish on a dark tile
  Icon?: LucideIcon
  core?: boolean
}

interface Group {
  key: keyof typeof i18n.skills.groups
  Icon: LucideIcon
  subgroups: { label: string; items: Tech[]; note?: { en: string; th: string } }[]
}

// Practices: no logos, shown as chips
const practices: Tech[] = [
  { name: 'System Design', core: true },
  { name: 'Solution Architecture', core: true },
  { name: 'Domain-Driven Design', core: true },
  { name: 'Microservices', core: true },
  { name: 'RESTful API Design', core: true },
  { name: 'Event-Driven Architecture' },
  { name: 'Database Design' },
  { name: 'Requirement Analysis' },
]

const groups: Group[] = [
  {
    key: 'stacks',
    Icon: Code2,
    subgroups: [
      {
        label: 'Backend',
        note: { en: 'C# · .NET — Strong', th: 'C# · .NET — เขียนได้ดี' },
        items: [
          { name: 'C#', logo: 'csharp/csharp-original', core: true },
          { name: '.NET', logo: 'dotnetcore/dotnetcore-original', darkClass: 'dark:brightness-[1.8]', core: true },
          { name: '.NET Framework', logo: 'dot-net/dot-net-original', darkClass: 'dark:brightness-[1.5]', core: true },
          { name: 'Node.js', logo: 'nodejs/nodejs-original' },
          { name: 'NestJS', logo: 'nestjs/nestjs-original' },
          { name: 'Python', logo: 'python/python-original' },
        ],
      },
      {
        label: 'Frontend',
        note: { en: 'TypeScript · JavaScript — Can develop', th: 'TypeScript · JavaScript — พัฒนาได้' },
        items: [
          { name: 'TypeScript', logo: 'typescript/typescript-original', core: true },
          { name: 'JavaScript', logo: 'javascript/javascript-original', core: true },
          { name: 'React', logo: 'react/react-original' },
          { name: 'Angular', logo: 'angular/angular-original' },
          { name: 'jQuery', logo: 'jquery/jquery-original', darkClass: 'dark:brightness-[1.7]', core: true },
          { name: 'Bootstrap', logo: 'bootstrap/bootstrap-original', core: true },
        ],
      },
      {
        label: 'Database',
        note: { en: 'SQL — Confident', th: 'SQL — เขียนได้ครอบคลุม' },
        items: [
          { name: 'SQL Server', logo: 'microsoftsqlserver/microsoftsqlserver-original', darkClass: 'dark:brightness-[1.7]', core: true },
          { name: 'MySQL', logo: 'mysql/mysql-original', darkClass: 'dark:brightness-[2.3]', core: true },
          { name: 'PostgreSQL', logo: 'postgresql/postgresql-original', core: true },
          { name: 'MongoDB', logo: 'mongodb/mongodb-original' },
          { name: 'Redis', logo: 'redis/redis-original', core: true },
        ],
      },
    ],
  },
  {
    key: 'technologies',
    Icon: Server,
    subgroups: [
      {
        label: 'Cloud',
        items: [
          { name: 'AWS', logo: 'amazonwebservices/amazonwebservices-original-wordmark', logoDark: 'amazonwebservices/amazonwebservices-plain-wordmark' },
          { name: 'Google Cloud', logo: 'googlecloud/googlecloud-original' },
        ],
      },
      {
        label: 'DevOps',
        items: [
          { name: 'Docker', logo: 'docker/docker-original', core: true },
          { name: 'Git', logo: 'git/git-original', core: true },
          { name: 'GitHub', logo: 'github/github-original', darkClass: 'dark:invert' },
        ],
      },
      {
        label: 'Delivery',
        items: [
          { name: 'Jira', logo: 'jira/jira-original' },
          { name: 'Confluence', logo: 'confluence/confluence-original' },
          { name: 'Postman', logo: 'postman/postman-original' },
          { name: 'VS Code', logo: 'vscode/vscode-original' },
        ],
      },
    ],
  },
  {
    key: 'ai',
    Icon: Sparkles,
    subgroups: [
      {
        label: 'Tools',
        items: [
          { name: 'Claude', logoSrc: '/ai/anthropic.svg', darkClass: 'dark:invert', core: true },
          { name: 'Codex', logoSrc: '/ai/openai.svg', darkClass: 'dark:invert', core: true },
          { name: 'Hermes Agent', logoSrc: '/ai/hermes.png' },
        ],
      },
      {
        label: 'Practices',
        items: [
          { name: 'Prompt Engineering', core: true },
          { name: 'RAG', core: true },
          { name: 'AI-assisted Automation' },
          { name: 'AI-assisted Analysis' },
          { name: 'ML Concepts' },
        ],
      },
    ],
  },
]

/** App-icon style tile: white square in light mode, translucent in dark with per-logo dark variants. */
function TechTile({ item, coreLabel, index, pulseCoreDot = false }: { item: Tech; coreLabel: string; index: number; pulseCoreDot?: boolean }) {
  return (
    <li className={`group relative flex flex-col items-center gap-2 rounded-2xl border px-2 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.15)] ${item.core ? 'border-violet-500/35 bg-gradient-to-br from-violet-500/[0.09] via-[var(--surface2)] to-blue-500/[0.08]' : 'border-[var(--border2)] bg-[var(--surface2)]'}`}>
      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(15,23,42,0.08)] ring-1 ring-black/5 dark:bg-white/[0.07] dark:shadow-none dark:ring-white/10">
        {(item.logoSrc || item.logo) && (
          /* eslint-disable @next/next/no-img-element */
          <>
            <img
              src={item.logoSrc ?? `${DEVICON}/${item.logo}.svg`}
              alt=""
              width={26}
              height={26}
              loading="lazy"
              className={`h-[26px] w-[26px] object-contain ${item.logoDark ? 'dark:hidden' : item.darkClass ?? ''}`}
            />
            {item.logoDark && (
              <img src={`${DEVICON}/${item.logoDark}.svg`} alt="" width={26} height={26} loading="lazy" className="hidden h-[26px] w-[26px] object-contain dark:block" />
            )}
          </>
          /* eslint-enable @next/next/no-img-element */
        )}
        {!item.logoSrc && !item.logo && item.Icon && <item.Icon size={22} strokeWidth={2} className="text-violet-600 dark:text-violet-300" aria-hidden="true" />}
        {item.core && (
          <span title={coreLabel} aria-hidden="true" className={`tag-core-indicator absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 ring-2 ring-[var(--surface2)] ${pulseCoreDot ? 'tag-core-indicator--pulse' : ''}`} style={{ animationDelay: `${index * 35}ms` }} />
        )}
      </span>
      <span className="text-[0.75rem] font-medium leading-tight text-theme">{item.name}</span>
    </li>
  )
}

function Chip({ item, index }: { item: Tech; index: number }) {
  return (
    <li
      className={`tag-chip ${item.core ? 'tag-chip--highlight' : 'tag-chip--neutral'}`}
      style={item.core ? { animationDelay: `${index * 55}ms` } : undefined}
    >
      {item.core && <span className="tag-chip-dot" aria-hidden="true" />}
      {item.name}
    </li>
  )
}

function GroupHeader({ Icon, title, desc }: { Icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="icon-box flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-[0_6px_16px_rgba(124,58,237,0.32)]">
        <Icon size={20} strokeWidth={2} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-display text-[1.15rem] font-bold leading-tight text-theme">{title}</h3>
        <p className="text-[0.82rem] text-theme2">{desc}</p>
      </div>
    </div>
  )
}

interface SoftSkill {
  Icon: LucideIcon
  label: { en: string; th: string }
}

const softSkills: SoftSkill[] = [
  { Icon: Target, label: { en: 'Requirements Analysis', th: 'วิเคราะห์ความต้องการ' } },
  { Icon: Users, label: { en: 'Stakeholder Alignment', th: 'ประสานความเข้าใจผู้เกี่ยวข้อง' } },
  { Icon: Compass, label: { en: 'Client Consultation', th: 'ให้คำปรึกษาลูกค้า' } },
  { Icon: Users, label: { en: 'Cross-functional Collaboration', th: 'ทำงานร่วมกับทีมข้ามสายงาน' } },
  { Icon: BarChart2, label: { en: 'Team Leadership', th: 'นำทีม' } },
  { Icon: Settings2, label: { en: 'Scrum Facilitation', th: 'นำกระบวนการ Scrum' } },
  { Icon: Rocket, label: { en: 'Technical Presentations', th: 'นำเสนอแนวทางด้านเทคนิค' } },
  { Icon: Layers, label: { en: 'Process Improvement', th: 'ปรับปรุงกระบวนการทำงาน' } },
]

export default function Skills() {
  const { lang } = useLang()
  const T = i18n.skills

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <RevealWrapper className="text-center mb-10 sm:mb-14">
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

      <p className="-mt-6 mb-8 flex items-center justify-center gap-2 text-[0.78rem] text-theme3 sm:-mt-8">
        <span className="skills-core-dot h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-600 to-blue-500" aria-hidden="true" />
        {T.core[lang]}
      </p>

      <div className="mb-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Skills: practices, no logos */}
        <RevealWrapper>
          <div className="glass-card h-full p-5 sm:p-6">
            <GroupHeader Icon={Compass} title={T.groups.skills.title[lang]} desc={T.groups.skills.desc[lang]} />
            <ul className="flex list-none flex-wrap gap-2">
              {practices.map((item, index) => <Chip key={item.name} item={item} index={index} />)}
            </ul>
          </div>
        </RevealWrapper>

        {groups.map((group, i) => (
          <RevealWrapper key={group.key} delay={(i + 1) * 60} className={group.key === 'stacks' ? 'lg:row-span-2' : group.key === 'ai' ? 'lg:col-span-2' : ''}>
            <div className={`glass-card h-full p-5 sm:p-6 ${group.key === 'ai' ? 'bg-gradient-to-br from-violet-500/[0.08] via-fuchsia-500/[0.06] to-blue-500/[0.08] ring-1 ring-fuchsia-500/30' : ''}`}>
              <GroupHeader Icon={group.Icon} title={T.groups[group.key].title[lang]} desc={T.groups[group.key].desc[lang]} />
              <div className={group.key === 'ai' ? 'grid gap-5 lg:grid-cols-2' : 'flex flex-col gap-5'}>
                {group.subgroups.map(sub => (
                  <div key={sub.label}>
                    <h4 className={`mb-2.5 text-[0.7rem] font-bold uppercase tracking-[1.5px] ${sub.label === 'Frontend' ? 'inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/[0.08] px-2.5 py-1 text-violet-700 shadow-[0_2px_10px_rgba(124,58,237,0.1)] dark:border-violet-300/30 dark:bg-violet-400/[0.1] dark:text-violet-300' : 'text-theme3'}`}>
                      {sub.label === 'Frontend' && <span className="skills-core-dot h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-600 to-blue-500" aria-hidden="true" />}
                      {sub.label}
                    </h4>
                    {sub.note && (
                      <p className="mb-2.5 flex w-fit max-w-full items-center gap-2 rounded-lg border border-violet-500/25 bg-violet-500/[0.07] px-2.5 py-1.5 text-[0.75rem] font-semibold leading-snug text-violet-800 dark:border-violet-300/25 dark:bg-violet-400/[0.09] dark:text-violet-200">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 shadow-[0_0_8px_rgba(124,58,237,0.65)]" aria-hidden="true" />
                        {sub.note[lang]}
                      </p>
                    )}
                    {sub.items.some(item => item.logoSrc || item.logo || item.Icon) ? (
                      <ul className="grid list-none grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                        {sub.items.map((item, index) => <TechTile key={item.name} item={item} coreLabel={T.core[lang]} index={index} pulseCoreDot={group.key === 'stacks'} />)}
                      </ul>
                    ) : (
                      <ul className="flex list-none flex-wrap gap-2">
                        {sub.items.map((item, index) => <Chip key={item.name} item={item} index={index} />)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* Soft skills */}
      <RevealWrapper className="text-center mb-10 sm:mb-14">
        <h3 className="font-display font-extrabold tracking-tight text-theme text-[1.9rem]">
          {T.softTitle[lang]}
        </h3>
      </RevealWrapper>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {softSkills.map((skill, i) => (
          <RevealWrapper key={skill.label.en} delay={i * 45}>
            <div className="glass-card flex h-full min-h-20 items-center gap-3 p-4 transition-colors hover:border-violet-500/35 hover:bg-violet-500/[0.04]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/15 to-blue-500/15 text-violet-700 ring-1 ring-violet-500/15 dark:text-violet-300">
                <skill.Icon size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="text-[0.84rem] font-semibold leading-snug text-theme">{skill.label[lang]}</span>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
