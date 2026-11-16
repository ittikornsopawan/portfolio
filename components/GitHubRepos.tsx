'use client'

import { GitBranch, BookOpen, FileText, Star, GitFork, ExternalLink, ArrowUpRight } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

// ── Update GITHUB_USERNAME and repo entries below ──
const GITHUB_USERNAME = 'ittikornsopawan'

interface SpecSampleGroup {
  title: { en: string; th: string }
  links: { label: { en: string; th: string }; href: string }[]
}

interface GitHubRepo {
  name: string
  description: { en: string; th: string }
  language: string
  tags: string[]
  stars: number
  forks: number
  href: string
  samples?: SpecSampleGroup[]
}

const repos: GitHubRepo[] = [
  {
    name: 'data-engineer-billing-project',
    description: {
      en: 'A mockup project that generates cloud provider billing data to demonstrate a data pipeline, writing compressed CSV files to MinIO before ETL-loading them into PostgreSQL.',
      th: 'โปรเจกต์จำลองสำหรับสร้างข้อมูลค่าใช้จ่าย Cloud เพื่อสาธิต Data Pipeline โดยเขียนไฟล์ CSV แบบบีบอัดลง MinIO ก่อนทำ ETL เข้า PostgreSQL',
    },
    language: 'Python',
    tags: ['Python', 'ETL', 'PostgreSQL', 'MinIO', 'Docker'],
    stars: 1,
    forks: 0,
    href: `https://github.com/${GITHUB_USERNAME}/data-engineer-billing-project`,
  },
  {
    name: 'specification',
    description: {
      en: 'A collection of system-design concepts for real-world platforms, including e-commerce, e-wallets, and enterprise SaaS business requirements.',
      th: 'รวมแนวคิดการออกแบบระบบสำหรับแพลตฟอร์มจริง เช่น E-commerce, E-wallet และข้อกำหนดทางธุรกิจของ Enterprise SaaS',
    },
    language: 'Markdown',
    tags: ['System Design', 'Requirements', 'Architecture', 'FinTech', 'SaaS'],
    stars: 0,
    forks: 0,
    href: `https://github.com/${GITHUB_USERNAME}/specification`,
  },
  {
    name: 'pixel-hr',
    description: {
      en: 'A multi-tenant HRMS platform foundation with tenant isolation, encrypted PII, TOTP sign-in, and an operator CLI. Hiring features are not implemented yet.',
      th: 'โครงสร้างพื้นฐาน HRMS แบบ Multi-tenant ที่แยกข้อมูลแต่ละองค์กร เข้ารหัส PII รองรับ TOTP และมี CLI สำหรับผู้ดูแล โดยฟีเจอร์สรรหาบุคลากรยังไม่ได้พัฒนา',
    },
    language: 'PLpgSQL',
    tags: ['HRMS', 'Multi-Tenant', 'PII Encryption', 'TOTP', 'PostgreSQL'],
    stars: 0,
    forks: 0,
    href: `https://github.com/${GITHUB_USERNAME}/pixel-hr`,
  },
  {
    name: 'system-analysis-and-design',
    description: {
      en: 'A spec-driven showcase turning business needs into requirements, API specs, data models, diagrams, migrations, and tests, currently focused on e-commerce.',
      th: 'ตัวอย่างการทำงานแบบ Spec-driven ที่แปลงโจทย์ธุรกิจเป็น Requirement, API Spec, Data Model, Diagram, Migration และ Test โดยเน้นระบบ E-commerce',
    },
    language: 'Python',
    tags: ['System Analysis', 'Requirements', 'API Design', 'Data Modeling', 'E-Commerce'],
    stars: 0,
    forks: 0,
    href: `https://github.com/${GITHUB_USERNAME}/system-analysis-and-design`,
    samples: [
      {
        title: { en: 'Schema design', th: 'ออกแบบ Schema' },
        links: [
          { label: { en: 'Product schema spec', th: 'เอกสาร Product Schema' }, href: 'https://github.com/ittikornsopawan/system-analysis-and-design/blob/main/e-commerce/doc/schema/product/m_product.md' },
          { label: { en: 'SQL query', th: 'คำสั่ง SQL' }, href: 'https://github.com/ittikornsopawan/system-analysis-and-design/blob/main/e-commerce/db/migrations/up/03-product.schema.up.sql' },
        ],
      },
      {
        title: { en: 'API spec', th: 'เอกสาร API' },
        links: [
          { label: { en: 'Upsert product', th: 'API Upsert Product' }, href: 'https://github.com/ittikornsopawan/system-analysis-and-design/blob/main/e-commerce/doc/api/product/01-upsert-product/spec.md' },
          { label: { en: 'Sequence diagram', th: 'Sequence Diagram' }, href: 'https://github.com/ittikornsopawan/system-analysis-and-design/blob/main/e-commerce/doc/api/product/01-upsert-product/sequence.wsd' },
        ],
      },
    ],
  },
]

