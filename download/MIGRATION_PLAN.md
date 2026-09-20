# Portfolio Rebuild — Migration Plan

## 1. Analysis of the Existing Repository

### Current State
- Next.js 16.2.4 + React 19.2.4 + Tailwind 4
- 9 components in a flat `components/` folder
- 1 route (`app/page.tsx`) that imports 5 sections inline
- All UI is hand-rolled (no shadcn/ui, no design tokens)
- Dark theme is hardcoded via `bg-[#0d1117]` etc.

### Technical Debt Identified

**Architecture**
- No folder organization beyond `app/`, `components/`, `public/`. No `lib/`, `hooks/`, `data/`, `types/`, `constants/`, `animations/`.
- All content (project list, services, experience, tech stack) is inlined inside components — single source of truth does not exist.
- `page.tsx` mixes layout (`max-w-6xl mx-auto px-6`) with composition.

**Duplication**
- The card wrapper `p-6 border border-[#30363d] rounded-xl bg-[#161b22]` is copy-pasted across `Services`, `Process`, `Projects`, `Experience`, `ProfileCard`, `CTA`.
- Badge styling patterns (`bg-{color}-500/10 text-{color}-400 border border-{color}-500/20`) duplicated across `Hero` and `ProjectCard`.
- Color literals `#0d1117`, `#161b22`, `#30363d`, `#21262d`, `#1c2128` repeated ~30 times with no token.

**Component reusability**
- No `Section`, `Eyebrow`, `Tag`, `Button`, `Reveal` primitives — each section reinvents its own shell.
- `ProjectCard` is fine but coupled to a single `Project` shape with only 5 fields.

**Outdated / inconsistent libraries**
- Uses `@vercel/analytics` + `@vercel/speed-insights` (fine, but not configured).
- Hardcodes Geist font variables but never references `--font-geist-sans` in CSS.
- Two lockfiles present (`pnpm-lock.yaml` and `package-lock.json`) — pick one.

**Unnecessary animations / effects**
- `hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/10` on every project card — distracting.
- Hero loads a live external iframe (`spice-garden-smoky.vercel.app`) — slow, no fallback, kills LCP.
- Unused `fadeIn` keyframe in `globals.css` that nobody calls.
- `bg-blue-500/10 blur-3xl rounded-full` glow in hero — generic "developer portfolio" cliché.

**Responsiveness issues**
- Hero grid is `md:grid-cols-2` — on tablet portrait the iframe next to text is cramped.
- No fluid type scale — `text-3xl md:text-5xl` is a single jump.
- No container query / max-width handling for ultra-wide — content stretches to `max-w-6xl` (1152px) only, so ultra-wide feels empty.
- No mobile nav (no nav at all).

**Accessibility issues**
- `"use client"` on `Hero`, `Projects`, `ProjectCard` even though none of them need client JS — kills SSR and SEO.
- No `lang` attribute set beyond `html lang="en"` (ok) but no `skip-to-content` link.
- Color contrast: `text-gray-500` on `#161b22` fails AA for body text.
- No focus-visible styles on the `<a>` buttons — keyboard users get nothing.
- No `aria-label` on icon-only links (WhatsApp, Email).
- Avatar image is 500×500 but displayed at 96×96 — wastes bandwidth.
- No `prefers-reduced-motion` handling.

**SEO issues**
- `metadata` is generic: `title: "Abusaeed Portfolio"`, `description: "My portfolio made with Next.js 13 and Tailwind CSS"` — wrong version, no keywords.
- No Open Graph image.
- No Twitter card.
- No `sitemap.ts`, no `robots.ts`.
- No JSON-LD structured data.
- No semantic `<main>`, `<section>`, `<nav>`, `<footer>`.

**Performance bottlenecks**
- Hero iframe blocks LCP.
- No `next/image` optimization on `demo1.png` / `demo2.png` (used? not used? unclear).
- All components shipped as client — no RSC payload split.
- No font `display: swap` config.

### Content / Positioning Problems
- Headline: "I build fast, modern websites that help businesses grow" → reads as a junior freelancer.
- Hero shows a Fiverr button — signals commodity work, not senior engineering.
- "Open Source Contributor" claim with no links or proof.
- Tech stack lists 6 items only — does not reflect the user's actual AI / automation / full-stack expertise.
- Phone number exposed in WhatsApp link — privacy leak.
- No "currently building", no GitHub integration, no blog architecture, no real project detail (architecture, challenges, screenshots).

---

## 2. Migration Plan

### Goal
Rebuild as a single-page, dark-first, Linear/Vercel/Anthropic-style portfolio that communicates: **"I engineer production-grade software, AI agents, automation systems, developer tools, full-stack applications, and e-commerce infrastructure."**

### Target Architecture

