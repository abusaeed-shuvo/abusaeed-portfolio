import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Eyebrow — small mono label above section titles.
 * Uses the `label-mono` utility for consistent tracking and color.
 */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("label-mono", className)}>{children}</p>;
}
