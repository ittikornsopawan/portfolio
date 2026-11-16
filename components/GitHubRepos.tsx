'use client'

import { GitBranch, Star, GitFork, ExternalLink, Code2 } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

// ── Update GITHUB_USERNAME and repo entries below ──
const GITHUB_USERNAME = 'ittikornsopawan'

const repos = [
  {
    name: 'data-engineer-billing-project',
    description: 'A mockup project that generates cloud provider billing data to demonstrate a data pipeline, writing compressed CSV files to MinIO before ETL-loading them into PostgreSQL.',
    language: 'Python',
    tags: ['Python', 'ETL', 'PostgreSQL', 'MinIO', 'Docker'],
    stars: 1,
    forks: 0,
    href: `https://github.com/${GITHUB_USERNAME}/data-engineer-billing-project`,
    demo: '',
  },
  {
    name: 'specification',
    description: 'A collection of system-design concepts for real-world platforms, including e-commerce, e-wallets, and enterprise SaaS business requirements.',
    language: 'Markdown',
    tags: ['System Design', 'Requirements', 'Architecture', 'FinTech', 'SaaS'],
    stars: 0,
    forks: 0,
    href: `https://github.com/${GITHUB_USERNAME}/specification`,
    demo: '',
  },
  {
    name: 'pixel-hr',
    description: 'A multi-tenant HRMS platform foundation with tenant isolation, encrypted PII, TOTP sign-in, and an operator CLI. Hiring features are not implemented yet.',
    language: 'PLpgSQL',
    tags: ['HRMS', 'Multi-Tenant', 'PII Encryption', 'TOTP', 'PostgreSQL'],
    stars: 0,
    forks: 0,
    href: `https://github.com/${GITHUB_USERNAME}/pixel-hr`,
    demo: '',
  },
  {
    name: 'system-analysis-and-design',
    description: 'A spec-driven showcase turning business needs into requirements, API specs, data models, diagrams, migrations, and tests, currently focused on e-commerce.',
    language: 'Python',
    tags: ['System Analysis', 'Requirements', 'API Design', 'Data Modeling', 'E-Commerce'],
    stars: 0,
    forks: 0,
    href: `https://github.com/${GITHUB_USERNAME}/system-analysis-and-design`,
    demo: '',
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

  return (
    <section id="github" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <RevealWrapper className="text-center mb-16">
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
          className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline"
        >
          <GitBranch size={13} />
          github.com/{GITHUB_USERNAME}
          <ExternalLink size={11} />
        </a>
      </RevealWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {repos.map((repo, i) => (
          <RevealWrapper key={repo.name} delay={i * 70}>
            <div className="glass-card p-6 h-full flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600/15 to-blue-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 icon-box">
                    <Code2 size={15} className="text-violet-500 dark:text-violet-400" strokeWidth={2} />
                  </div>
                  <span className="font-display font-bold text-[0.9rem] text-theme">
                    {repo.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {repo.demo && (
                    <a
                      href={repo.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.72rem] font-semibold text-violet-600 dark:text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full hover:bg-violet-500/20 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-[var(--surface2)] border border-[var(--border2)] text-theme3 hover:text-violet-500 hover:border-violet-500/30 transition-all duration-150"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-[0.855rem] text-theme2 leading-relaxed flex-1">
                {repo.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {repo.tags.map(t => (
                  <span
                    key={t}
                    className="text-[0.72rem] font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/15 text-violet-600 dark:text-violet-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-[var(--border2)]">
                <div className="flex items-center gap-3 text-theme3 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: LANG_COLORS[repo.language] ?? '#8b5cf6' }}
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={11} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={11} />
                    {repo.forks}
                  </span>
                </div>
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.72rem] font-medium text-theme3 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  {T.viewRepo[lang]}
                </a>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
