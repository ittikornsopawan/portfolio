export type Lang = "en" | "th";

export const i18n = {
  nav: {
    toggleTheme: { en: "Toggle light or dark theme", th: "สลับโหมดสว่าง/มืด" },
    openMenu: { en: "Open menu", th: "เปิดเมนู" },
    skipToContent: { en: "Skip to content", th: "ข้ามไปที่เนื้อหา" },
    closeMenu: { en: "Close menu", th: "ปิดเมนู" },
    about: { en: "About", th: "เกี่ยวกับ" },
    experience: { en: "Experience", th: "ประสบการณ์" },
    projects: { en: "Projects", th: "โปรเจค" },
    skills: { en: "Skills", th: "ทักษะ" },
    education: { en: "Education", th: "การศึกษา" },
    careerPath: { en: "Career Path", th: "เส้นทางอาชีพ" },
    testimonials: { en: "Testimonials", th: "คำรับรอง" },
    personality: { en: 'Personality', th: 'บุคลิกภาพ' },
    hobbies: { en: 'Hobbies', th: 'งานอดิเรก' },
    github: { en: "GitHub", th: "GitHub" },
    contact: { en: "Contact", th: "ติดต่อ" },
    hireMe: { en: "Contact", th: "ติดต่อ" },
  },
  aboutQuote: {
    // [text, highlighted] pairs, from the CV's professional summary
    quote: {
      en: [
        ["", false], ["10 years in tech", true], [" — ", false], ["7 as a System Analyst", true], [" and 3 as a developer — working with a ", false],
        ["Technical Product Owner mindset", true],
        [" to bridge business needs and technical execution. Experienced in defining product requirements, shaping solutions, improving processes, and ", false],
        ["collaborating with cross-functional teams", true],
        [" to deliver enterprise products. Strong technical expertise in system design, API, database, and ", false],
        ["microservices architecture", true], [", with hands-on experience ", false],
        ["applying AI and RAG to workflows", true], [".", false],
      ],
      th: [
        ["ผมมี", false], ["ประสบการณ์สายเทคโนโลยี 10 ปี", true], [" แบ่งเป็น ", false], ["System Analyst 7 ปี", true], [" และ Developer 3 ปี ทำงานด้วย", false],
        ["มุมมองแบบ Technical Product Owner", true],
        [" เพื่อเชื่อมความต้องการทางธุรกิจเข้ากับการลงมือทำทางเทคนิค มีประสบการณ์ในการกำหนด Product Requirement ออกแบบ Solution ปรับปรุงกระบวนการ และ", false],
        ["ทำงานร่วมกับทีม Cross-functional", true],
        [" เพื่อส่งมอบ Enterprise Product มีความเชี่ยวชาญด้าน System Design, API, Database และ ", false],
        ["Microservices Architecture", true], [" พร้อมประสบการณ์จริงในการ", false],
        ["นำ AI และ RAG มาใช้กับ Workflow", true], ["ครับ", false],
      ],
    },
    motto: {
      label: { en: "My Motto", th: "คติประจำใจ" },
      quote: {
        en: "I believe work isn't just about doing my part — it's about making a difference that truly improves the organization.",
        th: "ผมเชื่อว่างานที่ดีไม่ใช่แค่ทำหน้าที่ของตัวเอง แต่คือการสร้างความเปลี่ยนแปลงที่ทำให้องค์กรดีขึ้นอย่างแท้จริง",
      },
    },
    by: { en: "Ittikorn (Aof) Sopawan", th: "อิทธิกร (อ๊อฟ) โสภาวรรณ" },
    role: { en: "Technical Product Owner · System Analyst · Solution Architect", th: "Technical Product Owner · System Analyst · Solution Architect" },
  },
  hobbies: {
    eyebrow: { en: "Beyond the Desk", th: "นอกเวลางาน" },
    title: { en: "Hobbies & Interests", th: "งานอดิเรกและความสนใจ" },
    subtitle: {
      en: "A little about me outside of work — the things that keep me curious, happy, and recharged.",
      th: "ขอแนะนำอีกมุมหนึ่งของผมนอกเวลางาน กับสิ่งเล็ก ๆ ที่ช่วยเติมพลังและความสุขในแต่ละวันครับ",
    },
    items: [
      {
        icon: "tv",
        title: { en: "Anime & Manhwa", th: "อนิเมะและมังฮวา" },
        desc: { en: "I enjoy unwinding with Japanese anime, and I'm always happy to talk about a good manhwa.", th: "ผมชอบผ่อนคลายด้วยการดูอนิเมะญี่ปุ่น และยินดีมากครับถ้าได้คุยเรื่องมังฮวาเรื่องโปรด" },
        tagsLabel: { en: "Manhwa favorites", th: "มังฮวาเรื่องโปรด" },
        tags: ["Mercenary Enrollment", "Solo Leveling", "Omniscient Reader"],
      },
      {
        icon: "sport",
        title: { en: "Football & Basketball", th: "ฟุตบอลและบาสเกตบอล" },
        desc: { en: "I'm a proud Liverpool FC supporter, and I love getting out to play football and basketball.", th: "ผมเป็นแฟนลิเวอร์พูล และชอบออกไปเล่นฟุตบอลกับบาสเกตบอลเพื่อขยับร่างกายและพบปะเพื่อน ๆ ครับ" },
        tagsLabel: { en: "Team", th: "ทีมที่เชียร์" },
        tags: ["Liverpool FC"],
      },
      {
        icon: "paw",
        title: { en: "Dogs & Cats", th: "น้องหมาและน้องแมว" },
        desc: { en: "I'm a dog lover at heart, and I have a soft spot for cats as well.", th: "ผมรักน้องหมาเป็นพิเศษ และก็เอ็นดูน้องแมวไม่แพ้กันครับ" },
      },
      {
        icon: "food",
        title: { en: "Food & Drink", th: "อาหารและเครื่องดื่ม" },
        desc: { en: "I enjoy discovering good food. I don't drink beer or alcohol, but I'm always up for a nice meal together.", th: "ผมชอบตามหาร้านอร่อย ๆ แม้จะไม่ดื่มเบียร์หรือแอลกอฮอล์ แต่ยินดีร่วมโต๊ะทานข้าวด้วยกันเสมอครับ" },
      },
      {
        icon: "heart",
        title: { en: "Family", th: "ครอบครัว" },
        desc: {
          en: "My family means a great deal to me. I cherish the time we spend together and the moments we share.",
          th: "ครอบครัวมีความหมายกับผมมากครับ ผมให้ความสำคัญกับเวลาที่ได้อยู่ด้วยกัน และช่วงเวลาดี ๆ ที่ได้แบ่งปันร่วมกัน",
        },
        highlight: true,
      },
      {
        icon: "game",
        title: { en: "Gamer Life", th: "ชีวิตเกมเมอร์" },
        desc: {
          en: "I love playing games — it's my favorite way to unwind, and I enjoy the strategy and teamwork that a good game brings.",
          th: "ผมชอบเล่นเกมมาก เป็นวิธีพักผ่อนที่ชอบที่สุด และสนุกกับการวางแผนและการเล่นเป็นทีมที่เกมดี ๆ มอบให้ครับ",
        },
        highlight: true,
      },
    ],
  },
  scrollHint: { en: "Scroll for more", th: "เลื่อนดูต่อ" },
  scrollToTop: { en: "Back to top", th: "กลับขึ้นด้านบน" },
  musicPlayer: {
    play: { en: "Play background music", th: "เล่นเพลงพื้นหลัง" },
    pause: { en: "Pause background music", th: "หยุดเพลงพื้นหลัง" },
    autoplayBlocked: { en: "Click to start music", th: "คลิกเพื่อเริ่มเล่นเพลง" },
    promptTitle: { en: "This site has background music", th: "เว็บนี้มีเพลงประกอบ" },
    promptBody: { en: "Your browser paused it. Turn it on for the full experience?", th: "เบราว์เซอร์หยุดเสียงไว้ เปิดเพลงฟังระหว่างดูเว็บไหม?" },
    promptAccept: { en: "Play music", th: "เปิดเพลง" },
    promptDismiss: { en: "Not now", th: "ไว้ก่อน" },
  },
  hero: {
    badge: {
      en: "Actively Seeking Now",
      th: "กำลังหางานอย่างจริงจัง",
    },
    openToWork: {
      badge: { en: "Open to Work", th: "Open to Work" },
      viewDetails: { en: "View Roles", th: "ดูตำแหน่งงาน" },
      title: { en: "Open to the right opportunity", th: "พร้อมรับโอกาสที่ใช่" },
      pitch: {
        en: "A system analyst and solution architect who turns business goals into systems that ship — 10 years in tech (7 as a System Analyst, 3 as a developer) across enterprise, e-commerce, logistics and cloud.",
        th: "System Analyst และ Solution Architect ที่เปลี่ยนเป้าหมายธุรกิจให้เป็นระบบที่ใช้งานได้จริง ประสบการณ์ 10 ปี (System Analyst 7 ปี และ Developer 3 ปี) ใน Enterprise, E-Commerce, Logistics และ Cloud",
      },
      rolesTitle: { en: "Roles I'm looking for", th: "ตำแหน่งที่มองหา" },
      cultureTitle: { en: "We're a great match if you…", th: "เราเหมาะกันถ้าคุณ…" },
      culture: [
        {
          en: "Value people who stay focused and deliver under pressure.",
          th: "ให้คุณค่ากับคนที่ทำงานภายใต้แรงกดดันได้ โดยยังโฟกัสกับการส่งมอบงาน",
        },
        {
          en: "Encourage ideas beyond anyone's formal role when they can improve the work.",
          th: "เปิดพื้นที่ให้ทุกคนเสนอไอเดียเกินขอบเขตหน้าที่ หากช่วยพัฒนางาน",
        },
      ],
      lookingFor: { en: "Looking for", th: "กำลังมองหา" },
      celebrate: { en: "🎉 Officially open to work · 30-day notice", th: "🎉 เปิดหางานแล้วจ้า · แจ้งล่วงหน้า 30 วัน" },
      roles: [
        {
          name: "Technical Product Owner",
          tagline: {
            en: "Turn business strategy into a product roadmap teams can actually ship",
            th: "เปลี่ยน Business Strategy ให้เป็น Product Roadmap ที่ทีมส่งมอบได้จริง",
          },
          why: {
            en: "I've sat on both sides — writing specs as an SA and running Scrum for delivery teams — so the roadmap I own is one engineering can actually build.",
            th: "ผมเคยอยู่ทั้งฝั่งเขียน Spec ในฐานะ SA และฝั่งนำ Scrum ให้ทีม Delivery เลยวาง Roadmap ที่ทีม Engineering ทำได้จริง ไม่ใช่แค่สวยบนกระดาษ",
          },
          metrics: [
            { value: "Scrum", label: { en: "Led full ceremonies at True (X10)", th: "นำ Scrum ครบทุก Ceremony ที่ True (X10)" } },
            { value: ".NET", label: { en: "Legacy modernization at Buzzebees", th: "Modernize ระบบ Legacy ที่ Buzzebees" } },
            { value: "10 yrs", label: { en: "From developer to supervisor", th: "จาก Developer สู่ Supervisor" } },
          ],
          evidence: [
            { company: "True Corporation (X10)", text: { en: "Delivered a contract-renewal product with personalized promotions; ran grooming, planning, sprint and review across business, dev and QA.", th: "ส่งมอบระบบต่ออายุสัญญาพร้อมโปรโมชันเฉพาะบุคคล นำ Grooming, Planning, Sprint และ Review ร่วมกับ Business, Dev และ QA" } },
            { company: "Buzzebees", text: { en: "Optimized core workflows and upgraded legacy .NET Framework to .NET for an e-commerce platform.", th: "ปรับ Core Workflow และอัปเกรด .NET Framework เป็น .NET ให้แพลตฟอร์ม E-Commerce" } },
            { company: "Socket9", text: { en: "Shape key features with clients in pre-sales, then carry them through to delivery.", th: "กำหนด Key Features ร่วมกับลูกค้าตั้งแต่ Pre-sales และพาไปจนถึง Delivery" } },
          ],
          toolkit: ["Scrum", "Backlog Prioritization", "User Story", "Roadmap", "Stakeholder Alignment", "API Product"],
          plan: [
            { en: "Week 1–4: meet stakeholders, map the current product, backlog and pain points", th: "สัปดาห์ 1–4: คุย Stakeholder ทำความเข้าใจ Product, Backlog และ Pain Point ปัจจุบัน" },
            { en: "Month 2: agree on a roadmap with clear outcomes and a groomed backlog", th: "เดือนที่ 2: วาง Roadmap ที่มี Outcome ชัดเจน และ Backlog ที่พร้อม Sprint" },
            { en: "Month 3: ship the first roadmap milestone and set a delivery rhythm", th: "เดือนที่ 3: ส่งมอบ Milestone แรก และตั้งจังหวะการ Delivery ของทีม" },
          ],
          focus: [
            { title: "Own Product Roadmap", desc: { en: "Set direction and prioritize the backlog with the business", th: "กำหนดทิศทางและจัด Priority ของ Backlog ร่วมกับฝั่ง Business" } },
            { title: "Lead Dev Squad", desc: { en: "Run Scrum/Agile for the squad, from sprint planning to release", th: "นำทีม Developer ด้วย Scrum/Agile ตั้งแต่ Sprint Planning ถึง Release" } },
            { title: "Digital Transformation", desc: { en: "Move the organization from legacy systems to a modern platform", th: "พาองค์กรจากระบบ Legacy ไปสู่ Modern Platform" } },
            { title: "Data/API Product", desc: { en: "Own API platforms, data platforms and integration hubs", th: "ดูแล Product ประเภท API Platform, Data Platform และ Integration Hub" } },
          ],
        },
        {
          name: "System Analyst",
          tagline: {
            en: "Set the SA standard for the AI era and turn requirements into specs teams trust",
            th: "วาง Standard ของงาน SA ให้ทันยุค AI และเปลี่ยน Requirement ให้เป็น Spec ที่ทีมเชื่อมั่น",
          },
          why: {
            en: "7 years as a System Analyst turning messy requirements into specs, APIs and data models — with measurable results, not just documents.",
            th: "7 ปีในบทบาท System Analyst ที่เปลี่ยน Requirement ที่ยุ่งเหยิงให้เป็น Spec, API และ Data Model ที่ชัดเจน พร้อมผลลัพธ์ที่วัดได้ ไม่ใช่แค่เอกสาร",
          },
          metrics: [
            { value: "90%+", label: { en: "Billing data accuracy (from near-zero)", th: "ความแม่นยำข้อมูล Billing (จากเกือบศูนย์)" } },
            { value: "−30%", label: { en: "Integration errors after API standards", th: "Integration Error หลังวาง API Standard" } },
            { value: "Supervisor", label: { en: "Leading SA work at Socket9", th: "ดูแลงาน SA ที่ Socket9" } },
          ],
          evidence: [
            { company: "True Internet Data Center", text: { en: "Redesigned billing workflows and validation logic across AWS, GCP and Huawei, lifting accuracy to 90%+.", th: "ออกแบบ Workflow และ Validation Logic ของ Billing ข้าม AWS, GCP และ Huawei ใหม่ จนแม่นยำกว่า 90%" } },
            { company: "Buzzebees", text: { en: "Standardized integration interfaces and APIs, cutting integration errors by 30%+.", th: "วางมาตรฐาน Integration Interface และ API ลด Integration Error ได้มากกว่า 30%" } },
            { company: "Socket9", text: { en: "Review technical solutions and keep documentation and knowledge bases that onboard new team members fast.", th: "Review Technical Solution และดูแล Documentation/Knowledge Base ที่ช่วย Onboard ทีมได้เร็ว" } },
          ],
          toolkit: ["Use Case", "Sequence Diagram", "ERD / Data Model", "API Spec (OpenAPI)", "BPMN", "AI-assisted Analysis"],
          plan: [
            { en: "Week 1–4: learn the domain, review existing specs and find the gaps", th: "สัปดาห์ 1–4: เรียนรู้ Domain, Review Spec เดิม และหา Gap" },
            { en: "Month 2: set SA templates and an AI-assisted workflow the team can reuse", th: "เดือนที่ 2: วาง Template และ AI-assisted Workflow ของ SA ที่ทีมใช้ซ้ำได้" },
            { en: "Month 3: measurably faster spec turnaround with less rework", th: "เดือนที่ 3: ทำ Spec ได้เร็วขึ้นและลด Rework อย่างวัดผลได้" },
          ],
          focus: [
            { title: "SA Standards for the AI Era", desc: { en: "Define SA standards and workflows that use AI to boost productivity", th: "วาง Standard และ Workflow ของ SA ที่ใช้ AI ช่วยเพิ่ม Productivity" } },
            { title: "Requirement → Spec", desc: { en: "Gather requirements into specs, flows, use cases and data models", th: "เก็บ Requirement แล้วเขียน Spec, Flow, Use Case และ Data Model" } },
            { title: "Integration Design", desc: { en: "Design APIs and integrations between systems, including third parties", th: "ออกแบบ API และ Integration ระหว่างระบบ รวมถึง Third-party" } },
            { title: "Lead SA Team", desc: { en: "Lead a team of analysts and review specs at supervisor level", th: "ดูแลทีม SA และ Review Spec ในระดับ Supervisor" } },
            { title: "Process Improvement", desc: { en: "Analyze and redesign business processes", th: "วิเคราะห์และออกแบบ Business Process ใหม่" } },
          ],
        },
        {
          name: "Solution Architect",
          tagline: {
            en: "Find new solutions that move the organization forward, from concept to production",
            th: "หา Solution ใหม่ๆ ที่ช่วยพัฒนาองค์กร ตั้งแต่ Concept จนถึง Production",
          },
          why: {
            en: "I design architecture with the delivery team in mind — from multi-cloud data pipelines to DDD microservices — and I can sell it to clients too.",
            th: "ผมออกแบบ Architecture โดยคิดถึงทีมที่ต้อง Delivery จริง ตั้งแต่ Multi-cloud Data Pipeline ไปจนถึง DDD Microservices และนำเสนอให้ลูกค้าเข้าใจได้",
          },
          metrics: [
            { value: "3 Clouds", label: { en: "AWS · GCP · Huawei pipelines", th: "Pipeline บน AWS · GCP · Huawei" } },
            { value: "DDD", label: { en: "Microservices at True (X10)", th: "Microservices ที่ True (X10)" } },
            { value: "Pre-sales", label: { en: "Client-facing solution design", th: "ออกแบบ Solution ร่วมกับลูกค้า" } },
          ],
          evidence: [
            { company: "True Internet Data Center", text: { en: "Designed multi-cloud ELT pipelines for unified billing insights across AWS, GCP and Huawei.", th: "ออกแบบ Multi-cloud ELT Pipeline เพื่อรวม Billing Insight จาก AWS, GCP และ Huawei" } },
            { company: "Socket9", text: { en: "Lead system design for manufacturing and logistics — factory operations to distribution — and present solutions in pre-sales.", th: "นำการออกแบบระบบ Manufacturing และ Logistics ตั้งแต่ Factory Operation ถึง Distribution และนำเสนอ Solution ในงาน Pre-sales" } },
            { company: "True Corporation (X10)", text: { en: "Defined API ownership and data mapping across services using DDD and microservices.", th: "กำหนด API Ownership และ Data Mapping ระหว่าง Service ด้วย DDD และ Microservices" } },
          ],
          toolkit: ["DDD", "Event-Driven", "Microservices", "Cloud Architecture", ".NET", "C4 Model"],
          plan: [
            { en: "Week 1–4: map the current architecture, risks and tech debt", th: "สัปดาห์ 1–4: ทำ Map ของ Architecture ปัจจุบัน ความเสี่ยง และ Tech Debt" },
            { en: "Month 2: propose a target architecture and a phased roadmap", th: "เดือนที่ 2: เสนอ Target Architecture และ Roadmap แบบเป็น Phase" },
            { en: "Month 3: prove it with a first slice in production", th: "เดือนที่ 3: พิสูจน์ด้วย Slice แรกที่ขึ้น Production จริง" },
          ],
          focus: [
            { title: "Explore New Solutions", desc: { en: "Research and evaluate new solutions and technologies for the organization", th: "ค้นหาและประเมิน Solution/Technology ใหม่ๆ เพื่อพัฒนาองค์กร" } },
            { title: "Microservices / EDA / DDD", desc: { en: "Design microservices and event-driven systems with DDD", th: "ออกแบบระบบแบบ Microservices และ Event-Driven ด้วย DDD" } },
            { title: "Pre-sales Solution", desc: { en: "Shape solutions with clients and present proposals", th: "ออกแบบ Solution ร่วมกับลูกค้าและนำเสนอ Proposal" } },
          ],
        },
      ],
      employmentTitle: { en: "Employment type", th: "ประเภทการจ้าง" },
      employment: [
        { title: "Full-time", desc: { en: "Permanent role", th: "พนักงานประจำ" } },
      ],
      tabLabels: {
        focus: { en: "What I'll focus on", th: "สิ่งที่ผมจะทำให้" },
        proof: { en: "Proof from real work", th: "ผลงานจริงที่พิสูจน์แล้ว" },
        toolkit: { en: "Toolkit", th: "เครื่องมือที่ใช้" },
        plan: { en: "My first 90 days", th: "90 วันแรกของผม" },
      },
      conditionsTitle: { en: "Work style", th: "รูปแบบการทำงาน" },
      conditions: [
        { title: "Hybrid", desc: { en: "e.g. 2 days office / 3 days online", th: "เช่น เข้า Office 2 วัน / Online 3 วัน" } },
        { title: "Remote", desc: { en: "Open to fully remote", th: "ทำงาน Remote ได้" } },
      ],
      fitTitle: { en: "Where I can add value", th: "บริบทที่ผมช่วยสร้างคุณค่าได้" },
      fit: {
        en: [
          "Are building or modernizing an enterprise platform",
          "Need someone who speaks both business and tech",
          "Work in complex domains like e-commerce, logistics or cloud",
          "Are moving toward DDD, event-driven or microservices",
          "Want a hands-on lead for client-facing solution design",
        ],
        th: [
          "กำลังสร้างหรือปรับปรุงแพลตฟอร์มระดับ Enterprise",
          "ต้องการคนที่สื่อสารได้ทั้งฝั่งธุรกิจและเทคนิค",
          "ทำงานในโดเมนซับซ้อน เช่น E-Commerce, Logistics หรือ Cloud",
          "กำลังขยับไปสู่ DDD, Event-Driven หรือ Microservices",
          "ต้องการคนนำออกแบบ Solution ที่คุยกับลูกค้าได้",
        ],
      },
      facts: {
        years: { en: "Years experience", th: "ปีประสบการณ์" },
        companies: { en: "Companies", th: "บริษัท" },
        level: { en: "Current level", th: "ระดับปัจจุบัน" },
        levelValue: { en: "Supervisor", th: "Supervisor" },
        notice: { en: "Notice period", th: "แจ้งล่วงหน้า" },
        noticeValue: { en: "30 days", th: "30 วัน" },
      },
      location: { en: "Based in Thailand", th: "อยู่ที่ประเทศไทย" },
      packageNote: {
        en: "Package discussed based on role & scope",
        th: "แพ็กเกจพิจารณาตามตำแหน่งและขอบเขตงาน",
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
    desc: {
      en: "I design enterprise-scale systems that bridge business strategy with technical execution — across cloud, e-commerce, and logistics. 10 years in tech — 7 as a System Analyst, 3 as a developer — now leading at supervisor level.",
      th: "ผมออกแบบระบบระดับ Enterprise ที่เชื่อมโยง Business Strategy กับ Technical Execution ครอบคลุม Cloud, E-Commerce และ Logistics ด้วยประสบการณ์ 10 ปี (System Analyst 7 ปี และ Developer 3 ปี) ปัจจุบันทำงานในระดับ Supervisor",
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
    resumePreview: {
      title: { en: "Resume preview", th: "ตัวอย่างเรซูเม่" },
      openInNewTab: { en: "Open PDF in a new tab", th: "เปิด PDF ในแท็บใหม่" },
    },
  },
  experience: {
    eyebrow: { en: "Career Timeline", th: "ไทม์ไลน์อาชีพ" },
    title: { en: "Work Experience", th: "ประสบการณ์การทำงาน" },
    active: { en: "Active", th: "ปัจจุบัน" },
    keyHighlight: { en: "Key contribution", th: "ผลงานเด่น" },
    contractor: { en: "Contractor", th: "Contractor" },
    fullTime: { en: "Full-time", th: "พนักงานประจำ" },
    showMore: { en: "Show {n} more", th: "ดูเพิ่มอีก {n} ข้อ" },
    showLess: { en: "Show less", th: "ย่อลง" },
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
    groups: {
      skills: {
        title: { en: "Skills", th: "Skills" },
        desc: { en: "How I design and shape systems", th: "แนวคิดและวิธีที่ผมใช้ออกแบบระบบ" },
      },
      stacks: {
        title: { en: "Stacks", th: "Stacks" },
        desc: { en: "Languages, frameworks and databases I build with", th: "ภาษา Framework และ Database ที่ผมใช้พัฒนา" },
      },
      technologies: {
        title: { en: "Technologies", th: "Technologies" },
        desc: { en: "Cloud, DevOps and the tools around delivery", th: "Cloud, DevOps และเครื่องมือที่ใช้ส่งมอบงาน" },
      },
      ai: {
        title: { en: "AI", th: "AI" },
        desc: { en: "AI tools and practices in my daily workflow", th: "เครื่องมือและแนวทาง AI ที่ผมใช้ในงานทุกวัน" },
      },
    },
    core: { en: "Core", th: "ถนัดที่สุด" },
    softTitle: { en: "Soft Skills", th: "Soft Skills" },
  },
  certifications: {
    eyebrow: { en: "Credentials", th: "คุณวุฒิ" },
    title: { en: "Education & Languages", th: "การศึกษาและภาษา" },
    degreeLevel: { en: "Undergraduate Degree", th: "ปริญญาตรี" },
    subtitle: {
      en: "Academic foundation and communication capabilities.",
      th: "พื้นฐานทางวิชาการและความสามารถด้านการสื่อสาร",
    },
    edLabel: { en: "Education", th: "การศึกษา" },
    langLabel: { en: "Languages", th: "ภาษา" },
    nextLabel: { en: "Certification", th: "Certification" },
    nextTitle: { en: "AI Certification", th: "AI Certification" },
    nextStatus: { en: "Next up", th: "เป้าหมายถัดไป" },
    nextDesc: {
      en: "Planned next, to back the AI work I already do every day.",
      th: "วางแผนสอบเป็นลำดับถัดไป เพื่อรับรองงาน AI ที่ผมใช้อยู่ทุกวัน",
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
    public: { en: "Public", th: "สาธารณะ" },
  },
  contact: {
    eyebrow: { en: "Get in Touch", th: "ติดต่อ" },
    title1: { en: "Let's Build Something", th: "มาสร้างสิ่งที่" },
    title2: { en: "Great Together", th: "ยิ่งใหญ่ร่วมกัน" },
    subtitle: {
      en: "Open to new projects, leadership roles, and consulting opportunities.",
      th: "พร้อมรับโปรเจคใหม่ บทบาทผู้นำ และโอกาสให้คำปรึกษา",
    },
    notice: { en: "30 days notice", th: "แจ้งล่วงหน้า 30 วัน" },
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
    name: { en: "Ittikorn (Aof) Sopawan", th: "อิทธิกร (อ๊อฟ) โสภาวรรณ" },
  },
};
