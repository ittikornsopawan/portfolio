'use client'

import { TrendingUp, Crown, Map } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const phases = [
  {
    Icon: TrendingUp,
    range: '0 – 5 Years',
    label: 'Architecture Owner & Head-Ready',
    gradient: 'from-violet-600 to-blue-500',
    glow: '0 8px 22px rgba(124,58,237,0.35)',
    goals: [
      'Expand responsibility to owning multiple systems or full business domains with end-to-end accountability.',
      'Define architecture direction, design principles, and architectural decision guidelines across teams.',
      'Establish and operate architecture governance, review processes, and technical standards at domain level.',
      'Transition from solution-centric design to platform architecture and reusable enterprise capabilities.',
      'Lead the definition of technology roadmaps and cross-team technical alignment with senior stakeholders.',
      'Develop people leadership — mentoring, coaching, and growing future architects and technical leads.',
      'Strengthen executive communication, architectural decision-making, and stakeholder influence.',
    ],
  },
  {
    Icon: Crown,
    range: '6 – 10 Years',
    label: 'Enterprise Technology Leadership & C-Level Readiness',
    gradient: 'from-blue-500 to-cyan-400',
    glow: '0 8px 22px rgba(59,130,246,0.35)',
    goals: [
      'Own enterprise-wide technology direction and architecture strategy aligned with organizational goals.',
      'Drive technology decisions balancing business strategy, technical risk, scalability, and long-term impact.',
      'Lead enterprise architecture governance and architectural alignment across organizations.',
      'Advance platform strategy and architectural capabilities to support long-term organizational growth.',
      'Leverage data-driven and AI-enabled insights as part of executive-level decision-making.',
      'Demonstrate board-level presentation skills and strategic stakeholder influence.',
      'Prepare for CTO, Chief Architect, or architecture-driven C-level positions.',
    ],
  },
]

export default function CareerPath() {
  const { lang } = useLang()
  const T = i18n.careerPath

  return (
    <section id="careerpath" className="max-w-6xl mx-auto px-6 py-24">
      <RevealWrapper className="text-center mb-16">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <Map size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
        <p className="text-theme2 text-base max-w-md mx-auto">
          {T.subtitle[lang]}
        </p>
      </RevealWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {phases.map((phase, i) => (
          <RevealWrapper key={phase.range} delay={i * 120}>
            <div className="glass-card p-8 h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shrink-0 icon-box`}
                  style={{ boxShadow: phase.glow }}
                >
                  <phase.Icon size={22} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-theme3 mb-1">{phase.range}</div>
                  <div className="font-display font-bold text-[0.98rem] text-theme leading-tight">{phase.label}</div>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-0.5 bg-gradient-to-r ${phase.gradient} mb-6 opacity-30 rounded-full`} />

              {/* Goals */}
              <ul className="space-y-3">
                {phase.goals.map((goal, gi) => (
                  <li key={gi} className="flex gap-3 items-start text-[0.875rem] text-theme2 leading-relaxed">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${phase.gradient} shrink-0`} />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
