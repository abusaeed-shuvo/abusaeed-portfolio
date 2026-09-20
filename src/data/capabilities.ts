import type { Capability } from "@/types";

/**
 * Engineering capabilities — what I do, not what I "offer".
 * Written in engineering language, not sales language.
 */
export const CAPABILITIES: Capability[] = [
  {
    title: "AI Systems & Agents",
    description:
      "Design and ship multi-agent systems with typed contracts, durable execution, and local-first inference. RAG pipelines with hybrid retrieval and auditable citations.",
    icon: "BrainCircuit",
    examples: ["Agent orchestration", "MCP tool layer", "RAG pipelines", "Local LLMs"],
  },
  {
    title: "Backend Engineering",
    description:
      "Design APIs and services for correctness and scale. Event-sourced lifecycles, idempotent webhooks, row-level locking for concurrency integrity.",
    icon: "Server",
    examples: ["REST APIs", "Authentication", "Prisma + PostgreSQL", "Event sourcing"],
  },
  {
    title: "Full-stack Applications",
    description:
      "Type-safe, accessible, production-grade Next.js applications. Strong typing end-to-end, semantic HTML, keyboard navigation, and optimized LCP.",
    icon: "Code2",
    examples: ["Next.js 16", "TypeScript strict", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Automation & Integration",
    description:
      "Durable workflow engines connecting crawlers, AI classifiers, and external APIs. Checkpointed execution, dead-letter queues, and replayable runs.",
    icon: "Workflow",
    examples: ["Workflow engines", "Web crawlers", "FFmpeg", "3rd-party API integration"],
  },
  {
    title: "E-commerce Infrastructure",
    description:
      "Production e-commerce backends with payment integrity, inventory locking, and AI-assisted product discovery. Designed for auditability and replay.",
    icon: "ShoppingCart",
    examples: ["Stripe payments", "Inventory locking", "AI search", "Order lifecycle"],
  },
  {
    title: "Developer Tooling",
    description:
      "CLIs and IDE integrations for local-first AI development — prompt testing, context management, and unified model switching.",
    icon: "Terminal",
    examples: ["CLI suites", "Prompt testing", "Model switchers", "Tauri apps"],
  },
];
