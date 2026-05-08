# Audit · Preview ↔ Storybook alignment

> **Status:** single source of truth established. `storybook-app/src/styles/tokens.css` is the only token file. Both Storybook and `preview/*.html` link it directly via relative path. Edits propagate to both surfaces with no copy step.

## What was drifting

Both the standalone preview cards (`preview/*.html`) and the Storybook components (`storybook-app/src/components/*`) used to hardcode their own font sizes, heights, and radii. Until recently the token file was even duplicated as `colors_and_type.css` (root) **and** `storybook-app/src/styles/tokens.css` (Storybook copy), kept in sync by a manual `cp`. That copy is now gone — there is only `tokens.css`.

Concrete drift before this audit:

| Component | Preview was | Storybook was | Now (single source) |
|---|---|---|---|
| Button XS (28h) | font-14 | font-12 | **A12** (12 / 16 / 600) |
| Button SM (32h) | font-14 | font-13 | **A12** (12 / 16 / 600) |
| Button MD (40h) | font-14 | font-14 | **A14** (14 / 20 / 600) |
| Button LG (48h) | font-16 | font-15 | **A16** (16 / 24 / 600) |
| Button XL (56h) | font-18 | font-16 | **A16** (16 / 24 / 600) |
| Input | 44h, font-14 | 36/40/52, font-13/14/16 | **44h single**, B14 |
| Header search | — | font-13, padded | matches Input (44h, B14) |
| Badge MD | font-11/12 inline | font-10 | **O10** (10 / 12 / 600 / +0.5px) |
| ProductCard ADD | font-12, h-32 inline | font-12, h-32 inline | **SM button** (A12, 32h) |
| Tab bar label | n/a | font-10 inline | **B10** (10 / 12 / 500) |
| ProductCard mini text (qty/savings/tags/rating) | font-10 inline | font-10 inline | **B10** (10 / 12) |
| ProductCard "Best Value" pill | font-8 inline | font-8 inline | **B8** (8 / 10) |

## Single source of truth

All these now resolve from named tokens in `storybook-app/src/styles/tokens.css`:

```css
/* Button sizes */
--zd-btn-h-{xxs,xs,sm,md,lg,xl}      /* 24 / 28 / 32 / 40 / 48 / 56 */
--zd-btn-px-{xxs..xl}                 /* 8 / 10 / 12 / 14 / 16 / 20 */
--zd-btn-r-{xxs..xl}                  /* radius alias */
--zd-btn-text-{xxs..xl}-size,-lh      /* A12 / A12 / A12 / A14 / A16 / A16 */

/* Input */
--zd-input-h           /* 44 */
--zd-input-px          /* 12 */
--zd-input-radius      /* 10 */
--zd-input-text-{size,lh}   /* B14 */
--zd-input-label-{size,lh}  /* B12 */

/* Badge */
--zd-badge-h-{sm,md,lg}        /* 18 / 22 / 26 */
--zd-badge-px-{sm,md,lg}       /* 6 / 8 / 10 */
--zd-badge-text-{sm,md,lg}-{size,lh}

/* Micro/utility text — components apply these classes (or pull tokens) */
.zd-b10  /* 10 / 12 / 400  */
.zd-b8   /*  8 / 10 / 400  */

/* Tab bar */
--zd-tabbar-dot-size
```

## How to keep them in sync

There is nothing to sync. `storybook-app/src/styles/tokens.css` is the only token file.

- Storybook imports it via `src/styles/global.css` (`@import './tokens.css'`).
- Every `preview/*.html` links it with `<link rel="stylesheet" href="../storybook-app/src/styles/tokens.css">`.

Edit the file once — both surfaces reflect the change on reload.

## Files touched

**Tokens**
- `storybook-app/src/styles/tokens.css` — the single source of truth (color, type, spacing, radius, motion, component tokens for Button / Input / Badge / micro text / Tab bar)

**Storybook components — now plain CSS shared with previews**

Each component renames its old `*.module.css` to a plain `*.css` with `zd-`-prefixed
selectors, so both Storybook and the static preview HTMLs link the same file. No
more inline-style duplication across the two surfaces.

- `Button/Button.css` — sizes pull from `--zd-btn-*`; removed inline letter-spacing duplication
- `Input/Input.css` — single height (44), token-driven; size classes are now no-ops kept for API compat
- `Badge/Badge.css` — sizes pull from `--zd-badge-*`
- `Header/Header.css` — eta H16, address B12, search consumes `--zd-input-*`
- `BottomTabBar/BottomTabBar.css` — label + dot consume tab-bar tokens

(`ProductCard` was later removed from Storybook entirely.)

**Preview cards**
- `preview/buttons-variants.html` — token-driven, 6 variants on MD baseline
- `preview/buttons-sizes.html` — XXS → XL each annotated with its A-tier
- `preview/inputs.html` — single 44h size from `--zd-input-*`
- `preview/badges.html` — MD baseline pulls from `--zd-badge-*`, O10 text
- (`preview/type-*.html` already consumed `.zd-a*` / `.zd-b*` / `.zd-h*` — unchanged)

## Open follow-ups (not part of this pass)

- The Input component still exposes `size: 'sm' | 'md' | 'lg'` as a prop for back-compat, but they all render at 44h now. If you want true density variants, ask and we'll add `--zd-input-h-{sm,md,lg}` tokens.
- `font-size: 14px` letter-spacing was inline `0.2px` on the button base; removed. All A-tier letter-spacing now comes from `--zd-a*-tracking` (also 0.2px — visually identical).
- The icon button widths in the ProductCard stepper (`width: 18px; height: var(--zd-btn-h-sm)`) are still hardcoded for that micro layout — left as-is on purpose.
