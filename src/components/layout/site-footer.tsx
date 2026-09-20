import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/constants/site";

/** Map social icon string keys to Lucide components. */
const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

/**
 * Site footer — sticky to bottom via the root layout's flex column.
 * Contains nav, socials, and a quiet copyright line.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand + tagline */}
          <div className="max-w-sm space-y-2">
            <Link
              href="#hero"
              className="inline-flex items-center gap-2 text-sm font-medium"
              aria-label={`${SITE.name} — home`}
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card font-mono text-xs"
                aria-hidden="true"
              >
                {SITE.name.charAt(0)}
              </span>
              {SITE.name}
            </Link>
            <p className="text-sm text-muted-foreground">{SITE.tagline}</p>
          </div>

          {/* Nav */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2" aria-label="Footer">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="space-y-2">
            <p className="label-mono">Connect</p>
            <ul className="space-y-1.5">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.fullName}. Built with Next.js, TypeScript, and shadcn/ui.
          </p>
          <p className="font-mono">v2.0 · rebuilt</p>
        </div>
      </div>
    </footer>
  );
}
