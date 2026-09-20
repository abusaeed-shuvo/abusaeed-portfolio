import { Star, GitFork, RefreshCw, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Tag } from "@/components/shared/tag";
import { getGitHubStats } from "@/lib/github";
import { formatDistanceToNowSafe } from "@/lib/format";

/**
 * GitHub integration — server-side fetch with graceful fallback.
 *
 * Stats are cached for 1 hour (see `lib/github.ts`). If the live API
 * is rate-limited or unreachable, the section renders with the static
 * fallback and a subtle notice — never breaks.
 */
export async function GithubStats() {
  const stats = await getGitHubStats();

  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title="Open source activity"
      description="A live snapshot of my public GitHub presence. Pinned repos are the ones I'd point a recruiter to first."
    >
      {/* Fallback notice — subtle, factual. */}
      {stats.isFallback && (
        <div className="mb-6 flex items-start gap-2 rounded-md border border-amber-500/30 bg-amber-500/5 p-3 text-xs text-amber-600 dark:text-amber-400">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            Live GitHub data is temporarily unavailable (rate-limited). Showing a cached
            snapshot instead.
          </p>
        </div>
      )}

      {/* Stat tiles */}
      <RevealGroup className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <RevealItem>
          <StatTile
            icon={<Star className="h-4 w-4" aria-hidden="true" />}
            label="Total stars"
            value={stats.totalStars.toLocaleString()}
          />
        </RevealItem>
        <RevealItem>
          <StatTile
            icon={<GitFork className="h-4 w-4" aria-hidden="true" />}
            label="Public repos"
            value={stats.totalPublicRepos.toLocaleString()}
          />
        </RevealItem>
        <RevealItem>
          <StatTile
            icon={<RefreshCw className="h-4 w-4" aria-hidden="true" />}
            label="Last sync"
            value={stats.fetchedAt ? formatDistanceToNowSafe(stats.fetchedAt) : "—"}
          />
        </RevealItem>
        <RevealItem>
          <StatTile
            icon={<Star className="h-4 w-4" aria-hidden="true" />}
            label="Top language"
            value={stats.topLanguages[0]?.language ?? "—"}
          />
        </RevealItem>
      </RevealGroup>

      {/* Top languages */}
      {stats.topLanguages.length > 0 && (
        <Reveal className="mb-8">
          <div className="surface p-6">
            <h3 className="label-mono mb-4">Languages across public repos</h3>
            <div className="flex flex-wrap gap-2">
              {stats.topLanguages.map(({ language, count }) => (
                <Tag key={language} className="gap-1.5">
                  <span>{language}</span>
                  <span className="text-muted-foreground">· {count}</span>
                </Tag>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* Pinned repos */}
      {stats.pinnedRepos.length > 0 && (
        <Reveal>
          <h3 className="label-mono mb-4">Pinned repositories</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {stats.pinnedRepos.map((repo) => (
              <li key={repo.name}>
                <Link
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface surface-hover block h-full p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-mono text-sm font-medium">{repo.name}</h4>
                    {repo.language && <Tag variant="outline">{repo.language}</Tag>}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3" aria-hidden="true" />
                      {repo.stars}
                    </span>
                    <span className="font-mono">
                      {formatDistanceToNowSafe(repo.updatedAt)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}

function StatTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="surface p-5">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}
