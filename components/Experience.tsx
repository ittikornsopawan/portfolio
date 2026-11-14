'use client'

import { ShieldCheck, Cloud, ShoppingCart, FileCode2, Building2, Code2, Briefcase } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import type { LucideIcon } from 'lucide-react'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

interface Experience {
  Icon: LucideIcon
  role: string
  company: string
  period: string
  current: boolean
  type?: string
  bullets: { en: string; th: string }[]
}

const experiences: Experience[] = [
  {
    Icon: ShieldCheck,
    role: 'System Analyst, Supervisor',
    company: 'Socket9',
    period: 'Jun 2024 – Present',
    current: true,
    bullets: [
      { en: 'Collected and analyzed business requirements, translating them into workflows, use cases, and technical solutions.', th: 'รวบรวมและวิเคราะห์ความต้องการทางธุรกิจ แปลงเป็น Workflow, Use Cases และ Technical Solutions' },
      { en: 'Designed system architecture, database schemas, and API specifications across multiple platforms.', th: 'ออกแบบ System Architecture, Database Schema และ API Specifications ครอบคลุมหลาย Platform' },
      { en: 'Led and reviewed technical solutions to ensure alignment with business goals and system standards.', th: 'นำและตรวจสอบ Technical Solutions เพื่อให้สอดคล้องกับเป้าหมายธุรกิจและมาตรฐานระบบ' },
      { en: 'Collaborated with clients, BA, and development teams to validate feasibility and optimize implementation.', th: 'ทำงานร่วมกับ Client, BA และทีม Developer เพื่อตรวจสอบความเป็นไปได้และปรับปรุงการ Implement' },
      { en: 'Maintained system documentation and knowledge bases to support delivery and team onboarding.', th: 'ดูแลเอกสารระบบและ Knowledge Base เพื่อสนับสนุนการส่งมอบและการ Onboard ทีม' },
      { en: 'Supported pre-sales by proposing solutions, defining key features, and delivering client presentations.', th: 'สนับสนุน Pre-Sales โดยการเสนอ Solutions กำหนด Key Features และนำเสนอต่อ Client' },
      { en: 'Led system design for manufacturing and logistics projects, covering factory operations and distribution workflows.', th: 'นำการออกแบบระบบสำหรับโปรเจค Manufacturing และ Logistics ครอบคลุม Factory Operations และ Distribution Workflows' },
    ],
  },
  {
    Icon: Cloud,
    role: 'Senior System Analyst',
    company: 'True Internet Data Center',
    period: 'Nov 2022 – May 2024',
    current: false,
    bullets: [
      { en: 'Designed multi-cloud ELT pipelines across AWS, GCP, and Huawei to deliver unified billing insights.', th: 'ออกแบบ Multi-Cloud ELT Pipelines ครอบคลุม AWS, GCP และ Huawei เพื่อสร้าง Unified Billing Insights' },
      { en: 'Improved billing data accuracy from near-zero to over 90% through workflow redesign and validation logic.', th: 'เพิ่มความแม่นยำของข้อมูล Billing จากเกือบศูนย์เป็นกว่า 90% ผ่านการออกแบบ Workflow และ Validation Logic ใหม่' },
      { en: 'Developed scalable database schemas and API specifications for cross-platform integration.', th: 'พัฒนา Database Schema และ API Specifications ที่ขยายได้สำหรับการ Integration ข้าม Platform' },
      { en: 'Led cross-functional teams to solve complex data modeling and integration challenges.', th: 'นำทีม Cross-Functional เพื่อแก้ปัญหา Data Modeling และ Integration ที่ซับซ้อน' },
      { en: 'Collaborated with product, clients, and management to align architecture with business goals.', th: 'ทำงานร่วมกับ Product, Client และผู้บริหารเพื่อให้ Architecture สอดคล้องกับเป้าหมายธุรกิจ' },
    ],
  },
  {
    Icon: ShoppingCart,
    role: 'System Analyst',
    company: 'Buzzebees',
    period: 'Nov 2021 – Oct 2022',
    current: false,
    bullets: [
      { en: 'Optimized core workflows at Buzzebees, improving efficiency and cross-team collaboration.', th: 'ปรับปรุง Core Workflows เพิ่มประสิทธิภาพและการทำงานร่วมกันข้ามทีม' },
      { en: 'Translated business requirements into clear technical specifications, reducing rework and delivery time.', th: 'แปลง Business Requirements เป็น Technical Specifications ที่ชัดเจน ลด Rework และเวลาการส่งมอบ' },
      { en: 'Modernized legacy systems by upgrading .NET Framework to .NET Core 5.', th: 'ปรับปรุงระบบ Legacy โดยอัปเกรด .NET Framework เป็น .NET Core 5' },
      { en: 'Designed standardized integration interfaces and APIs, reducing integration errors by 30%+.', th: 'ออกแบบ Integration Interfaces และ APIs มาตรฐาน ลด Integration Errors ได้มากกว่า 30%' },
      { en: 'Researched and validated e-commerce APIs to ensure security, performance, and ecosystem fit.', th: 'ค้นคว้าและตรวจสอบ E-Commerce APIs เพื่อให้มั่นใจด้าน Security, Performance และความเข้ากันได้กับระบบ' },
    ],
  },
  {
    Icon: FileCode2,
    role: 'System Analyst',
    company: 'True Corporation (X10)',
    period: 'Jan 2021 – Oct 2021',
    current: false,
    type: 'Contractor',
    bullets: [
      { en: 'Designed and delivered a contract renewal system with personalized promotion-based offers.', th: 'ออกแบบและส่งมอบระบบต่ออายุสัญญาที่มีโปรโมชันแบบเฉพาะบุคคล' },
      { en: 'Translated business requirements into actionable tickets and API specs using DDD and microservices.', th: 'แปลง Business Requirements เป็น Ticket และ API Specs โดยใช้ DDD และ Microservices' },
      { en: 'Defined API ownership and data mapping between frontend and service layers.', th: 'กำหนด API Ownership และ Data Mapping ระหว่าง Frontend และ Service Layers' },
      { en: 'Led cross-functional teams through Scrum ceremonies (grooming, planning, sprint, review).', th: 'นำทีม Cross-Functional ผ่าน Scrum Ceremonies (Grooming, Planning, Sprint, Review)' },
      { en: 'Improved delivery efficiency and communication between business, dev, and QA teams.', th: 'เพิ่มประสิทธิภาพการส่งมอบและการสื่อสารระหว่างทีม Business, Dev และ QA' },
    ],
  },
  {
    Icon: Building2,
    role: 'System Analyst',
    company: 'Puksa Real Estate (ADI)',
    period: 'Aug 2019 – Dec 2020',
    current: false,
    type: 'Contractor',
    bullets: [
      { en: 'Translated business requirements into technical specifications and solution designs with IT Manager.', th: 'แปลง Business Requirements เป็น Technical Specifications และ Solution Designs ร่วมกับ IT Manager' },
      { en: 'Developed and optimized databases and full-stack solutions using ASP.NET MVC (Core) and SQL Server.', th: 'พัฒนาและปรับปรุง Database และ Full-Stack Solutions โดยใช้ ASP.NET MVC (Core) และ SQL Server' },
      { en: 'Designed and implemented role-based approval workflows using K2 Black Pearl.', th: 'ออกแบบและ Implement Role-Based Approval Workflows โดยใช้ K2 Black Pearl' },
    ],
  },
  {
    Icon: Code2,
    role: '.NET Developer',
    company: 'PTT Digital Solution (Infinite)',
    period: 'Jul 2016 – Jul 2019',
    current: false,
    type: 'Contractor',
    bullets: [
      { en: 'Led development of an online access control system using .NET MVC, improving performance and code efficiency.', th: 'นำการพัฒนาระบบ Access Control Online โดยใช้ .NET MVC เพิ่ม Performance และประสิทธิภาพของ Code' },
      { en: 'Introduced stored procedures to streamline logic and enhance system performance.', th: 'นำ Stored Procedures มาใช้เพื่อจัดระเบียบ Logic และเพิ่ม System Performance' },
      { en: 'Collaborated with developers to integrate new solutions and refactor legacy code.', th: 'ทำงานร่วมกับ Developer เพื่อ Integrate Solutions ใหม่และ Refactor Legacy Code' },
      { en: 'Worked with BAs under a waterfall approach to gather and refine requirements.', th: 'ทำงานกับ BA ในรูปแบบ Waterfall เพื่อรวบรวมและปรับปรุง Requirements' },
    ],
  },
]

