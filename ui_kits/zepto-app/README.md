# Zepto Consumer App — UI Kit

A high-fidelity recreation of Zepto's mobile consumer app surface. Components
are intentionally cosmetic (no real backend) and modular — drop them into any
prototype to get a Zepto-shaped UI fast.

## Files

- `index.html` — interactive click-thru: Splash → Home → Category → Product → Cart → Order tracking.
- `Splash.jsx` — pink full-bleed launch screen with bolt + wordmark.
- `Header.jsx` — sticky top nav with delivery ETA, address, search.
- `BottomTabBar.jsx` — 4-tab bottom nav (Home, Categories, Cart, Account).
- `CategoryStrip.jsx` — horizontally-scrolling icon-grid of categories.
- `ProductCard.jsx` — square product tile (image, ETA, title, price, ADD).
- `ProductGrid.jsx` — 2-up grid wrapper.
- `PromoBanner.jsx` — pink hero banner used at the top of Home.
- `CartSheet.jsx` — bottom sheet showing cart items + sticky pay button.
- `OrderTracker.jsx` — full-screen order-tracking with countdown timer.
- `app.jsx` — wires everything into a stateful click-thru prototype.

## Conventions

- Single React tree, single Babel transform — components export to `window`.
- All styling via CSS variables from `../../colors_and_type.css`.
- Phone bezel via the `ios_frame.jsx` starter component.