const LANG_COLORS: Record<string, string> = {
  'C#':         '#178600',
  'TypeScript': '#3178c6',
  'JavaScript': '#f1e05a',
  'Python':     '#3572A5',
  'PLpgSQL':    '#336790',
  'Markdown':   '#083fa1',
}

export default function GitHubRepos() {
  const { lang } = useLang()
  const T = i18n.github
  const featuredRepo = repos.find(repo => repo.name === 'system-analysis-and-design')
  const orderedRepos = featuredRepo
    ? [featuredRepo, ...repos.filter(repo => repo !== featuredRepo)]
    : repos

  return (
    <section id="github" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <RevealWrapper className="text-center mb-10 sm:mb-14">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <GitBranch size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
        <p className="text-theme2 text-base max-w-md mx-auto">
          {T.subtitle[lang]}
        </p>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-violet-700 hover:underline dark:text-violet-300"
        >
          <GitBranch size={13} />
          github.com/{GITHUB_USERNAME}
          <ExternalLink size={11} />
        </a>
      </RevealWrapper>

      <div className="grid grid-cols-1 gap-5 md:auto-rows-fr md:grid-cols-2 md:items-stretch">
        {orderedRepos.map((repo, i) => {
          const isFeatured = repo === featuredRepo
          return (
          <RevealWrapper
            key={repo.name}
            delay={i * 70}
            className={`h-full ${isFeatured ? 'md:col-start-1 md:row-span-3' : 'md:col-start-2'}`}
          >
            <div className="github-repo-card glass-card flex h-full flex-col gap-3.5 p-4 sm:p-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-start gap-2.5">
                  <div className="github-repo-mark flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border">
                    <BookOpen size={17} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <a href={repo.href} target="_blank" rel="noopener noreferrer" className="github-repo-link block truncate font-semibold">
                      {repo.name}
                    </a>
                    <span className="github-public-label mt-1 inline-flex rounded-full border px-2 py-0.5 text-[0.72rem] leading-none">
                      {T.public[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[0.9rem] leading-relaxed text-theme2 flex-1">
                      {repo.description[lang]}
              </p>

              {repo.samples && (
                <div className="rounded-lg border border-violet-500/20 bg-violet-500/[0.045] p-3">
                  <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[1.2px] text-violet-700 dark:text-violet-300">{T.samples[lang]}</p>
                  <div className="flex flex-col gap-3">
                    {repo.samples.map(sample => (
                      <div key={sample.title.en}>
                      <p className="mb-1.5 text-[0.78rem] font-semibold text-theme">{sample.title[lang]}</p>
                        <div className="flex flex-col items-start gap-1.5">
                          {sample.links.map(link => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${sample.title[lang]}: ${link.label[lang]}`}
                              className="inline-flex min-h-11 items-center gap-1 rounded-md border border-violet-500/20 bg-[var(--surface)] px-2.5 py-2 text-[0.75rem] font-medium text-violet-700 transition-colors hover:border-violet-500/45 hover:bg-violet-500/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-violet-300"
                            >
                              <FileText size={11} aria-hidden="true" />
                              {link.label[lang]}
                              <ArrowUpRight size={10} aria-hidden="true" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {repo.tags.map(t => (
                  <span key={t} className="github-topic rounded-full border px-2.5 py-1 text-[0.75rem] font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 border-t border-[#d0d7de] pt-3 text-xs text-theme3 dark:border-[#30363d]">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: LANG_COLORS[repo.language] ?? '#8b5cf6' }}
                  />
                  {repo.language}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star size={13} />
                  {repo.stars}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GitFork size={13} />
                  {repo.forks}
                </span>
              </div>
            </div>
          </RevealWrapper>
          )
        })}
      </div>
    </section>
  )
}
