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

CSS variables on `:root`. Reference as `var(--token)`, **never inline a hex /
`rgb()` / `rgba()`** in component CSS or TSX. Only exception: SVG `fill=` inside
data-URI logos (`Logos.module.css`).

### Base

| Token | Value | Use |
| --- | --- | --- |
| `--brand-primary` | `rgb(41, 39, 36)` | footer bg, primary buttons |
| `--brand-secondary` | `rgb(255, 68, 0)` | accent, nav underline, "Hi" badge, dots |
| `--text-primary` | `rgb(18, 18, 18)` | body text |
| `--text-secondary` | `rgb(105, 105, 112)` | muted / secondary text (`.muted`) |
| `--white` | `rgb(255, 255, 255)` | — |
| `--black` | `rgb(18, 17, 17)` | near-black surfaces |
| `--black-pure` | `rgb(0, 0, 0)` | project/build hero backdrops |
| `--bg` | `rgb(255, 255, 255)` | page background |
| `--dark-grey` | `rgb(17, 17, 17)` | Builds section background |
| `--gray` | `rgb(229, 229, 229)` | card borders, image placeholders |
| `--grey-100` | `rgb(224, 225, 230)` | subtle dividers |
| `--blue-shade` | `rgb(209, 225, 232)` | plus-mark details |

### Alpha overlays (on light)

| Token | Value | Use |
| --- | --- | --- |
| `--hairline` | `rgba(0,0,0,0.1)` | 1px hairline borders |
| `--rule` | `rgba(0,0,0,0.16)` | rules, HeaderBar line, list separators |
| `--scrim` | `rgba(0,0,0,0.5)` | modal / image scrims |
| `--black-10` / `--black-16` / `--black-50` | aliases of the three above | legacy — do not use in new code |

### On dark

| Token | Value | Use |
| --- | --- | --- |
| `--on-dark` | `var(--white)` | text on `--dark-grey` / `--black-pure` |
| `--on-dark-70` | `rgba(255,255,255,0.7)` | secondary text on dark |
| `--on-dark-40` | `rgba(255,255,255,0.4)` | link underlines on dark |
| `--on-dark-hairline` | `rgba(255,255,255,0.15)` | hairline on dark |
| `--on-dark-rule` | `rgba(255,255,255,0.2)` | rule on dark |

### Component / semantic

| Token | Value | Use |
| --- | --- | --- |
| `--surface-muted` | `rgb(247, 247, 247)` | inset panels |
| `--link` | `rgb(0, 102, 204)` | inline text links |
| `--nav-surface` | `rgba(255,255,255,0.7)` | nav pill (scrolled-top) |
| `--nav-surface-solid` | `rgba(255,255,255,0.95)` | nav pill (scrolled) |
| `--shadow-sm` | `0 8px 30px rgba(0,0,0,0.12)` | cards |
| `--shadow-lg` | `0 20px 60px rgba(0,0,0,0.18)` | raised / hover |

---

## Spacing scale

4px base. **No raw px for spacing, offsets, or width caps in component CSS** —
use a token. Intrinsic element sizing (icon 24px, dot 5px, card 340×476) may
stay literal.

| Token | px | | Token | px |
| --- | --- | --- | --- | --- |
| `--space-1` | 4 | | `--space-12` | 48 |
| `--space-2` | 8 | | `--space-16` | 64 |
| `--space-3` | 12 | | `--space-20` | 80 |
| `--space-4` | 16 | | `--space-24` | 96 |
| `--space-5` | 20 | | `--space-30` | 120 |
| `--space-6` | 24 | | `--space-40` | 160 |
| `--space-8` | 32 | | | |
| `--space-10` | 40 | | | |

### Semantic spacing (prefer these)

| Token | = | Use |
| --- | --- | --- |
| `--gutter` | `--space-6` | horizontal page padding (`.container`) |
| `--section-y` | `--space-24` | vertical section rhythm (`.section`) |
| `--section-y-sm` | `--space-16` | tighter section rhythm |
| `--stack-xs…xl` | 8 / 12 / 20 / 40 / 80 | vertical gaps inside a block |
| `--nav-offset` | `--space-30` | sticky `top:` clearance below the fixed nav |

### Width caps

| Token | px | Use |
| --- | --- | --- |
| `--content-max` (`--maxw`) | 1200 | `.container` max width |
| `--prose-max` | 720 | long-form body copy (`.prose`, study `> p`) |
| `--measure` | 500 | short intro / blurb lines (`.measure`) |

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
| `.container` | `max-width: var(--content-max)`, centered, `padding: 0 var(--gutter)` |
| `.section` | `padding: var(--section-y) 0` |
| `.prose` | `max-width: var(--prose-max)` |
| `.measure` | `max-width: var(--measure)` |
| `.stack` / `.stack-sm/md/lg` | `display:flex; flex-direction:column` + `--stack-*` gap |
| `.muted` | `color: var(--text-secondary)` |
| `.fw-500` / `.mt-3` / `.mt-10` | weight / margin-top helpers |

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

## Hero

`components/Hero.tsx` (+ `.module.css`). 200vh sticky section. Centre = flip
card (front portrait / back GIF), `data-flipped` state driven by scroll progress
+ 4.2s idle auto-flip. Card sits in its own `.cardPerspective` (has
`perspective`, **no `overflow`** — needed for 3D) above the type layer
(`z-index`). Type layer is absolute: name + `RollingText` bottom-left, big
Antonio `designer` word + blurb mid-right; overlap with the card is intentional
depth, not a collision. `--font-antonio` (Antonio 700) is the big display word.

---

## Known gaps

- **BDO Grotesk** — using Familjen Grotesk until the real font is licensed.
- **Framer CDN images** — still `framerusercontent.com` URLs; localise before
  relying on offline / long-term.
- **Liquid Hover** hero WebGL effect not ported (replaced by the flip card).
- Micro sizes (`5px` dot, `6px` gap, `24px` hamburger) still literal in a few
  component CSS files — intrinsic sizing, low priority.
