export * from "./work";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  dotBg: string;
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  pinColor: string;
  description: string;
}

export interface FaqItem {
  key: string;
  label: string;
  answer: string;
}

