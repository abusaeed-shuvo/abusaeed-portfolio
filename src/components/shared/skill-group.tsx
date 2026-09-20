import type { SkillCategory } from "@/types";
import { Tag } from "./tag";
import { Reveal } from "./reveal";

interface SkillGroupProps {
  category: SkillCategory;
}

/**
 * Skill category card.
 * No progress bars — just a categorized list of skills as tags.
 */
export function SkillGroup({ category }: SkillGroupProps) {
  return (
    <Reveal as="article" className="surface p-6">
      <div className="space-y-1">
        <h3 className="text-fluid-lg font-medium">{category.label}</h3>
        <p className="text-sm text-muted-foreground">{category.blurb}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </Reveal>
  );
}
