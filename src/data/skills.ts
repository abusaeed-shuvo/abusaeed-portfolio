import type { SkillCategory } from "@/types";

/**
 * Categorized skills. Display only — NO progress bars.
 * The order here is the order on the page.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    key: "ai",
    label: "AI & Agents",
    blurb: "Building agentic systems, RAG pipelines, and local-first AI tooling.",
    skills: [
      "AI Agents",
      "Agentic Workflows",
      "MCP",
      "RAG",
      "Vector Databases",
      "Prompt Engineering",
      "HuggingFace",
      "Local LLMs",
      "Ollama",
      "LM Studio",
      "Claude Code",
      "Cline",
      "Gemini CLI",
      "OpenRouter",
      "Agent Frameworks",
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    blurb: "Type-safe, accessible, production React applications.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    key: "backend",
    label: "Backend",
    blurb: "APIs and services designed for correctness and scale.",
    skills: ["Node.js", "PHP", "Laravel", "REST APIs", "Authentication", "Prisma"],
  },
  {
    key: "automation",
    label: "Automation",
    blurb: "Durable pipelines that connect crawlers, AI, and external APIs.",
    skills: ["Automation Systems", "Web Crawlers", "FFmpeg", "Workflow Engines"],
  },
  {
    key: "ai-development",
    label: "AI Development",
    blurb: "Python-first tooling for ML, retrieval, and inference.",
    skills: ["Python", "Local AI", "AI Tooling"],
  },
  {
    key: "databases",
    label: "Databases",
    blurb: "Relational and vector stores, modeled for query patterns.",
    skills: ["MySQL", "PostgreSQL", "Prisma", "Vector Databases"],
  },
  {
    key: "devops",
    label: "DevOps",
    blurb: "Reproducible environments and safe deploys.",
    skills: ["Docker", "Git", "GitHub", "Linux", "Vercel"],
  },
  {
    key: "languages",
    label: "Languages",
    blurb: "Primary languages used across recent work.",
    skills: ["TypeScript", "Python", "PHP", "Kotlin"],
  },
  {
    key: "developer-tools",
    label: "Developer Tools",
    blurb: "Tools and integrations that make AI development ergonomic.",
    skills: ["Claude Code", "Cline", "Gemini CLI", "Tauri"],
  },
  {
    key: "mobile-other",
    label: "Mobile & Other",
    blurb: "Cross-platform and systems-level work.",
    skills: ["Android", "Kotlin", "Tauri"],
  },
];
