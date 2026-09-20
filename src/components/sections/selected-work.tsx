"use client";

import { useState } from "react";
import { Section } from "@/components/shared/section";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/shared/project-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FEATURED_PROJECTS,
  ARCHIVED_PROJECTS,
  EXPERIMENTAL_PROJECTS,
} from "@/data/projects";
import type { ProjectCategory } from "@/types";

const TABS: { key: ProjectCategory; label: string; count: number }[] = [
  { key: "featured", label: "Featured", count: FEATURED_PROJECTS.length },
  { key: "experimental", label: "Experimental", count: EXPERIMENTAL_PROJECTS.length },
  { key: "archived", label: "Archived", count: ARCHIVED_PROJECTS.length },
];

/**
 * Selected Work — data-driven project showcase.
 *
 * Single source of truth: `data/projects.ts`.
 * The card itself opens a Dialog with full details (architecture,
 * challenges, links) — no separate detail page needed.
 */
export function SelectedWork() {
  const [tab, setTab] = useState<ProjectCategory>("featured");

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Systems I've shipped"
      description="Each card opens a detailed breakdown — architecture highlights, challenges solved, and links. Categories reflect the project's current state, not its importance."
    >
      <Tabs
        value={tab}
        onValueChange={(v) => setTab(v as ProjectCategory)}
        className="w-full"
      >
        <TabsList className="flex w-full justify-start overflow-x-auto sm:w-auto">
          {TABS.map((t) => (
            <TabsTrigger key={t.key} value={t.key} className="gap-2">
              {t.label}
              <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                {t.count}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="featured" className="mt-6">
          <RevealGroup className="grid gap-4 md:grid-cols-2">
            {FEATURED_PROJECTS.map((project) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </TabsContent>

        <TabsContent value="experimental" className="mt-6">
          <RevealGroup className="grid gap-4 md:grid-cols-2">
            {EXPERIMENTAL_PROJECTS.map((project) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </TabsContent>

        <TabsContent value="archived" className="mt-6">
          <RevealGroup className="grid gap-4 md:grid-cols-2">
            {ARCHIVED_PROJECTS.map((project) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </TabsContent>
      </Tabs>
    </Section>
  );
}
