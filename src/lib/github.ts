import type { GitHubRepo, GitHubStats } from "@/types";

/**
 * GitHub API integration with graceful degradation.
 *
 * Strategy:
 *  1. Try the live GitHub REST API server-side.
 *  2. Cache the result in-memory for CACHE_TTL_SECONDS.
 *  3. On rate-limit (HTTP 403/429) or any other failure, fall back to
 *     a small static dataset so the page never breaks.
 *
 * The fallback is clearly flagged via `isFallback: true` so the UI can
 * surface a subtle "cached snapshot" note instead of misleading stats.
 */

const GITHUB_USERNAME = "abusaeed-shuvo";
const CACHE_TTL_SECONDS = 60 * 60; // 1 hour

let cache: { stats: GitHubStats; fetchedAt: number } | null = null;

/** Static fallback used when the live API is unavailable or rate-limited. */
const FALLBACK_STATS: GitHubStats = {
  totalStars: 0,
  totalPublicRepos: 0,
  topLanguages: [
    { language: "TypeScript", count: 12 },
    { language: "Python", count: 8 },
    { language: "PHP", count: 5 },
    { language: "JavaScript", count: 4 },
    { language: "Kotlin", count: 2 },
  ],
  pinnedRepos: [
    {
      name: "abusaeed-portfolio",
      description: "Production-grade portfolio built with Next.js 16, TypeScript, and shadcn/ui.",
      url: "https://github.com/abusaeed-shuvo/abusaeed-portfolio",
      stars: 0,
      language: "TypeScript",
      updatedAt: new Date().toISOString(),
    },
  ],
  recentRepos: [
    {
      name: "abusaeed-portfolio",
      description: "Production-grade portfolio built with Next.js 16, TypeScript, and shadcn/ui.",
      url: "https://github.com/abusaeed-shuvo/abusaeed-portfolio",
      stars: 0,
      language: "TypeScript",
      updatedAt: new Date().toISOString(),
    },
  ],
  isFallback: true,
  fetchedAt: null,
};

interface GitHubApiRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

async function fetchLiveStats(): Promise<GitHubStats> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "abusaeed-portfolio",
  };

  // Optional: authenticated requests get 5000/hr instead of 60/hr.
  // The token is only ever read server-side.
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
    { headers, next: { revalidate: CACHE_TTL_SECONDS } },
  );

  if (!res.ok) {
    // 403 / 429 → rate limited; anything else → fall back.
    throw new Error(`GitHub API responded ${res.status}`);
  }

  const data: GitHubApiRepo[] = await res.json();

  const ownRepos = data.filter((r) => !r.fork);

  const mapped: GitHubRepo[] = ownRepos.map((r) => ({
    name: r.name,
    description: r.description,
    url: r.html_url,
    stars: r.stargazers_count,
    language: r.language,
    updatedAt: r.pushed_at,
  }));

  const totalStars = mapped.reduce((sum, r) => sum + r.stars, 0);

  // Top languages — count repos per language, sort desc, take top 6.
  const langCounts = new Map<string, number>();
  for (const r of mapped) {
    if (!r.language) continue;
    langCounts.set(r.language, (langCounts.get(r.language) ?? 0) + 1);
  }
  const topLanguages = [...langCounts.entries()]
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  // Pinned = highest stars; recent = latest pushed.
  const pinnedRepos = [...mapped]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 6);

  const recentRepos = [...mapped]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 6);

  return {
    totalStars,
    totalPublicRepos: mapped.length,
    topLanguages,
    pinnedRepos,
    recentRepos,
    isFallback: false,
    fetchedAt: new Date().toISOString(),
  };
}

/**
 * Get GitHub stats. Returns the cached value if fresh, otherwise fetches.
 * On any failure, returns the static fallback — never throws.
 */
export async function getGitHubStats(): Promise<GitHubStats> {
  const now = Date.now();

  if (cache && (now - cache.fetchedAt) / 1000 < CACHE_TTL_SECONDS) {
    return cache.stats;
  }

  try {
    const stats = await fetchLiveStats();
    cache = { stats, fetchedAt: now };
    return stats;
  } catch (err) {
    console.warn("[github] Falling back to static stats:", err instanceof Error ? err.message : err);
    return FALLBACK_STATS;
  }
}
