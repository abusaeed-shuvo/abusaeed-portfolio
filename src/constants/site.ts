import type { NavItem, SocialLink } from "@/types";

/**
 * Single source of truth for site-wide constants.
 * Update these values to rebrand the portfolio.
 */

export const SITE = {
  name: "Abusaeed",
  fullName: "Abusaeed Shuvo",
  role: "Software Engineer",
  tagline: "I engineer production-grade software, AI agents, and automation systems.",
  description:
    "Software engineer specializing in AI systems, agentic workflows, automation, and modern full-stack development. Currently building AI agent ecosystems, business automation, and AI-powered e-commerce infrastructure.",
  /** Canonical URL — used for sitemap, OG, JSON-LD. */
  url: "https://abusaeed-portfolio.vercel.app",
  email: "abusaeed.shuvo1439@gmail.com",
  location: "Remote",
  /** ISO timezone for any date display. */
  timezone: "Asia/Dhaka",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "GitHub", href: "#github" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    handle: "abusaeed-shuvo",
    href: "https://github.com/abusaeed-shuvo",
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "in/abusaeed-shuvo",
    href: "https://www.linkedin.com/in/abusaeed-shuvo",
    icon: "linkedin",
  },
  {
    label: "Email",
    handle: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: "mail",
  },
];

/** Section ordering on the page — kept here so the page composition is declarative. */
export const SECTION_IDS = {
  hero: "hero",
  currentlyBuilding: "currently-building",
  capabilities: "capabilities",
  work: "work",
  experience: "experience",
  skills: "skills",
  github: "github",
  writing: "writing",
  contact: "contact",
} as const;
