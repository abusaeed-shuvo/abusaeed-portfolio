import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const STATUS_LABELS: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  "in-development": "In Development",
  archived: "Archived",
  experimental: "Experimental",
};

const STATUS_DOT_CLASSES: Record<ProjectStatus, string> = {
  shipped: "bg-emerald-500",
  "in-development": "bg-amber-500",
  archived: "bg-zinc-500",
  experimental: "bg-fuchsia-500",
};

/**
 * Status pill — a small dot + label.
 * Uses semantic colors but stays subtle (no loud backgrounds).
 */
export function ProjectStatusBadge({ status, className }: ProjectStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground",
        className,
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", STATUS_DOT_CLASSES[status])}
        aria-hidden="true"
      />
      {STATUS_LABELS[status]}
    </span>
  );
}
