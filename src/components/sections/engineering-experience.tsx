import { Section } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { EXPERIENCE } from "@/data/experience";

/**
 * Engineering Experience — impact-focused, not fake company timelines.
 *
 * Each entry describes a domain and the concrete impact delivered.
 * Periods are approximate ranges, not employment dates.
 */
export function EngineeringExperience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Engineering experience"
      description="Organized by domain instead of employer — the work I've done, the impact it had, and the proof points behind it."
    >
      <div className="relative space-y-4">
        {/* Vertical timeline line */}
        <div
          className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2"
          aria-hidden="true"
        />

        <RevealGroup className="space-y-4">
          {EXPERIENCE.map((entry, idx) => (
            <RevealItem key={entry.slug}>
              <article className="relative pl-12 md:pl-0">
                {/* Timeline dot */}
                <span
                  className="absolute left-[9px] top-6 z-10 h-3 w-3 rounded-full border-2 border-background bg-muted-foreground md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                />

                <div
                  className={`surface p-6 md:w-[calc(50%-1.5rem)] ${
                    idx % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="label-mono">{entry.domain}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
                  </div>
                  <h3 className="mt-2 text-fluid-lg font-medium leading-tight">
                    {entry.headline}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{entry.impact}</p>
                  <ul className="mt-4 space-y-2">
                    {entry.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                          aria-hidden="true"
                        />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
