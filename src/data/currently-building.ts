import type { CurrentlyBuildingItem } from "@/types";

/**
 * What I'm actively building today.
 * Keep this list short and current — recruiters read this first.
 */
export const CURRENTLY_BUILDING: CurrentlyBuildingItem[] = [
  {
    title: "AI Agent Ecosystem",
    description:
      "Multi-agent orchestration runtime with MCP-native tools, local-first inference, and durable execution.",
    icon: "Bot",
  },
  {
    title: "Local AI Development",
    description:
      "Developer tools and CLIs that make local-first AI workflows ergonomic across Ollama, LM Studio, and OpenRouter.",
    icon: "Cpu",
  },
  {
    title: "Full-stack Applications",
    description:
      "Production Next.js + Prisma + PostgreSQL applications with type-safe APIs and accessible UIs.",
    icon: "Layers",
  },
  {
    title: "Business Automation",
    description:
      "Durable automation pipelines connecting web crawlers, AI classifiers, and external APIs.",
    icon: "Workflow",
  },
  {
    title: "AI-powered E-commerce",
    description:
      "E-commerce infrastructure with AI-assisted product discovery, search, and recommendations.",
    icon: "ShoppingBag",
  },
  {
    title: "Open Source Tools",
    description:
      "Developer tooling for prompt testing, context management, and unified model interfaces.",
    icon: "Github",
  },
];
