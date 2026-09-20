import { Section } from "@/components/shared/section";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SkillGroup } from "@/components/shared/skill-group";
import { SKILL_CATEGORIES } from "@/data/skills";

/**
 * Skills — categorized, no progress bars.
 *
 * Progress bars imply a fixed ceiling and feel like a junior-portfolio cliché.
 * Categories communicate breadth without false precision.
 */
export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="Grouped by domain. The list reflects what I use in production today — not everything I've ever touched."
    >
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category) => (
          <RevealItem key={category.key}>
            <SkillGroup category={category} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
