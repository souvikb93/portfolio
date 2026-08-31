# HANDOFF

_Last session: 2026-08-31_

## Goal

Self-hosted Next.js rebuild of the Framer portfolio `souvikb.net`, in Git,
deployed on Vercel. Match the live site's design exactly. All copy from
`data/*.ts` — never hardcode strings in JSX. This session: design-system audit —
kill hardcoded values, unify padding, fix hero overlap, update `DESIGN_SYSTEM.md`.

- Repo: https://github.com/souvikb93/portfolio.git (`~/portfolio`, branch `main`)
- Deploy: https://portfolio-iota-opal-81.vercel.app/
- Live target: https://www.souvikb.net/

## State

- **Pushed** — commit `e27c51f` "Design system pass". Vercel auto-deploy running.
- `npm run build` passes. 9 routes prerender static (`/`, `/about_me`,
  `/projects`, `/builds`, 4 case studies, `/builds/tracka`). `/api/ask` dynamic.
- Design tokens: full 4px spacing scale + semantic tokens + width caps + colour
  system in `app/globals.css`. Zero raw `rgb()/rgba()/hex` outside `globals.css`
  and `Logos.module.css` (SVG fills). Raw spacing px swept to tokens across all
  module CSS. No inline `style={{}}` left in TSX.
- Hero rebuilt: 200vh sticky flip card + absolute type layer (was a 3-col grid
  that collided). Overlap of the "designer" word with the card is now
  intentional depth via z-index, not a layout bug.

## Files

- `app/globals.css` — the token system. Start here.
- `DESIGN_SYSTEM.md` — updated: spacing scale, no-raw-px rule, colour tokens,
  width caps, hero notes.
- `components/Hero.tsx` + `Hero.module.css` — flip card + type layer.
- `app/page.tsx` + `app/Home.module.css` — home sections.
- `components/StudyPage.*` — shared long-form layout for `/projects/[slug]` +
  `/builds/[slug]`.
- `data/site.ts`, `data/caseStudies.ts`, `data/buildStudies.ts`, `data/persona.ts`
  — all content.
- `app/api/ask/route.ts` — Groq proxy, reads `GROQ_API_KEY` env.

## Changed this session

- `globals.css` rewritten with `--space-1..40`, `--gutter`, `--section-y`,
  `--stack-*`, `--nav-offset`, `--content-max/--prose-max/--measure`, alpha +
  on-dark + component colour tokens, legacy `--black-10/16/50` aliases.
- Raw colours → tokens across every module CSS.
- Raw `gap/padding/inset` px → tokens in Home, StudyPage, Hero, Nav, Marquee,
  BuildCard, Testimonials, AskSouvik, HeaderBar, About, Projects, Builds.
- Inline styles removed: `PagePlaceholder` → new `PagePlaceholder.module.css`;
  `about_me` → utility classes; `StudyPage` summary → `styles.summary`;
  `page.tsx` `STICKY_TOPS` array → CSS `nth-child`.
- Hero `.text` changed from `display:grid 3-col` to absolute-positioned
  left/right blocks behind the card; dropped `margin-left` negative bleed.
- `DESIGN_SYSTEM.md` sections added/updated.

## Failed / open

- **Browser preview pane can't screenshot scrolled content** (`window.scrollTo` /
  `computer scroll` time out — "pane is hidden"). Tooling limit, not a site bug.
  Verify layout via `javascript_tool` DOM (`getBoundingClientRect`,
  `getComputedStyle`); fresh-navigation screenshots at scrollY 0 work.
- Design-system pass **not yet visually verified on the live Vercel deploy** —
  wait for the `e27c51f` build, then check padding consistency + no overlaps at
  1280 / 1440 / 1600.
- Hero "designer" word still overlaps the portrait more than `souvikb.net` —
  acceptable as depth but compare once deployed; tune `.bigWord` clamp / `.right`
  offset in `Hero.module.css` if too aggressive.
- Micro sizes (`5px` dot, `6px` gap, `24px` hamburger) still literal in a few
  component CSS files — intrinsic sizing, low priority.

## Next

1. Wait for Vercel `e27c51f` deploy. Load it at 1280/1440/1600 — confirm padding
   consistent, nothing overlaps, hero matches `souvikb.net`.
2. Tune hero "designer" overlap if needed.
3. **User action required:** rotate the leaked Groq key at console.groq.com
   (`gsk_6PZG9x0z…` was hardcoded in shipped Framer JS — public). Add the new
   value as `GROQ_API_KEY` in Vercel env vars. Key must NEVER be committed.
4. Later: localise `framerusercontent.com` images; license real BDO Grotesk
   (currently Familjen Grotesk stand-in).
