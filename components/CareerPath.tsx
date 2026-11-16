'use client'

import { useState } from 'react'
import { TrendingUp, Crown, Map, ChevronDown } from './PixelIcon'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

const phases = [
  {
    Icon: TrendingUp,
    range: { en: '0 – 5 Years', th: '0–5 ปี' },
    label: { en: 'Architecture Owner & Head-Ready', th: 'เจ้าของทิศทาง Architecture และเตรียมพร้อมสู่บทบาทหัวหน้า' },
    gradient: 'from-violet-600 to-blue-500',
    glow: '0 8px 22px rgba(124,58,237,0.35)',
    goals: [
      { en: 'Expand responsibility to owning multiple systems or full business domains with end-to-end accountability.', th: 'รับผิดชอบหลายระบบหรือทั้ง Domain ธุรกิจ พร้อมดูแลผลลัพธ์ตั้งแต่ต้นจนจบ' },
      { en: 'Define architecture direction, design principles, and architectural decision guidelines across teams.', th: 'กำหนดทิศทาง Architecture, หลักการออกแบบ และแนวทางตัดสินใจร่วมกันระหว่างทีม' },
      { en: 'Establish and operate architecture governance, review processes, and technical standards at domain level.', th: 'วางระบบกำกับดูแล Architecture กระบวนการ Review และมาตรฐานเทคนิคในระดับ Domain' },
      { en: 'Transition from solution-centric design to platform architecture and reusable enterprise capabilities.', th: 'ขยับจากการออกแบบราย Solution ไปสู่ Platform Architecture และความสามารถที่นำกลับมาใช้ซ้ำได้' },
      { en: 'Lead the definition of technology roadmaps and cross-team technical alignment with senior stakeholders.', th: 'นำการจัดทำ Technology Roadmap และประสานทิศทางเทคนิคข้ามทีมกับผู้บริหาร' },
      { en: 'Develop people leadership — mentoring, coaching, and growing future architects and technical leads.', th: 'พัฒนาทักษะการนำคน ผ่านการให้คำปรึกษาและเติบโตไปพร้อมกับ Architect และ Technical Lead รุ่นต่อไป' },
      { en: 'Strengthen executive communication, architectural decision-making, and stakeholder influence.', th: 'พัฒนาการสื่อสารกับผู้บริหาร การตัดสินใจด้าน Architecture และการสร้างความร่วมมือกับ Stakeholder' },
    ],
  },
  {
    Icon: Crown,
    range: { en: '6 – 10 Years', th: '6–10 ปี' },
    label: { en: 'Enterprise Technology Leadership & C-Level Readiness', th: 'ผู้นำเทคโนโลยีระดับองค์กรและเตรียมพร้อมสู่ผู้บริหาร C-Level' },
    gradient: 'from-blue-500 to-cyan-400',
    glow: '0 8px 22px rgba(59,130,246,0.35)',
    goals: [
      { en: 'Own enterprise-wide technology direction and architecture strategy aligned with organizational goals.', th: 'กำหนดทิศทางเทคโนโลยีและกลยุทธ์ Architecture ระดับองค์กรให้สอดคล้องกับเป้าหมายธุรกิจ' },
      { en: 'Drive technology decisions balancing business strategy, technical risk, scalability, and long-term impact.', th: 'ขับเคลื่อนการตัดสินใจด้านเทคโนโลยีโดยคำนึงถึงกลยุทธ์ธุรกิจ ความเสี่ยง การรองรับการเติบโต และผลระยะยาว' },
      { en: 'Lead enterprise architecture governance and architectural alignment across organizations.', th: 'นำการกำกับดูแล Enterprise Architecture และประสานแนวทางออกแบบระหว่างหน่วยงาน' },
      { en: 'Advance platform strategy and architectural capabilities to support long-term organizational growth.', th: 'พัฒนากลยุทธ์ Platform และความสามารถด้าน Architecture เพื่อรองรับการเติบโตระยะยาว' },
      { en: 'Leverage data-driven and AI-enabled insights as part of executive-level decision-making.', th: 'ใช้ข้อมูลและ AI เป็นส่วนหนึ่งของการตัดสินใจในระดับผู้บริหาร' },
      { en: 'Demonstrate board-level presentation skills and strategic stakeholder influence.', th: 'สื่อสารต่อคณะกรรมการได้ชัดเจนและสร้างอิทธิพลต่อการตัดสินใจเชิงกลยุทธ์' },
      { en: 'Prepare for CTO, Chief Architect, or architecture-driven C-level positions.', th: 'เตรียมความพร้อมสู่บทบาท CTO, Chief Architect หรือผู้บริหาร C-Level สาย Architecture' },
    ],
  },
]

export default function CareerPath() {
  const { lang } = useLang()
  const T = i18n.careerPath
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})
  const VISIBLE_GOALS = 4 // same skim-first treatment as the experience timeline

  return (
    <section id="careerpath" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Supporting section: compact left-aligned header so the main sections keep the big centered ones */}
      <RevealWrapper className="mb-6 flex items-center gap-4 sm:mb-8">
        <div className="icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-[0_6px_16px_rgba(124,58,237,0.32)]">
          <Map size={22} strokeWidth={2} aria-hidden="true" />
        </div>
        <div>
          <h2 className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] font-extrabold leading-tight tracking-tight text-theme">
            {T.title[lang]}
          </h2>
          <p className="text-[0.92rem] text-theme2">{T.subtitle[lang]}</p>
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {phases.map((phase, i) => (
          <RevealWrapper key={phase.range.en} delay={i * 120}>
            <div className="glass-card p-5 sm:p-8 h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shrink-0 icon-box`}
                  style={{ boxShadow: phase.glow }}
                >
                  <phase.Icon size={22} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-theme3 mb-1">{phase.range[lang]}</div>
                  <div className="font-display font-bold text-[0.98rem] text-theme leading-tight">{phase.label[lang]}</div>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-0.5 bg-gradient-to-r ${phase.gradient} mb-6 opacity-30 rounded-full`} />

              {/* Goals */}
              <ul className="space-y-3">
                {(expanded[i] ? phase.goals : phase.goals.slice(0, VISIBLE_GOALS)).map((goal, gi) => (
                  <li key={gi} className="flex gap-3 items-start text-[0.875rem] text-theme2 leading-relaxed">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${phase.gradient} shrink-0`} />
                    {goal[lang]}
                  </li>
                ))}
              </ul>
              {phase.goals.length > VISIBLE_GOALS && (
                <button
                  type="button"
                  onClick={() => setExpanded(e => ({ ...e, [i]: !e[i] }))}
                  aria-expanded={!!expanded[i]}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-2 py-2 -ml-2 text-[0.8rem] font-semibold text-violet-600 hover:bg-violet-500/[0.08] dark:text-violet-300"
                >
                  {expanded[i]
                    ? i18n.experience.showLess[lang]
                    : i18n.experience.showMore[lang].replace('{n}', String(phase.goals.length - VISIBLE_GOALS))}
                  <ChevronDown size={15} className={`transition-transform ${expanded[i] ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