```
src/
├── app/
│   ├── layout.tsx              # Fonts, metadata, JSON-LD, ThemeProvider, Header, Footer
│   ├── page.tsx                # Composes anchored sections
│   ├── globals.css             # Design tokens (dark-first), type scale
│   ├── sitemap.ts              # SEO
│   ├── robots.ts               # SEO
│   └── opengraph-image.tsx     # Dynamic OG image (no asset needed)
├── components/
│   ├── ui/                     # shadcn primitives (already present)
│   ├── layout/
│   │   ├── site-header.tsx     # Anchor nav + theme toggle + mobile sheet
│   │   ├── site-footer.tsx
│   │   └── theme-toggle.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── currently-building.tsx
│   │   ├── capabilities.tsx
│   │   ├── selected-work.tsx
│   │   ├── engineering-experience.tsx
│   │   ├── skills.tsx
│   │   ├── github-stats.tsx
│   │   ├── writing.tsx         # Blog teaser, extensible, no posts yet
│   │   └── contact.tsx
│   └── shared/
│       ├── section.tsx         # id + eyebrow + heading + children
│       ├── reveal.tsx          # Framer Motion scroll reveal, reduced-motion aware
│       ├── eyebrow.tsx
│       ├── tag.tsx             # Tech pill
│       ├── project-card.tsx
│       └── skill-group.tsx
├── lib/
│   ├── utils.ts                # cn() (exists)
│   └── github.ts               # Server fetch + graceful fallback + in-memory cache
├── hooks/
│   ├── use-mobile.ts           # exists
│   ├── use-toast.ts            # exists
│   └── use-github.ts           # client hook (optional, for live refresh)
├── data/
│   ├── site.ts                 # name, role, socials, contact, nav items
│   ├── projects.ts             # single source of truth (featured/archived/experimental)
│   ├── skills.ts               # categorized, no progress bars
│   ├── experience.ts           # engineering experience, impact-focused
│   ├── currently-building.ts   # easy to update list
│   └── capabilities.ts         # what I do
├── types/
│   └── index.ts                # Project, SkillCategory, ExperienceEntry, etc.
├── constants/
│   └── site.ts                 # NAV_ITEMS, SOCIAL_LINKS, SITE_URL
└── animations/
    └── variants.ts             # shared Framer Motion variants
```

### Design Direction
- **Palette**: near-black background (`oklch(0.145 0 0)`), soft-white foreground, neutral border `oklch(1 0 0 / 10%)`. No blue/indigo accents (per workspace rule) — accent is white-with-zinc-tint for that Linear/Vercel feel.
- **Typography**: Geist Sans (already loaded) + Geist Mono for technical labels and eyebrows. Fluid type scale via `clamp()`.
- **Whitespace**: `py-24 md:py-32` between sections. Container `max-w-6xl mx-auto px-6`.
- **Motion**: only scroll-reveal (`opacity` + `y: 8px`), `prefers-reduced-motion` respected. No hover scale.
- **Borders**: 1px subtle borders, no heavy shadows.

### Content Rewrites
- Replace "I build fast, modern websites" → "I engineer production-grade software, AI agents, and automation systems."
- Remove Fiverr button. Replace with "View Work" + "Get in touch".
- Replace "Services" → "Capabilities" with engineering-focused items.
- Replace fake experience timeline → impact-focused engineering experience.
- Tech stack: full categorized list (AI / Frontend / Backend / Automation / Infrastructure / Databases / DevOps / Languages / Developer Tools / Mobile & Other).
- Projects: rich data (architecture highlights, challenges solved, status, screenshots slot — gracefully degrades when missing).
- "Currently Building" section listing AI Agent Ecosystem, Local AI Development, Full-stack Applications, Business Automation, AI-powered E-commerce, Open Source Tools.

### Tech Updates
- Switch from hand-rolled CSS to shadcn/ui + design tokens.
- Move all components to RSC (remove unnecessary `"use client"`).
- Use Framer Motion only for `Reveal` wrapper.
- Add `next-themes` for theme toggle (dark-first default).
- Add `sitemap.ts`, `robots.ts`, JSON-LD `Person` schema.
- Dynamic OG image via `opengraph-image.tsx`.
- GitHub API integration server-side with 60-minute in-memory cache and graceful fallback to static data on rate limit.

### Deliverable Checklist
- [x] Analysis (above)
- [x] Migration plan (this document)
- [ ] Refactor architecture
- [ ] Reusable components
- [ ] Rewritten content
- [ ] Updated design
- [ ] Performance optimization (RSC, lazy images, dynamic imports, OG/sitemap/robots/JSON-LD)
- [ ] Responsive (mobile → ultra-wide)
- [ ] Accessibility (keyboard, ARIA, semantic HTML, reduced motion, contrast)
- [ ] Production readiness (lint clean, no `any`, strict TS)
- [ ] README updated

---

*This plan is the source of truth for the rebuild. The implementation follows it strictly, working bottom-up: design tokens → primitives → data → sections → page.*
