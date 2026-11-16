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
  impact: { en: string; th: string }
  metric?: { value: string; label: { en: string; th: string } } // a hard number, shown big instead of the impact pill
  name: { en: string; th: string }
  desc: { en: string; th: string }
  tags: string[]
}

const projects: Project[] = [
  {
    Icon: Cloud,
    accent: 'blue',
    impact: { en: '90%+ Accuracy', th: 'ความแม่นยำ 90%+' },
    metric: { value: '90%+', label: { en: 'billing data accuracy, up from near-zero', th: 'ความแม่นยำของข้อมูล Billing จากเกือบ 0%' } },
    name: { en: 'Multi-Cloud Billing ELT Platform', th: 'แพลตฟอร์ม ELT สำหรับ Billing หลาย Cloud' },
    desc: { en: 'Designed ELT pipelines across AWS, GCP, and Huawei for unified billing insights. Improved billing data accuracy from near-zero to over 90% through workflow redesign and validation logic.', th: 'ออกแบบ ELT Pipeline บน AWS, GCP และ Huawei เพื่อรวมข้อมูล Billing พร้อมปรับ Workflow และ Validation จนเพิ่มความแม่นยำจากเกือบ 0% เป็นมากกว่า 90%' },
    tags: ['AWS', 'GCP', 'Huawei', 'ELT', 'Database Design', 'API Spec'],
  },
  {
    Icon: Factory,
    accent: 'violet',
    impact: { en: 'Multi-Platform', th: 'หลายแพลตฟอร์ม' },
    name: { en: 'Manufacturing & Logistics System', th: 'ระบบการผลิตและโลจิสติกส์' },
    desc: { en: 'Led system design for manufacturing and logistics projects covering factory operations and distribution workflows. Designed architecture, database schemas, and API specifications.', th: 'นำการออกแบบระบบการผลิตและโลจิสติกส์ ครอบคลุมการปฏิบัติงานในโรงงานและกระบวนการกระจายสินค้า พร้อมออกแบบ Architecture, Database Schema และ API Spec' },
    tags: ['System Architecture', 'Workflow Design', 'API Design', 'Pre-Sales'],
  },
  {
    Icon: ShoppingCart,
    accent: 'indigo',
    impact: { en: '−30% Int. Errors', th: 'ลดข้อผิดพลาด 30%' },
    metric: { value: '−30%', label: { en: 'integration errors', th: 'ข้อผิดพลาดในการเชื่อมต่อลดลง' } },
    name: { en: 'E-Commerce Integration Platform', th: 'แพลตฟอร์มเชื่อมต่อ E-Commerce' },
    desc: { en: 'Designed standardized integration interfaces and APIs reducing integration errors by 30%+. Modernized legacy .NET Framework to .NET and validated e-commerce APIs.', th: 'ออกแบบ Interface และ API มาตรฐาน ลดข้อผิดพลาดการเชื่อมต่อกว่า 30% ปรับระบบเดิมจาก .NET Framework เป็น .NET และตรวจสอบ API สำหรับ E-Commerce' },
    tags: ['.NET', 'API Integration', 'Workflow Optimization', 'Legacy Migration'],
  },
  {
    Icon: FileCode2,
    accent: 'violet',
    impact: { en: 'DDD + Microservices', th: 'DDD + Microservices' },
    name: { en: 'Contract Renewal System', th: 'ระบบต่ออายุสัญญา' },
    desc: { en: 'Designed and delivered a contract renewal system with personalized promotion-based offers. Translated business requirements into API specs using DDD and microservices.', th: 'ออกแบบและส่งมอบระบบต่ออายุสัญญาพร้อมโปรโมชันเฉพาะบุคคล แปลงความต้องการธุรกิจเป็น API Spec ด้วย DDD และ Microservices' },
    tags: ['DDD', 'Microservices', 'API Spec', 'Scrum', 'Event-Driven'],
  },
  {
    Icon: Building2,
    accent: 'blue',
    impact: { en: 'Role-Based Workflow', th: 'Workflow ตามบทบาท' },
    name: { en: 'Approval Workflow', th: 'ระบบอนุมัติงาน' },
    desc: { en: 'Designed and implemented role-based approval workflows using K2 Black Pearl. Developed full-stack solutions using ASP.NET MVC and SQL Server.', th: 'ออกแบบและพัฒนา Approval Workflow ตามบทบาทผู้ใช้ด้วย K2 Black Pearl พร้อมพัฒนา Full-stack ด้วย ASP.NET MVC และ SQL Server' },
    tags: ['ASP.NET MVC', 'SQL Server', 'K2 Black Pearl', 'Workflow Design'],
  },
  {
    Icon: Lock,
    accent: 'indigo',
    impact: { en: 'Performance+', th: 'เพิ่มประสิทธิภาพ' },
    name: { en: 'Online Access Control System', th: 'ระบบควบคุมการเข้าใช้งานออนไลน์' },
    desc: { en: 'Led development of an online access control system using .NET MVC, improving performance and code efficiency through stored procedures and legacy refactoring.', th: 'นำการพัฒนาระบบควบคุมการเข้าใช้งานออนไลน์ด้วย .NET MVC พร้อมปรับประสิทธิภาพและโค้ดผ่าน Stored Procedure และการปรับโครงสร้างระบบเดิม' },
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
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <RevealWrapper className="text-center mb-10 sm:mb-14">
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
        {projects.map((p, i) => {
          // the first project is the strongest proof: give it a 2×2 tile on wide screens
          const featured = i === 0
          return (
          <RevealWrapper key={p.name.en} delay={i * 65} className={`flex ${featured ? 'xl:col-span-2 xl:row-span-2' : ''}`}>
            <div className="glass-card flex flex-col w-full overflow-hidden group">
              {/* Top gradient bar */}
              <div className={`h-0.5 bg-gradient-to-r ${accentIcon[p.accent]}`} />

              <div className={`flex flex-1 flex-col ${featured ? 'p-6 sm:p-8' : 'p-6'}`}>
                {/* Icon + impact */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${accentIcon[p.accent]} flex items-center justify-center icon-box`}
                    style={{ boxShadow: accentGlow[p.accent] }}
                  >
                    <p.Icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                  {!p.metric && (
                    <span className="tag-chip tag-chip--highlight" style={{ animationDelay: `${i * 55}ms` }}>
                      <span className="tag-chip-dot" aria-hidden="true" />
                      {p.impact[lang]}
                    </span>
                  )}
                </div>

                {p.metric && (
                  <div className="mb-4">
                    <div className={`font-display font-extrabold leading-none gradient-text ${featured ? 'text-[clamp(3rem,6vw,4.5rem)]' : 'text-[2.4rem]'}`}>
                      {p.metric.value}
                    </div>
                    <div className="mt-1 text-[0.8rem] font-medium text-theme2">{p.metric.label[lang]}</div>
                  </div>
                )}

                {/* Title */}
                <h3 className={`font-display font-bold text-theme mb-1 group-hover:gradient-text transition-all duration-200 ${featured ? 'text-[1.35rem]' : 'text-[1rem]'}`}>
                  {p.name[lang]}
                </h3>
                {/* Desc */}
                <p className={`text-theme2 leading-relaxed mb-5 ${featured ? 'text-[0.98rem] max-w-xl' : 'flex-1 text-[0.875rem]'}`}>{p.desc[lang]}</p>

                {/* Featured tile: before/after of its headline number fills the extra height */}
                {featured && (
                  <div className="mb-6 flex flex-1 flex-col justify-center gap-4 rounded-2xl border border-[var(--border2)] bg-[var(--surface2)] p-5">
                    {[
                      { label: T.before[lang], value: '≈ 0%', pct: 3, bar: 'bg-[var(--border)]' },
                      { label: T.after[lang], value: '90%+', pct: 92, bar: 'bg-gradient-to-r from-violet-600 to-blue-500' },
                    ].map(row => (
                      <div key={row.label}>
                        <div className="mb-1.5 flex items-baseline justify-between text-[0.8rem]">
                          <span className="font-semibold text-theme2">{row.label}</span>
                          <span className="font-display font-bold text-theme">{row.value}</span>
                        </div>
                        <div className="h-2.5 overflow-hidden rounded-full surface-3">
                          <div className={`h-full rounded-full ${row.bar}`} style={{ width: `${row.pct}%` }} />
                        </div>
                      </div>
                    ))}
                    <p className="text-[0.75rem] text-theme3">{T.billingCaption[lang]}</p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="tag-chip tag-chip--neutral"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealWrapper>
          )
        })}
      </div>
    </section>
  )
}
