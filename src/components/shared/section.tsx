import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  /** Inner content wrapper class. Defaults to a vertical stack. */
  innerClassName?: string;
}

/**
 * Section primitive — the single shell used by every section.
 *
 * Replaces the old `p-6 border border-[#30363d] rounded-xl bg-[#161b22]`
 * copy-paste pattern. Each section now has consistent rhythm:
 *   - anchor id for nav
 *   - optional eyebrow / title / description header
 *   - children content
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={cn("scroll-mt-24 py-20 md:py-28", className)}
    >
      <div className="container-page">
        {(eyebrow || title || description) && (
          <header className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <h2
                id={`${id}-title`}
                className="mt-4 text-fluid-xl font-semibold tracking-tight"
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-fluid-base text-muted-foreground">{description}</p>
            )}
          </header>
        )}
        <div className={cn("space-y-8", innerClassName)}>{children}</div>
      </div>
    </section>
  );
}
