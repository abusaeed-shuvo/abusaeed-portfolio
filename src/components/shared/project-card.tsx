"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { Tag } from "./tag";
import { ProjectStatusBadge } from "./project-status-badge";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/**
 * Project card.
 *
 * The card itself is a Dialog trigger — clicking opens the full detail view
 * (architecture highlights, challenges, screenshots slot, links).
 *
 * External links (GitHub, demo) are inside the dialog so they don't compete
 * with the card's primary click affordance.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`View details for ${project.title}`}
          className={cn(
            "group relative flex h-full w-full flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 text-left transition-colors",
            "hover:border-border/80 hover:bg-accent/40",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            className,
          )}
        >
          {/* Header row: title + external link affordance */}
          <div className="flex w-full items-start justify-between gap-3">
            <div className="space-y-1.5">
              <h3 className="text-fluid-lg font-semibold leading-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-mono">{project.year}</span>
                <span aria-hidden="true">·</span>
                <ProjectStatusBadge status={project.status} />
              </div>
            </div>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>

          {/* Summary */}
          <p className="text-fluid-sm text-muted-foreground">{project.summary}</p>

          {/* Tech */}
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
            {project.technologies.length > 4 && (
              <Tag variant="outline">+{project.technologies.length - 4}</Tag>
            )}
          </div>

          {/* Detail affordance */}
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            View details
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
          </span>
        </button>
      </DialogTrigger>

      <DialogContent
        className="max-h-[85vh] overflow-y-auto sm:max-w-2xl"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <div className="flex flex-wrap items-center gap-2">
            <DialogTitle className="text-fluid-xl">{project.title}</DialogTitle>
            <ProjectStatusBadge status={project.status} />
          </div>
          <DialogDescription className="text-fluid-sm">
            {project.summary}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 pt-2">
          {/* Description */}
          <p className="text-fluid-base text-foreground/90">{project.description}</p>

          {/* Tech stack */}
          <div className="space-y-3">
            <h4 className="label-mono">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>

          {/* Architecture highlights */}
          {project.architectureHighlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="label-mono">Architecture highlights</h4>
              <ul className="space-y-3">
                {project.architectureHighlights.map((h) => (
                  <li key={h.label} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">{h.label}</p>
                      <p className="text-sm text-muted-foreground">{h.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {project.challenges.length > 0 && (
            <div className="space-y-3">
              <h4 className="label-mono">Challenges solved</h4>
              <ul className="space-y-4">
                {project.challenges.map((c, idx) => (
                  <li key={idx} className="space-y-1.5">
                    <div className="flex gap-3">
                      <AlertCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-foreground/90">
                        <span className="font-medium">Problem: </span>
                        {c.problem}
                      </p>
                    </div>
                    <div className="flex gap-3 pl-7">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground/80">Approach: </span>
                        {c.approach}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="flex flex-wrap gap-3 border-t border-border pt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-accent/40"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Source
                  <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-accent/40"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live demo
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
