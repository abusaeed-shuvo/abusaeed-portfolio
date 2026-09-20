import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";

/**
 * Writing — blog teaser.
 *
 * Architecture is in place to support future posts (MDX under `content/`,
 * rendered via a `app/blog/[slug]/page.tsx` route), but no posts exist yet.
 * The section intentionally communicates "coming soon" rather than hiding.
 */
export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Notes & engineering writing"
      description="Long-form posts on agentic systems, RAG trade-offs, and the messy parts of shipping AI in production. The architecture is ready — posts are coming."
    >
      <Reveal>
        <div className="surface flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary">
              <FileText className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            </div>
            <h3 className="text-fluid-lg font-medium">First posts in draft</h3>
            <p className="max-w-xl text-sm text-muted-foreground">
              Upcoming pieces cover agent runtime design, hybrid retrieval trade-offs,
              and lessons from shipping local-first AI tools. The blog will be MDX-based
              with type-safe frontmatter — same architecture as the rest of this site.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/40"
          >
            Get notified
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>

      {/* Architecture preview — quiet, technical, supports the "engineer" positioning. */}
      <Reveal delay={0.05}>
        <div className="surface overflow-hidden">
          <div className="border-b border-border px-4 py-2.5 font-mono text-xs text-muted-foreground">
            content/
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-muted-foreground">
            <code>
              <span className="text-foreground/80">content/</span>
              {"\n"}  posts/
              {"\n"}    agent-runtime-design.mdx     <span className="text-zinc-600"># draft</span>
              {"\n"}    hybrid-retrieval-tradeoffs.mdx <span className="text-zinc-600"># draft</span>
              {"\n"}    shipping-local-first-ai.mdx   <span className="text-zinc-600"># planned</span>
            </code>
          </pre>
        </div>
      </Reveal>
    </Section>
  );
}
