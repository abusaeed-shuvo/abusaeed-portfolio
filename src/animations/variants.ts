import type { FramerMotionVariants } from "./types-internal";

/**
 * Shared Framer Motion variants.
 * Subtle, content-supporting motion only — no flashy effects.
 * All variants honor `prefers-reduced-motion` via the Reveal wrapper.
 */

export const fadeUp: FramerMotionVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: FramerMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: FramerMotionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

/** Viewport config — trigger once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" } as const;
