import { Section } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Tag } from "@/components/shared/tag";
import { CAPABILITIES } from "@/data/capabilities";

/**
 * Capabilities — what I do, in engineering language.
 * Replaces the old "Services" section that listed freelance offerings.
 */
export function Capabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="Capabilities"
      title="What I engineer"
      description="Six areas I work in regularly. Each one is backed by shipped systems, not just familiarity."
    >
      <RevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((capability) => (
          <RevealItem key={capability.title}>
            <article className="surface surface-hover h-full p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary">
                <Icon name={capability.icon} className="h-5 w-5 text-muted-foreground" size={20} />
              </div>
              <h3 className="mt-4 text-fluid-lg font-medium">{capability.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{capability.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {capability.examples.map((example) => (
                  <Tag key={example} variant="outline">
                    {example}
                  </Tag>
                ))}
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
