import type {
  NavItem,
  Service,
  Stat,
  Feature,
  Industry,
  ProcessStep,
  Testimonial,
  FAQItem,
  ContactInfo,
} from "@types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
];

export const services: Service[] = [
  {
    id: "accounting",
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    description:
      "Maintain accurate, reliable financial records that support compliance and smarter business decisions. We handle day-to-day bookkeeping, ledger management, and financial statement preparation.",
    icon: "BookOpen",
    href: "/services/accounting-bookkeeping",
  },
  {
    id: "payroll",
    slug: "payroll-management",
    title: "Payroll Management",
    description:
      "Ensure timely salary processing, accurate deductions, and complete statutory compliance with our streamlined payroll solutions. PF, ESI, TDS, and all payroll requirements handled.",
    icon: "Users",
    href: "/services/payroll-management",
  },
  {
    id: "tax",
    slug: "tax-services",
    title: "Tax Services",
    description:
      "From planning to filing, we provide comprehensive tax solutions for individuals and businesses. Our guidance ensures full compliance while optimizing your tax liability legally.",
    icon: "FileText",
    href: "/services/tax-services",
  },
  {
    id: "gst",
    slug: "gst-services",
    title: "GST Services",
    description:
      "Complete GST support including registration, monthly returns, annual filings, audits, and refunds. We keep your business fully compliant while avoiding costly errors and penalties.",
    icon: "Receipt",
    href: "/services/gst-services",
  },
  {
    id: "financial",
    slug: "financial-management",
    title: "Financial Management",
    description:
      "We help businesses manage resources through budgeting, financial reporting, analysis, and strategic planning. Our solutions strengthen financial health and support long-term growth.",
    icon: "TrendingUp",
    href: "/services/financial-management",
  },
  {
    id: "loans",
    slug: "business-project-loans",
    title: "Business Project Loans",
    description:
      "Expert assistance in preparing detailed project reports and securing business loans with government subsidies. We navigate the process from application to disbursement.",
    icon: "Building2",
    href: "/services/business-project-loans",
  },
  {
    id: "audit",
    slug: "audit-assurance",
    title: "Audit & Assurance",
    description:
      "Statutory audits, internal audits, and tax audits conducted with precision and independence. We provide reliable assurance services that build stakeholder confidence.",
    icon: "Shield",
    href: "/services/audit-assurance",
  },
  {
    id: "advisory",
    slug: "business-advisory",
    title: "Business Advisory",
    description:
      "Strategic business advisory from startups to established enterprises. We deliver practical insights, growth-focused strategies, and business structuring guidance tailored to your goals.",
    icon: "Lightbulb",
    href: "/services/business-advisory",
  },
];

export const stats: Stat[] = [
  {
    value: "10+",
    numericValue: 10,
    suffix: "+",
    label: "Years of Experience",
    description: "Trusted expertise since 2013",
  },
  {
    value: "500+",
    numericValue: 500,
    suffix: "+",
    label: "Businesses Served",
    description: "Clients across industries",
  },
  {
    value: "5000+",
    numericValue: 5000,
    suffix: "+",
    label: "Tax Returns Filed",
    description: "Accurate and on time",
  },
  {
    value: "99%",
    numericValue: 99,
    suffix: "%",
    label: "Compliance Success Rate",
    description: "Zero penalties record",
  },
];

export const features: Feature[] = [
  {
    title: "Expertise That Drives Results",
    description:
      "Our team of seasoned Chartered Accountants and finance professionals brings years of experience to every engagement. We combine deep technical knowledge with practical business insights, helping you stay compliant while identifying opportunities to optimize performance and achieve sustainable growth.",
    icon: "Award",
  },
  {
    title: "Personalized Solutions",
    description:
      "We believe every client is unique. That's why we design tailored solutions to match your specific goals, industry, and challenges. Whether you're an individual, a startup, or a growing enterprise, our personalized strategies ensure maximum value and measurable results for your specific situation.",
    icon: "Target",
  },
  {
    title: "Transparency You Can Rely On",
    description:
      "Clarity and trust form the foundation of our client relationships. We maintain open communication, provide honest advice, and ensure complete transparency in every process. With Agastya Accounting, you gain a reliable partner who delivers accurate results and keeps your financial journey stress-free.",
    icon: "Eye",
  },
];

