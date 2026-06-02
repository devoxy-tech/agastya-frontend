export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface ServiceSubItem {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  heroDescription: string;
  subServices: ServiceSubItem[];
  whyUs: {
    heading: string;
    body: string;
    bullets: string[];
  };
  metaDescription: string;
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  city: string;
  state: string;
}
