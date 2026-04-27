# Audit · Preview ↔ Storybook alignment

> **Status:** as of this commit, all components consume the same component tokens defined in `colors_and_type.css`. No more inline pixel sizes.

## What was drifting

Both the standalone preview cards (`preview/*.html`) and the Storybook components (`storybook-app/src/components/*`) used to hardcode their own font sizes, heights, and radii. The token file `colors_and_type.css` was identical in both copies, but components weren't consuming it — so any change to a token didn't ripple, and the same nominal "A14 / 600" rendered at three different sizes depending on which file you opened.

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

All these now resolve from named tokens in `colors_and_type.css` (and its mirror at `storybook-app/src/styles/tokens.css`):

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

`colors_and_type.css` (project root) is the source. `storybook-app/src/styles/tokens.css` is a copy.
After editing the source, run:

```bash
cp colors_and_type.css storybook-app/src/styles/tokens.css
```

(or set up a symlink / a `cp` pre-script in `storybook-app/package.json`'s `dev`/`build`).

## Files touched

**Tokens**
- `colors_and_type.css` — added Component-tokens block (Button / Input / Badge / micro text / Tab bar)
- `storybook-app/src/styles/tokens.css` — copy of source

**Storybook components**
- `Button/Button.module.css` — sizes pull from `--zd-btn-*`; removed inline letter-spacing duplication
- `Input/Input.module.css` — single height (44), token-driven; size classes are now no-ops kept for API compat
- `Badge/Badge.module.css` — sizes pull from `--zd-badge-*`
- `ProductCard/ProductCard.module.css` — ADD/stepper use `--zd-btn-h-sm` + A12; price stamp uses B12/B14; all 10/12 text now consumes `--zd-b10-*`; "Best Value" pill consumes `--zd-b8-*`
- `Header/Header.module.css` — eta H16, address B12, search consumes `--zd-input-*`
- `BottomTabBar/BottomTabBar.module.css` — label + dot consume tab-bar tokens

**Preview cards**
- `preview/buttons-variants.html` — token-driven, 6 variants on MD baseline
- `preview/buttons-sizes.html` — XXS → XL each annotated with its A-tier
- `preview/inputs.html` — single 44h size from `--zd-input-*`
- `preview/badges.html` — MD baseline pulls from `--zd-badge-*`, O10 text
- `preview/product-cards.html` — same tokens as the Storybook ProductCard
- (`preview/type-*.html` already consumed `.zd-a*` / `.zd-b*` / `.zd-h*` — unchanged)

## Open follow-ups (not part of this pass)

- The Input component still exposes `size: 'sm' | 'md' | 'lg'` as a prop for back-compat, but they all render at 44h now. If you want true density variants, ask and we'll add `--zd-input-h-{sm,md,lg}` tokens.
- `font-size: 14px` letter-spacing was inline `0.2px` on the button base; removed. All A-tier letter-spacing now comes from `--zd-a*-tracking` (also 0.2px — visually identical).
- The icon button widths in the ProductCard stepper (`width: 18px; height: var(--zd-btn-h-sm)`) are still hardcoded for that micro layout — left as-is on purpose.
