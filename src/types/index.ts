/**
 * Core domain types for the portfolio.
 * Strongly typed — no `any`, no untyped shapes.
 */

export type ProjectStatus = "shipped" | "in-development" | "archived" | "experimental";

export type ProjectCategory = "featured" | "archived" | "experimental";

export interface ProjectHighlight {
  /** Short label, e.g. "Agentic workflow orchestration" */
  label: string;
  /** One-sentence detail of what was built or how. */
  detail: string;
}

export interface ProjectChallenge {
  /** The problem. */
  problem: string;
  /** The engineering decision that solved it. */
  approach: string;
}

export interface Project {
  /** Stable slug, used as React key and anchor target. */
  slug: string;
  title: string;
  /** One-line summary used in cards. */
  summary: string;
  /** Longer paragraph for the detail view. */
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** Tech stack tags, e.g. ["Next.js", "Prisma", "PostgreSQL"]. */
  technologies: string[];
  /** Architecture highlights — what is interesting under the hood. */
  architectureHighlights: ProjectHighlight[];
  /** Challenges solved — problem → approach pairs. */
  challenges: ProjectChallenge[];
  /** Optional screenshot paths under /public. Degrades gracefully when missing. */
  screenshots?: string[];
  /** Optional GitHub repository URL. */
  github?: string;
  /** Optional live demo URL. */
  demo?: string;
  /** Year shipped or started. */
  year: number;
}

export type SkillCategoryKey =
  | "ai"
  | "frontend"
  | "backend"
  | "automation"
  | "infrastructure"
  | "databases"
  | "devops"
  | "languages"
  | "developer-tools"
  | "mobile-other";

export interface SkillCategory {
  key: SkillCategoryKey;
  label: string;
  /** Short description of how this category is used in practice. */
  blurb: string;
  /** Skill names. Display only — NO progress bars. */
  skills: string[];
}

export interface ExperienceEntry {
  /** Stable slug. */
  slug: string;
  /** Domain label, e.g. "AI Systems", "E-commerce Infrastructure". */
  domain: string;
  /** Headline of the impact. */
  headline: string;
  /** 1–2 sentences describing what was engineered and the outcome. */
  impact: string;
  /** Concrete examples / proof points. */
  examples: string[];
  /** Approximate year range. */
  period: string;
}

export interface CurrentlyBuildingItem {
  title: string;
  description: string;
  /** Lucide icon name (resolved at render time). */
  icon: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
  /** Concrete examples of what this capability covers. */
  examples: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  /** Optional handle shown next to the label. */
  handle?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  updatedAt: string;
}

export interface GitHubStats {
  totalStars: number;
  totalPublicRepos: number;
  topLanguages: { language: string; count: number }[];
  pinnedRepos: GitHubRepo[];
  recentRepos: GitHubRepo[];
  /** True when the data came from a fallback rather than the live API. */
  isFallback: boolean;
  /** ISO timestamp of the last successful fetch. */
  fetchedAt: string | null;
}
