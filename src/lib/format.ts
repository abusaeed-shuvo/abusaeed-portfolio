/**
 * Date / time formatting helpers.
 * Kept dependency-free — no `date-fns` for these simple cases.
 */

/**
 * Formats an ISO date as a relative "x ago" string.
 * Returns "—" for invalid input. Returns the raw date on very old (>1y) timestamps.
 */
export function formatDistanceToNowSafe(iso: string | null | undefined): string {
  if (!iso) return "—";

  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";

  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) return "just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 30) return `${diffDays}d ago`;

  // Beyond 30 days, show the absolute date — relative stops being useful.
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: diffDays > 365 ? "numeric" : undefined,
  });
}
