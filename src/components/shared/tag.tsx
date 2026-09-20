import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
  /** Visual variant. Default = neutral. */
  variant?: "default" | "outline" | "status";
}

/**
 * Tag — small pill used for tech stack and status labels.
 *
 * Replaces the old `px-2 py-1 text-xs bg-[#21262d] rounded` pattern
 * and the duplicated badge styles in ProjectCard.
 */
export function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 font-mono text-xs leading-5",
        variant === "default" && "bg-secondary text-secondary-foreground",
        variant === "outline" && "border border-border text-muted-foreground",
        variant === "status" && "border border-border bg-transparent text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
