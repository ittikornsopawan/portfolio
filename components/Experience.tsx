'use client'

import { useState } from 'react'
import { ChevronDown, ShieldCheck, Cloud, ShoppingCart, FileCode2, Building2, Code2, Briefcase, Sparkles } from 'lucide-react'
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
  keyNote: { en: string; th: string }
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
    keyNote: {
      en: 'Leads system design for manufacturing and logistics workflows.',
      th: 'นำการออกแบบระบบสำหรับ Workflow ด้าน Manufacturing และ Logistics',
    },
    bullets: [
      { en: "Collected and analyzed business requirements, translating them into workflows, use cases, and technical solutions.", th: "เก็บและวิเคราะห์ความต้องการทางธุรกิจ แล้วถ่ายทอดออกมาเป็น Workflow, Use Case และแนวทางเชิงเทคนิคที่ทีมนำไปใช้ได้จริง" },
      { en: "Designed system architecture, database schemas, and API specifications across multiple platforms.", th: "ออกแบบ System Architecture, Database Schema และ API Specification สำหรับระบบที่ทำงานร่วมกันหลายแพลตฟอร์ม" },
      { en: "Led and reviewed technical solutions to ensure alignment with business goals and system standards.", th: "ดูแลและรีวิว Technical Solution ให้ตอบโจทย์เป้าหมายทางธุรกิจและเป็นไปตามมาตรฐานของระบบ" },
      { en: "Collaborated with clients, Business Analysts, and development teams to validate feasibility and optimize implementation.", th: "ทำงานใกล้ชิดกับลูกค้า ทีม BA และทีมพัฒนา เพื่อตรวจสอบความเป็นไปได้และหาแนวทาง Implement ที่เหมาะสมที่สุด" },
      { en: "Maintained system documentation and knowledge bases to support delivery and team onboarding.", th: "จัดทำและดูแลเอกสารระบบรวมถึง Knowledge Base ช่วยให้การส่งมอบงานราบรื่น และสมาชิกใหม่เริ่มงานได้เร็วขึ้น" },
      { en: "Supported pre-sales by proposing solutions, defining key features, and delivering client presentations.", th: "ร่วมงาน Pre-sales ตั้งแต่เสนอ Solution กำหนด Key Feature ไปจนถึงนำเสนอให้ลูกค้า" },
      { en: "Led system design for manufacturing and logistics projects, covering factory operations and distribution workflows.", th: "นำการออกแบบระบบให้โปรเจกต์ด้าน Manufacturing และ Logistics ครอบคลุมตั้งแต่การทำงานในโรงงานจนถึงการกระจายสินค้า" },
      { en: "Applied AI-assisted development tools, including Claude, Codex and Hermes Agent, to accelerate solution design, documentation, prototyping, and software development workflows.", th: "นำเครื่องมือ AI อย่าง Claude, Codex และ Hermes Agent มาช่วยให้การออกแบบ Solution การทำเอกสาร การทำ Prototype และการพัฒนาซอฟต์แวร์เร็วขึ้น" },
    ],
  },
  {
    Icon: Cloud,
    role: 'Senior System Analyst & Product Owner',
    company: 'True Internet Data Center',
    period: 'Nov 2022 – May 2024',
    current: false,
    keyNote: {
      en: 'Raised billing data accuracy from near-zero to over 90%.',
      th: 'ยกระดับความแม่นยำของข้อมูล Billing จากแทบเป็นศูนย์ให้สูงกว่า 90%',
    },
    bullets: [
      { en: "Took on the Product Owner role, gathering requirements from internal users to understand customer-specific billing processes and define product requirements.", th: "รับบทบาท Product Owner พูดคุยกับผู้ใช้งานภายในเพื่อเข้าใจกระบวนการ Billing ของลูกค้าแต่ละราย และกำหนด Product Requirement" },
      { en: "Designed multi-cloud ELT data pipelines across AWS, GCP, and Huawei to deliver unified billing insights.", th: "ออกแบบ Multi-cloud ELT Data Pipeline บน AWS, GCP และ Huawei เพื่อรวมข้อมูล Billing ให้เห็นภาพเดียวกันทั้งหมด" },
      { en: "Translated business requirements into solution designs, defining ELT/ETL workflows and developing a mini application to validate business logic and data processing before implementation.", th: "แปลง Business Requirement เป็น Solution Design กำหนด ELT/ETL Workflow และพัฒนา Mini Application เพื่อทดสอบ Business Logic และการประมวลผลข้อมูลก่อนลงมือพัฒนาจริง" },
      { en: "Improved billing data accuracy from near-zero to over 90% through workflow redesign and validation logic.", th: "ยกระดับความแม่นยำของข้อมูล Billing จากแทบเป็นศูนย์ให้สูงกว่า 90% ด้วยการออกแบบ Workflow และ Validation Logic ใหม่" },
      { en: "Developed scalable database schemas and API specifications for cross-platform integration.", th: "ออกแบบ Database Schema และ API Specification ที่รองรับการเติบโต สำหรับการเชื่อมต่อข้ามแพลตฟอร์ม" },
      { en: "Led cross-functional teams to solve complex data modeling and integration challenges.", th: "นำทีม Cross-functional ร่วมกันแก้โจทย์ Data Modeling และ Integration ที่ซับซ้อน" },
      { en: "Collaborated with product teams, clients, and management to align technical architecture with business objectives.", th: "ทำงานร่วมกับทีม Product ลูกค้า และผู้บริหาร เพื่อให้ Technical Architecture สอดคล้องกับเป้าหมายทางธุรกิจ" },
    ],
  },
  {
    Icon: ShoppingCart,
    role: 'Solution Architect',
    company: 'Buzzebees',
    period: 'Nov 2021 – Oct 2022',
    current: false,
    keyNote: {
      en: 'Reduced integration errors by 30%+ with standardized REST APIs.',
      th: 'ลด Integration Error มากกว่า 30% ด้วย REST API ที่เป็นมาตรฐาน',
    },
    bullets: [
      { en: "Consulted with clients to understand transaction flows and recommend the most suitable integration approach for feeding transaction data into the loyalty platform for points calculation.", th: "ให้คำปรึกษาลูกค้าเพื่อทำความเข้าใจ Transaction Flow และแนะนำวิธี Integration ที่เหมาะสมที่สุดในการส่งข้อมูลเข้า Loyalty Platform เพื่อคำนวณคะแนน" },
      { en: "Translated business requirements into technical specifications, reducing rework and improving delivery efficiency.", th: "แปลง Business Requirement เป็น Technical Specification ที่ชัดเจน ช่วยลดงานแก้ซ้ำและทำให้ส่งมอบงานได้เร็วขึ้น" },
      { en: "Designed standardized integration interfaces and REST APIs, reducing integration errors by 30%+ and improving consistency across platforms.", th: "ออกแบบ Integration Interface และ REST API ให้เป็นมาตรฐานเดียวกัน ลด Integration Error ได้มากกว่า 30% และทำให้ทุกแพลตฟอร์มเชื่อมต่อกันได้สม่ำเสมอ" },
      { en: "Researched and evaluated e-commerce APIs to ensure security, performance, and compatibility with the platform ecosystem.", th: "ศึกษาและประเมิน E-commerce API ทั้งด้าน Security, Performance และความเข้ากันได้กับระบบที่มีอยู่" },
      { en: "Modernized legacy systems by migrating applications from .NET Framework to .NET 5.", th: "Modernize ระบบเดิมด้วยการย้ายแอปพลิเคชันจาก .NET Framework ไปสู่ .NET 5" },
      { en: "Optimized core workflows, improving operational efficiency and cross-team collaboration.", th: "ปรับปรุง Core Workflow ให้ทำงานได้มีประสิทธิภาพขึ้น และช่วยให้ทีมต่าง ๆ ทำงานร่วมกันได้ราบรื่นขึ้น" },
    ],
  },
  {
    Icon: FileCode2,
    role: 'System Analyst',
    company: 'True Corporation (X10)',
    period: 'Jan 2021 – Oct 2021',
    current: false,
    keyNote: {
      en: 'Delivered a contract-renewal system with personalized offers.',
      th: 'ส่งมอบระบบต่ออายุสัญญาพร้อมข้อเสนอโปรโมชันเฉพาะบุคคล',
    },
    type: 'Contractor',
    bullets: [
      { en: "Translated business requirements into actionable tickets and API specifications using Domain-Driven Design (DDD) and microservices architecture.", th: "แปลง Business Requirement เป็น Ticket และ API Specification ที่พร้อมนำไปพัฒนา โดยใช้แนวคิด DDD และ Microservices" },
      { en: "Designed and delivered a contract renewal system with personalized, promotion-based offers.", th: "ออกแบบและส่งมอบระบบต่ออายุสัญญา ที่นำเสนอโปรโมชันให้เหมาะกับลูกค้าแต่ละราย" },
      { en: "Defined API ownership and data mapping between frontend and service layers to ensure clear system boundaries.", th: "กำหนด API Ownership และ Data Mapping ระหว่าง Frontend กับ Service Layer เพื่อให้ขอบเขตของแต่ละระบบชัดเจน" },
      { en: "Led cross-functional Scrum ceremonies including grooming, planning, sprint execution, and review.", th: "นำ Scrum Ceremony ร่วมกับทีม Cross-functional ทั้ง Grooming, Planning, Sprint และ Review" },
      { en: "Improved delivery efficiency and cross-team communication between business, development, and QA teams.", th: "ช่วยให้การส่งมอบงานมีประสิทธิภาพขึ้น และทีม Business, Dev และ QA สื่อสารกันได้ดีขึ้น" },
    ],
  },
  {
    Icon: Building2,
    role: 'System Analyst',
    company: 'Pruksa Real Estate',
    period: 'Aug 2019 – Dec 2020',
    current: false,
    keyNote: {
      en: 'Designed and integrated role-based approval workflows with K2 BlackPearl.',
      th: 'ออกแบบและเชื่อม Workflow อนุมัติตามบทบาทด้วย K2 BlackPearl',
    },
    type: 'Contractor',
    bullets: [
      { en: "Gathered workflow requirements from internal users, including organizational structure, approval hierarchy, and approval logic (parallel vs sequential flows).", th: "เก็บ Requirement ด้าน Workflow จากผู้ใช้งานภายใน ทั้งโครงสร้างองค์กร ลำดับขั้นการอนุมัติ และ Logic การอนุมัติแบบ Parallel และ Sequential" },
      { en: "Designed SQL Server database schemas to support workflow state management, approval routing, and process tracking.", th: "ออกแบบ Database Schema บน SQL Server เพื่อรองรับการจัดการสถานะของ Workflow การส่งต่อการอนุมัติ และการติดตามกระบวนการ" },
      { en: "Designed stored procedures to support K2 BlackPearl integration, covering both query and command operations.", th: "ออกแบบ Stored Procedure สำหรับเชื่อมต่อกับ K2 BlackPearl ครอบคลุมทั้งฝั่ง Query และ Command" },
      { en: "Developed and integrated workflow processes with K2 BlackPearl, ensuring correct execution of role-based approval flows.", th: "พัฒนาและเชื่อม Workflow เข้ากับ K2 BlackPearl ให้การอนุมัติตามบทบาททำงานได้ถูกต้อง" },
      { en: "Built and optimized full-stack applications using ASP.NET MVC (Core) and SQL Server to support workflow-driven business processes.", th: "พัฒนาและปรับปรุง Full-stack Application ด้วย ASP.NET MVC (Core) และ SQL Server เพื่อรองรับกระบวนการทางธุรกิจที่ขับเคลื่อนด้วย Workflow" },
      { en: "Created technical documentation covering workflow design, database schema, and system integration for development and support teams.", th: "จัดทำเอกสารทางเทคนิคครอบคลุม Workflow Design, Database Schema และ System Integration ให้ทีมพัฒนาและทีม Support" },
    ],
  },
  {
    Icon: Code2,
    role: '.NET Full-Stack Developer',
    company: 'PTT Digital Solution (Infinite)',
    period: 'Jul 2016 – Jul 2019',
    current: false,
    keyNote: {
      en: 'Built .NET MVC access-control features and improved database performance.',
      th: 'พัฒนา Feature ของระบบ Access Control ด้วย .NET MVC และปรับ Performance ฐานข้อมูล',
    },
    type: 'Contractor',
    bullets: [
      { en: "Worked with SA/BA to clarify requirements, defining screen-level functionality and expected user behavior for an online access control system.", th: "ทำงานร่วมกับ SA/BA เพื่อทำ Requirement ให้ชัดเจน กำหนดการทำงานของแต่ละหน้าจอและพฤติกรรมที่ผู้ใช้คาดหวัง สำหรับระบบ Access Control แบบออนไลน์" },
      { en: "Developed the web application using .NET MVC, implementing required features and improving code efficiency.", th: "พัฒนา Web Application ด้วย .NET MVC ตาม Feature ที่กำหนด พร้อมปรับโค้ดให้ทำงานได้มีประสิทธิภาพขึ้น" },
      { en: "Introduced and optimized stored procedures to improve database performance and reduce application-side logic complexity.", th: "นำ Stored Procedure มาใช้และปรับให้เหมาะสม เพื่อเพิ่ม Performance ของฐานข้อมูลและลดความซับซ้อนของ Logic ฝั่งแอปพลิเคชัน" },
      { en: "Supported UAT and defect fixing, working closely with QA and stakeholders to keep the system stable.", th: "สนับสนุนการทำ UAT และแก้ไข Defect ร่วมกับทีม QA และผู้เกี่ยวข้อง เพื่อให้ระบบทำงานได้อย่างเสถียร" },
      { en: "Deployed application updates and supported production release activities.", th: "Deploy อัปเดตของแอปพลิเคชัน และดูแลการ Release ขึ้น Production" },
    ],
  },
]

