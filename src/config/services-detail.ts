import type { ServiceDetail } from "@types";

export const servicesDetail: ServiceDetail[] = [
  {
    id: "accounting",
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping Services",
    tagline: "Accurate Records, Smarter Decisions",
    description:
      "Maintain accurate, reliable financial records that support compliance and smarter business decisions.",
    icon: "BookOpen",
    heroDescription:
      "At Agastya Accounting, we provide reliable and accurate Accounting & Bookkeeping Services in India, USA, UK and Australia tailored to meet the unique needs of businesses of all sizes. Our goal is to help you stay financially organized, compliant, and ready to make informed business decisions.",
    subServices: [
      {
        title: "Day-to-Day Bookkeeping",
        description:
          "Recording all financial transactions accurately to maintain up-to-date books.",
      },
      {
        title: "Ledger & Journal Maintenance",
        description:
          "Systematic tracking of all income and expenses for better transparency.",
      },
      {
        title: "Financial Statement Preparation",
        description:
          "Generation of essential reports like Profit & Loss, Balance Sheet, and Cash Flow Statements.",
      },
      {
        title: "Accounts Receivable & Payable Management",
        description:
          "Monitoring customer invoices and supplier payments to maintain cash flow.",
      },
      {
        title: "Bank Reconciliation",
        description:
          "Matching your bank statements with your accounting records to avoid discrepancies.",
      },
      {
        title: "Accounting Finalization Services",
        description:
          "Finalizing your accounts is a critical step to ensure your financial records are accurate, complete, and compliant with statutory requirements. We offer comprehensive Accounting Finalization Services to help you close your books with confidence and prepare for audits, tax filing, or investor reporting.",
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
      "Professional accounting and bookkeeping services in India, USA, UK and Australia. Agastya Accounting handles day-to-day bookkeeping, financial statements, bank reconciliation, and account finalization for businesses of all sizes.",
  },
  {
    id: "payroll",
    slug: "payroll-management",
    title: "Payroll Management Services",
    tagline: "Precision Payroll, Trusted Support",
    description:
      "Ensure timely salary processing, accurate deductions, and complete statutory compliance.",
    icon: "Users",
    heroDescription:
      "We provide end-to-end Payroll Management Services to ensure your employees are paid accurately, on time, and in full compliance with legal and tax regulations.",
    subServices: [
      {
        title: "Payroll Processing",
        description:
          "We handle end-to-end payroll processing with accuracy and efficiency. From salary calculations to deductions, we ensure employees are paid correctly and on time, every month.",
      },
      {
        title: "Statutory Compliance Management",
        description:
          "Our team ensures your payroll aligns seamlessly with all statutory regulations.",
      },
      {
        title: "Payslip Generation & Distribution",
        description:
          "We provide secure and timely payslip generation and distribution for every employee.",
      },
      {
        title: "Employee Onboarding & Exit Payroll",
        description:
          "We manage payroll from joining to full and final settlement, ensuring a seamless employee experience.",
      },
      {
        title: "Payroll Tax Filing",
        description:
          "We take care of all payroll-related tax filings with accuracy and timeliness.",
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
      "End-to-end payroll management services. Agastya Accounting handles salary processing, statutory compliance management, payslips, and full payroll compliance for businesses of all sizes.",
  },
  {
    id: "tax",
    slug: "tax-services",
    title: "Tax Services",
    tagline: "Smart Tax, Seamless Compliance",
    description:
      "From planning to filing, comprehensive tax solutions for individuals and businesses in India and abroad.",
    icon: "FileText",
    heroDescription:
      "Welcome to Agastya Accounting – your trusted partner for comprehensive taxation services in India and abroad. Whether you're an individual, a startup, or a multinational business, we provide expert guidance to ensure compliance and optimize your tax position across borders.",
    subServices: [
      {
        title: "Indian Direct Taxes",
        description:
          "Income Tax Filing (Individual, HUF, Firms, Companies), Tax Audit & Assessment Support, Advance Tax Planning, TDS / TCS Return Filing, and Representation before Income Tax Authorities.",
      },
      {
        title: "Indian Indirect Taxes",
        description:
          "GST Registration & Filing, GST Audit & Reconciliation, Input Tax Credit (ITC) Optimization, and E-Invoicing & Compliance.",
      },
      {
        title: "Specialized NRI Services",
        description:
          "Income Tax Return for NRIs, DTAA (Double Taxation Avoidance Agreement) Advisory, Repatriation of Funds Assistance, and Capital Gains on Property in India.",
      },
      {
        title: "U.S. Individual Tax Preparation",
        description:
          "We assist U.S. citizens and residents with accurate and timely filing of Federal tax returns (Form 1040), State tax returns, Estimated taxes, Tax credits and deductions.",
      },
      {
        title: "U.S. Expat & Non-Resident Tax Services",
        description:
          "Living abroad or earning U.S.-sourced income? We help U.S. citizens abroad comply with FATCA and FBAR, Non-residents file Form 1040-NR, and Determine tax treaty benefits.",
      },
      {
        title: "U.S. Business Tax Services",
        description:
          "Whether you're a sole proprietor or a corporation, we provide Corporate tax filing (Form 1120, 1120S), Partnership returns (Form 1065), LLC and S-Corp tax optimization, Payroll and sales tax compliance.",
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
      "Professional tax services for India and the U.S. Agastya Accounting offers direct/indirect tax filing, NRI services, U.S. Individual & Business tax preparation, and Expat tax services.",
  },
  {
    id: "financial",
    slug: "financial-management",
    title: "Financial Management Services",
    tagline: "Empowering Financial Growth",
    description:
      "Strategic financial planning, reporting, and analysis to strengthen your business.",
    icon: "TrendingUp",
    heroDescription:
      "We offer a comprehensive suite of Financial Management Services in India designed to help individuals, startups, SMEs, and corporates manage their finances efficiently, mitigate risks, and make informed decisions for the future.",
    subServices: [
      {
        title: "Financial Planning & Analysis (FP&A)",
        description:
          "Budgeting and Forecasting, Cash Flow Management, Profitability Analysis, Variance Reports and MIS.",
      },
      {
        title: "Investment Advisory",
        description:
          "Mutual Funds, Bonds, and Equity Portfolio Management, SIP Planning & Monitoring, Real Estate Investment Advisory, and Tax-Efficient Investment Strategies.",
      },
      {
        title: "Business Financial Management",
        description:
          "Working Capital Management, Loan & Fundraising Assistance (Bank Loans, Venture Capital, etc.), Business Valuation & Due Diligence, and Financial Modeling for Startups and MSMEs.",
      },
      {
        title: "Personal Finance Management",
        description:
          "Wealth Management & Retirement Planning, Insurance Planning (Life, Health, Term), Debt Management & EMI Planning, and Goal-Based Financial Planning (Education, Home, Marriage, etc.).",
      },
      {
        title: "Corporate Finance Services",
        description:
          "CFO Services (Virtual / Fractional), Financial Reporting & Compliance, Capital Structuring & Cost Optimization, and Mergers & Acquisitions (M&A) Support.",
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
      "Comprehensive financial management services. Agastya Accounting offers financial planning, virtual CFO, investment advisory, personal finance, and corporate finance solutions.",
  },
  {
    id: "gst",
    slug: "gst-services",
    title: "Goods & Services Tax (GST)",
    tagline: "GST Made Simple & Accurate",
    description:
      "Complete GST support from registration to returns, audits, and refunds.",
    icon: "Receipt",
    heroDescription:
      "We offer comprehensive GST services to help individuals, businesses, and organizations stay compliant with India's Goods and Services Tax regime. Whether you're starting out or scaling up, our team ensures a hassle-free experience for all your GST needs.",
    subServices: [
      {
        title: "GST Registration",
        description:
          "New GST Registration for businesses, freelancers, and e-commerce sellers. Amendments to existing GST registrations. Migration from old tax regime to GST.",
      },
      {
        title: "GST Return Filing",
        description:
          "Monthly, quarterly & annual GST return filings (GSTR-1, GSTR-3B, GSTR-9, etc.). Filing for Composition Scheme taxpayers. Reconciliation of GSTR-2A / GSTR-2B with purchase data.",
      },
      {
        title: "GST Compliance & Advisory",
        description:
          "End-to-end compliance management. GST audit support and health checks. GST applicability analysis based on business activities. Advisory on place of supply, time of supply, input tax credit, and rate applicability.",
      },
      {
        title: "GST Amendments & Updates",
        description:
          "Changes in business details (address, contact info, business structure). Assistance with GST cancellation or revocation of cancellation.",
      },
      {
        title: "GST Refunds",
        description:
          "Claiming GST refunds for exporters, SEZ units, or input tax accumulation. Documentation and representation for refund processing.",
      },
      {
        title: "Representation & Litigation Support",
        description:
          "Liaising with GST officers for notices, assessments, and queries. Representation before authorities for disputes, audits, or appeals.",
      },
    ],
    whyUs: {
      heading: "Why Choose Agastya Accounting for GST?",
      body:
        "At Agastya Accounting, our expert GST professionals ensure timely filings, complete compliance, and personalized advisory tailored to your business. We offer affordable pricing, maintain 100% data confidentiality, and provide reliable support to simplify your GST journey.",
      bullets: [
        "Expert Team of GST Professionals",
        "Timely Filing & Compliance",
        "Affordable Pricing Packages",
        "Personalized Advisory",
        "100% Data Confidentiality",
      ],
    },
    metaDescription:
      "Expert GST services. Agastya Accounting offers GST registration, return filing, refunds, audits, and legal representation. Stay GST compliant with zero errors.",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesDetail.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesDetail.map((s) => s.slug);
}
