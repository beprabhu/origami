# Origami

Zepto's design system, packaged as `origami`. React + TypeScript components, CSS Modules consuming token variables, documented in Storybook 8.

## Quickstart

```bash
npm install
npm run storybook        # dev server at http://localhost:6006
npm run build-storybook  # static export → storybook-static/
```

## Project layout

```
storybook-app/
├── .storybook/          Storybook config (main.ts, preview.ts)
├── src/
│   ├── styles/
│   │   ├── tokens.css   Source of truth — color, type, spacing, radius, shadow
│   │   ├── global.css   Reset + body baseline
│   │   └── fonts/       Zepto Norms (woff)
│   ├── tokens.ts        JS mirror of tokens.css for programmatic use
│   ├── components/
│   │   ├── Button/      Button.tsx + Button.css + Button.stories.tsx
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Header/
│   │   ├── BottomTabBar/
│   │   └── icons.tsx
│   ├── foundations/     Token gallery stories (Colors, Type, Spacing/Shape)
│   ├── Introduction.mdx
│   └── index.ts         Public barrel export
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Component checklist

- ✅ `Button` — 6 variants × 6 sizes, loading, fullWidth, left/right icons
- ✅ `Input` — label, helper, error, required, 3 sizes, left/right addons
- ✅ `Badge` — 6 tones × 3 variants × 3 sizes, optional icon, uppercase toggle
- ✅ `Header` — sticky app header (ETA, address, search)
- ✅ `BottomTabBar` — primary mobile nav with badge support

## Addons enabled

`@storybook/addon-essentials` (controls, actions, viewport, backgrounds, docs, toolbars,
measure, outline) + `addon-a11y` + `addon-interactions`. Custom viewports for 360 / 390 /
768 / 1280, and backgrounds for surface / muted / dark / Pass / Daily.

## Wiring an API

Components are intentionally **presentational**. State (cart quantity, active tab, focused
input) is owned by the consumer:

```tsx
const [qtyMap, setQtyMap] = useState<Record<string, number>>({});

<ProductGrid
  products={products}
  qtyMap={qtyMap}
  onAdd={(p) => setQtyMap(m => ({ ...m, [p.id]: 1 }))}
  onInc={(p) => setQtyMap(m => ({ ...m, [p.id]: (m[p.id] ?? 0) + 1 }))}
  onDec={(p) => setQtyMap(m => ({ ...m, [p.id]: Math.max(0, (m[p.id] ?? 0) - 1) }))}
/>
```

Hook a real cart API into the four callbacks; the rest of the surface stays untouched.

## Theming

All component styles resolve through CSS variables defined in `src/styles/tokens.css`.
Override on `:root` (or any ancestor) to re-skin without recompiling:

```css
:root {
  --zd-brand: #6b21a8;        /* swap brand pink for purple */
  --zd-brand-hover: #581c87;
}
```
