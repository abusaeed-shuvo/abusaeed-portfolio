import { Section } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { CURRENTLY_BUILDING } from "@/data/currently-building";

/**
 * Currently Building — what I'm working on today.
 * Data-driven from `data/currently-building.ts`. Update the file, the section updates.
 */
export function CurrentlyBuilding() {
  return (
    <Section
      id="currently-building"
      eyebrow="Currently"
      title="What I'm building"
      description="A snapshot of the systems I'm actively engineering. This list updates as focus shifts."
    >
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CURRENTLY_BUILDING.map((item) => (
          <RevealItem key={item.title}>
            <article className="surface surface-hover h-full p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary">
                  <Icon name={item.icon} className="h-4 w-4 text-muted-foreground" size={16} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
