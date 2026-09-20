import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/constants/site";

/**
 * Hero — first impression.
 *
 * Design notes:
 *  - No flashy glow effect (the old `bg-blue-500/10 blur-3xl` is gone).
 *  - Subtle terminal motif in the corner — supports the "I engineer systems" message.
 *  - CTAs: "View work" (primary) + "Get in touch" (secondary).
 *  - No Fiverr button — signals senior engineering, not commodity freelancing.
 */
export function Hero() {
  return (
    <section id="hero" className="relative scroll-mt-24 overflow-hidden pt-20 md:pt-32">
      {/* Subtle background grid — barely visible, supports the technical feel. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="mx-auto max-w-4xl">
          {/* Availability badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span
                className="relative flex h-1.5 w-1.5"
                aria-hidden="true"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Available for engineering work
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-fluid-3xl font-semibold tracking-tight">
              <span className="text-gradient-subtle">{SITE.name}.</span>
              <br />
              I engineer software, AI agents, and automation systems.
            </h1>
          </Reveal>

          {/* Subtext */}
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-fluid-base text-muted-foreground">
              I build production-grade systems — multi-agent runtimes, RAG pipelines,
              e-commerce infrastructure, and developer tooling. Local-first where it
              matters, type-safe end-to-end, designed for the long haul.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                View work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>

          {/* Terminal motif */}
          <Reveal delay={0.2}>
            <div className="mt-16 max-w-xl">
              <div className="surface overflow-hidden">
                <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
                  <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                    ~ portfolio
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-muted-foreground">
                  <code>
                    <span className="text-foreground/80">const</span> engineer = {"{"}
                    {"\n"}  role: <span className="text-foreground/80">"{SITE.role}"</span>,
                    {"\n"}  focus: [<span className="text-foreground/80">"ai-agents"</span>, <span className="text-foreground/80">"automation"</span>, <span className="text-foreground/80">"full-stack"</span>],
                    {"\n"}  stack: [<span className="text-foreground/80">"next.js"</span>, <span className="text-foreground/80">"python"</span>, <span className="text-foreground/80">"prisma"</span>, <span className="text-foreground/80">"ollama"</span>],
                    {"\n"}  status: <span className="text-emerald-500">"shipping"</span>,
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