export const industries: Industry[] = [
  { name: "Startups", icon: "Rocket" },
  { name: "SMEs", icon: "Store" },
  { name: "Manufacturers", icon: "Factory" },
  { name: "Retail Businesses", icon: "ShoppingBag" },
  { name: "Service Businesses", icon: "Briefcase" },
  { name: "Professionals", icon: "GraduationCap" },
  { name: "Traders", icon: "BarChart3" },
  { name: "Enterprises", icon: "Building" },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with a thorough consultation to understand your business, financial situation, compliance requirements, and specific goals. This forms the foundation of our partnership.",
  },
  {
    number: "02",
    title: "Analysis",
    description:
      "Our experts conduct a comprehensive analysis of your financial data, tax obligations, and business structure to identify opportunities, risks, and areas requiring attention.",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "We develop a customized strategy tailored to your unique needs — covering tax planning, compliance roadmap, financial optimization, and advisory recommendations.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Our team executes the strategy with precision and keeps you informed throughout. We handle all filings, compliance, and financial management so you can focus on growing your business.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Patel",
    role: "Managing Director",
    company: "Patel Manufacturing Pvt. Ltd.",
    content:
      "Agastya Accounting has been managing our accounting, GST, and tax compliance for over four years. Their attention to detail and proactive approach has saved us significant time and money. Highly recommended for any growing business.",
    rating: 5,
    initials: "RP",
  },
  {
    id: "2",
    name: "Priya Shah",
    role: "Founder & CEO",
    company: "TechStart Solutions",
    content:
      "As a startup founder, I needed reliable guidance on compliance and taxation from day one. Agastya Accounting provided exactly that — clear advice, timely filings, and strategic support that helped us grow with confidence.",
    rating: 5,
    initials: "PS",
  },
  {
    id: "3",
    name: "Amit Desai",
    role: "Proprietor",
    company: "Desai Traders",
    content:
      "Their GST filing service is exceptional. Zero errors, always on time, and they always explain everything in simple terms. The team is responsive and genuinely cares about our business success.",
    rating: 5,
    initials: "AD",
  },
  {
    id: "4",
    name: "Meena Joshi",
    role: "CFO",
    company: "Joshi Retail Group",
    content:
      "The financial management advisory from Agastya Accounting transformed how we approach budgeting and reporting. Their insights have been invaluable for our expansion plans. A truly professional firm.",
    rating: 5,
    initials: "MJ",
  },
  {
    id: "5",
    name: "Suresh Kumar",
    role: "Director",
    company: "Kumar Services Pvt. Ltd.",
    content:
      "We engaged Agastya Accounting for our annual audit and were impressed by their thoroughness and professionalism. The audit process was smooth, and their recommendations were practical and immediately actionable.",
    rating: 5,
    initials: "SK",
  },
  {
    id: "6",
    name: "Kavita Mehta",
    role: "Owner",
    company: "Mehta Enterprises",
    content:
      "From payroll management to tax filing, Agastya Accounting handles everything seamlessly. They are proactive, knowledgeable, and always available when we need guidance. Best accounting firm in Mehsana.",
    rating: 5,
    initials: "KM",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What GST registration services do you provide?",
    answer:
      "We provide end-to-end GST services including new registration, amendment, cancellation, monthly and quarterly return filing (GSTR-1, GSTR-3B, GSTR-9), GST audit, refund claims, and advisory on GST compliance. We ensure your business remains fully compliant with all GST regulations.",
  },
  {
    question: "How do you help with Income Tax Return filing?",
    answer:
      "We handle ITR filing for individuals, HUFs, firms, LLPs, and companies. Our service includes income computation, tax planning to minimize liability legally, preparation and filing of returns, advance tax calculations, and representation before tax authorities if required. We file returns for all ITR forms.",
  },
  {
    question: "What accounting software do you work with?",
    answer:
      "We work with all major accounting platforms including Tally Prime, QuickBooks, Zoho Books, Busy Accounting, and more. We can also help you migrate from manual bookkeeping to software-based accounting systems with full training and ongoing support.",
  },
  {
    question: "Do you offer audit services for small businesses?",
    answer:
      "Yes. We conduct statutory audits, tax audits, internal audits, and special purpose audits for businesses of all sizes. For small businesses, we offer cost-effective audit packages that ensure compliance without disrupting your operations.",
  },
  {
    question: "Can you assist with business registration and incorporation?",
    answer:
      "Absolutely. We assist with Company incorporation (Private Limited, OPC, Section 8), LLP formation, Partnership firm registration, Sole Proprietorship, MSME/Udyam registration, Shop & Establishment registration, Professional Tax registration, and other business setup requirements.",
  },
  {
    question: "What is included in your payroll management service?",
    answer:
      "Our payroll service covers salary computation, payslip generation, PF and ESI contribution management, TDS deduction and deposit, Form 16 preparation, salary register maintenance, and full compliance with labour laws. We handle both monthly payroll processing and year-end compliance.",
  },
  {
    question: "How do you help with business project loans and government subsidies?",
    answer:
      "We prepare detailed project reports required by banks and financial institutions, assist in identifying applicable government subsidy schemes, help with loan application documentation, liaise with banks and government bodies, and guide you through the entire process from eligibility check to disbursement.",
  },
  {
    question: "What is your fee structure for accounting services?",
    answer:
      "Our fees are competitive and transparent, based on the scope of services, business size, and transaction volume. We offer flexible engagement models including monthly retainers, annual packages, and one-time project-based fees. Contact us for a customized quote tailored to your specific requirements.",
  },
];

export const contactInfo: ContactInfo = {
  phone: ["+91 97261 32813", "+91 94292 28311"],
  email: "info@agastyaaccounting.com",
  address: "Mehsana",
  city: "Mehsana",
  state: "Gujarat",
};
