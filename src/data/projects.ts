import type { Project } from "@/types";

/**
 * Single source of truth for projects.
 * Add a new entry here and it appears on the site — no component changes needed.
 *
 * Categories:
 *   - "featured"      → shipped, production-grade work
 *   - "archived"      → completed but no longer actively maintained
 *   - "experimental"  → exploratory, in-progress, or R&D
 */

export const PROJECTS: Project[] = [
  {
    slug: "ai-agent-ecosystem",
    title: "AI Agent Ecosystem",
    summary:
      "Multi-agent orchestration platform with tool-calling, memory, and human-in-the-loop checkpoints.",
    description:
      "A modular agent runtime that composes specialized agents into deterministic workflows. Each agent owns a narrow capability — retrieval, code execution, browser control, file I/O — and the orchestrator routes messages between them with typed contracts. Designed for local-first execution with optional cloud model fallback.",
    category: "featured",
    status: "in-development",
    technologies: [
      "Python",
      "LangGraph",
      "MCP",
      "Ollama",
      "OpenRouter",
      "Vector DB",
      "TypeScript",
    ],
    architectureHighlights: [
      {
        label: "Agentic workflow orchestration",
        detail:
          "Agents are wired as a DAG with explicit edges; cycles are supported for self-correction loops with a max-iteration guard.",
      },
      {
        label: "MCP-native tool layer",
        detail:
          "Every tool is exposed as an MCP server, so new capabilities drop in without touching the orchestrator.",
      },
      {
        label: "Local-first inference",
        detail:
          "Default routing prefers local models via Ollama / LM Studio; cloud models are used only when the local confidence is low.",
      },
      {
        label: "Typed agent contracts",
        detail:
          "Input and output schemas are declared in Zod and validated at the orchestration boundary — no silent shape drift.",
      },
    ],
    challenges: [
      {
        problem:
          "Long-running agent runs would silently exceed token budgets when retries stacked up.",
        approach:
          "Introduced a budget envelope per run with hard interrupts on token and tool-call counts, surfaced as structured events instead of exceptions.",
      },
      {
        problem:
          "Tool outputs from local models were inconsistent — JSON shape drift broke downstream agents.",
        approach:
          "Added a contract layer that validates and normalizes tool outputs against Zod schemas before handing them to the next agent, with a repair prompt on failure.",
      },
    ],
    github: "https://github.com/abusaeed-shuvo",
    year: 2025,
  },
  {
    slug: "rag-knowledge-base",
    title: "Retrieval-Augmented Knowledge Base",
    summary:
      "Local RAG pipeline over private documents with hybrid search, citations, and source provenance.",
    description:
      "A retrieval system built for private, offline use. Documents are ingested, chunked semantically, embedded locally, and stored in a vector database. Queries run hybrid (vector + BM25) retrieval, re-rank with a cross-encoder, and return answers with explicit citations back to source spans.",
    category: "featured",
    status: "shipped",
    technologies: ["Python", "HuggingFace", "Ollama", "PostgreSQL", "pgvector", "FastAPI"],
    architectureHighlights: [
      {
        label: "Hybrid retrieval",
        detail:
          "Combines dense vector search with BM25 sparse retrieval; a cross-encoder re-ranks the top-K candidates for precision.",
      },
      {
        label: "Citation provenance",
        detail:
          "Every claim in the answer is linked back to a chunk ID and a character span — answers are auditable, not black-box.",
      },
      {
        label: "Local embeddings",
        detail:
          "Embedding model runs locally via HuggingFace + sentence-transformers — no document ever leaves the machine.",
      },
    ],
    challenges: [
      {
        problem: "Pure vector retrieval missed exact-match queries (codes, IDs, names).",
        approach:
          "Added a BM25 sparse channel and fused scores with reciprocal rank fusion — recall on exact-match queries went from ~40% to ~95%.",
      },
      {
        problem: "PDF tables and code blocks were being chunked mid-cell, producing garbage embeddings.",
        approach:
          "Replaced naive length-based chunking with a structure-aware splitter that respects table rows and code fences before falling back to token-count chunking.",
      },
    ],
    github: "https://github.com/abusaeed-shuvo",
    year: 2025,
  },
  {
    slug: "ecommerce-infrastructure",
    title: "AI-Powered E-commerce Infrastructure",
    summary:
      "Full-stack e-commerce platform with inventory, payments, and AI-assisted product discovery.",
    description:
      "Production e-commerce backend + storefront. Handles catalog, variants, inventory, cart, checkout, payments, and order lifecycle. Includes an AI-assisted search and recommendation layer that understands natural-language product queries and returns ranked, in-stock results.",
    category: "featured",
    status: "shipped",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Redis", "Python"],
    architectureHighlights: [
      {
        label: "Event-sourced order lifecycle",
        detail:
          "Orders are stored as an append-only event log; current state is a projection. Makes refunds, audits, and replays trivial.",
      },
      {
        label: "Idempotent payment webhooks",
        detail:
          "Stripe webhooks are deduplicated by event ID before any state mutation — safe to retry under load.",
      },
      {
        label: "AI search layer",
        detail:
          "Natural-language queries are parsed into structured filters by an LLM, then run against a denormalized search view for sub-100ms results.",
      },
      {
        label: "Row-level inventory locking",
        detail:
          "Inventory reservations use SELECT FOR UPDATE inside a transaction — no overselling under concurrent checkout.",
      },
    ],
    challenges: [
      {
        problem: "Concurrent checkouts were overselling limited-stock items.",
        approach:
          "Moved stock reservations into a transactional holding table with row-level locks; the cart-to-order flow now atomically reserves and confirms.",
      },
      {
        problem:
          "AI search was returning out-of-stock items because the LLM filter didn't see inventory state.",
        approach:
          "Moved stock filtering into the SQL layer (post-LLM) so the LLM only shapes the query — never decides visibility.",
      },
    ],
    github: "https://github.com/abusaeed-shuvo",
    year: 2024,
  },
  {
    slug: "business-automation-platform",
    title: "Business Automation Platform",
    summary:
      "Workflow engine that connects web crawlers, AI classifiers, and 3rd-party APIs into scheduled pipelines.",
    description:
      "A no-code / low-code automation runtime for business processes. Users define triggers (schedule, webhook, crawl), chain AI and HTTP steps, and ship automations that run on a worker pool. Built for resilience: every step is retried, dead-lettered, and observable.",
    category: "featured",
    status: "shipped",
    technologies: ["Node.js", "TypeScript", "BullMQ", "Redis", "Docker", "Python", "FFmpeg"],
    architectureHighlights: [
      {
        label: "Durable step execution",
        detail:
          "Each step writes a checkpoint before executing; on crash, the worker resumes from the last checkpoint instead of restarting the run.",
      },
      {
        label: "Pluggable step registry",
        detail:
          "Steps are self-describing modules with typed inputs and outputs — the UI introspects them at runtime to render forms.",
      },
      {
        label: "Crawler + classifier combo",
        detail:
          "Web crawlers feed a Python-based classifier that routes pages to the right downstream step based on structured extraction.",
      },
    ],
    challenges: [
      {
        problem: "Long-running crawl steps blocked the worker pool and starved short jobs.",
        approach:
          "Split the queue by step type — crawls and FFmpeg jobs run on a dedicated pool with a separate concurrency limit.",
      },
      {
        problem: "Flaky 3rd-party APIs would silently fail automation runs at 2am.",
        approach:
          "Wrapped every outbound HTTP call in an exponential-backoff retry with jitter, plus a dead-letter queue for manual replay.",
      },
    ],
    github: "https://github.com/abusaeed-shuvo",
    year: 2024,
  },
  {
    slug: "developer-tools-cli",
    title: "Developer Tools & CLI Suite",
    summary:
      "Set of CLIs and IDE integrations for local AI workflows — context management, prompt testing, model switching.",
    description:
      "A collection of small, focused tools that make local-first AI development ergonomic: a CLI that manages context windows across sessions, a prompt test runner with snapshot diffs, and a model switcher that talks to Ollama, LM Studio, and OpenRouter through one interface.",
    category: "experimental",
    status: "in-development",
    technologies: ["TypeScript", "Node.js", "Tauri", "Ollama", "OpenRouter", "Claude Code", "Cline"],
    architectureHighlights: [
      {
        label: "Unified model interface",
        detail:
          "A single client interface abstracts Ollama, LM Studio, and OpenRouter so prompt logic is provider-agnostic.",
      },
      {
        label: "Prompt snapshot testing",
        detail:
          "Prompts are versioned and tested against a fixture set; diffs are surfaced in the CLI before merge.",
      },
    ],
    challenges: [
      {
        problem: "Context windows were getting filled with stale system prompts across sessions.",
        approach:
          "Built a context manager that compacts conversation history with a summarization pass before handing off to the next model call.",
      },
    ],
    github: "https://github.com/abusaeed-shuvo",
    year: 2025,
  },
  {
    slug: "weflo-website",
    title: "Weflo • Business Website & Storefront",
    summary:
      "Production business website and product storefront — designed, built, and shipped end-to-end.",
    description:
      "A client-commissioned business website with a product catalog, individual product pages, and a content-managed landing flow. Designed for fast iteration: the content layer is decoupled from the presentation layer so marketing can update copy without engineering involvement.",
    category: "archived",
    status: "shipped",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "Responsive Design"],
    architectureHighlights: [
      {
        label: "Content / presentation split",
        detail:
          "Page content is sourced from a structured config; the rendering layer is purely presentational — no business logic in templates.",
      },
      {
        label: "Returning-client engagement",
        detail:
          "Second engagement extended the site with a product page flow while preserving the original design system verbatim.",
      },
    ],
    challenges: [
      {
        problem: "Legacy PHP codebase had presentation, data, and routing tangled in single files.",
        approach:
          "Introduced a thin separation layer — content as data, rendering as pure functions — without rewriting the underlying stack.",
      },
    ],
    demo: "https://weflo.art",
    year: 2023,
  },
  {
    slug: "spice-garden",
    title: "Spice Garden • Restaurant Website",
    summary:
      "Modern restaurant website with menu, story, and reservations — built for fast LCP on mobile.",
    description:
      "A demo restaurant website focused on mobile-first performance and accessible navigation. Image-heavy pages stay fast via responsive `next/image` and lazy-loaded galleries.",
    category: "archived",
    status: "shipped",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    architectureHighlights: [
      {
        label: "Mobile-first LCP",
        detail:
          "Hero image is preloaded with a low-quality placeholder; final image swaps in without layout shift.",
      },
    ],
    challenges: [
      {
        problem: "High-resolution food photography was killing mobile LCP.",
        approach:
          "Used `next/image` with responsive sizes and AVIF fallback; LCP dropped from 4.2s to 1.1s on 4G.",
      },
    ],
    demo: "https://spice-garden-smoky.vercel.app/",
    year: 2023,
  },
  {
    slug: "slotify",
    title: "Slotify • SaaS Booking Platform",
    summary:
      "SaaS booking system with dashboard, CRM, and appointment management UI — Stripe-inspired.",
    description:
      "A demo SaaS booking platform with multi-tenant dashboards, customer CRM, appointment lifecycle, and a Stripe-inspired dashboard UI. Built to validate a product hypothesis end-to-end before committing to a real backend.",
    category: "archived",
    status: "shipped",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "LocalStorage"],
    architectureHighlights: [
      {
        label: "Tenant-scoped data layer",
        detail:
          "All client state is namespaced by tenant ID, so the demo can simulate multi-tenancy without a server.",
      },
    ],
    challenges: [
      {
        problem: "Local-only persistence made the demo feel like a toy.",
        approach:
          "Added a structured data layer with clear repository interfaces, so swapping LocalStorage for a real API later is a one-file change.",
      },
    ],
    demo: "https://solotify.vercel.app/",
    year: 2023,
  },
];

/** Convenience selectors — kept here so the data layer is the only place that filters. */
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.category === "featured");
export const ARCHIVED_PROJECTS = PROJECTS.filter((p) => p.category === "archived");
export const EXPERIMENTAL_PROJECTS = PROJECTS.filter((p) => p.category === "experimental");
