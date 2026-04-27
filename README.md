# Zepto Design System

This is a working design system for **Zepto**, India's 10-minute grocery delivery
service. It packages Zepto's brand foundations — colors, typography, fonts,
icons, components, and copy voice — so design agents can generate on-brand
artifacts (mocks, prototypes, decks, marketing visuals) without re-deriving
the system every time.

## What is Zepto?

Zepto is a quick-commerce app that delivers groceries, daily essentials, fresh
produce, beauty/personal care and ready meals to Indian customers in **10
minutes**, from a network of dark stores across major metros. Speed is the
brand's central promise — most product surfaces lead with a delivery countdown
("delivery in 8 mins"), and pricing/savings copy is the second beat.

### Sub-brands & products represented

The token system reveals several distinct sub-brands. Treat them as separate
"skins" that share base typography but swap palette and tone:

| Surface | Role | Palette signal |
|---|---|---|
| **Zepto** (consumer app/web) | Default. Grocery + everyday delivery. | Hot pink (`#f9105e`) on white; greys; green for savings |
| **Zepto Pass** (membership) | Premium membership tier — free delivery, exclusive deals. | Deep purple/royale (`#1f1537`, `#332060`) with gold/lime accents |
| **Zepto Daily Pass** | Lower-cost subscription. | Deep grass green (`#103520`) + bright lime (`#ffe852`) |
| **Zepto Cafe** | Ready-to-eat / hot food delivery. | Teal accents over the base palette |
| **Super Saver** | Bulk-buy/larger-pack savings strip. | Green (`#329537`) — same as success |
| **Royale / Fashion** | Tier inside the app for fashion. | Royale purple (`#332060`) |

This design system focuses on the **default consumer Zepto** brand. Sub-brand
tokens are exposed as `--zd-pass-*`, `--zd-daily-*` etc. for when you need them.

## Sources

These are the source-of-truth references this system was built from. Don't
assume the reader has access — they're recorded in case you do.

- **Zesto design system codebase** (local mount: `zesto-main/`) — Zepto's
  internal portable component library. Contains:
  - `tokens/json/` — DTCG-format design tokens (base palette, light semantics,
    component values, text styles).
  - `tokens/tokens.css` + `tokens/generated/variables.css` — compiled CSS vars.
  - `fonts/zepto-norms/` — five weights of Zepto Norms (`.woff`).
  - `components/Button/` — the only fully-built component so far (variants:
    primary, secondary, tertiary, neutral, ghost, linkSecondary, linkNeutral;
    sizes XXS→XL = 24→56px; loading/disabled states).
  - Figma reference linked in their README:
    *Consumer Components — App (Beta)*,
    `https://www.figma.com/design/TCuq1q8rJ7UEZUYVXOnj6O/Consumer-Components---App--Beta-`
- **`beprabhu/zeptoorigami`** (GitHub) — the public "Zepto Origami" design-system
  repo. Currently a stub (README only) — likely a future home for the system.
- **Uploaded font files** — `Zepto Norms DemiBold-ui.ttf`, `ZeptoNorms-Bd-ui.ttf`,
  `ZeptoNorms-Md-ui.ttf`, `ZeptoNorms-Normal-ui.ttf` (the "-ui" variants are
  Zepto Norms cuts tuned for product UI).

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file. Brand overview, content & visual foundations, manifest. |
| `colors_and_type.css` | Canonical CSS variables for color, type, spacing, radius, motion. Import once at the top of any artifact. |
| `fonts/` | Zepto Norms web fonts (`.woff` weights 400/500/600/700/900) and the uploaded `-ui` TTFs. |
| `assets/` | Brand assets — logos, generic illustrations, sample imagery placeholders. |
| `preview/` | Static HTML preview cards for the Design System tab (one card per concept). |
| `ui_kits/zepto-app/` | Hi-fi recreation of the Zepto consumer app — JSX components + `index.html`. |
| `SKILL.md` | Skill manifest so this folder works as a portable Claude Skill. |

---

## CONTENT FUNDAMENTALS

How Zepto writes copy. Tone is the strongest non-visual brand signal — it's
what makes the same hot-pink CTA feel like Zepto and not Zomato or Swiggy.

### Voice — short, urgent, value-first

Zepto copy is **transactional and breathless**. Every screen leads with the
two things the customer is actually shopping for: **speed** and **price**.
Sentences are short fragments, not full grammar; verbs are imperative;
exclamation marks are rare but present in promo strips.

- Lead with the number: "**10 mins**", "**₹26 saved**", "**50% OFF**", "**20%
  cashback**".
