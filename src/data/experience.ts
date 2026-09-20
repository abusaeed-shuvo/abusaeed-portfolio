import type { ExperienceEntry } from "@/types";

/**
 * Engineering experience — impact-focused, not fake company timelines.
 * Each entry describes a domain I've worked in and the concrete impact delivered.
 */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    slug: "ai-systems",
    domain: "AI Systems",
    headline: "Designed and shipped multi-agent systems and RAG pipelines.",
    impact:
      "Built agent ecosystems that orchestrate specialized agents with typed contracts, durable execution, and local-first inference. Shipped retrieval systems with hybrid search and auditable citations.",
    examples: [
      "Multi-agent orchestration runtime with MCP-native tool layer",
      "Local-first RAG pipeline with hybrid retrieval and citation provenance",
      "Unified model interface across Ollama, LM Studio, and OpenRouter",
    ],
    period: "2024 — Present",
  },
  {
    slug: "automation",
    domain: "Automation",
    headline: "Engineered durable automation pipelines for business processes.",
    impact:
      "Built workflow engines that connect web crawlers, AI classifiers, and 3rd-party APIs into resilient pipelines. Designed for observability — every step is checkpointed, retried, and replayable.",
    examples: [
      "Durable step execution with crash-resume via checkpoints",
      "Pluggable step registry introspected by the UI at runtime",
      "Dead-letter queues with manual replay for flaky 3rd-party APIs",
    ],
    period: "2023 — Present",
  },
  {
    slug: "ecommerce",
    domain: "E-commerce Infrastructure",
    headline: "Built production e-commerce backends with payment and inventory integrity.",
    impact:
      "Designed and shipped full-stack e-commerce platforms handling catalog, payments, and order lifecycle. Solved concurrency and overselling problems at the database layer.",
    examples: [
      "Event-sourced order lifecycle with append-only event log",
      "Idempotent Stripe webhooks with deduplication by event ID",
      "Row-level inventory locking to prevent overselling under concurrent checkout",
    ],
    period: "2023 — 2024",
  },
  {
    slug: "fullstack",
    domain: "Full-stack Development",
    headline: "Delivered production web applications end-to-end.",
    impact:
      "Shipped client-commissioned websites and SaaS demos with strong mobile LCP, accessible navigation, and content/presentation separation. Returning-client engagement on multiple projects.",
    examples: [
      "Mobile LCP optimization from 4.2s to 1.1s on 4G via responsive image pipeline",
      "Content-as-data architecture enabling marketing-led copy updates",
      "Multi-tenant data layer with swappable persistence",
    ],
    period: "2022 — Present",
  },
  {
    slug: "open-source",
    domain: "Open Source & Tooling",
    headline: "Building developer tools for local-first AI workflows.",
    impact:
      "Building CLI suites and IDE integrations that make local AI development ergonomic — context management, prompt snapshot testing, and unified model switching across providers.",
    examples: [
      "Unified model interface abstracting Ollama, LM Studio, and OpenRouter",
      "Prompt snapshot testing with diff surfacing before merge",
      "Context compaction to keep long sessions within budget",
    ],
    period: "2024 — Present",
  },
];
