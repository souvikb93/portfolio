# HANDOFF

Last session: 2026-08-31

## Goal

Self-hosted Next.js rebuild of the Framer portfolio `souvikb.net`, in Git, deployed on Vercel,
matching the live site's design. All copy lives in `data/*.ts` — never hardcode strings in JSX.

- Repo: https://github.com/souvikb93/portfolio (`~/portfolio`, branch `main`)
- Deploy: https://portfolio-iota-opal-81.vercel.app/
- Live target: https://www.souvikb.net/

## State

Pushed through `9b49459`. Vercel build is live and verified: **zero `framerusercontent`
references**, no broken images, BDO Grotesk loading, `npm run build` green (13 routes).

The method this session was **measurement, not eyeballing**: every size, line-height, tracking
and offset below was read off the live site via `getBoundingClientRect` / `getComputedStyle`
at 1280x800 and diffed against the local DOM. That is the way to keep working on this — see
"Tooling limits" for why screenshots alone don't work here.

### Verified matching production vs. live (1280x800)

| | Live | Vercel |
|---|---|---|
| Nav box | 24 / 1232 / 70 | identical |
| "designer" | left 825, top 334, h 132 | identical |
| "UX / UI" | left 176, top 334 | left 186 (10px Antonio side-bearing) |
| Project card | 640x494, stride 518 | identical |
| Sticky offsets | 50 / 90 / 130 | identical |
| Section order | hero → logos → builds(02) → projects(03) → testimonials(04) | identical |

## Files

- `app/globals.css` — the token system + type scale. **Start here.** Sizes/tracking are
  measured values expressed as ratios/em so they hold across breakpoints.
- `app/fonts/BDOGrotesk-Variable.woff2` — self-hosted, loaded via `next/font/local`.
- `components/Hero.*` — sticky card + two 100vh type panels.
- `components/ActionLink.*` — the single link/button primitive (dark/light tones).
- `components/AskSouvik.*` — the chat, home page only.
- `app/api/ask/route.ts` — Groq proxy. Key stays server-side.
- `data/site.ts` — all home/nav/projects/builds content.

## Changed this session

**Fonts.** Self-hosted the real BDO Grotesk (variable woff2, 400–1000) that the live site
serves, replacing the Familjen Grotesk stand-in. Antonio (Google) for the two hero display
words. *This is the single biggest fidelity change.*

**Type scale.** Rewritten from measurements: `.t-h1` 192/196/-7px, `.t-h2` 70/70/-2.1 w500,
`.t-h3` 56/64/-1.5, `.t-h4` 40/48/-1, `.t-page` 100/100/-3 (index-page heroes), `.t-meta`
12/16.2/-0.5, `.t-cap` 10/11.2, `.t-link` 16/20.2/-0.5.

**Layout.** `.container` is `min(1440px, 100% - 48px)`; new `.container-narrow` (1200px) for
hero rows. Home order corrected and the standalone About section removed — on the live site
that content is panel 2 of the sticky hero, so it moved into `Hero`.

**Hero.** Two 100vh panels behind one sticky card. Display words are **static** — the live word
does not rotate within a session (verified over 19 samples), so `RollingText` is no longer used
here. Name/blurb hang off the word's own edges. Badge centred on the card's bottom-left corner.

**Builds + cards.** Build rows use the live geometry (number 300px inset 94px, text column 386px
right-aligned). Project cards are 640x494 with a 640/452 media plate at 5px radius and a meta row
that is 12/16.2 throughout — the title was wrongly 16px.

**Chat.** Ported from the Framer `AskSouvik` component: pill↔panel animation, gradient orb,
typing-dots greeting, retiring prompt chips, auto-open past 80% scroll once per session, idle
collapse, click-outside/Escape. Moved to home only.

**Components + states.** New `ActionLink` replaced three duplicate link styles. Added
hover/press/**focus-visible** to nav, cards, action links and carousel arrows — there were no
focus styles anywhere before, which was an accessibility gap. All motion respects
`prefers-reduced-motion`.

**No Framer dependency.** All 8 images pulled into `/public/images`; `remotePatterns` removed
from `next.config.ts`.

**Bugs fixed along the way.** `TextReveal` called `motion.create()` during render (new component
type every render → remounted the heading, restarting the animation). Two CSS-modules bugs where
a global utility was used unscoped inside a module (`.copy .t-body`, `.edgeCard .t-h3`) so it was
hashed to a name that never matched. A `width: 100%` overriding the hero container. Carousel
arrows falling back to Arial.

## Failed / open

**BLOCKING — user action required:**

1. **Set `GROQ_API_KEY` in Vercel env vars.** The chat 500s in production until this is done
   (`{"error":"GROQ_API_KEY is not set"}`). It works locally via `.env.local` (gitignored).
2. **Rotate the Groq key.** The current one was pasted into a chat transcript, and the previous
   one was public in shipped Framer JS.

**Why the Framer chat is broken** (diagnosed, not fixed): all four models in the component's
`ControlType.Enum` dropdown are dead on this account —
`llama-3.3-70b-versatile` and `llama-3.1-8b-instant` return `model_not_found`,
`mixtral-8x7b-32768` and `gemma2-9b-it` return `model_decommissioned`. The 404 doesn't match the
component's 429/401/403 branches, so it shows the generic "something glitched" message. Because
the options are a code-level enum, this can't be fixed from the Framer UI — the code file needs
new model IDs. This app now uses `openai/gpt-oss-120b` (overridable via `GROQ_MODEL`).

**Known differences from the live site:**

- Home shows **3 builds** (Tracka, Shift Assist, Farm.doc); the live site shows 2. Farm.doc is
  real newer work, so it was kept rather than trimmed to match.
- Builds/projects section heights differ by 1–8% because the body copy differs in length, not
  because the layout differs.
- The live site has a small rotated vertical "(Builds) © SB" label at the right edge of hero
  panel 2. Not reproduced.
- **Mobile is deliberately unfinished** — the user asked to focus on desktop. The hero has a
  reasonable mobile fallback (card shrinks, badge stays on screen, satellites return to flow)
  but nothing below the hero has been checked against the live mobile layout.
- BDO Grotesk is self-hosted from the file the live site already serves publicly. **Confirm the
  licence permits self-hosting outside Framer.**

## Tooling limits (read before debugging)

- `requestAnimationFrame` does not fire when the Browser pane is hidden, so **Motion animations
  never progress** and screenshots catch them mid-flight or unstarted. This is not a bug in the
  code. Verify animated components by asserting state (`data-open`, rendered bubbles) instead.
- Screenshots of *scrolled* Framer pages come back blank — its reveals are scroll-triggered.
  Measure the live DOM via `javascript_tool` instead; absolute positions (`rect.top + scrollY`)
  are reliable regardless of scroll.
- Editing hooks over HMR produces "dependency array changed size" errors and can freeze
  animations. Hard reload before trusting what you see.

## Next

1. Set `GROQ_API_KEY` in Vercel, then re-test `POST /api/ask` in production.
2. Mobile pass across all routes (explicitly deferred this session).
3. Case-study pages (`/projects/[slug]`, `/builds/[slug]`) have not been diffed against the live
   site yet — only the index pages have.
4. Consider trimming the hero "UX / UI" 10px side-bearing gap if exactness matters.