// Show the first few bullets so the timeline stays skimmable; the rest open on request.
const VISIBLE_BULLETS = 4
const EXPERIENCE_HIGHLIGHTS = {
  en: [
    'system architecture, database schemas, and API specifications',
    'pre-sales',
    'manufacturing and logistics projects',
    'AI-assisted development tools',
    'Product Owner role',
    'multi-cloud ELT data pipelines across AWS, GCP, and Huawei',
    'billing data accuracy from near-zero to over 90%',
    'standardized integration interfaces and REST APIs',
    'integration errors by 30%+',
    '.NET Framework to .NET 5',
    'Domain-Driven Design (DDD) and microservices architecture',
    'contract renewal system with personalized, promotion-based offers',
    'API ownership and data mapping',
    'SQL Server database schemas',
    'K2 BlackPearl integration',
    'role-based approval flows',
    'ASP.NET MVC (Core) and SQL Server',
    'online access control system',
    '.NET MVC',
    'stored procedures to improve database performance',
  ],
  th: [
    'System Architecture, Database Schema และ API Specification',
    'Pre-sales',
    'Manufacturing และ Logistics',
    'Claude, Codex และ Hermes Agent',
    'Product Owner',
    'Multi-cloud ELT Data Pipeline บน AWS, GCP และ Huawei',
    'ความแม่นยำของข้อมูล Billing จากแทบเป็นศูนย์ให้สูงกว่า 90%',
    'Integration Interface และ REST API ให้เป็นมาตรฐานเดียวกัน',
    'ลด Integration Error ได้มากกว่า 30%',
    '.NET Framework ไปสู่ .NET 5',
    'DDD และ Microservices',
    'ระบบต่ออายุสัญญา ที่นำเสนอโปรโมชันให้เหมาะกับลูกค้าแต่ละราย',
    'API Ownership และ Data Mapping',
    'Database Schema บน SQL Server',
    'เชื่อมต่อกับ K2 BlackPearl',
    'การอนุมัติตามบทบาททำงานได้ถูกต้อง',
    'ASP.NET MVC (Core) และ SQL Server',
    'ระบบ Access Control แบบออนไลน์',
    '.NET MVC',
    'Stored Procedure มาใช้และปรับให้เหมาะสม',
    'Performance ของฐานข้อมูล',
  ],
}

