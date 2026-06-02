import type { ServiceDetail } from "@types";

export const servicesDetail: ServiceDetail[] = [
  {
    id: "accounting",
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    tagline: "Accurate Records, Smarter Decisions",
    description:
      "Maintain accurate, reliable financial records that support compliance and smarter business decisions.",
    icon: "BookOpen",
    heroDescription:
      "Agastya Accounting ensures your financial records are precise, organized, and up-to-date. Our expert bookkeeping and accounting services give you clear insights into your business performance. With us, you can focus on growth while we handle the numbers with care and accuracy.",
    subServices: [
      {
        title: "Day-to-Day Bookkeeping",
        description:
          "We ensure every financial transaction is recorded with precision, keeping your books accurate and up to date at all times — income, expenses, receipts, and payments.",
      },
      {
        title: "Receivables & Payables Management",
        description:
          "Monitoring customer invoices and supplier payments to maintain healthy cash flow. We track outstanding dues and ensure timely collections and payments.",
      },
      {
        title: "Ledger & Journal Maintenance",
        description:
          "Our team maintains systematic records of all financial transactions, offering clear visibility into your business finances with properly maintained ledgers and journals.",
      },
      {
        title: "Bank Reconciliation",
        description:
          "By reconciling your bank statements with your accounts, we help prevent errors, identify discrepancies, and ensure complete financial accuracy.",
      },
      {
        title: "Financial Statement Preparation",
        description:
          "We prepare key financial reports including Profit & Loss statements, Balance Sheets, and Cash Flow statements to support informed decision-making.",
      },
      {
        title: "Finalization of Accounts",
        description:
          "We finalize your accounts with accuracy, ensuring full compliance and readiness for audits, tax filings, investor presentations, or loan applications.",
      },
    ],
    whyUs: {
      heading: "Why Choose Agastya Accounting for Bookkeeping?",
      body:
        "Outsourcing your bookkeeping to Agastya Accounting means more than just accurate numbers — it's about gaining peace of mind, saving costs, and unlocking expert guidance. With our skilled professionals, modern tools, and organized record-keeping, we ensure your financial data is always precise, up to date, and ready for decision-making.",
      bullets: [
        "Certified accounting professionals with 10+ years of experience",
        "Support for Tally Prime, QuickBooks, Zoho Books & more",
        "Monthly MIS reports for clear business visibility",
        "100% data confidentiality and security",
        "Flexible monthly and annual engagement plans",
        "Always audit and tax-filing ready",
      ],
    },
    metaDescription:
      "Professional accounting and bookkeeping services in Mehsana, Gujarat. Agastya Accounting handles day-to-day bookkeeping, financial statements, bank reconciliation, and account finalization for businesses of all sizes.",
  },
  {
    id: "payroll",
    slug: "payroll-management",
    title: "Payroll Management",
    tagline: "Precision Payroll, Trusted Support",
    description:
      "Ensure timely salary processing, accurate deductions, and complete statutory compliance.",
    icon: "Users",
    heroDescription:
      "Agastya Accounting handles your payroll with accuracy and efficiency, ensuring every employee is paid on time. Our team manages compliance, deductions, and records seamlessly. Focus on growing your business while we take care of payroll effortlessly.",
    subServices: [
      {
        title: "Payroll Processing",
        description:
          "We handle end-to-end payroll processing with accuracy and efficiency. From salary calculations to deductions, we ensure employees are paid correctly and on time, every month.",
      },
      {
        title: "Employee Onboarding & Exit Payroll",
        description:
          "We manage payroll from joining to full and final settlement, ensuring a seamless employee experience and keeping your payroll compliant with statutory regulations.",
      },
      {
        title: "Statutory Compliance Management",
        description:
          "Our team ensures your payroll aligns seamlessly with all statutory regulations — PF, ESI, Professional Tax, Gratuity, and Labour Welfare Fund contributions.",
      },
      {
        title: "Payroll Tax Filing",
        description:
          "We take care of all payroll-related tax filings with accuracy and timeliness — TDS computation, challan deposits, quarterly returns, and Form 24Q filing.",
      },
      {
        title: "Payslip Generation & Distribution",
        description:
          "We provide secure and timely payslip generation for every employee. Easy, password-protected distribution ensures transparency and trust across your workforce.",
      },
      {
        title: "Form 16 & Year-End Compliance",
        description:
          "We prepare and issue Form 16 to all employees, handle salary certificates, and manage all year-end payroll compliance requirements efficiently.",
      },
    ],
    whyUs: {
      heading: "Why Choose Agastya Accounting for Payroll?",
      body:
        "Partnering with Agastya Accounting for payroll means streamlined operations, accuracy, and peace of mind. From initial setup to final salary disbursement, our specialists manage every step — ensuring timely payments, regulatory compliance, and optimized costs.",
      bullets: [
        "100% accurate salary processing with zero delays",
        "Complete PF, ESI, PT, and TDS compliance",
        "Secure handling of sensitive employee data",
        "Scalable service that grows with your headcount",
        "Dedicated payroll manager for your account",
        "Fully compliant with latest Labour Code regulations",
      ],
    },
    metaDescription:
      "End-to-end payroll management services in Mehsana, Gujarat. Agastya Accounting handles salary processing, PF, ESI, TDS, payslips, Form 16, and full payroll compliance for businesses of all sizes.",
  },
  {
    id: "tax",
    slug: "tax-services",
    title: "Tax Services",
    tagline: "Smart Tax, Seamless Compliance",
    description:
      "From planning to filing, comprehensive tax solutions for individuals and businesses.",
    icon: "FileText",
    heroDescription:
      "Agastya Accounting simplifies tax management with precise filings and expert guidance tailored to your business. Our team ensures full compliance while maximizing available benefits and deductions. With us, you gain confidence, clarity, and a stress-free tax experience.",
    subServices: [
      {
        title: "Income Tax Filing — All Entities",
        description:
          "We file ITR for individuals, HUFs, partnership firms, LLPs, and companies across all ITR forms. Accurate income computation and timely filing for every client.",
      },
      {
        title: "Tax Audit & Representation",
        description:
          "Statutory tax audits under Section 44AB, along with expert representation before Income Tax authorities for assessments, notices, and appeals.",
      },
      {
        title: "Advance Tax Planning",
        description:
          "We calculate and plan advance tax installments to avoid interest under Sections 234B and 234C, optimizing your cash flow throughout the year.",
      },
      {
        title: "TDS / TCS Returns",
        description:
          "Complete TDS/TCS compliance including challan deposits, quarterly return filing (24Q, 26Q, 27Q), and correction statements. Timely and accurate every quarter.",
      },
      {
        title: "NRI Tax Services",
        description:
          "Specialized services for Non-Resident Indians — ITR filing, DTAA advisory, repatriation assistance, and capital gains tax on property transactions.",
      },
      {
        title: "Tax Planning & Advisory",
        description:
          "Proactive tax planning to minimize your legal tax liability through available deductions, exemptions, and investment strategies — fully compliant with Indian tax laws.",
      },
    ],
    whyUs: {
      heading: "Why Choose Agastya Accounting for Tax Services?",
      body:
        "At Agastya Accounting, outsourcing tax preparation is not just about filing returns — it's about simplifying your financial operations with dependable support. Our professionals deliver solutions designed to save time, reduce errors, and ease the pressure on your team.",
      bullets: [
        "Expert CAs with deep income tax and indirect tax knowledge",
        "Proactive advisory to minimize tax burden legally",
        "100% accurate and timely return filing",
        "Representation before IT Department if required",
        "Coverage for all entity types — individual to corporate",
        "Competitive and transparent fee structure",
      ],
    },
    metaDescription:
      "Professional tax services in Mehsana, Gujarat. Agastya Accounting offers income tax filing, tax audit, TDS returns, advance tax planning, and NRI tax services for individuals and businesses.",
  },
  {
    id: "gst",
    slug: "gst-services",
    title: "GST Services",
    tagline: "GST Made Simple & Accurate",
    description:
      "Complete GST support from registration to returns, audits, and refunds.",
    icon: "Receipt",
    heroDescription:
      "Agastya Accounting streamlines your GST compliance with precise filings and expert advisory tailored to your business needs. Our team ensures timely submissions while minimizing errors and avoiding penalties. Partner with us for a smooth, hassle-free GST experience that keeps your business on track.",
    subServices: [
      {
        title: "GST Registration",
        description:
          "New GST registration for businesses, freelancers, and e-commerce sellers. Amendments to existing registrations and migration assistance from the old tax regime.",
      },
      {
        title: "GST Return Filing",
        description:
          "We manage all GST filings including GSTR-1, GSTR-3B, GSTR-9, and composition scheme returns. We also reconcile GSTR-2A/2B with purchase data to ensure accuracy.",
      },
      {
        title: "GST Amendments & Updates",
        description:
          "Changes in business details such as address, contact information, or business structure. Assistance with GST cancellation and revocation of cancellation.",
      },
      {
        title: "GST Refunds",
        description:
          "Claiming GST refunds for exporters, SEZ units, or input tax accumulation cases. Complete documentation preparation and representation for refund processing.",
      },
      {
        title: "GST Compliance & Advisory",
        description:
          "End-to-end GST compliance, health checks, and audits. Our experts advise on applicability, input tax credit optimization, and all supply-related regulations.",
      },
      {
        title: "Legal Representation",
        description:
          "Liaising with GST officers for notices and assessments. Expert representation before GST authorities for disputes, audits, and scrutiny proceedings.",
      },
    ],
    whyUs: {
      heading: "Why Choose Agastya Accounting for GST?",
      body:
        "At Agastya Accounting, our expert GST professionals ensure timely filings, complete compliance, and personalized advisory tailored to your business. We offer affordable pricing, maintain 100% data confidentiality, and provide reliable support to simplify your GST journey.",
      bullets: [
        "Expert GST practitioners with 10+ years of experience",
        "Zero error track record in GST filings",
        "Proactive approach to avoid notices and penalties",
        "Input Tax Credit (ITC) optimization for cost savings",
        "Comprehensive support for GST audits and assessments",
        "Timely filing — never miss a GST deadline with us",
      ],
    },
    metaDescription:
      "Expert GST services in Mehsana, Gujarat. Agastya Accounting offers GST registration, return filing, refunds, audits, and legal representation. Stay GST compliant with zero errors.",
  },
  {
    id: "financial",
    slug: "financial-management",
    title: "Financial Management",
    tagline: "Empowering Financial Growth",
    description:
      "Strategic financial planning, reporting, and analysis to strengthen your business.",
    icon: "TrendingUp",
    heroDescription:
      "Agastya Accounting provides comprehensive financial management to help businesses optimize resources and plan for the future. Our experts deliver accurate insights, strategic guidance, and practical solutions for informed decision-making. Partner with us to strengthen your finances and achieve sustainable growth.",
    subServices: [
      {
        title: "Financial Planning & Analysis",
        description:
          "Budgeting, financial forecasting, cash flow management, profitability analysis, variance reports, MIS, and financial performance insights to guide strategic decisions.",
      },
      {
        title: "Virtual CFO Services",
        description:
          "Fractional CFO services providing senior financial leadership without the full-time cost. Strategic financial oversight, reporting, and decision-support for growing businesses.",
      },
      {
        title: "Corporate Finance Services",
        description:
          "Financial reporting and compliance, capital structuring, cost optimization, and Mergers & Acquisitions (M&A) support for businesses at every stage.",
      },
      {
        title: "Business Financial Management",
        description:
          "Working capital solutions, loan and fundraising support, business valuation, due diligence, and startup and MSME financial modeling.",
      },
      {
        title: "Investment Advisory",
        description:
          "Mutual funds, bonds, and equity portfolio planning, SIP planning and monitoring, real estate investment advisory, and tax-efficient investment strategies.",
      },
      {
        title: "Personal Finance Management",
        description:
          "Wealth and retirement planning, insurance planning, debt and EMI management, and goal-based financial planning for individuals and professionals.",
      },
    ],
    whyUs: {
      heading: "Why Choose Agastya Accounting for Financial Management?",
      body:
        "Partnering with Agastya Accounting for financial management ensures accuracy, compliance, and actionable insights. Our experts help you maintain error-free records, make confident decisions, uncover growth opportunities, and optimize costs — giving your business a clear financial edge.",
      bullets: [
        "Experienced CAs providing senior-level financial guidance",
        "Data-driven MIS reports for real-time business clarity",
        "Cost-effective alternative to a full-time CFO",
        "Aligned with your business goals and growth stage",
        "Complete confidentiality of financial information",
        "Proactive identification of cost-saving opportunities",
      ],
    },
    metaDescription:
      "Comprehensive financial management services in Mehsana, Gujarat. Agastya Accounting offers financial planning, virtual CFO, MIS reporting, investment advisory, and business finance solutions.",
  },
  {
    id: "loans",
    slug: "business-project-loans",
    title: "Business Project Loans",
    tagline: "Funding Your Vision, Fueling Your Growth",
    description:
      "Expert assistance in securing business loans and government subsidies for your projects.",
    icon: "Building2",
    heroDescription:
      "Agastya Accounting provides expert guidance in preparing project reports and securing business loans with government subsidies. We navigate the entire process from eligibility check to loan disbursement, ensuring your business gets the funding it needs to grow.",
    subServices: [
      {
        title: "Project Report Preparation",
        description:
          "Detailed, bankable project reports covering technical, financial, and market analysis — meeting the exact requirements of banks, NBFCs, and government agencies.",
      },
      {
        title: "Government Subsidy Identification",
        description:
          "We identify all applicable central and state government subsidy schemes for your business, including PMEGP, MSME schemes, MUDRA, and sector-specific subsidies.",
      },
      {
        title: "Loan Application Documentation",
        description:
          "Complete assistance with loan application preparation, financial projections, KYC documentation, collateral paperwork, and all supporting documents required by lenders.",
      },
      {
        title: "Bank Liaison & Follow-up",
        description:
          "We liaise directly with banks and financial institutions on your behalf, follow up on application status, and address any queries raised during the appraisal process.",
      },
      {
        title: "MSME & Startup Financing",
        description:
          "Specialized support for MSME loans, startup funding, Mudra loans, Stand-up India, and other government-backed financing schemes designed for small businesses.",
      },
      {
        title: "Post-Disbursement Compliance",
        description:
          "We assist with post-loan compliance including utilization certificates, subsidy claim processing, annual return submissions, and renewal of credit facilities.",
      },
    ],
    whyUs: {
      heading: "Why Choose Agastya Accounting for Business Loans?",
      body:
        "We understand that securing the right funding at the right time is critical for business growth. Our team has helped hundreds of businesses across Gujarat secure loans and subsidies, with a strong track record of successful disbursements.",
      bullets: [
        "Strong relationships with major banks and NBFCs in Gujarat",
        "High loan approval rate with well-prepared documentation",
        "Knowledge of 50+ government subsidy schemes",
        "End-to-end support from application to disbursement",
        "Transparent process with no hidden charges",
        "Post-disbursement compliance management included",
      ],
    },
    metaDescription:
      "Business project loan and government subsidy assistance in Mehsana, Gujarat. Agastya Accounting prepares project reports and secures MSME loans, PMEGP, MUDRA, and other government-backed financing.",
  },
  {
    id: "audit",
    slug: "audit-assurance",
    title: "Audit & Assurance",
    tagline: "Independent Audit, Absolute Confidence",
    description:
      "Statutory, internal, and tax audits conducted with precision and independence.",
    icon: "Shield",
    heroDescription:
      "Agastya Accounting conducts audits with the highest standards of independence, precision, and professional integrity. Our audit and assurance services provide stakeholders with reliable financial information and help businesses strengthen their internal controls and compliance frameworks.",
    subServices: [
      {
        title: "Statutory Audit",
        description:
          "Mandatory audit of financial statements for companies and LLPs under the Companies Act 2013. Conducted independently with a comprehensive audit report for all stakeholders.",
      },
      {
        title: "Tax Audit",
        description:
          "Tax audit under Section 44AB of the Income Tax Act for businesses and professionals exceeding prescribed turnover limits. Accurate Form 3CB/3CD preparation and filing.",
      },
      {
        title: "Internal Audit",
        description:
          "Systematic evaluation of internal controls, risk management processes, and operational efficiency. Actionable recommendations to strengthen your business processes.",
      },
      {
        title: "GST Audit",
        description:
          "Comprehensive GST audit to verify returns, reconcile data, and ensure complete accuracy of GST filings. Preparation of GSTR-9C reconciliation statement.",
      },
      {
        title: "Stock & Fixed Asset Verification",
        description:
          "Physical verification of inventory and fixed assets, reconciliation with books of accounts, and reporting of discrepancies for corrective action.",
      },
      {
        title: "Concurrent & Special Audits",
        description:
          "Concurrent audits for banks and financial institutions, and special purpose audits for specific transactions, fraud investigations, or management requirements.",
      },
    ],
    whyUs: {
      heading: "Why Choose Agastya Accounting for Audit?",
      body:
        "Our audit practice is built on independence, thoroughness, and a commitment to delivering genuine value beyond mere compliance. We don't just tick boxes — we provide insights that help your business improve, grow, and operate with confidence.",
      bullets: [
        "Qualified CAs with extensive statutory and tax audit experience",
        "Risk-based audit approach for deeper business insights",
        "Timely completion without disrupting your operations",
        "Clear, actionable audit reports in plain language",
        "Strict confidentiality of all business information",
        "Post-audit advisory to implement recommendations",
      ],
    },
    metaDescription:
      "Professional audit and assurance services in Mehsana, Gujarat. Agastya Accounting conducts statutory audits, tax audits, internal audits, and GST audits with precision and independence.",
  },
  {
    id: "advisory",
    slug: "business-advisory",
    title: "Business Advisory",
    tagline: "Strategic Guidance for Sustainable Growth",
    description:
      "Practical business advisory, structuring, and growth strategies for every stage.",
    icon: "Lightbulb",
    heroDescription:
      "Agastya Accounting delivers practical, results-oriented business advisory services for startups, SMEs, and established enterprises. We combine financial expertise with real-world business understanding to provide guidance that is both strategic and actionable — helping you make better decisions and grow with confidence.",
    subServices: [
      {
        title: "Business Registration & Structuring",
        description:
          "Company incorporation (Private Limited, OPC, Section 8), LLP formation, Partnership registration, and Sole Proprietorship setup. We help you choose and set up the right structure.",
      },
      {
        title: "MSME & Startup Advisory",
        description:
          "End-to-end startup advisory covering entity selection, compliance setup, fundraising guidance, MSME/Udyam registration, and growth strategy for early-stage businesses.",
      },
      {
        title: "Business Valuation",
        description:
          "Professional business valuation for fundraising, mergers and acquisitions, ESOPs, dispute resolution, or regulatory compliance using standard valuation methodologies.",
      },
      {
        title: "Compliance Setup & Management",
        description:
          "Setting up complete compliance frameworks including ROC filings, annual returns, director KYC, professional tax, labour law registrations, and ongoing compliance calendars.",
      },
      {
        title: "Strategic Financial Planning",
        description:
          "Developing short and long-term financial strategies aligned with your business goals, including revenue planning, cost optimization, and capital allocation strategies.",
      },
      {
        title: "Due Diligence",
        description:
          "Financial and tax due diligence for business acquisitions, investments, and partnerships. We identify risks, validate financials, and provide clear due diligence reports.",
      },
    ],
    whyUs: {
      heading: "Why Choose Agastya Accounting for Business Advisory?",
      body:
        "Our advisory practice goes beyond numbers. We combine deep financial expertise with practical business acumen to provide guidance that creates real, measurable impact. From your first day of business to your next phase of growth, we are your trusted advisors.",
      bullets: [
        "Experienced CAs with cross-industry advisory expertise",
        "Practical, implementable recommendations (not just theory)",
        "End-to-end support from registration to expansion",
        "Strong network of legal, banking, and business professionals",
        "Transparent advisory with no conflict of interest",
        "Long-term partnership approach with regular check-ins",
      ],
    },
    metaDescription:
      "Professional business advisory services in Mehsana, Gujarat. Agastya Accounting provides business registration, structuring, startup advisory, due diligence, and strategic financial planning.",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesDetail.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesDetail.map((s) => s.slug);
}
