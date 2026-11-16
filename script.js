/* ==========================================================================
   MIRAZUL ISLAM — PORTFOLIO INTERACTIVE SCRIPT (PRODUCTION READY)
   Features:
   1. Full English / Bengali Translation Engine (with localStorage memory)
   2. Dark / Light Mode Switcher (with localStorage memory)
   3. Sticky Header & Active Section Scroll Highlight
   4. Accessible Mobile Menu Drawer
   5. Smooth Scroll Reveal Animations
   6. CV PDF Safe Availability Check
   7. Contact Form Validation & Formspree Submission
   8. Automatic Live QR Code Generator When Published Online
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ------------------------------------------------------------------------
     1. BILINGUAL DICTIONARY (ENGLISH & BENGALI)
     ------------------------------------------------------------------------ */
  const translations = {
    en: {
      "meta.title": "Mirazul Islam | Accounts, Administration & Digital Productivity",
      "a11y.skipLink": "Skip to main content",
      "brand.name": "Mirazul Islam",

      "nav.home": "Home",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.certifications": "Training",
      "nav.contact": "Contact",

      "hero.badge": "Accounts, Administration & Digital Operations",
      "hero.name": "Mirazul Islam",
      "hero.headline": "Accounts, Office Administration & Computer Operations Professional",
      "hero.intro":
        "Highly motivated and results-oriented graduate with five years of administrative leadership experience, strong practical knowledge of TallyPrime accounting, advanced MS Excel, HR & payroll, procurement documentation, and modern AI productivity tools.",
      "hero.location": "Badda, Dhaka-1212, Bangladesh",
      "hero.experienceMeta": "5 Years Administrative Leadership (2021–2025)",
      "hero.btnDownloadCv": "Download CV",
      "hero.btnContact": "Contact Me",
      "hero.btnLinkedin": "LinkedIn",
      "hero.photoPlaceholderTitle": "Mirazul Islam",
      "hero.photoPlaceholderNote": "Accounts & Administration",

      "about.eyebrow": "Career Objective & Profile",
      "about.title": "About Me",
      "about.subtitle":
        "Combining five years of administrative leadership with structured accounting, HR, procurement, and modern digital tools.",
      "about.statementHeading": "Career Objective & Overview",
      "about.p1":
        "I am a highly motivated and results-oriented graduate with strong skills in computer operations, accounting, and small business management, backed by five years of administrative leadership experience as Head Teacher at Shaplakhali Darul Huda Qawmi Madrasah in Barishal.",
      "about.p2":
        "My academic journey includes a Bachelor of Arts (BA Honours) and Kamil (Adab) — where I achieved First Class First — under Islamic Arabic University from Al-Gazzali Islamia Kamil Madrasah. I specialize in MS Excel, TallyPrime bookkeeping, HR & payroll processing, procurement workflows, and generative AI productivity tools.",
      "about.approachTitle": "Work Approach",
      "about.approachText":
        "Accurate record keeping, disciplined team supervision, transparent documentation, and continuous adoption of digital workflow improvements.",
      "about.objectiveTitle": "Career Objective",
      "about.objectiveText":
        "Seeking an entry-level or operational role in Accounts, Finance, or Administration to apply my skills, maintain high accuracy, and contribute to sustainable organizational growth.",
      "about.quickFactsTitle": "Professional Snapshot",
      "about.factRoleLabel": "Recent Position",
      "about.factRoleValue": "Head Teacher (Admin & Operations)",
      "about.factDurationLabel": "Experience",
      "about.factDurationValue": "5 Years (Jan 2021 – Dec 2025)",
      "about.factEducationLabel": "Highest Education",
      "about.factEducationValue": "BA (Honours) & Kamil — First Class First",
      "about.factTypingLabel": "Typing Speed",
      "about.factTypingValue": "English: 40 WPM | Bangla: 25 WPM",
      "about.factLocationLabel": "Address",
      "about.factLocationValue": "Badda, Dhaka-1212, Bangladesh",
      "about.factLanguagesLabel": "Languages",
      "about.factLanguagesValue": "Bengali & English",

      "experience.eyebrow": "Career History",
      "experience.title": "Professional Experience",
      "experience.subtitle":
        "Five years of institutional leadership, staff supervision, record management, and daily operations.",
      "experience.role": "Head Teacher",
      "experience.org": "Shaplakhali Darul Huda Qawmi Madrasah, Barishal",
      "experience.dates": "Jan 2021 – Dec 2025",
      "experience.duration": "5 Years",
      "experience.resp1":
        "Managed the overall academic, administrative, and daily operations of the institution efficiently.",
      "experience.resp2":
        "Supervised teaching and administrative staff, delegated responsibilities, and monitored performance.",
      "experience.resp3":
        "Oversaw student admission, class scheduling, attendance, and disciplinary management.",
      "experience.resp4":
        "Monitored teaching quality and student performance; maintained accurate and confidential records and reports.",
      "experience.resp5":
        "Coordinated communication among teachers, students, guardians, and management.",

      "education.eyebrow": "Academic Background",
      "education.title": "Education & Qualifications",
      "education.subtitle":
        "Complete verified academic credentials with board details and results.",
      "education.baTitle": "Bachelor of Arts (BA Honours)",
      "education.baInstitution": "Al-Gazzali Islamia Kamil Madrasah",
      "education.baBoard": "Board: Islamic Arabic University",
      "education.baResult": "CGPA: 3.45 out of 4.00",
      "education.kamilTitle": "Kamil (Adab)",
      "education.kamilInstitution": "Al-Gazzali Islamia Kamil Madrasah",
      "education.kamilBoard": "Board: Islamic Arabic University",
      "education.kamilResult": "Result: First Class First",
      "education.fazilTitle": "Fazil (BTIS)",
      "education.fazilInstitution": "Al-Gazzali Islamia Kamil Madrasah",
      "education.fazilBoard": "Board: Islamic Arabic University",
      "education.fazilResult": "CGPA: 3.43 out of 4.00",
      "education.alimTitle": "Alim (General)",
      "education.alimInstitution": "Balipara Union Alim Madrasah",
      "education.alimResult": "CGPA: 3.00 out of 5.00",
      "education.dakhilTitle": "Dakhil (General)",
      "education.dakhilInstitution": "Uttar Paschim Kalaran Azhar Ali Dakhil Madrasah",
      "education.dakhilResult": "CGPA: 3.90 out of 5.00",

      "skills.eyebrow": "Software & Core Tools",
      "skills.title": "Technical Skills",
      "skills.subtitle":
        "Verified computer operations, advanced spreadsheet modeling, accounting software, and typing proficiency.",
      "skills.catOffice": "Spreadsheets & MS Office",
      "skills.catAccounting": "Accounting, HR & Procurement",
      "skills.tagBookkeeping": "General Ledger, Cash & Bank Book",
      "skills.tagBrs": "BRS & Trial Balance",
      "skills.tagPayroll": "Salary Sheet & Payroll Processing",
      "skills.tagProcurement": "PR, RFQ, PCS, PO, WO & GRN",
      "skills.catDigital": "AI Tools & Typing Speed",
      "skills.typingEn": "Typing: English – 40 WPM",
      "skills.typingBn": "Typing: Bangla – 25 WPM",

      "accounting.eyebrow": "Core Financial Capabilities",
      "accounting.title": "Accounting & Finance Expertise",
      "accounting.subtitle":
        "Structured financial bookkeeping, TallyPrime operations, reconciliation, and statement preparation.",
      "accounting.item1Title": "TallyPrime & Vouchers",
      "accounting.item1Desc":
        "Computerized accounting and bookkeeping using TallyPrime, voucher management, and structured journal entries.",
      "accounting.item2Title": "Ledgers, Cash & Bank Books",
      "accounting.item2Desc":
        "Maintaining General Ledger, Cash Book, Bank Book, and accurate Accounts Receivable & Payable registers.",
      "accounting.item3Title": "Trial Balance & BRS",
      "accounting.item3Desc":
        "Preparing Trial Balances, executing Bank Reconciliation Statements (BRS), and tracking asset depreciation.",
      "accounting.item4Title": "Financial Statements & Balance Sheet",
      "accounting.item4Desc":
        "Compiling periodic financial statements and Balance Sheets with organized supporting records.",
      "accounting.item5Title": "Advanced Excel Reporting",
      "accounting.item5Desc":
        "Using IF/IFS, SUMIF/SUMIFS, COUNTIF/COUNTIFS, VLOOKUP/XLOOKUP, Pivot Tables, and Dashboards for financial analysis.",
      "accounting.item6Title": "Invoice Verification & Audit Support",
      "accounting.item6Desc":
        "Cross-checking supplier invoices against Purchase Orders (PO) and Goods Receiving Notes (GRN) for accuracy.",

      "admin.eyebrow": "Operational, HR & Procurement",
      "admin.title": "Administration & Office Management",
      "admin.subtitle":
        "End-to-end administrative operations, HR & payroll administration, and structured purchase workflows.",
      "admin.item1Title": "Institutional Administration",
      "admin.item1Desc":
        "Managing overall daily operations, admissions, class scheduling, and disciplinary procedures.",
      "admin.item2Title": "HR & Payroll Processing",
      "admin.item2Desc":
        "Salary sheet preparation, payroll processing, overtime, bonus & allowance calculation, and payslips.",
      "admin.item3Title": "Attendance & Employee Records",
      "admin.item3Desc":
        "Managing staff attendance, leave tracking, and confidential employee record archiving.",
      "admin.item4Title": "Purchase Requisition & RFQ",
      "admin.item4Desc":
        "Preparing Purchase Requisitions (PR), Requests for Quotation (RFQ), and Price Comparison Statements (PCS).",
      "admin.item5Title": "PO, Work Order & GRN",
      "admin.item5Desc":
        "Issuing Purchase Orders (PO), Work Orders (WO), and completing Goods Receiving Notes (GRN).",
      "admin.item6Title": "Staff Supervision",
      "admin.item6Desc":
        "Delegating responsibilities, monitoring performance, and supporting team productivity.",
      "admin.item7Title": "Stakeholder Coordination",
      "admin.item7Desc":
        "Coordinating clear communication across management, staff, clients, and guardians.",
      "admin.item8Title": "Bilingual Documentation",
      "admin.item8Desc":
        "Fast, accurate drafting in English (40 WPM) and Bangla (25 WPM) using MS Word & Google Docs.",

      "digital.eyebrow": "Modern Workplace Advantage",
      "digital.title": "Digital Skills & AI Productivity",
      "digital.subtitle":
        "Leveraging leading generative AI platforms, cloud spreadsheets, and smart reporting workflows to boost speed and precision.",
      "digital.card1Title": "Generative AI Assistants",
      "digital.card1Desc":
        "Practical experience with ChatGPT, Claude, Google Gemini, Microsoft Copilot, and DeepSeek for drafting, analysis, and problem-solving.",
      "digital.card2Title": "AI Research & Presentations",
      "digital.card2Desc":
        "Using Google AI Studio, NotebookLM for document synthesis, and Gamma alongside PowerPoint for crisp executive briefings.",
      "digital.card3Title": "Spreadsheet Dashboards",
      "digital.card3Desc":
        "Building dynamic dashboards and summary reports in MS Excel and Google Sheets using Pivot Tables and lookup formulas.",
      "digital.card4Title": "Workflow Automation",
      "digital.card4Desc":
        "Streamlining repetitive office tasks, structured templates, and digital checklists to save hours of manual work.",
      "digital.card5Title": "Bilingual Typing Speed",
      "digital.card5Desc":
        "Verified typing fluency of 40 WPM in English and 25 WPM in Bangla for rapid correspondence and data entry.",
      "digital.card6Title": "Digital Marketing & Design Basics",
      "digital.card6Desc":
        "Exposure to Meta Marketing and basic graphic design tools for small business communication and digital support.",

      "common.placeholderTag": "Sample Template Preview:",
      "projects.eyebrow": "Practical Work Showcase",
      "projects.title": "Projects Portfolio",
      "projects.subtitle":
        "Representative workflow frameworks aligned with my core skills in Excel, TallyPrime, Procurement, and AI Productivity.",
      "projects.notice":
        "The cards below illustrate the structured workflow formats I work with; verified sample workbooks and case files can be shared upon employer request.",
      "projects.p1Category": "Template: Excel & Payroll",
      "projects.p1Title": "[Sample Framework] Excel Salary Sheet & Accounts Dashboard",
      "projects.p1Desc":
        "Structured workbook design for automated payroll calculations and monthly expense reporting using SUMIFS, XLOOKUP, and Pivot Tables.",
      "projects.p1Feat1": "Overtime, bonus & payslip calculation structure",
      "projects.p1Feat2": "Dynamic monthly summary & reporting view",
      "projects.p2Category": "Template: Procurement & Tally",
      "projects.p2Title": "[Sample Framework] Procurement Documentation Kit (PR to GRN)",
      "projects.p2Desc":
        "Standardized end-to-end purchase documentation format covering PR, RFQ, Price Comparison Statement (PCS), PO, WO, and GRN.",
      "projects.p2Feat1": "Vendor quotation comparison layout",
      "projects.p2Feat2": "Invoice verification & TallyPrime entry flow",
      "projects.p3Category": "Template: AI & Automation",
      "projects.p3Title": "[Sample Framework] AI-Assisted Office Reporting Workflow",
      "projects.p3Desc":
        "Productivity workflow demonstrating how ChatGPT, NotebookLM, and Gamma accelerate administrative documentation and executive summaries.",
      "projects.p3Feat1": "Structured meeting & policy summary process",
      "projects.p3Feat2": "Bilingual office communication templates",
      "projects.linkPlaceholder": "Available upon employer request",

      "certifications.eyebrow": "Professional Development",
      "certifications.title": "Training & Certifications",
      "certifications.subtitle":
        "Formal skill development programs in accounting, business management, AI tools, and software applications.",
      "certifications.c1Duration": "3 Months (Aug – Oct 2026)",
      "certifications.c1Title": "Small Business Management Course",
      "certifications.c1Issuer": "As-Sunnah Skill Development Institute",
      "certifications.c1Details":
        "Key Learning Areas: Practical Accounting & Bookkeeping using TallyPrime, Purchase Procedures & Documentation, Microsoft Office Applications, Generative AI Tools, Meta Marketing, and Basic Graphic Design Tools.",
      "certifications.c2Duration": "6 Months (Jul – Dec 2018)",
      "certifications.c2Title": "Software Application Course",
      "certifications.c2Issuer": "Postal Code Academy, Rajshahi",
      "certifications.c2Details":
        "Comprehensive six-month training program covering foundational computer operations, office application software, document formatting, and spreadsheet productivity.",

      "achievements.eyebrow": "Verified Milestones",
      "achievements.title": "Achievements",
      "achievements.subtitle":
        "Academic distinction and sustained administrative leadership verified from official records.",
      "achievements.a1Title": "First Class First — Kamil (Adab)",
      "achievements.a1Desc":
        "Achieved First Class First position in Kamil (Adab) in 2024 under Islamic Arabic University from Al-Gazzali Islamia Kamil Madrasah.",
      "achievements.a2Title": "5 Years of Institutional Leadership",
      "achievements.a2Desc":
        "Successfully served as Head Teacher (Jan 2021 – Dec 2025), leading academic operations, staff supervision, and administrative reporting.",
      "achievements.a3Title": "Consistent Academic Excellence",
      "achievements.a3Desc":
        "Maintained strong academic standing across BA Honours (CGPA 3.45/4.00), Fazil BTIS (CGPA 3.43/4.00), and Dakhil (CGPA 3.90/5.00).",

      "strengths.eyebrow": "Core Soft Skills",
      "strengths.title": "Professional Strengths",
      "strengths.subtitle":
        "Interpersonal and executive qualities that drive dependable team and organizational performance.",
      "strengths.s1Title": "Problem-Solving",
      "strengths.s1Desc":
        "Analyzing administrative and operational bottlenecks calmly to implement practical fixes.",
      "strengths.s2Title": "Leadership & Team Management",
      "strengths.s2Desc":
        "Guiding staff, delegating tasks clearly, and monitoring team performance fairly.",
      "strengths.s3Title": "Professional Communication",
      "strengths.s3Desc":
        "Clear, respectful written and verbal coordination in both Bengali and English.",
      "strengths.s4Title": "Time Management",
      "strengths.s4Desc":
        "Prioritizing daily schedules, reporting deadlines, and payroll timelines reliably.",
      "strengths.s5Title": "Adaptability",
      "strengths.s5Desc":
        "Quickly mastering new accounting tools, AI workflows, and workplace processes.",
      "strengths.s6Title": "Teamwork",
      "strengths.s6Desc":
        "Collaborating smoothly across departments, management, and stakeholders.",
      "strengths.s7Title": "Decision-Making",
      "strengths.s7Desc":
        "Making balanced, accountable operational decisions backed by accurate records.",
      "strengths.s8Title": "Organizational Skills",
      "strengths.s8Desc":
        "Keeping financial vouchers, employee records, and office files systematically organized.",

      "cv.eyebrow": "Curriculum Vitae",
      "cv.title": "Download Official CV",
      "cv.desc":
        "Download or preview a complete PDF copy of my CV containing my experience, academic records, skills, training, and references.",
      "cv.formatNote": "Updated PDF Format • Ready for HR & Recruitment Review",
      "cv.btnDownload": "Download CV (PDF)",
      "cv.btnPreview": "Preview PDF",
      "cv.missingMsg":
        "CV file not found at assets/docs/Mirazul-Islam-CV.pdf.",

      "linkedin.title": "Connect on LinkedIn",
      "linkedin.desc":
        "Visit my verified LinkedIn profile for professional networking, career updates, and direct recruiter messaging.",
      "linkedin.btn": "Visit LinkedIn Profile",

      "contact.eyebrow": "Get in Touch",
      "contact.title": "Contact Me",
      "contact.subtitle":
        "Available for opportunities in Accounts, Finance, HR & Payroll, Procurement, and Office Administration.",
      "contact.infoTitle": "Direct Contact Information",
      "contact.emailLabel": "Email",
      "contact.phoneLabel": "Phone",
      "contact.locationLabel": "Address",
      "contact.locationValue": "Holding No. 99, Kajibari, Satarkul, Badda, Dhaka-1212, Bangladesh",
      "contact.referencesNote":
        "Professional References: Available upon employer request.",
      "contact.qrTitle": "Portfolio QR Code",
      "contact.qrNote":
        "Scan on mobile to open this portfolio directly (auto-activates when published online).",
      "contact.formTitle": "Send a Message",
      "contact.labelName": "Full Name",
      "contact.labelEmail": "Email Address",
      "contact.labelSubject": "Subject",
      "contact.labelMessage": "Message",
      "contact.placeholderName": "Enter your full name",
      "contact.placeholderEmail": "Enter your email address",
      "contact.placeholderSubject": "Reason for contacting",
      "contact.placeholderMessage": "Write your message here...",
      "contact.btnSubmit": "Send Message",
      "contact.btnSending": "Sending...",
      "contact.errName": "Please enter your full name (at least 2 characters).",
      "contact.errEmail": "Please enter a valid email address.",
      "contact.errSubject": "Please enter a subject (at least 3 characters).",
      "contact.errMessage": "Please write a message (at least 10 characters).",
      "contact.noEndpointInfo":
        "Validation passed! Please email mirazulislam.contact@gmail.com directly.",
      "contact.sendSuccess":
        "Thank you! Your message has been sent successfully.",
      "contact.sendFail":
        "Sorry, something went wrong while sending your message. Please try again or email directly.",

      "footer.name": "Mirazul Islam",
      "footer.role": "Accounts, Administration & Digital Productivity",
      "footer.location": "Badda, Dhaka-1212, Bangladesh",
      "footer.quickLinks": "Quick Links",
      "footer.connect": "Connect",
      "footer.backToTop": "Back to Top",
      "footer.copyright": "© 2026 Mirazul Islam. All rights reserved."
    },

    bn: {
      "meta.title": "মিরাজুল ইসলাম | অ্যাকাউন্টস, অ্যাডমিনিস্ট্রেশন ও ডিজিটাল প্রোডাক্টিভিটি",
      "a11y.skipLink": "মূল কনটেন্টে যান",
      "brand.name": "মিরাজুল ইসলাম",

      "nav.home": "হোম",
      "nav.about": "পরিচিতি",
      "nav.experience": "অভিজ্ঞতা",
      "nav.education": "শিক্ষা",
      "nav.skills": "দক্ষতা",
      "nav.projects": "প্রজেক্ট",
      "nav.certifications": "প্রশিক্ষণ",
      "nav.contact": "যোগাযোগ",

      "hero.badge": "অ্যাকাউন্টস, অ্যাডমিনিস্ট্রেশন ও ডিজিটাল অপারেশনস",
      "hero.name": "মিরাজুল ইসলাম",
      "hero.headline": "অ্যাকাউন্টস, অফিস অ্যাডমিনিস্ট্রেশন ও কম্পিউটার অপারেশনস প্রফেশনাল",
      "hero.intro":
        "পাঁচ বছরের প্রশাসনিক নেতৃত্বের অভিজ্ঞতাসম্পন্ন একজন উদ্যমী ও ফলাফলমুখী স্নাতক। ট্যালিপ্রাইম (TallyPrime) হিসাবরক্ষণ, অ্যাডভান্সড এমএস এক্সেল, এইচআর ও পে-রোল, প্রকিউরমেন্ট ডকুমেন্টেশন এবং আধুনিক এআই প্রোডাক্টিভিটি টুলসে বাস্তব দক্ষতাসম্পন্ন।",
      "hero.location": "বাড্ডা, ঢাকা-১২১২, বাংলাদেশ",
      "hero.experienceMeta": "৫ বছরের প্রশাসনিক নেতৃত্ব (২০২১–২০২৫)",
      "hero.btnDownloadCv": "সিভি ডাউনলোড",
      "hero.btnContact": "যোগাযোগ করুন",
      "hero.btnLinkedin": "লিঙ্কডইন",
      "hero.photoPlaceholderTitle": "মিরাজুল ইসলাম",
      "hero.photoPlaceholderNote": "অ্যাকাউন্টস ও অ্যাডমিনিস্ট্রেশন",

      "about.eyebrow": "ক্যারিয়ার লক্ষ্য ও পরিচিতি",
      "about.title": "আমার সম্পর্কে",
      "about.subtitle":
        "পাঁচ বছরের প্রশাসনিক নেতৃত্বের সাথে সুশৃঙ্খল হিসাবরক্ষণ, এইচআর, প্রকিউরমেন্ট ও আধুনিক ডিজিটাল টুলসের সমন্বয়।",
      "about.statementHeading": "পেশাগত লক্ষ্য ও সারসংক্ষেপ",
      "about.p1":
        "আমি কম্পিউটার অপারেশনস, হিসাববিজ্ঞান ও ক্ষুদ্র ব্যবসা ব্যবস্থাপনায় দক্ষ একজন উদ্যমী ও লক্ষ্যনিষ্ঠ স্নাতক। বরিশালের শাপলাখালী দারুল হুদা কওমি মাদ্রাসায় প্রধান শিক্ষক (Head Teacher) হিসেবে পাঁচ বছর প্রশাসনিক ও প্রাতিষ্ঠানিক পরিচালনার বাস্তব অভিজ্ঞতা রয়েছে।",
      "about.p2":
        "আমি আল-গাজ্জালী ইসলামিয়া কামিল মাদ্রাসা থেকে ইসলামী আরবি বিশ্ববিদ্যালয়ের অধীনে বিএ (অনার্স) এবং কামিল (আদব)—যেখানে আমি প্রথম শ্রেণিতে প্রথম (First Class First) স্থান অর্জন করেছি—সম্পন্ন করেছি। এমএস এক্সেল, ট্যালিপ্রাইম, এইচআর ও পে-রোল, প্রকিউরমেন্ট এবং জেনারেটিভ এআই টুলসে আমার বিশেষ দক্ষতা রয়েছে।",
      "about.approachTitle": "কাজের ধরন",
      "about.approachText":
        "নির্ভুল হিসাব ও নথিপত্র সংরক্ষণ, শৃঙ্খলাবদ্ধ টিম তত্ত্বাবধান, স্বচ্ছ ডকুমেন্টেশন এবং আধুনিক ডিজিটাল পদ্ধতির ধারাবাহিক প্রয়োগ।",
      "about.objectiveTitle": "ক্যারিয়ারের লক্ষ্য",
      "about.objectiveText":
        "অ্যাকাউন্টস, ফাইন্যান্স অথবা অ্যাডমিনিস্ট্রেশন বিভাগে একটি দায়িত্বশীল পদে কাজ করে আমার দক্ষতা প্রয়োগ করা এবং প্রতিষ্ঠানের টেকসই উন্নয়নে অবদান রাখা।",
      "about.quickFactsTitle": "একনজরে প্রোফাইল",
      "about.factRoleLabel": "সর্বশেষ পদবি",
      "about.factRoleValue": "প্রধান শিক্ষক (প্রশাসন ও পরিচালনা)",
      "about.factDurationLabel": "অভিজ্ঞতা",
      "about.factDurationValue": "৫ বছর (জানুয়ারি ২০২১ – ডিসেম্বর ২০২৫)",
      "about.factEducationLabel": "সর্বোচ্চ শিক্ষাগত যোগ্যতা",
      "about.factEducationValue": "বিএ (অনার্স) ও কামিল — প্রথম শ্রেণিতে প্রথম",
      "about.factTypingLabel": "টাইপিং গতি",
      "about.factTypingValue": "ইংরেজি: ৪০ WPM | বাংলা: ২৫ WPM",
      "about.factLocationLabel": "ঠিকানা",
      "about.factLocationValue": "বাড্ডা, ঢাকা-১২১২, বাংলাদেশ",
      "about.factLanguagesLabel": "ভাষা দক্ষতা",
      "about.factLanguagesValue": "বাংলা ও ইংরেজি",

      "experience.eyebrow": "কর্মজীবনের ইতিহাস",
      "experience.title": "পেশাগত অভিজ্ঞতা",
      "experience.subtitle":
        "পাঁচ বছরের প্রাতিষ্ঠানিক নেতৃত্ব, কর্মী তত্ত্বাবধান, নথি ব্যবস্থাপনা ও দৈনন্দিন পরিচালনা।",
      "experience.role": "প্রধান শিক্ষক (Head Teacher)",
      "experience.org": "শাপলাখালী দারুল হুদা কওমি মাদ্রাসা, বরিশাল",
      "experience.dates": "জানুয়ারি ২০২১ – ডিসেম্বর ২০২৫",
      "experience.duration": "৫ বছর",
      "experience.resp1":
        "প্রতিষ্ঠানের সার্বিক একাডেমিক, প্রশাসনিক এবং দৈনন্দিন কার্যক্রম দক্ষতার সাথে পরিচালনা করেছি।",
      "experience.resp2":
        "শিক্ষক ও প্রশাসনিক কর্মীদের তত্ত্বাবধান করেছি, দায়িত্ব বণ্টন করেছি এবং কাজের মান পর্যবেক্ষণ করেছি।",
      "experience.resp3":
        "শিক্ষার্থী ভর্তি, ক্লাস রুটিন, উপস্থিতি ও শৃঙ্খলা ব্যবস্থাপনা তদারকি করেছি।",
      "experience.resp4":
        "পাঠদানের মান ও শিক্ষার্থীদের অগ্রগতি পর্যবেক্ষণ করেছি এবং নির্ভুল ও গোপনীয় নথিপত্র ও প্রতিবেদন সংরক্ষণ করেছি।",
      "experience.resp5":
        "শিক্ষক, শিক্ষার্থী, অভিভাবক এবং পরিচালনা পর্ষদের মধ্যে সমন্বিত যোগাযোগ বজায় রেখেছি।",

      "education.eyebrow": "শিক্ষাগত পটভূমি",
      "education.title": "শিক্ষাগত যোগ্যতা",
      "education.subtitle":
        "বোর্ড ও ফলাফলসহ যাচাইকৃত পূর্ণাঙ্গ একাডেমিক সনদসমূহ।",
      "education.baTitle": "ব্যাচেলর অব আর্টস (বিএ অনার্স)",
      "education.baInstitution": "আল-গাজ্জালী ইসলামিয়া কামিল মাদ্রাসা",
      "education.baBoard": "বোর্ড: ইসলামী আরবি বিশ্ববিদ্যালয়",
      "education.baResult": "সিজিপিএ: ৩.৪৫ (৪.০০ এর মধ্যে)",
      "education.kamilTitle": "কামিল (আদব)",
      "education.kamilInstitution": "আল-গাজ্জালী ইসলামিয়া কামিল মাদ্রাসা",
      "education.kamilBoard": "বোর্ড: ইসলামী আরবি বিশ্ববিদ্যালয়",
      "education.kamilResult": "ফলাফল: প্রথম শ্রেণিতে প্রথম (First Class First)",
      "education.fazilTitle": "ফাজিল (বিটিআইএস)",
      "education.fazilInstitution": "আল-গাজ্জালী ইসলামিয়া কামিল মাদ্রাসা",
      "education.fazilBoard": "বোর্ড: ইসলামী আরবি বিশ্ববিদ্যালয়",
      "education.fazilResult": "সিজিপিএ: ৩.৪৩ (৪.০০ এর মধ্যে)",
      "education.alimTitle": "আলিম (সাধারণ)",
      "education.alimInstitution": "বালিপাড়া ইউনিয়ন আলিম মাদ্রাসা",
      "education.alimResult": "জিপিএ: ৩.০০ (৫.০০ এর মধ্যে)",
      "education.dakhilTitle": "দাখিল (সাধারণ)",
      "education.dakhilInstitution": "উত্তর পশ্চিম কালারণ আজহার আলী দাখিল মাদ্রাসা",
      "education.dakhilResult": "জিপিএ: ৩.৯০ (৫.০০ এর মধ্যে)",

      "skills.eyebrow": "সফটওয়্যার ও মূল টুলস",
      "skills.title": "কারিগরি দক্ষতা",
      "skills.subtitle":
        "কম্পিউটার অপারেশনস, অ্যাডভান্সড স্প্রেডশিট, অ্যাকাউন্টিং সফটওয়্যার ও টাইপিং দক্ষতা।",
      "skills.catOffice": "স্প্রেডশিট ও এমএস অফিস",
      "skills.catAccounting": "অ্যাকাউন্টিং, এইচআর ও প্রকিউরমেন্ট",
      "skills.tagBookkeeping": "জেনারেল লেজার, ক্যাশ ও ব্যাংক বুক",
      "skills.tagBrs": "ব্যাংক রিকনসিলিয়েশন (BRS) ও ট্রায়াল ব্যালেন্স",
      "skills.tagPayroll": "স্যালারি শিট ও পে-রোল প্রসেসিং",
      "skills.tagProcurement": "PR, RFQ, PCS, PO, WO ও GRN",
      "skills.catDigital": "এআই টুলস ও টাইপিং গতি",
      "skills.typingEn": "টাইপিং: ইংরেজি – ৪০ WPM",
      "skills.typingBn": "টাইপিং: বাংলা – ২৫ WPM",

      "accounting.eyebrow": "আর্থিক ও হিসাবরক্ষণ দক্ষতা",
      "accounting.title": "অ্যাকাউন্টিং ও ফাইন্যান্স দক্ষতা",
      "accounting.subtitle":
        "সুশৃঙ্খল বুককিপিং, ট্যালিপ্রাইম পরিচালনা, ব্যাংক সমন্বয় ও আর্থিক প্রতিবেদন প্রস্তুতি।",
      "accounting.item1Title": "ট্যালিপ্রাইম ও ভাউচার ব্যবস্থাপনা",
      "accounting.item1Desc":
        "TallyPrime ব্যবহার করে কম্পিউটারাইজড হিসাবরক্ষণ, ভাউচার এন্ট্রি ও নিয়মতান্ত্রিক জার্নাল এন্ট্রি।",
      "accounting.item2Title": "লেজার, ক্যাশ ও ব্যাংক বুক",
      "accounting.item2Desc":
        "জেনারেল লেজার, ক্যাশ বুক, ব্যাংক বুক এবং প্রাপ্য ও প্রদেয় হিসাব (Receivable & Payable) সংরক্ষণ।",
      "accounting.item3Title": "ট্রায়াল ব্যালেন্স ও বিআরএস (BRS)",
      "accounting.item3Desc":
        "রেওয়ামিল (Trial Balance) তৈরি, ব্যাংক রিকনসিলিয়েশন (BRS) এবং অবচয় (Depreciation) হিসাব।",
      "accounting.item4Title": "আর্থিক বিবরণী ও ব্যালেন্স শিট",
      "accounting.item4Desc":
        "প্রয়োজনীয় সহায়ক নথিপত্রসহ নিয়মিত আর্থিক বিবরণী ও স্থিতিপত্র (Balance Sheet) প্রস্তুতকরণ।",
      "accounting.item5Title": "অ্যাডভান্সড এক্সেল রিপোর্টিং",
      "accounting.item5Desc":
        "IF/IFS, SUMIF/SUMIFS, COUNTIF/COUNTIFS, VLOOKUP/XLOOKUP, Pivot Table এবং ড্যাশবোর্ডের মাধ্যমে আর্থিক বিশ্লেষণ।",
      "accounting.item6Title": "ইনভয়েস যাচাই ও অডিট সহায়তা",
      "accounting.item6Desc":
        "নির্ভুলতার জন্য পারচেজ অর্ডার (PO) এবং গুডস রিসিভিং নোট (GRN)-এর সাথে সরবরাহকারীর বিল মিলিয়ে যাচাই।",

      "admin.eyebrow": "অপারেশনাল, এইচআর ও ক্রয় ব্যবস্থাপনা",
      "admin.title": "অ্যাডমিনিস্ট্রেশন ও অফিস ব্যবস্থাপনা",
      "admin.subtitle":
        "পূর্ণাঙ্গ প্রশাসনিক কার্যক্রম, এইচআর ও পে-রোল পরিচালনা এবং সুশৃঙ্খল ক্রয় প্রক্রিয়া।",
      "admin.item1Title": "প্রাতিষ্ঠানিক প্রশাসন",
      "admin.item1Desc":
        "দৈনন্দিন কার্যক্রম, ভর্তি প্রক্রিয়া, ক্লাস সূচি ও শৃঙ্খলা বিধি সুষ্ঠুভাবে পরিচালনা।",
      "admin.item2Title": "এইচআর ও পে-রোল প্রসেসিং",
      "admin.item2Desc":
        "বেতন শিট তৈরি, পে-রোল প্রসেসিং, ওভারটাইম, বোনাস-ভাতা হিসাব ও পে-স্লিপ প্রস্তুতকরণ।",
      "admin.item3Title": "উপস্থিতি ও কর্মী নথি সংরক্ষণ",
      "admin.item3Desc":
        "কর্মীদের উপস্থিতি, ছুটির হিসাব এবং গোপনীয় কর্মী নথিপত্র নিরাপদে সংরক্ষণ।",
      "admin.item4Title": "ক্রয় চাহিদাপত্র (PR) ও দরপত্র (RFQ)",
      "admin.item4Desc":
        "Purchase Requisition (PR), Request for Quotation (RFQ) এবং মূল্য তুলনামূলক বিবরণী (PCS) তৈরি।",
      "admin.item5Title": "PO, ওয়ার্ক অর্ডার ও GRN",
      "admin.item5Desc":
        "Purchase Order (PO), Work Order (WO) ইস্যু করা এবং Goods Receiving Note (GRN) সম্পন্ন করা।",
      "admin.item6Title": "কর্মী তত্ত্বাবধান",
      "admin.item6Desc":
        "দায়িত্ব বণ্টন, কাজের অগ্রগতি পর্যবেক্ষণ এবং টিমের কার্যক্ষমতা বৃদ্ধিতে সহায়তা।",
      "admin.item7Title": "সমন্বয় ও যোগাযোগ",
      "admin.item7Desc":
        "ব্যবস্থাপনা পর্ষদ, কর্মী, ক্লায়েন্ট ও অভিভাবকদের সাথে স্পষ্ট যোগাযোগ রক্ষা করা।",
      "admin.item8Title": "দ্বিভাষিক ডকুমেন্টেশন",
      "admin.item8Desc":
        "এমএস ওয়ার্ড ও গুগল ডকসে ইংরেজি (৪০ WPM) ও বাংলায় (২৫ WPM) দ্রুত ও নির্ভুল নথি তৈরি।",

      "digital.eyebrow": "আধুনিক কর্মক্ষেত্রের দক্ষতা",
      "digital.title": "ডিজিটাল দক্ষতা ও এআই প্রোডাক্টিভিটি",
      "digital.subtitle":
        "শীর্ষস্থানীয় জেনারেটিভ এআই প্ল্যাটফর্ম, ক্লাউড স্প্রেডশিট ও স্মার্ট রিপোর্টিংয়ের মাধ্যমে কাজের গতি ও নির্ভুলতা বৃদ্ধি।",
      "digital.card1Title": "জেনারেটিভ এআই অ্যাসিস্ট্যান্ট",
      "digital.card1Desc":
        "অফিসিয়াল ড্রাফটিং, বিশ্লেষণ ও সমস্যা সমাধানে ChatGPT, Claude, Google Gemini, Copilot ও DeepSeek ব্যবহারের বাস্তব অভিজ্ঞতা।",
      "digital.card2Title": "এআই রিসার্চ ও প্রেজেন্টেশন",
      "digital.card2Desc":
        "ডকুমেন্ট বিশ্লেষণের জন্য Google AI Studio ও NotebookLM এবং দ্রুত প্রেজেন্টেশনের জন্য Gamma ও PowerPoint ব্যবহার।",
      "digital.card3Title": "স্প্রেডশিট ড্যাশবোর্ড",
      "digital.card3Desc":
        "MS Excel ও Google Sheets-এ Pivot Table ও লুকআপ ফর্মুলা ব্যবহার করে ডায়নামিক ড্যাশবোর্ড ও সামারি রিপোর্ট তৈরি।",
      "digital.card4Title": "ওয়ার্কফ্লো অটোমেশন",
      "digital.card4Desc":
        "দৈনন্দিন পুনরাবৃত্তিমূলক কাজ সহজ করতে স্ট্রাকচার্ড টেমপ্লেট ও ডিজিটাল চেকলিস্ট ব্যবহার।",
      "digital.card5Title": "বাংলা ও ইংরেজি টাইপিং গতি",
      "digital.card5Desc":
        "দ্রুত চিঠিপত্র ও ডেটা এন্ট্রির জন্য ইংরেজিতে ৪০ WPM এবং বাংলায় ২৫ WPM যাচাইকৃত টাইপিং গতি।",
      "digital.card6Title": "ডিজিটাল মার্কেটিং ও ডিজাইন বেসিক",
      "digital.card6Desc":
        "ক্ষুদ্র ব্যবসা যোগাযোগের জন্য Meta Marketing এবং বেসিক গ্রাফিক ডিজাইন টুলস ব্যবহারের ধারণা।",

      "common.placeholderTag": "নমুনা কাঠামো প্রদর্শনী:",
      "projects.eyebrow": "কাজের নমুনা",
      "projects.title": "প্রজেক্ট পোর্টফোলিও",
      "projects.subtitle":
        "এক্সেল, ট্যালিপ্রাইম, প্রকিউরমেন্ট ও এআই প্রোডাক্টিভিটির ওপর ভিত্তি করে সাজানো প্রতিনিধিত্বমূলক কাজের ফরম্যাট।",
      "projects.notice":
        "নিচের কার্ডগুলোতে আমার কাজের স্ট্রাকচার্ড ফরম্যাট দেখানো হয়েছে; নিয়োগদাতার অনুরোধে যাচাইকৃত স্যাম্পল ফাইল প্রদান করা যাবে।",
      "projects.p1Category": "টেমপ্লেট: এক্সেল ও পে-রোল",
      "projects.p1Title": "[নমুনা ফরম্যাট] এক্সেল স্যালারি শিট ও অ্যাকাউন্টস ড্যাশবোর্ড",
      "projects.p1Desc":
        "SUMIFS, XLOOKUP এবং Pivot Table ব্যবহার করে অটোমেটেড বেতন হিসাব ও মাসিক খরচের রিপোর্টিং কাঠামো।",
      "projects.p1Feat1": "ওভারটাইম, বোনাস ও পে-স্লিপ হিসাবের কাঠামো",
      "projects.p1Feat2": "মাসিক সারসংক্ষেপ ও ডায়নামিক রিপোর্টিং ভিউ",
      "projects.p2Category": "টেমপ্লেট: প্রকিউরমেন্ট ও ট্যালি",
      "projects.p2Title": "[নমুনা ফরম্যাট] প্রকিউরমেন্ট ডকুমেন্টেশন কিট (PR থেকে GRN)",
      "projects.p2Desc":
        "PR, RFQ, মূল্য তুলনামূলক বিবরণী (PCS), PO, WO এবং GRN-এর পূর্ণাঙ্গ ক্রয় ডকুমেন্টেশন ফরম্যাট।",
      "projects.p2Feat1": "সরবরাহকারীর কোটেশন তুলনামূলক লেআউট",
      "projects.p2Feat2": "ইনভয়েস যাচাই ও ট্যালিপ্রাইম এন্ট্রি প্রক্রিয়া",
      "projects.p3Category": "টেমপ্লেট: এআই ও অটোমেশন",
      "projects.p3Title": "[নমুনা ফরম্যাট] এআই-সহায়ক অফিস রিপোর্টিং ওয়ার্কফ্লো",
      "projects.p3Desc":
        "ChatGPT, NotebookLM এবং Gamma ব্যবহার করে প্রশাসনিক নথি ও নির্বাহী সারসংক্ষেপ দ্রুত তৈরির কর্মপদ্ধতি।",
      "projects.p3Feat1": "মিটিং ও নীতিমালা সারসংক্ষেপ তৈরির প্রক্রিয়া",
      "projects.p3Feat2": "দ্বিভাষিক অফিসিয়াল যোগাযোগের টেমপ্লেট",
      "projects.linkPlaceholder": "নিয়োগদাতার অনুরোধে প্রদানযোগ্য",

      "certifications.eyebrow": "পেশাগত উন্নয়ন",
      "certifications.title": "প্রশিক্ষণ ও সার্টিফিকেশন",
      "certifications.subtitle":
        "হিসাবরক্ষণ, ব্যবসা ব্যবস্থাপনা, এআই টুলস এবং সফটওয়্যার অ্যাপ্লিকেশনের ওপর আনুষ্ঠানিক প্রশিক্ষণ।",
      "certifications.c1Duration": "৩ মাস (আগস্ট – অক্টোবর ২০২৬)",
      "certifications.c1Title": "স্মল বিজনেস ম্যানেজমেন্ট কোর্স",
      "certifications.c1Issuer": "আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট",
      "certifications.c1Details":
        "মূল শিক্ষণীয় বিষয়: ট্যালিপ্রাইমের মাধ্যমে ব্যবহারিক হিসাবরক্ষণ ও বুককিপিং, ক্রয় প্রক্রিয়া ও ডকুমেন্টেশন, মাইক্রোসফট অফিস অ্যাপ্লিকেশন, জেনারেটিভ এআই টুলস, মেটা মার্কেটিং এবং বেসিক গ্রাফিক ডিজাইন টুলস।",
      "certifications.c2Duration": "৬ মাস (জুলাই – ডিসেম্বর ২০১৮)",
      "certifications.c2Title": "সফটওয়্যার অ্যাপ্লিকেশন কোর্স",
      "certifications.c2Issuer": "পোস্টাল কোড একাডেমি, রাজশাহী",
      "certifications.c2Details":
        "মৌলিক কম্পিউটার পরিচালনা, অফিস অ্যাপ্লিকেশন সফটওয়্যার, ডকুমেন্ট ফরম্যাটিং এবং স্প্রেডশিট দক্ষতার ওপর ছয় মাসব্যাপী পূর্ণাঙ্গ প্রশিক্ষণ।",

      "achievements.eyebrow": "যাচাইকৃত সাফল্য",
      "achievements.title": "অর্জন ও সাফল্য",
      "achievements.subtitle":
        "প্রাতিষ্ঠানিক নথির মাধ্যমে যাচাইকৃত একাডেমিক কৃতিত্ব ও প্রশাসনিক নেতৃত্ব।",
      "achievements.a1Title": "প্রথম শ্রেণিতে প্রথম — কামিল (আদব)",
      "achievements.a1Desc":
        "২০২৪ সালে ইসলামী আরবি বিশ্ববিদ্যালয়ের অধীনে আল-গাজ্জালী ইসলামিয়া কামিল মাদ্রাসা থেকে কামিল (আদব) পরীক্ষায় প্রথম শ্রেণিতে প্রথম স্থান অর্জন।",
      "achievements.a2Title": "৫ বছরের প্রাতিষ্ঠানিক নেতৃত্ব",
      "achievements.a2Desc":
        "জানুয়ারি ২০২১ থেকে ডিসেম্বর ২০২৫ পর্যন্ত প্রধান শিক্ষক হিসেবে সফলভাবে একাডেমিক পরিচালনা, কর্মী তত্ত্বাবধান ও প্রশাসনিক দায়িত্ব পালন।",
      "achievements.a3Title": "ধারাবাহিক একাডেমিক সাফল্য",
      "achievements.a3Desc":
        "বিএ অনার্স (CGPA ৩.৪৫/৪.০০), ফাজিল বিটিআইএস (CGPA ৩.৪৩/৪.০০) এবং দাখিল (GPA ৩.৯০/৫.০০)-এ ধারাবাহিক ভালো ফলাফল।",

      "strengths.eyebrow": "মূল মানবিক ও পেশাগত গুণাবলি",
      "strengths.title": "পেশাগত শক্তিসমূহ",
      "strengths.subtitle":
        "যেকোনো প্রতিষ্ঠানে নির্ভরযোগ্যভাবে দায়িত্ব পালনের সহায়ক চারিত্রিক ও কর্মদক্ষতা।",
      "strengths.s1Title": "সমস্যা সমাধান (Problem-Solving)",
      "strengths.s1Desc":
        "প্রশাসনিক ও অপারেশনাল জটিলতা ধীরস্থিরভাবে বিশ্লেষণ করে বাস্তবসম্মত সমাধান বের করা।",
      "strengths.s2Title": "নেতৃত্ব ও টিম ব্যবস্থাপনা",
      "strengths.s2Desc":
        "সহকর্মীদের নির্দেশনা দেওয়া, সঠিকভাবে কাজ ভাগ করে দেওয়া এবং কাজের মান তদারকি করা।",
      "strengths.s3Title": "পেশাদার যোগাযোগ",
      "strengths.s3Desc":
        "বাংলা ও ইংরেজি উভয় ভাষায় স্পষ্ট, মার্জিত ও কার্যকর লিখিত ও মৌখিক যোগাযোগ।",
      "strengths.s4Title": "সময় ব্যবস্থাপনা",
      "strengths.s4Desc":
        "দৈনন্দিন রুটিন, রিপোর্টিং ডেডলাইন ও পে-রোল সময়সূচি গুরুত্বের সাথে অনুসরণ করা।",
      "strengths.s5Title": "মানিয়ে নেওয়ার ক্ষমতা",
      "strengths.s5Desc":
        "নতুন অ্যাকাউন্টিং সফটওয়্যার, এআই ওয়ার্কফ্লো ও কর্মপরিবেশের সাথে দ্রুত খাপ খাওয়ানো।",
      "strengths.s6Title": "দলগত কাজ (Teamwork)",
      "strengths.s6Desc":
        "বিভিন্ন বিভাগ ও পরিচালনা পর্ষদের সাথে সহযোগিতামূলক মনোভাবে কাজ করা।",
      "strengths.s7Title": "সিদ্ধান্ত গ্রহণ",
      "strengths.s7Desc":
        "সঠিক তথ্য ও নথিপত্রের ভিত্তিতে ভারসাম্যপূর্ণ ও দায়িত্বশীল সিদ্ধান্ত গ্রহণ।",
      "strengths.s8Title": "সাংগঠনিক দক্ষতা",
      "strengths.s8Desc":
        "আর্থিক ভাউচার, কর্মী রেকর্ড এবং অফিস ফাইলপত্র সুশৃঙ্খলভাবে সাজিয়ে রাখা।",

      "cv.eyebrow": "জীবনবৃত্তান্ত (CV)",
      "cv.title": "অফিসিয়াল সিভি ডাউনলোড করুন",
      "cv.desc":
        "আমার অভিজ্ঞতা, শিক্ষাগত যোগ্যতা, দক্ষতা, প্রশিক্ষণ ও রেফারেন্সসহ সম্পূর্ণ পিডিএফ (PDF) সিভি ডাউনলোড বা প্রিভিউ করুন।",
      "cv.formatNote": "হালনাগাদকৃত পিডিএফ ফরম্যাট • এইচআর ও নিয়োগ পর্যালোচনার জন্য প্রস্তুত",
      "cv.btnDownload": "সিভি ডাউনলোড (PDF)",
      "cv.btnPreview": "পিডিএফ দেখুন",
      "cv.missingMsg": "সিভি ফাইলটি assets/docs/Mirazul-Islam-CV.pdf-এ পাওয়া যায়নি।",

      "linkedin.title": "লিঙ্কডইনে যুক্ত হোন",
      "linkedin.desc":
        "পেশাদার নেটওয়ার্কিং, ক্যারিয়ার আপডেট এবং সরাসরি যোগাযোগের জন্য আমার যাচাইকৃত লিঙ্কডইন প্রোফাইল দেখুন।",
      "linkedin.btn": "লিঙ্কডইন প্রোফাইল দেখুন",

      "contact.eyebrow": "যোগাযোগ করুন",
      "contact.title": "সরাসরি যোগাযোগ",
      "contact.subtitle":
        "অ্যাকাউন্টস, ফাইন্যান্স, এইচআর ও পে-রোল, প্রকিউরমেন্ট এবং অফিস অ্যাডমিনিস্ট্রেশন পদে কাজের সুযোগের জন্য যোগাযোগ করুন।",
      "contact.infoTitle": "যোগাযোগের তথ্য",
      "contact.emailLabel": "ইমেইল",
      "contact.phoneLabel": "ফোন",
      "contact.locationLabel": "ঠিকানা",
      "contact.locationValue": "হোল্ডিং নং ৯৯, কাজীবাড়ি, সাতারকুল, বাড্ডা, ঢাকা-১২১২, বাংলাদেশ",
      "contact.referencesNote": "পেশাদার রেফারেন্স: নিয়োগদাতার অনুরোধে প্রদানযোগ্য।",
      "contact.qrTitle": "পোর্টফোলিও QR কোড",
      "contact.qrNote":
        "মোবাইলে স্ক্যান করে সরাসরি পোর্টফোলিও দেখুন (অনলাইনে পাবলিশ হলেই স্বয়ংক্রিয়ভাবে চালু হবে)।",
      "contact.formTitle": "বার্তা পাঠান",
      "contact.labelName": "আপনার পূর্ণ নাম",
      "contact.labelEmail": "ইমেইল ঠিকানা",
      "contact.labelSubject": "বিষয়",
      "contact.labelMessage": "বার্তা",
      "contact.placeholderName": "আপনার পূর্ণ নাম লিখুন",
      "contact.placeholderEmail": "আপনার ইমেইল ঠিকানা লিখুন",
      "contact.placeholderSubject": "যোগাযোগের কারণ লিখুন",
      "contact.placeholderMessage": "এখানে আপনার বার্তাটি লিখুন...",
      "contact.btnSubmit": "বার্তা পাঠান",
      "contact.btnSending": "পাঠানো হচ্ছে...",
      "contact.errName": "অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন (কমপক্ষে ২ অক্ষর)।",
      "contact.errEmail": "অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা দিন।",
      "contact.errSubject": "অনুগ্রহ করে বিষয় লিখুন (কমপক্ষে ৩ অক্ষর)।",
      "contact.errMessage": "অনুগ্রহ করে বিস্তারিত বার্তা লিখুন (কমপক্ষে ১০ অক্ষর)।",
      "contact.noEndpointInfo":
        "ফর্ম যাচাই সফল হয়েছে! সরাসরি ইমেইল করতে পারেন: mirazulislam.contact@gmail.com।",
      "contact.sendSuccess": "ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে।",
      "contact.sendFail":
        "দুঃখিত, বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন অথবা সরাসরি ইমেইল করুন।",

      "footer.name": "মিরাজুল ইসলাম",
      "footer.role": "অ্যাকাউন্টস, অ্যাডমিনিস্ট্রেশন ও ডিজিটাল প্রোডাক্টিভিটি",
      "footer.location": "বাড্ডা, ঢাকা-১২১২, বাংলাদেশ",
      "footer.quickLinks": "গুরুত্বপূর্ণ লিংক",
      "footer.connect": "সংযুক্ত হোন",
      "footer.backToTop": "ওপরে ফিরুন",
      "footer.copyright": "© ২০২৬ মিরাজুল ইসলাম। সর্বস্বত্ব সংরক্ষিত।"
    }
  };

  /* ------------------------------------------------------------------------
     2. LANGUAGE SWITCHER ENGINE
     ------------------------------------------------------------------------ */
  const langToggleBtn = document.getElementById("lang-toggle");
  let currentLang = localStorage.getItem("portfolio_lang") || "en";

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    currentLang = lang;

    document.documentElement.setAttribute("lang", lang);
    document.title = dict["meta.title"];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    if (langToggleBtn) {
      langToggleBtn.querySelectorAll(".lang-option").forEach((option) => {
        option.classList.toggle("active", option.getAttribute("data-lang") === lang);
      });
    }

    localStorage.setItem("portfolio_lang", lang);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "bn" : "en";
      applyLanguage(nextLang);
    });
  }

  applyLanguage(currentLang);

  /* ------------------------------------------------------------------------
     3. DARK / LIGHT MODE SWITCHER
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("portfolio_theme");
  const initialTheme = savedTheme || "light";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute("aria-pressed", String(theme === "dark"));
    }
    localStorage.setItem("portfolio_theme", theme);
  }

  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  /* ------------------------------------------------------------------------
     4. MOBILE NAVIGATION DRAWER
     ------------------------------------------------------------------------ */
  const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  function setMenuOpen(isOpen) {
    if (!mobileMenuBtn || !mainNav) return;
    mainNav.classList.toggle("is-open", isOpen);
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  }

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isExpanded);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    });

    document.addEventListener("click", (event) => {
      if (
        mainNav.classList.contains("is-open") &&
        !mainNav.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. STICKY HEADER SHADOW & ACTIVE SECTION INDICATOR
     ------------------------------------------------------------------------ */
  const siteHeader = document.getElementById("site-header");
  const sections = document.querySelectorAll("main section[id]");

  function handleScrollEffects() {
    if (siteHeader) {
      siteHeader.classList.toggle("scrolled", window.scrollY > 12);
    }

    const scrollPosition = window.scrollY + 140;
    let currentSectionId = "home";

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPosition) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const targetHref = link.getAttribute("href");
      const isMatching = targetHref === `#${currentSectionId}`;
      link.classList.toggle("active", isMatching);
    });
  }

  window.addEventListener("scroll", handleScrollEffects, { passive: true });
  handleScrollEffects();

  /* ------------------------------------------------------------------------
     6. SUBTLE SCROLL REVEAL ANIMATION
     ------------------------------------------------------------------------ */
  const revealTargets = document.querySelectorAll(
    ".section-header, .card, .digital-showcase"
  );

  if ("IntersectionObserver" in window && revealTargets.length > 0) {
    document.documentElement.classList.add("reveal-init");

    revealTargets.forEach((el) => el.classList.add("reveal-item"));

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------------------
     7. CV DOWNLOAD / PREVIEW SAFETY CHECK (WHEN HOSTED ON HTTP/HTTPS)
     ------------------------------------------------------------------------ */
  const cvDownloadBtn = document.getElementById("cv-download-btn");
  const cvPreviewBtn = document.getElementById("cv-preview-btn");
  const cvStatusMessage = document.getElementById("cv-status-message");

  async function handleCvClick(event) {
    if (window.location.protocol === "file:") return;

    const targetHref = event.currentTarget.getAttribute("href");
    try {
      const response = await fetch(targetHref, { method: "HEAD" });
      if (!response.ok) {
        event.preventDefault();
        if (cvStatusMessage) {
          cvStatusMessage.textContent = translations[currentLang]["cv.missingMsg"];
          cvStatusMessage.className = "status-feedback is-info";
        }
      }
    } catch {
      // Allow default browser behavior if HEAD check is blocked
    }
  }

  if (cvDownloadBtn) cvDownloadBtn.addEventListener("click", handleCvClick);
  if (cvPreviewBtn) cvPreviewBtn.addEventListener("click", handleCvClick);

  /* ------------------------------------------------------------------------
     8. CONTACT FORM VALIDATION & LIVE FORMSPREE SUBMISSION
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const submitBtn = document.getElementById("contact-submit");

  function setFieldError(inputEl, errorEl, message) {
    if (inputEl) inputEl.classList.toggle("is-invalid", Boolean(message));
    if (errorEl) errorEl.textContent = message || "";
  }

  if (contactForm) {
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    const nameError = document.getElementById("error-name");
    const emailError = document.getElementById("error-email");
    const subjectError = document.getElementById("error-subject");
    const messageError = document.getElementById("error-message");

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const dict = translations[currentLang] || translations.en;

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const subjectVal = subjectInput.value.trim();
      const messageVal = messageInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isValid = true;

      if (nameVal.length < 2) {
        setFieldError(nameInput, nameError, dict["contact.errName"]);
        isValid = false;
      } else {
        setFieldError(nameInput, nameError, "");
      }

      if (!emailRegex.test(emailVal)) {
        setFieldError(emailInput, emailError, dict["contact.errEmail"]);
        isValid = false;
      } else {
        setFieldError(emailInput, emailError, "");
      }

      if (subjectVal.length < 3) {
        setFieldError(subjectInput, subjectError, dict["contact.errSubject"]);
        isValid = false;
      } else {
        setFieldError(subjectInput, subjectError, "");
      }

      if (messageVal.length < 10) {
        setFieldError(messageInput, messageError, dict["contact.errMessage"]);
        isValid = false;
      } else {
        setFieldError(messageInput, messageError, "");
      }

      if (!isValid) return;

      const endpoint = (contactForm.getAttribute("data-endpoint") || "").trim();

      if (!endpoint) {
        if (formStatus) {
          formStatus.textContent = dict["contact.noEndpointInfo"];
          formStatus.className = "status-feedback is-info";
        }
        return;
      }

      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.querySelector("span").textContent = dict["contact.btnSending"];
        }

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            subject: subjectVal,
            message: messageVal
          })
        });

        if (response.ok) {
          contactForm.reset();
          if (formStatus) {
            formStatus.textContent = dict["contact.sendSuccess"];
            formStatus.className = "status-feedback is-success";
          }
        } else {
          throw new Error("Submission failed");
        }
      } catch {
        if (formStatus) {
          formStatus.textContent = dict["contact.sendFail"];
          formStatus.className = "status-feedback is-error";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.querySelector("span").textContent = dict["contact.btnSubmit"];
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     9. AUTOMATIC LIVE QR CODE WHEN PUBLISHED ONLINE (HTTP/HTTPS)
     ------------------------------------------------------------------------ */
  const liveQrImg = document.getElementById("live-qr-img");
  const qrFallbackSvg = document.getElementById("qr-fallback-svg");

  if (liveQrImg && window.location.protocol.startsWith("http")) {
    const liveUrl = window.location.origin + window.location.pathname;
    liveQrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=6&data=" +
      encodeURIComponent(liveUrl);

    liveQrImg.addEventListener("load", () => {
      liveQrImg.hidden = false;
      if (qrFallbackSvg) {
        qrFallbackSvg.style.display = "none";
      }
    });
  }
});