function HighlightedExperienceText({ text, lang }: { text: string; lang: 'en' | 'th' }) {
  const highlights = EXPERIENCE_HIGHLIGHTS[lang]
  const escapedHighlights = [...highlights]
    .sort((a, b) => b.length - a.length)
    .map(phrase => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escapedHighlights.join('|')})`, 'gi')
  const highlighted = new Set(highlights.map(phrase => phrase.toLocaleLowerCase()))

  return <>{text.split(pattern).map((part, index) => highlighted.has(part.toLocaleLowerCase()) ? <mark key={index} className="testimonial-mark">{part}</mark> : part)}</>
}

export default function Experience() {
  const { lang } = useLang()
  const T = i18n.experience
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      <RevealWrapper className="text-center mb-10 sm:mb-14">
        <div className="eyebrow-pill mb-4 mx-auto w-fit">
          <Briefcase size={12} />
          {T.eyebrow[lang]}
        </div>
        <h2 className="font-display font-extrabold tracking-tight text-theme text-[clamp(1.9rem,3vw,2.8rem)] mb-4">
          {T.title[lang]}
        </h2>
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
                      <span className="tag-chip tag-chip--neutral">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="tag-chip tag-chip--highlight">
                          <span className="tag-chip-dot" aria-hidden="true" />
                          {T.active[lang]}
                        </span>
                      )}
                      <span className={`tag-chip ${exp.type ? 'tag-chip--contractor' : 'tag-chip--fulltime'}`}>
                        <span className="employment-chip-dot" aria-hidden="true" />
                        {exp.type ? T.contractor[lang] : T.fullTime[lang]}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 flex items-start gap-2.5 rounded-xl border border-violet-500/20 bg-violet-500/[0.045] px-3.5 py-3">
                    <Sparkles
                      size={15}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-300"
                    />
                    <div className="min-w-0">
                      <p className="mb-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-violet-700 dark:text-violet-300">
                        {T.keyHighlight[lang]}
                      </p>
                      <p className="text-[0.85rem] font-semibold leading-snug text-theme">
                        {exp.keyNote[lang]}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {(expanded[i] ? exp.bullets : exp.bullets.slice(0, VISIBLE_BULLETS)).map((b, bi) => (
                      <li key={bi} className="text-[0.875rem] text-theme2 flex gap-2.5 items-start leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                        <span className="min-w-0 flex-1">
                          <HighlightedExperienceText text={b[lang]} lang={lang} />
                        </span>
                      </li>
                    ))}
                  </ul>
                  {exp.bullets.length > VISIBLE_BULLETS && (
                    <button
                      type="button"
                      onClick={() => setExpanded(e => ({ ...e, [i]: !e[i] }))}
                      aria-expanded={!!expanded[i]}
                      className="mt-3 inline-flex items-center gap-1.5 rounded-lg px-2 py-2 -ml-2 text-[0.8rem] font-semibold text-violet-600 hover:bg-violet-500/[0.08] dark:text-violet-300"
                    >
                      {expanded[i]
                        ? T.showLess[lang]
                        : T.showMore[lang].replace('{n}', String(exp.bullets.length - VISIBLE_BULLETS))}
                      <ChevronDown size={15} className={`transition-transform ${expanded[i] ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
