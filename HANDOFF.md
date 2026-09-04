# HANDOFF

Last session: 2026-09-04

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

## Changed 2026-09-04 — Access Now's interactive plates

The live Access Now page's Solution section is built from six HTML embeds that the port
had dropped. All six are now self-hosted in `/public/embeds` and placed in the block they
illustrate, matching the live composition.

The source of truth this session was the **Framer MCP** (`mcp.unframer.co`), not the rendered
site: `getNodeXml` on page `DqWZnxfDC` returns the whole page tree *including each Embed's
inline HTML*, so the embeds were lifted from it verbatim rather than re-authored. Use the same
route for anything else that is missing — it beats measuring the live DOM when the question is
"what is actually on this page".

**New embeds** (Framer nodeId in brackets):

- `contrast-checker-before.html` [SUolmht20] / `contrast-checker-after.html` [dMyUGKpKq] —
  block 01. #34C9B6 on white is 2.06:1 (fails AA); #008573 on white is 4.56:1 (passes AA);
  both numbers verified independently.
- `gutenberg-before.html` [MT7ilBnRf] / `gutenberg-after.html` [NgoYU7u7_] — block 02.
- `input-field-states.html` [US4Iryu5q] — block 03.
- `responsive-breakpoints.html` [GR67SbHkx] — block 04.

**Adapted from the Framer originals**, which were sized for fixed Framer frames:

- The contrast checkers were a 900px card cropped by a 454x108 wrapper at `scale(0.504)`.
  They now scale the card to fit whatever box the study gives them.
- Every embed respects `prefers-reduced-motion`: the checkers skip the intro sweep and show
  their verdict, the states walkthrough shows all five states at rest instead of cycling, the
  Gutenberg cards draw their finished path in one go, and the breakpoint scale renders complete
  rather than looping the draw-on.
- Labels, `aria-label`s and focus-visible rings added — the originals had none.
- `animateRatio` never stored its first `requestAnimationFrame` id, so `cancelAnimationFrame`
  could not stop a tween that had not recursed yet and a slider drag stacked one live tween
  per frame. Fixed in both checkers.

**Impact band.** `5XPoAP7...` is not a plate — on the live page it is the *background image* of
the Impact section (Framer `height: fit-image`), and the green shape plus the device mockups are
all in that one picture, with the copy held to 499px on top of it. `StudySection.backdrop` +
`copyWidth` now do that: the band is full-bleed, `aspect-ratio: 2048 / 1650` so its height tracks
the picture, `background-size: 100% auto`. Verified 1280x1031 at desktop with the copy at 499px
and 716px tall inside a 1031px band. Under 810px the aspect is dropped and the picture covers,
so the band grows with the text instead of clipping it.

**Images added** that the port was missing: `YXRF5YF3…`, `EkN8mGfd…` (block 02 cards),
`kGt0TVznt…`, `aejwPveGij…`, `DCsWSD55…` (block 04 breakpoints). All were already on disk.

**Embed sizing bug fixed (affected the member portal too).** `.group[data-layout="center"|"wide"]`
sizes its grid area to fit-content, and a replaced element's `width: 100%` against an indefinite
size falls back to an iframe's intrinsic 300px — so `member-portal-ia.html` had been rendering at
**300x157 instead of 1148x600**. Embeds now pass their design width to CSS as `--embed-w`
(`components/Figure.tsx`), which `Figure.module.css` uses on centre/wide and caps at 760px on a
phone. Verified: all six Access Now embeds and the member-portal IA map now render at their exact
design size on desktop and keep it (scrolling in-box, no page overflow) at 390px.

**Grey slab behind the plates removed.** `.item` carried `background: var(--gray)` as a load
placeholder. Most of these images are *palette* PNGs with a `tRNS` chunk — a PNG header check
reports them opaque, but their corners are alpha 0–4 — so the placeholder was showing through
their transparent ground as a grey box. Dropped; `aspect-ratio` already reserves the space, so
nothing shifts, and the section tint now shows through as on the live site. `iframe.item` keeps
its white ground.

### The Solution section is now laid out as the live page lays it out

Two layouts were added to `Figure` because the row-grid vocabulary could not express what
Framer does here. Both take the live px numbers straight from the MCP node tree:

- **`columns`** — labelled before/after columns, each stacking *its own* plates. Row grids
  pair plates across the full width, which is wrong when the two columns hold different
  numbers of plates at different sizes (block 02: two 176x115 tiles over a 446x253 shot).
  `labelSize` picks the live label size — `sub` on block 01, `lead` on block 02.
- **`stage`** — one frame with plates placed absolutely inside it, via `Figure.place` in the
  live frame's px. `Figure` converts them to percentages of the frame, so the composition
  scales down as one piece instead of reflowing. Block 03 is a 652x556 frame (phone pinned
  bottom-left at 500 tall, states panel 581x500 pinned top-right, overlapping it); block 04 is
  715x568 (desktop 552x313 top-right, tablet 222x307 at 78/83, mobile 136x273 bottom-left at
  107, breakpoint scale 715x100 pinned to the bottom at -3).
- **`tilePair`** — two natural-width tiles 10px apart, for the diagram-plus-card rows.
- **`Block.band`** puts a block's plates in a full-bleed `rgb(244,245,247)` band with the live
  64/64/96 padding, so the page alternates white copy bands with tinted plate bands as it does
  on the live site.

Verified at 1280 against the live numbers: laptops 552x313 with the checkers 552x165 twenty
pixels under them; Gutenberg tiles 176x115 ten apart over 446x253 shots; block 03's phone
362x500 (its own 657/908 aspect off a 500 height) under a 581x500 panel; block 04's four plates
all exact. Every embed's content now fits its frame to the pixel — the states embed's body
padding is `18px 22px` precisely so its stage lands on 581x500. At 390px the stages scale to
342 wide keeping their aspect, and the page has no horizontal overflow.

### Known differences from the live page, Access Now

- The breakpoint scale is 130px of content in a 100px frame, centred and clipped top and
  bottom — as on the live site, which pins it at `height: 100px`. Nothing meaningful is cut.
- Framer's own `Before`/`After` labels are separate text nodes with 25px of padding; here they
  are the column's `label` with the column gap doing that work.

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
