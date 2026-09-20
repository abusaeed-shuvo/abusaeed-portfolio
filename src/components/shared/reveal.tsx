"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/animations/variants";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** Render as a different element (default: div). */
  as?: "div" | "section" | "li" | "article";
  className?: string;
}

/**
 * Scroll-triggered reveal wrapper.
 *
 * - Subtle: opacity 0 → 1, y 8px → 0.
 * - One-shot: animates once when scrolled into view, never re-triggers.
 * - Respects `prefers-reduced-motion`: renders children statically.
 *
 * Use sparingly — for section content, not every line.
 */
export function Reveal({ children, delay = 0, as = "div", className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay },
        },
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** Variant container that staggers its `Reveal` children. */
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Child item to be used inside `RevealGroup`. */
export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
