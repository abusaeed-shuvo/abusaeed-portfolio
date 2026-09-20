import {
  Bot,
  Cpu,
  Layers,
  Workflow,
  ShoppingBag,
  Github,
  BrainCircuit,
  Server,
  Code2,
  ShoppingCart,
  Terminal,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps icon string keys (used in data files) to Lucide components.
 * Keep this map as the single source of truth — data files only reference
 * string keys, so we never import Lucide into the data layer.
 */
const ICON_MAP: Record<string, LucideIcon> = {
  Bot,
  Cpu,
  Layers,
  Workflow,
  ShoppingBag,
  Github,
  BrainCircuit,
  Server,
  Code2,
  ShoppingCart,
  Terminal,
};

interface IconProps {
  name: string;
  className?: string;
  /** Size in pixels — defaults to 20 (lucide default). */
  size?: number;
}

/**
 * Resolves a string icon name to a Lucide icon component.
 * Falls back to a placeholder dot if the name is unknown — never throws.
 */
export function Icon({ name, className, size }: IconProps) {
  const LucideComponent = ICON_MAP[name];
  if (!LucideComponent) {
    return (
      <span
        className={className}
        style={{ width: size ?? 20, height: size ?? 20 }}
        aria-hidden="true"
      />
    );
  }
  return <LucideComponent className={className} size={size} aria-hidden="true" />;
}
