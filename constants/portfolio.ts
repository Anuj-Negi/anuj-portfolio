import type {
  NavLink,
  ServiceItem,
  ExperienceItem,
  FaqItem,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Anuj Negi",
  email: "negianuj27@gmail.com",
  title: "Senior Software Engineer",
  yearsOfExperience: "6",
  badgeTitle: "Web · Mobile · TV",
  badgeSubtitle: "React · React Native · Next.js",
  heroDescription:
    "I build beautifully fast products across web, mobile, and TV, and I love what I do.",
  location: "Ghaziabad, India",
  availability: "open to new roles and contract work",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/anuj-negi-307a4519b/",
    openigloo: "https://www.openigloo.com/",
  },
  copyrightYear: 2026,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#help" },
  { label: "Experience", href: "#exp" },
  { label: "Works", href: "#works" },
  { label: "Ask me", href: "#ask" },
];

export const SKILLS: string[] = [
  "TypeScript",
  "Python / Django",
  "PostgreSQL",
  "REST APIs",
  "Payments",
  "Push notifications",
  "System design",
  "Programmatic SEO · GEO",
];

export const SERVICES: ServiceItem[] = [
  {
    icon: "▦",
    title: "Web apps",
    description: "React, Next.js, TypeScript",
    dotBg: "var(--teal)",
  },
  {
    icon: "▭",
    title: "Mobile apps",
    description: "React Native for iOS and Android",
    dotBg: "var(--yel)",
  },
  {
    icon: "▶",
    title: "TV & OTT apps",
    description: "Android TV, Fire TV, Apple TV",
    dotBg: "var(--org)",
  },
];

export const SERVICES_CONTENT = {
  title: "What do I help with?",
  description:
    "I take features from scoping to release: building the interface, connecting the APIs, and automating the build and release pipeline. I contribute to Python/Django backends and work with product and design from day one. I also build with LLMs, using Claude Code, Cursor, and the OpenAI and Anthropic APIs.",
  stats: [
    { value: "6+", label: "Years of shipping" },
    { value: "3", label: "Platforms" },
  ],
} as const;

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Openigloo Innovation Labs",
    period: "New York, NY · 2023 – 2026",
    role: "Software Engineer",
    pinColor: "var(--teal)",
    description:
      "Owned features end to end with product, design, and backend teams. Led React Native apps and Next.js web apps, contributed to Python/Django services, and built CI/CD and Fastlane release automation.",
  },
  {
    company: "Tycho Technologies",
    period: "Noida · Oct 2021 – Jun 2023",
    role: "Team Lead, React Native",
    pinColor: "var(--org)",
    description:
      "Led the React Native team delivering mobile and web apps for clients across industries, with code reviews, agile delivery, and post-launch support.",
  },
  {
    company: "Saaspect · Shobbr",
    period: "Jul 2020 – Mar 2021",
    role: "Developer apprentice · React intern",
    pinColor: "var(--yel)",
    description:
      "Built React.js interfaces and front-end features while learning component-based development.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    key: "a",
    label: "What do you do best?",
    answer:
      "Shipping user-facing products end to end: scoping a feature, building it across web and mobile, and getting it released with solid CI/CD.",
  },
  {
    key: "b",
    label: "Do you do web too?",
    answer:
      "Yes. I build web apps with React, Next.js, and TypeScript, and contribute to Python/Django backends and APIs.",
  },
  {
    key: "c",
    label: "Have you led teams?",
    answer:
      "Yes. I was Team Lead for React Native at Tycho Technologies, running reviews and delivery across client projects.",
  },
  {
    key: "d",
    label: "TV apps?",
    answer:
      "I build TV and OTT apps for Android TV, Fire TV, and Apple TV, alongside my mobile and web work.",
  },
  {
    key: "e",
    label: "How do you use AI?",
    answer:
      "I work with Claude Code, Cursor, and the OpenAI and Anthropic APIs, and I am building more projects around prompts, retrieval, and evals.",
  },
];