export default function Experience() {
  const { lang } = useLang()
  const T = i18n.experience

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">

      <RevealWrapper className="text-center mb-16">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <Briefcase size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
        <p className="text-theme2 text-base max-w-md mx-auto">
          {T.subtitle[lang]}
        </p>
      </RevealWrapper>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-violet-600/60 via-blue-500/40 to-transparent hidden md:block" />

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <RevealWrapper key={`${exp.company}-${i}`} delay={i * 70}>
              <div className="flex gap-5 items-start">
                {/* Icon */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center z-10 shadow-[0_6px_18px_rgba(124,58,237,0.32)] ${
                      exp.current
                        ? 'bg-gradient-to-br from-violet-600 to-blue-500 ring-4 ring-violet-500/20'
                        : 'bg-gradient-to-br from-violet-700 to-blue-600'
                    }`}
                  >
                    <exp.Icon size={18} className="text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Card */}
                <div className={`glass-card flex-1 p-6 md:p-7 ${exp.current ? 'border-violet-500/30 shadow-[0_4px_30px_rgba(124,58,237,0.12)]' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-[1.05rem] text-theme mb-1">{exp.role}</h3>
                      <span className="text-sm font-semibold gradient-text">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap shrink-0">
                      <span className="text-xs font-medium text-theme3 bg-[var(--surface2)] border border-[var(--border2)] px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-xs font-semibold text-green-500 bg-green-500/10 border border-green-500/25 px-3 py-1 rounded-full flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          {T.active[lang]}
                        </span>
                      )}
                      {exp.type && (
                        <span className="text-xs font-medium text-blue-500 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                          {T.contractor[lang]}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="text-[0.875rem] text-theme2 flex gap-2.5 items-start leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                        {b[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
