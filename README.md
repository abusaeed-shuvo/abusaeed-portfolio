# Abusaeed — Portfolio

A production-grade portfolio for a software engineer specializing in AI systems, automation, and modern full-stack development. Dark-first, minimal, premium. Built to communicate **"I engineer systems"** — not "I know React."

**Live:** https://abusaeed-portfolio.vercel.app/

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, RSC by default)
- **Language:** TypeScript 5 (strict, no `any`)
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York, neutral base)
- **Motion:** Framer Motion (scroll-reveal only, reduced-motion aware)
- **Theming:** next-themes (dark-first, toggleable)
- **Icons:** Lucide React
- **Fonts:** Geist Sans + Geist Mono (loaded via `next/font`, `display: swap`)

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, JSON-LD, ThemeProvider, Header, Footer
│   ├── page.tsx                # Single-page composition of all sections
│   ├── globals.css             # Design tokens (dark-first), type scale, a11y defaults
│   ├── sitemap.ts              # SEO — sitemap.xml
│   ├── robots.ts               # SEO — robots.txt
│   └── opengraph-image.tsx     # Dynamic OG image (edge runtime, no asset needed)
│
├── components/
│   ├── ui/                     # shadcn/ui primitives
│   ├── layout/
│   │   ├── site-header.tsx     # Sticky header, anchor nav, mobile sheet, theme toggle
│   │   ├── site-footer.tsx     # Footer with nav + socials
│   │   └── theme-toggle.tsx    # Accessible theme toggle button
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── currently-building.tsx
│   │   ├── capabilities.tsx
│   │   ├── selected-work.tsx   # Tabs: Featured / Experimental / Archived
│   │   ├── engineering-experience.tsx
│   │   ├── skills.tsx          # Categorized, no progress bars
│   │   ├── github-stats.tsx    # Server component, graceful fallback
│   │   ├── writing.tsx         # Blog teaser, extensible, no posts yet
│   │   └── contact.tsx
│   └── shared/
│       ├── section.tsx         # Section wrapper (id, eyebrow, title, description)
│       ├── reveal.tsx          # Framer Motion scroll reveal, reduced-motion aware
│       ├── eyebrow.tsx         # Mono label above titles
│       ├── tag.tsx             # Tech pill
│       ├── icon.tsx            # String → Lucide icon resolver
│       ├── project-card.tsx    # Card + Dialog detail view
│       ├── project-status-badge.tsx
│       └── skill-group.tsx
│
├── data/                       # ← Single source of truth for all content
│   ├── site.ts                 # (in constants/) — name, role, socials, nav
│   ├── projects.ts             # All projects (featured / archived / experimental)
│   ├── skills.ts               # Categorized skills
│   ├── experience.ts           # Engineering experience (impact-focused)
│   ├── currently-building.ts   # What I'm building today
│   └── capabilities.ts         # What I engineer
│
├── constants/
│   └── site.ts                 # SITE, NAV_ITEMS, SOCIAL_LINKS, SECTION_IDS
│
├── types/
│   └── index.ts                # Project, SkillCategory, ExperienceEntry, etc.
│
├── animations/
│   └── variants.ts             # Shared Framer Motion variants
│
├── lib/
│   ├── utils.ts                # cn() class merger
│   ├── github.ts               # GitHub API + 1h cache + graceful fallback
│   └── format.ts               # Date formatting helpers
│
└── hooks/
    ├── use-mobile.ts
    └── use-toast.ts
```

### Design Principles

1. **Data-driven.** All content lives in `src/data/`. To add a project, edit `data/projects.ts` — no component changes.
2. **Server-first.** Only components that truly need interactivity are `"use client"` (header, theme toggle, tabs, dialogs, reveals). Everything else is RSC.
3. **Single source of truth for styling.** Design tokens in `globals.css`. No hardcoded hex colors in components.
4. **Accessibility is non-negotiable.** Semantic HTML, ARIA labels, keyboard navigation, focus-visible states, reduced-motion support, skip-to-content link.
5. **Subtle motion only.** Framer Motion is used exclusively for scroll-reveal. No hover scale, no flashy effects.

---

## Setup

### Prerequisites

- Node.js 18+ (or Bun)
- A package manager (npm / pnpm / bun)

### Install

```bash
bun install
# or
pnpm install
# or
npm install
```

### Develop

```bash
bun run dev
# or
pnpm dev
```

The site runs on `http://localhost:3000`.

### Build

```bash
bun run build
bun run start
```

### Lint

```bash
bun run lint
```

---

## Configuration

### Update your content

All content is in `src/data/`:

| File | What to edit |
|---|---|
| `constants/site.ts` | Name, role, tagline, email, social links, nav items |
| `data/projects.ts` | Add / edit / archive projects |
| `data/skills.ts` | Categorize and update skills |
| `data/experience.ts` | Engineering experience entries |
| `data/currently-building.ts` | What you're building today |
| `data/capabilities.ts` | Your engineering capabilities |

### GitHub integration

The GitHub section fetches live data server-side with a 1-hour in-memory cache. On rate-limit (60/hr unauthenticated) or any failure, it falls back to a static snapshot and shows a subtle notice.

To get 5000 requests/hour instead of 60, set a GitHub token:

```bash
# .env.local
GITHUB_TOKEN=ghp_your_personal_access_token
```

The token is **only ever read server-side** — never shipped to the client.

### Update the canonical URL

When deploying to a custom domain, update `SITE.url` in `src/constants/site.ts` so sitemap, OG, and JSON-LD point to the right place.

---

## SEO

- **Metadata:** Full `metadata` export in `app/layout.tsx` — title template, description, keywords, OpenGraph, Twitter card, robots.
- **Sitemap:** `app/sitemap.ts` → `/sitemap.xml`
- **Robots:** `app/robots.ts` → `/robots.txt`
- **Open Graph image:** Dynamic, rendered on-the-fly via `app/opengraph-image.tsx` (edge runtime). No asset file needed.
- **JSON-LD:** `Person` schema with `sameAs` (GitHub, LinkedIn) and `knowsAbout` (full skill list).

---

## Accessibility

- Semantic HTML throughout (`<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<article>`)
- Skip-to-content link (appears on keyboard focus)
- All interactive elements have visible focus states (`focus-visible:outline`)
- All icon-only buttons have `aria-label`
- Project cards are real `<button>` elements with descriptive `aria-label`
- Dialog uses shadcn/ui (Radix) — focus trap, ESC to close, backdrop click
- `prefers-reduced-motion` respected — animations disabled, content still readable
- Color contrast meets WCAG AA on both themes

---

## Performance

- **RSC by default** — only ~5 components are client components
- **Fonts** loaded via `next/font` with `display: swap`
- **No heavy hero assets** — replaced the old external iframe with a lightweight terminal motif
- **GitHub data** cached for 1 hour server-side
- **Dynamic OG image** rendered on edge runtime
- **No layout shift** — stable dimensions for async content

---

## Browser Support

Tested on the latest Chrome, Firefox, and Safari. Uses modern CSS (`oklch`, `clamp`, `text-wrap: balance`) — all supported in current browsers.

---

## License

MIT — see `LICENSE`.