- Then the noun: "Groceries", "Fruits & Vegetables", "Daily Essentials".
- Then the action verb: "Order now", "Add", "Apply", "Claim".

### Person — second-person, casual, never corporate

"You" / "Your". Almost never "We" or "Us". Status messages are confiding
("Your order is being packed"), promos are direct ("**Get free delivery for a
year**"). Copy never uses corporate hedges like "We're delighted to" or "Please
note". The brand is your fast friend with a scooter, not a department store.

### Casing

- **Sentence case** for screen titles, section headers, body, button labels:
  *"Recently bought"*, *"Add to cart"*, *"Order details"*.
- **UPPERCASE** reserved for chips, overline labels, deal stamps, urgency
  ribbons: *"BESTSELLER"*, *"NEW"*, *"PASS ONLY"*, *"SUPER SAVER"*. Tracked
  +0.5px (the `.zd-overline` class).
- **Title Case** is rare — only on a few promotional brand-name strings
  ("Zepto Pass", "Daily Pass", "Super Saver"). Never on regular nav.
- **Currency** always with the rupee glyph (₹) immediately before the number,
  no space: `₹49`, `₹1,250`. Strikethrough originals + colored final price.

### Examples (lifted from real Zepto surfaces, paraphrased)

- Hero: **"Groceries delivered in 10 minutes"**
- CTA: **"Add"** (single word, on every product card)
- Savings ribbon: **"₹26 saved with Pass"**
- Empty cart: **"Your cart is empty"** / *"Add items to get started"*
- Order status: **"Out for delivery — arriving in 6 mins"**
- Deal chip: **"BUY 2 GET 1 FREE"**
- Membership: **"Save more every order with Zepto Pass"**
- Error: **"Couldn't add. Try again."** (terse; never blames the user)

### Vibe — functional, not playful

Zepto is **not** Duolingo or Cred. It does not pun, joke, anthropomorphize, or
add personality flourishes. The fun comes from speed and savings, not banter.
Tone is closer to Amazon than to Liquid Death: calm, confident, fast.

### Emoji — almost never in product UI

Emoji do **not** appear in the consumer app's nav, buttons, or product copy.
You'll occasionally see one or two in **promotional banners or push
notifications** ("⚡ 10 min delivery"). The lightning bolt ⚡ is the only one
that is tonally on-brand. Treat emoji as a no.

### Numbers, units, formatting

- Times: "10 mins", "8 mins" (always plural, lowercase). Never "10 min" or
  "10 minutes".
- Quantities: "500 g", "1 kg", "1 L", "6 pcs" (lowercase units, single space).
- Discounts: "**50% OFF**" (uppercase OFF), or strikethrough: ~~₹120~~ **₹89**.
- Reviews: "4.5 ★" with a single star glyph.

---

## VISUAL FOUNDATIONS

### Color philosophy

The palette is **white-dominant with a single high-saturation pink as the
hero**. Surfaces are 80%+ neutral; pink shows up only where it earns
attention — primary CTAs, prices, urgency, the logo. Greens carry savings
messages. Sub-brands swap the dominant color but keep the same neutral
scaffolding.

- **Primary brand color**: `#f9105e` (`--zd-brand`, base `pink-600`).
  Hot, pure, slightly cool-leaning pink. Pressed/hover state goes one notch
  darker to `#db064d`.
- **Surface stack**: white → `grey-50` (`#f3f5f7`) → `grey-100`. Almost
  never colored backgrounds on default screens; tinted backgrounds (pink-50,
  green-50) are for callout sections only.
- **Text stack**: `grey-900` (`#101418`) primary → `grey-500` secondary →
  `grey-400` tertiary/disabled. Black is reserved for sub-brand surfaces.
- **Savings green**: `#329537` (`green-800`). Always paired with currency
  ("**₹26 saved**", "20% off"). Never used for generic success ticks where
  `green-700` would do.

### Typography

**Zepto Norms** is the entire system — there is no serif, no display font, no
secondary family. It carries from headlines to micro-labels.

- Weights in use: 400 (Regular), 500 (Medium), 600 (DemiBold), 700 (Bold),
  900 (Black). Headings sit at 700 or higher; UI labels at 600; body at 400.
- **Tight tracking on headings**: -0.2px from h16 up. Small text uses 0px;
  overlines use +0.5px.
- Numerals are tabular-feeling and slightly geometric — they're the brand's
  most-photographed glyphs (price tags). Never substitute another sans for the
  number row.
- Line heights are tight: h32 = 36/32 (1.125), b14 = 20/14 (1.43). UI feels
  dense, not airy.

### Backgrounds & surfaces

- **No gradients** on default product surfaces. White or grey-50, full stop.
- **Sub-brands use deep solid backgrounds**: Zepto Pass = royale-800 (`#1f1537`)
  with subtle purple aurora; Daily Pass = grass-900 (`#103520`) with a lime
  accent ribbon. These are saturated, not gradient-y.
- **Product imagery is bright, evenly-lit, neutral-background photography** —
  packshots on near-white, shadowless. No filters, no grain, no warmth/cool
  tilt. The look is e-commerce catalog, not editorial.
- **No hand-drawn illustration as a primary motif.** Promotional banners
  occasionally use flat vector illustrations of food/delivery boxes, but they're
  punchy and graphic, not whimsical or sketchy.
- **No repeating patterns or textures** in product UI. The Zepto Pass
  surfaces use a faint radial vignette/aurora, but it's a treatment, not a
  pattern.

### Animation & motion

- **Fast and standard-eased**, not bouncy. Transitions are 120–200ms with
  `cubic-bezier(0.4, 0, 0.2, 1)` (`--zd-ease-standard`). Hover color/border
  swaps are 120ms; modal/sheet entries are 200–320ms.
- **Bottom-sheet transitions** (mobile) are spring-y on entry only — slight
  overshoot — then standard ease on exit. That's the most expressive moment in
  the app.
- **Skeleton loaders** (grey shimmer) for product grids. Never spinners on
  initial page load.
- **Spinners** are reserved for in-button loading state on async actions.
- The countdown timer at the top of order tracking ticks down every second — a
  literal, unmissable motion element. This is on-brand: motion = speed = trust.

### Hover & press states

- **Hover (web)**: background color goes one shade darker (`pink-600` → `pink-700`),
  no scale change, no shadow lift. Subtle.
- **Press (mobile/web)**: background dims to the same darker shade, **no shrink
  transform**. Zepto does not use the iOS-style scale-down on press.
- **Disabled**: background drops to `grey-100`, text to `grey-400`. No
  opacity hack — explicit token.
- **Focus ring**: 2px white inset + 2px brand pink outset (`--zd-focus-ring`).

### Borders, radii, cards

- **Card radius is 12–16px** on most surfaces (`--zd-radius-lg` / `xl`).
  Buttons range from 6px (xxs) up to 12px (xl) — radius scales with size.
- **Pills** (badges, chips, deal stamps): full radius (`--zd-radius-pill` =
  999px).
- **Borders are 1px** in `grey-200`. Hairlines, never thick. Borders are used
  for separation; cards rely more on shadow than on border.
- **Card shadows are very soft** — barely-visible ambient (`shadow-sm` is
  6% opacity). Heavier elevation only for modals (`shadow-lg`/`xl`) and bottom
  sheets. Brand-colored shadows (`shadow-brand`) are used sparingly under
  primary CTAs in marketing surfaces, never in app UI.
- **No left-accent-border cards.** This is one of the AI-slop tropes Zepto
  doesn't use.

### Transparency, blur, overlays

- **Modal backdrop**: `--zd-alpha-dark-60` (60% black), no blur. Crisp, fast.
- **Bottom sheets** sit on the same backdrop. No frosted-glass treatment.
- **Sticky headers** are solid white with a 1px bottom border, never a
  blur effect.
- **Image overlay gradients** appear only on hero/promo banner cards where
  text needs protection — a black-to-transparent gradient from the bottom
  edge, ~40% strength, soft.
- **Capsules vs gradients for savings**: prefer **capsules** (solid pill chips)
  over gradient text. "₹26 saved" goes inside a `green-50` chip with a
  `green-800` text token.

### Layout rules

- **Sticky bottom CTA on mobile** ("Add to cart", "Pay ₹245") — full-width
  pink button, ~56px tall, with a thin shadow above it separating from
  content.
- **Sticky top header on mobile** with delivery address + ETA. Always visible.
- **Bottom tab bar** on mobile: Home, Categories, Cart, Account.
- **Tight gutters**: 16px page padding, 12px between cards in a grid, 8px
  inside cards. The app is information-dense; whitespace is earned.
- **Product grid**: 2-up on mobile, 4–6-up on tablet/web. Cards are square-ish
  with image on top, two lines of metadata + price + Add button below.

### Iconography (high-level — full breakdown in **ICONOGRAPHY** below)

[Phosphor Icons](https://phosphoricons.com), 24px default, three weights:
**regular** (default UI), **bold** (emphasis / primary actions), **fill** (selected
tab states, badges, indicators). All icons use `currentColor` and a 256-grid
`viewBox`. The 32-icon working set is defined in `icons-data.json` and surfaced
through `<Icon name="..." weight="..." />`. See the **ICONOGRAPHY** section.

---

## ICONOGRAPHY

This system ships a curated set of **[Phosphor Icons](https://phosphoricons.com)**
sized for a quick-commerce product surface. The 32 icons selected cover nav,
discovery, cart actions, commerce, delivery, state, and meta — enough for a
home / search / cart / checkout / order-tracker / account flow without
reaching outside the system.

The full icon dataset lives in **`icons-data.json`** (regular / bold / fill
weights for every name) and is consumed by:

- `storybook-app/src/components/Icon.tsx` — typed `<Icon name weight size />`
  primitive. `IconName` and `Weight` are exported types.
- `ui_kits/zepto-app/icons.jsx` — same component on `window.Icon`, plus
  back-compat `I.*` shims for legacy call sites (`I.Home`, `I.Cart`, etc.).

### Weights

| Weight | Default for | Notes |
|---|---|---|
| **regular** | All UI surfaces — nav, buttons, list rows, inline labels | Outline-style geometry on a 256-grid |
| **bold** | Emphasis, primary CTAs, alerts | Heavier strokes — pairs with bold copy |
| **fill** | Selected tab states, status indicators, brand glyph | Solid silhouettes |

The tab bar follows Phosphor convention: regular when inactive, fill on the
selected tab.

### Sizes

24px is the canonical render size and matches the 256-grid `viewBox`. Buttons
scale icons to 14/16/18/20px by size class (xxs/sm → xl). All icons use
`fill="currentColor"`, so a parent's `color` controls them — no per-icon
styling.

### The 32-icon working set

Nav: `house`, `magnifying-glass`, `shopping-cart`, `user`, `list`, `x`,
`arrow-left`, `caret-right`, `caret-down`.
Discovery: `tag`, `fire`, `star`, `heart`.
Cart actions: `plus`, `minus`, `trash`, `check`.
Commerce: `wallet`, `ticket`, `receipt`, `package`.
Delivery: `map-pin`, `clock`, `truck`, `lightning`.
State: `warning`, `check-circle`, `x-circle`, `info`, `bell`.
Meta: `sliders-horizontal`, `share-fat`.

`lightning` doubles as the Zepto brand glyph (pink fill on the splash,
wordmark, promo strips). Treat it as part of the logo system, not as
decorative emoji.

### Adding more icons

1. Pull additional `.svg` files from
   [`phosphor-icons/core`](https://github.com/phosphor-icons/core) into
   `assets/{regular,bold,fill}/` — kebab-case names, weight-suffixed
   filenames except for regular (e.g. `bookmark.svg`, `bookmark-bold.svg`,
   `bookmark-fill.svg`).
2. Add the new name to the `NAMES` array in
   `scripts/build-icons.mjs` (or re-run the same logic — it's a small loop:
   read each weight's SVG, extract inner body, save to `icons-data.json`).
3. Re-emit `storybook-app/src/components/Icon.tsx` and
   `ui_kits/zepto-app/icons.jsx` so both surfaces pick up the new entry.

The `IconName` union in `Icon.tsx` is the type-checked source of truth — if
you forget step 3, TypeScript will complain at the call site.

### Policy

- **No emoji, no Unicode symbols** as iconography in product UI.
- **No mixed icon libraries.** If a needed glyph isn't in Phosphor, draw a
  bespoke SVG that matches Phosphor's 256-grid geometry (rounded ends,
  consistent stroke weight per weight tier) and add it under the same
  `name + weight` keys.

---

## Caveats & open items

- **No Zepto logo file was provided.** The wordmark in `assets/` is a
  faithful CSS/SVG approximation — flag this and ask for the official asset
  before shipping anything customer-facing.
- **No production product imagery** was provided. UI kits use neutral
  placeholders. Replace with real photography for any external use.
- **Zesto only ships Button.** Other components (cards, inputs, sheets, tabs,
  badges, etc.) in this system are derived from observed product behavior +
  the token system, not lifted from production code. They're a high-fidelity
  reading of the brand, not the canonical implementation.
- The Figma referenced in Zesto's README (Consumer Components — App Beta) is
  the source of truth — recommend the user grant access and re-run if
  pixel-perfect parity matters.
