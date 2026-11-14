export type Lang = "en" | "th";

export const i18n = {
  nav: {
    about: { en: "About", th: "เกี่ยวกับ" },
    experience: { en: "Experience", th: "ประสบการณ์" },
    projects: { en: "Projects", th: "โปรเจค" },
    skills: { en: "Skills", th: "ทักษะ" },
    education: { en: "Education", th: "การศึกษา" },
    careerPath: { en: "Career Path", th: "เส้นทางอาชีพ" },
    testimonials: { en: "Testimonials", th: "คำรับรอง" },
    personality: { en: 'Personality', th: 'บุคลิกภาพ' },
    github: { en: "GitHub", th: "GitHub" },
    contact: { en: "Contact", th: "ติดต่อ" },
    hireMe: { en: "Hire Me", th: "ต้องการจ้างฉัน" },
  },
  hero: {
    badge: {
      en: "Available · 30-Day Notice",
      th: "พร้อมทำงาน · แจ้งล่วงหน้า 30 วัน",
    },
    openToWork: {
      badge: { en: "Open to Work", th: "Open to Work" },
      title: { en: "Open to the right opportunity", th: "พร้อมรับโอกาสที่ใช่" },
      description: {
        en: "Currently open to opportunities in these roles:",
        th: "เปิดรับโอกาสใหม่ในตำแหน่งต่อไปนี้:",
      },
      roles: {
        en: ["Technical Product Owner", "System Analyst", "Solution Architect"],
        th: ["Technical Product Owner", "System Analyst", "Solution Architect"],
      },
      packageTitle: { en: "Compensation package", th: "แพ็กเกจค่าตอบแทน" },
      packageDescription: {
        en: "Package is discussed based on the role and scope. Please get in touch for details.",
        th: "รายละเอียดแพ็กเกจพิจารณาตามตำแหน่งและขอบเขตงาน กรุณาติดต่อเพื่อสอบถามเพิ่มเติม",
      },
      contact: { en: "Discuss role & package", th: "สอบถามตำแหน่งและแพ็กเกจ" },
      close: { en: "Close dialog", th: "ปิดหน้าต่าง" },
    },
    name: { en: "Ittikorn (Aof) Sopawan", th: "อิทธิกร (อ๊อฟ) โสภาวรรณ" },
    h1a: {
      en: "Your Next",
      th: "Your Next",
    },
    h1b: {
      en: "Technical Product Owner, System Analyst, Solution Architect",
      th: "Technical Product Owner, System Analyst, Solution Architect",
    },
    role: {
      en: "System Analyst & Solution Architect",
      th: "System Analyst & Solution Architect",
    },
    levelBadge: { en: "Supervisor", th: "ระดับ Supervisor" },
    desc: {
      en: "I design enterprise-scale systems that bridge business strategy with technical execution — across cloud, e-commerce, and logistics. 10 years of proven delivery at supervisor level.",
      th: "ผมออกแบบระบบระดับ Enterprise ที่เชื่อมโยง Business Strategy กับ Technical Execution ครอบคลุม Cloud, E-Commerce และ Logistics ด้วยประสบการณ์ 10 ปีในระดับ Supervisor",
    },
    strengths: {
      s1label: { en: "End-to-End Architecture", th: "End-to-End Architecture" },
      s1desc: {
        en: "From concept to production delivery",
        th: "ตั้งแต่ Concept จนถึง Production",
      },
      s2label: { en: "Cross-team Leadership", th: "Cross-team Leadership" },
      s2desc: {
        en: "Business & technical alignment",
        th: "เชื่อมโยงธุรกิจกับเทคนิค",
      },
      s3label: { en: "Pre-Sales Consulting", th: "Pre-Sales Consulting" },
      s3desc: {
        en: "Client-facing solution design",
        th: "ออกแบบ Solution ฝั่ง Client",
      },
    },
    ageLabel: { en: "Years Old", th: "อายุ" },
    languagesLabel: { en: "Languages", th: "ภาษา" },
    referencesLabel: { en: "Testimonials", th: "คำรับรอง" },
    yearsLabel: { en: "Years Experience", th: "ปีประสบการณ์" },
    companiesLabel: { en: "Companies", th: "บริษัท" },
    noticeLabel: { en: "Notice Period", th: "แจ้งล่วงหน้า" },
    specialties: { en: "Specialties", th: "ความเชี่ยวชาญ" },
    supervisor: { en: "Supervisor @ Socket9", th: "Supervisor @ Socket9" },
    cta: {
      download: { en: "Download CV", th: "ดาวน์โหลด CV" },
      projects: { en: "View My Work", th: "ดูผลงาน" },
      contact: { en: "Let's Talk", th: "คุยกัน" },
    },
  },
  experience: {
    eyebrow: { en: "Career Timeline", th: "ไทม์ไลน์อาชีพ" },
    title: { en: "Work Experience", th: "ประสบการณ์การทำงาน" },
    subtitle: {
      en: "10 years across enterprise, e-commerce, logistics, and multi-cloud platforms.",
      th: "ประสบการณ์รวม 10 ปีใน Enterprise ครอบคลุม E-Commerce, Logistics และ Multi-Cloud",
    },
    active: { en: "Active", th: "ปัจจุบัน" },
    contractor: { en: "Contractor", th: "Contractor" },
  },
  projects: {
    eyebrow: { en: "Selected Work", th: "ผลงานที่คัดสรร" },
    title: { en: "Key Projects", th: "โปรเจคสำคัญ" },
    subtitle: {
      en: "Real-world systems delivered across industries.",
      th: "ระบบจริงที่ส่งมอบครอบคลุมหลายอุตสาหกรรม",
    },
  },
  skills: {
    eyebrow: { en: "Technical Arsenal", th: "ความสามารถด้านเทคนิค" },
    title: { en: "Skills & Technologies", th: "ทักษะและเทคโนโลยี" },
    subtitle: {
      en: "A broad stack spanning enterprise architecture, cloud, backend, and AI tooling.",
      th: "ครอบคลุม Enterprise Architecture, Cloud, Backend และเครื่องมือ AI",
    },
    softEyebrow: { en: "Soft Skills", th: "Soft Skills" },
    softTitle: { en: "Core Competencies", th: "ความสามารถหลัก" },
  },
  certifications: {
    eyebrow: { en: "Credentials", th: "คุณวุฒิ" },
    title: { en: "Education & Languages", th: "การศึกษาและภาษา" },
    subtitle: {
      en: "Academic foundation and communication capabilities.",
      th: "พื้นฐานทางวิชาการและความสามารถด้านการสื่อสาร",
    },
    edLabel: { en: "Education", th: "การศึกษา" },
    langLabel: { en: "Languages", th: "ภาษา" },
    philLabel: { en: "Personal Philosophy", th: "ปรัชญาส่วนตัว" },
    quote: {
      en: "\"I believe work isn't just about doing my part — it's about making a difference that truly improves the organization.\"",
      th: '"ผมเชื่อว่างานที่ดีไม่ใช่แค่ทำหน้าที่ของตัวเอง แต่คือการสร้างความเปลี่ยนแปลงที่ทำให้องค์กรดีขึ้นอย่างแท้จริง"',
    },
    quoteBy: {
      en: "— Ittikorn (Aof) Sopawan",
      th: "— อิทธิกร (อ๊อฟ) โสภาวรรณ",
    },
  },
  careerPath: {
    eyebrow: { en: "Vision", th: "วิสัยทัศน์" },
    title: { en: "Career Path", th: "เส้นทางอาชีพ" },
    subtitle: {
      en: "A clear roadmap from Architecture Owner toward enterprise technology leadership.",
      th: "แผนที่ชัดเจนจาก Architecture Owner สู่ผู้นำด้านเทคโนโลยีระดับองค์กร",
    },
  },
  testimonials: {
    eyebrow: { en: "What They Say", th: "คำพูดจากคนรู้จัก" },
    title: { en: "Testimonials", th: "คำรับรอง" },
    subtitle: {
      en: "Feedback from managers, colleagues, and stakeholders across three companies.",
      th: "ความคิดเห็นจากผู้จัดการ เพื่อนร่วมงาน และ Stakeholder จากสามบริษัท",
    },
    references: {
      en: "5 references from 2 companies",
      th: "5 คำรับรองจาก 2 บริษัท",
    },
  },
  github: {
    eyebrow: { en: "Open Source", th: "Open Source" },
    title: { en: "GitHub Showcase", th: "ผลงานบน GitHub" },
    subtitle: {
      en: "Selected repositories and personal projects available on GitHub.",
      th: "Repository ที่คัดสรรและโปรเจคส่วนตัวบน GitHub",
    },
    viewRepo: { en: "View repo →", th: "ดู repo →" },
    liveDemo: { en: "Live Demo", th: "Live Demo" },
  },
  contact: {
    eyebrow: { en: "Get in Touch", th: "ติดต่อ" },
    title1: { en: "Let's Build Something", th: "มาสร้างสิ่งที่" },
    title2: { en: "Great Together", th: "ยิ่งใหญ่ร่วมกัน" },
    subtitle: {
      en: "Open to new projects, leadership roles, and consulting opportunities.",
      th: "พร้อมรับโปรเจคใหม่ บทบาทผู้นำ และโอกาสให้คำปรึกษา",
    },
    available: { en: "Available · ", th: "พร้อมทำงาน · " },
    notice: { en: "30 days notice", th: "แจ้งล่วงหน้า 30 วัน" },
    sendEmail: { en: "Send an Email", th: "ส่งอีเมล" },
  },
  personality: {
    eyebrow:  { en: 'Personality',           th: 'บุคลิกภาพ'         },
    title:    { en: 'INFP-T · The Mediator', th: 'INFP-T · ผู้ไกล่เกลี่ย' },
    subtitle: {
      en: 'Driven by values, empathy, and a genuine desire to make a meaningful difference.',
      th: 'ขับเคลื่อนด้วยค่านิยม ความเห็นอกเห็นใจ และความปรารถนาที่จะสร้างความแตกต่างอย่างแท้จริง',
    },
    type:     { en: 'MBTI Personality Type', th: 'ประเภทบุคลิกภาพ MBTI' },
    mediator: { en: 'The Mediator',          th: 'ผู้ไกล่เกลี่ย'       },
    desc: {
      en: 'INFPs are driven by deeply held values and a genuine desire to make a positive difference. As a Turbulent Mediator, I bring thoughtfulness, creativity, and strong empathy to every team and project — always seeking meaningful impact over surface results.',
      th: 'INFP ขับเคลื่อนด้วยค่านิยมที่ยึดมั่นและความปรารถนาที่จะสร้างความแตกต่างที่ดี ในฐานะ Turbulent Mediator ผมนำความคิดรอบคอบ ความคิดสร้างสรรค์ และ Empathy สูงมาสู่ทุกทีมและโปรเจค โดยมุ่งสู่ผลลัพธ์ที่มีความหมายเสมอ',
    },
    traits: {
      empathetic:    { en: 'Empathetic',    th: 'เข้าอกเข้าใจ'   },
      empatheticDesc:{ en: 'Deeply values the feelings and needs of those around them.', th: 'ใส่ใจความรู้สึกและความต้องการของคนรอบข้างอย่างลึกซึ้ง' },
      idealistic:    { en: 'Idealistic',    th: 'มีอุดมการณ์'     },
      idealisticDesc:{ en: 'Driven by a personal vision and desire to make things better.', th: 'ขับเคลื่อนด้วยวิสัยทัศน์และความต้องการที่จะทำให้สิ่งต่าง ๆ ดีขึ้น' },
      principled:    { en: 'Principled',    th: 'มีหลักการ'       },
      principledDesc:{ en: 'Makes decisions guided by strong personal values and ethics.', th: 'ตัดสินใจโดยยึดค่านิยมและจริยธรรมส่วนตัวที่แข็งแกร่ง' },
      collaborative: { en: 'Collaborative', th: 'ทำงานร่วมกัน'    },
      collaborativeDesc: { en: 'Thrives when working toward a shared goal with a team.', th: 'เติบโตได้ดีเมื่อทำงานมุ่งสู่เป้าหมายร่วมกับทีม' },
      adaptive:      { en: 'Adaptive',      th: 'ปรับตัวได้'      },
      adaptiveDesc:  { en: 'Open to growth, feedback, and new ways of thinking.', th: 'เปิดรับการเติบโต ความคิดเห็น และแนวทางใหม่ ๆ' },
    },
  },
  footer: {
    built: {
      en: "Built with Next.js & Tailwind CSS",
      th: "พัฒนาด้วย Next.js & Tailwind CSS",
    },
    name: { en: "Ittikorn (Aof) Sopawan", th: "อิทธิกร (อ๊อฟ) โสภาวรรณ" },
  },
};
