# Design System

Ported from the Framer project (`souvikb.net`). Tokens live in
[`app/globals.css`](app/globals.css); components in [`components/`](components).
Breakpoints follow Framer: **desktop ≥ 1200 · tablet ≤ 1200 · mobile ≤ 810**.

---

## Fonts

| Role | Family | Loaded via | Notes |
| --- | --- | --- | --- |
| Body | **Inter** | `next/font/google` | `--font-inter` |
| Display | Inter Display → Inter | — | `--font-inter-display` (falls back to Inter) |
| Headings | **Familjen Grotesk** | `next/font/google` | `--font-heading-fallback` — free stand-in for the licensed **BDO Grotesk** used in Framer. Swap in the real face when licensed. |

---

## Colour tokens

CSS variables on `:root`. Reference as `var(--token)`, never inline the hex.

| Token | Value | Use |
| --- | --- | --- |
| `--brand-primary` | `rgb(41, 39, 36)` | footer bg, primary buttons |
| `--brand-secondary` | `rgb(255, 68, 0)` | accent, active nav underline, dots |
| `--text-primary` | `rgb(18, 18, 18)` | body text |
| `--text-secondary` | `rgb(105, 105, 112)` | muted / secondary text (`.muted`) |
| `--white` | `rgb(255, 255, 255)` | — |
| `--black` | `rgb(18, 17, 17)` | near-black surfaces |
| `--black-pure` | `rgb(0, 0, 0)` | dark hero backdrops |
| `--bg` | `rgb(255, 255, 255)` | page background |
| `--dark-grey` | `rgb(17, 17, 17)` | Builds section background |
| `--gray` | `rgb(229, 229, 229)` | card borders, placeholders |
| `--grey-100` | `rgb(224, 225, 230)` | subtle dividers |
| `--blue-shade` | `rgb(209, 225, 232)` | plus-mark details |
| `--black-10` | `rgba(0,0,0,0.1)` | hairline borders |
| `--black-16` | `rgba(0,0,0,0.16)` | rules, HeaderBar line |
| `--black-50` | `rgba(0,0,0,0.5)` | overlays |
| `--purple-green` | `rgb(94, 103, 230)` | Lottie accent |
| `--theme-white-dark` | `rgb(255, 255, 255)` | theme surface |

---

## Text styles

Utility classes in `globals.css`. Sizes are desktop; the two columns after
are the `≤1200` and `≤810` overrides.

| Class | Font | Desktop | ≤1200 | ≤810 |
| --- | --- | --- | --- | --- |
| `.t-h1` | heading | 192 | 120 | 64 |
| `.t-h2` | heading | 72 | 52 | 36 |
| `.t-h3` | heading | 56 | 40 | 28 |
| `.t-h4` | heading | 40 | 30 | 22 |
| `.t-h5` | heading | 30 | 22 | 18 |
| `.t-h6` | heading | 24 | 18 | 16 |
| `.t-sub` | heading | 18 | 16 | 14 |
| `.t-body` | Inter | 16 | 16 | 15 |
| `.t-body2` | Inter | 12 | — | — |
| `.t-caption` | Inter | 10 | — | — |
| `.t-title` | Inter Display 500 | 16 | 13 | 10 |

`.muted` → `color: var(--text-secondary)`.

---

## Layout helpers

| Class | Effect |
| --- | --- |
| `.container` | `max-width: 1200px`, centered, `padding: 0 24px` |
| `.section` | `padding: 96px 0` |

`--maxw` = `1200px`.

---

## Component library

`components/` — each is a real `.tsx` (+ CSS module where needed).

| Component | Purpose | Key props |
| --- | --- | --- |
| `Nav` | fixed pill nav, active-route underline, mobile toggle | — (reads `data/site.nav`) |
| `HeaderBar` | section rule + `(0x)` / `(Section)` / `© SB` | `no`, `title`, `sig?`, `variant: "black" \| "white"` |
| `Marquee` | infinite scroll ticker (Framer "Ticker") | `speed?`, `children` |
| `TextReveal` | word-by-word reveal on scroll (Framer "TextStagger") | `text`, `as?`, `halfOpacity?` |
| `RollingText` | vertical word cycle (Framer "Rolling Text") | `words`, `interval?` |
| `WorkCard` | project tile: image + `(no)` / title / category / year | `project: Project` |
| `BuildCard` | Builds row: step no + title + tagline + body + link | `build: Build` |
| `Testimonials` | testimonial slider with dots + prev/next | — (reads `data/site.testimonials`) |
| `Footer` | email / phone / socials / copyright | — (reads `data/site.contact`) |
| `AskSouvik` | floating chatbot pill → `/api/ask` (Groq) | — |
| `SmoothScroll` | Lenis smooth-scroll rig (Framer "Smooth Scroll") | — |
| `PagePlaceholder` | temp shell for un-ported routes | `eyebrow`, `title` |

### External-module equivalents (from the Framer export)

| Framer module | npm | Status |
| --- | --- | --- |
| Ticker | — | hand-rolled → `Marquee` |
| TextStagger | `motion` | `TextReveal` |
| Rolling Text | `motion` | `RollingText` |
| Smooth Scroll | `lenis` | `SmoothScroll` |
| Phosphor | `@phosphor-icons/react` | installed, not yet wired |
| Animated Number Counter | `@number-flow/react` | not yet needed |
| Lottie_Icon | `lottie-react` | not yet needed |
| Liquid Hover (WebGL) | — | not ported (hero effect) |
| AskSouvik | custom | `AskSouvik` + `app/api/ask/route.ts` |

---

## Content source

All copy lives in [`data/site.ts`](data/site.ts) — pages read from it, never
hard-code strings in JSX. `data/persona.ts` holds the chatbot system prompt.

## Known gaps

- **BDO Grotesk** — using Familjen Grotesk until the real font is licensed.
- **Framer CDN images** — still `framerusercontent.com` URLs; localise before
  relying on offline / long-term.
- **Liquid Hover** hero WebGL effect not ported.
- Parallax card-flip avatar (home) not ported.
