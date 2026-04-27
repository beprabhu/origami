/* global React, ProductCard, ProductGrid, Header, BottomTabBar, PromoBanner, CategoryStrip, PassStrip, SectionHeader, CartScreen, OrderTracker, I */

const STORIES = {
  // ─── FOUNDATIONS ──────────────────────────────────────────────────────
  'foundations/colors-pink': {
    section: 'Foundations', name: 'Colors · Brand Pink',
    desc: 'Zepto pink — the signature brand color. Used on primary CTAs, price tags, urgency, and brand surfaces. Token: `--zd-brand` → `--zd-pink-600`.',
    iframe: '../preview/colors-pink.html', height: 240,
  },
  'foundations/colors-grey': {
    section: 'Foundations', name: 'Colors · Greys',
    desc: 'Neutral scale used for text, surfaces, and borders. `--zd-grey-900` is body text. `--zd-grey-200` is the default border.',
    iframe: '../preview/colors-grey.html', height: 240,
  },
  'foundations/colors-semantic': {
    section: 'Foundations', name: 'Colors · Semantic',
    desc: 'Status-derived colors. Green = savings/success, Orange = warning/hot deals, Red = error/critical, Blue = informational.',
    iframe: '../preview/colors-semantic.html', height: 240,
  },
  'foundations/colors-subbrands': {
    section: 'Foundations', name: 'Colors · Sub-brands',
    desc: 'Royale (Zepto Pass), Grass + Lime (Daily Pass), and supporting accents. Each sub-brand has its own protected palette.',
    iframe: '../preview/colors-subbrands.html', height: 240,
  },
  'foundations/type-display': {
    section: 'Foundations', name: 'Type · Display',
    desc: 'Display weights H48–H20, Bold. Use sparingly for hero moments and slide titles.',
    iframe: '../preview/type-display.html', height: 380,
  },
  'foundations/type-body': {
    section: 'Foundations', name: 'Type · Body',
    desc: 'Body sizes B16, B14, B12 — Regular weight. Default body is B14 / 1.45 line-height.',
    iframe: '../preview/type-body.html', height: 220,
  },
  'foundations/type-weights': {
    section: 'Foundations', name: 'Type · Weights',
    desc: 'Zepto Norms ships in Normal (400), Medium (500), DemiBold (600), and Bold (700).',
    iframe: '../preview/type-weights.html', height: 240,
  },
  'foundations/spacing': {
    section: 'Foundations', name: 'Spacing',
    desc: '4px base scale. Tokens `--zd-space-1` through `--zd-space-12`.',
    iframe: '../preview/spacing.html', height: 220,
  },
  'foundations/radii': {
    section: 'Foundations', name: 'Radii',
    desc: 'Corner radius scale: `--zd-radius-xs` (4) → `--zd-radius-pill` (999).',
    iframe: '../preview/radii.html', height: 200,
  },
  'foundations/elevation': {
    section: 'Foundations', name: 'Elevation',
    desc: 'Shadow tokens. Includes a brand-tinted `--zd-shadow-brand` for floating CTAs.',
    iframe: '../preview/elevation.html', height: 240,
  },
  'foundations/iconography': {
    section: 'Foundations', name: 'Iconography',
    desc: 'Phosphor Icons — 32-icon set for quick-commerce, available in regular / bold / fill weights. Loaded from icons-data.json.',
    iframe: '../preview/iconography.html', height: 720,
  },

  // ─── BRAND ───────────────────────────────────────────────────────────
  'brand/logo': {
    section: 'Brand', name: 'Logo',
    desc: 'Primary Zepto wordmark + standalone mark. Pink-600 on white. Min size 16px height.',
    iframe: '../preview/logo.html', height: 200,
  },
  'brand/sub-brand-lockups': {
    section: 'Brand', name: 'Sub-brand Lockups',
    desc: 'Zepto Pass (Royale) and Daily Pass (Grass + Lime) lockups.',
    iframe: '../preview/sub-brand-lockups.html', height: 220,
  },

  // ─── COMPONENTS ──────────────────────────────────────────────────────
  'components/buttons-variants': {
    section: 'Components', name: 'Button · Variants',
    desc: 'Primary (brand-filled), Secondary (brand-outlined), Tertiary (ghost), and Destructive variants.',
    iframe: '../preview/buttons-variants.html', height: 200,
    props: [
      ['variant', '"primary" | "secondary" | "tertiary" | "destructive"', '"primary"', 'Visual style'],
      ['disabled', 'boolean', 'false', 'Disabled state'],
      ['onClick', '() => void', '–', 'Click handler'],
    ],
  },
  'components/buttons-sizes': {
    section: 'Components', name: 'Button · Sizes',
    desc: 'XS (24px), SM (32), MD (40), LG (48), XL (56). XL is the standard cart/checkout CTA.',
    iframe: '../preview/buttons-sizes.html', height: 180,
    props: [
      ['size', '"xs" | "sm" | "md" | "lg" | "xl"', '"md"', 'Height token'],
    ],
  },
  'components/inputs': {
    section: 'Components', name: 'Inputs',
    desc: 'Text input with label, helper, and error states. Border `--zd-grey-200`, focus border `--zd-pink-600`.',
    iframe: '../preview/inputs.html', height: 320,
  },
  'components/badges': {
    section: 'Components', name: 'Badges',
    desc: 'Small status pills. SUPER SAVER (green), BESTSELLER (pink), HOT DEAL (orange).',
    iframe: '../preview/badges.html', height: 180,
  },
  'components/product-cards': {
    section: 'Components', name: 'Product Card',
    desc: 'M-Product Card (MProductCardExp Figma spec). Stamp price with offset shadow, dashed savings divider, info label, attribute tags, gradient rating pill, ADD/stepper. All values via design tokens.',
    iframe: '../preview/product-cards.html', height: 380,
    props: [
      ['product', 'Product', '–', 'Product object: { name, price, mrp, qty, unit_price, flag, attrs[], rating, rating_count, tone }'],
      ['qty', 'number', '0', 'Current cart quantity. 0 → ADD button. >0 → stepper'],
      ['onAdd', '() => void', '–', 'Triggered when ADD is tapped'],
      ['onInc', '() => void', '–', 'Increment quantity'],
      ['onDec', '() => void', '–', 'Decrement quantity'],
      ['onTap', '() => void', '–', 'Card tap (open PDP)'],
    ],
  },

  // ─── APP SHELL ──────────────────────────────────────────────────────
  'app/header': {
    section: 'App Shell', name: 'Header',
    desc: 'Sticky top header with delivery ETA, address, and search affordance. Used on all primary tabs.',
    render: () => (
      <div style={{ width: 360, background: '#fff', border: '1px solid #e6e9ef', borderRadius: 12, overflow: 'hidden' }}>
        <Header eta="10 mins" address="Bandra West, Mumbai" />
      </div>
    ),
    props: [
      ['eta', 'string', '"10 mins"', 'Delivery time estimate'],
      ['address', 'string', '–', 'Active delivery address'],
      ['onSearch', '() => void', '–', 'Search bar tap'],
    ],
  },
  'app/bottom-tabs': {
    section: 'App Shell', name: 'Bottom Tab Bar',
    desc: 'Primary navigation. Home / Categories / Cart / Account. Active tab is brand-filled.',
    render: () => {
      const [tab, setTab] = React.useState('home');
      return (
        <div style={{ width: 360, background: '#fff', border: '1px solid #e6e9ef', borderRadius: 12, overflow: 'hidden' }}>
          <BottomTabBar tab={tab} setTab={setTab} cartCount={3} />
        </div>
      );
    },
    props: [
      ['tab', '"home" | "cats" | "cart" | "acct"', '–', 'Active tab id'],
      ['setTab', '(id) => void', '–', 'Tab change handler'],
      ['cartCount', 'number', '0', 'Badge count on Cart tab'],
    ],
  },

  // ─── HOME ────────────────────────────────────────────────────────────
  'home/promo-banner': {
    section: 'Home', name: 'Promo Banner',
    desc: 'Full-width pink CTA banner used at top of home feed. Kicker + title.',
    render: () => (
      <div style={{ width: 360 }}>
        <PromoBanner kicker="Super Saver" title="Up to 50% off on monthly essentials" bg="var(--zd-brand)" />
      </div>
    ),
    props: [
      ['kicker', 'string', '–', 'Small uppercase eyebrow'],
      ['title', 'string', '–', 'Main banner copy'],
      ['bg', 'string', 'var(--zd-brand)', 'Background color or gradient'],
    ],
  },
  'home/category-strip': {
    section: 'Home', name: 'Category Strip',
    desc: '4-column grid of top-level category tiles. Tinted square + glyph.',
    render: () => (
      <div style={{ width: 360, background: '#fff', border: '1px solid #e6e9ef', borderRadius: 12 }}>
        <CategoryStrip
          categories={[
            { id: 'fruits', label: 'Fruits & Veg', glyph: '🥬', bg: 'var(--zd-green-50)', fg: 'var(--zd-green-800)' },
            { id: 'dairy', label: 'Dairy & Eggs', glyph: '🥛', bg: 'var(--zd-blue-50)', fg: 'var(--zd-blue-700)' },
            { id: 'snacks', label: 'Snacks', glyph: '🍿', bg: 'var(--zd-orange-50)', fg: 'var(--zd-orange-700)' },
            { id: 'staples', label: 'Atta & Rice', glyph: '🍚', bg: 'var(--zd-yellow-50)', fg: 'var(--zd-yellow-700)' },
          ]}
          onTap={() => {}}
        />
      </div>
    ),
  },
  'home/pass-strip': {
    section: 'Home', name: 'Zepto Pass Strip',
    desc: 'Royale-purple membership upsell strip. Sub-brand lockup.',
    render: () => (
      <div style={{ width: 360 }}>
        <PassStrip />
      </div>
    ),
  },
  'home/section-header': {
    section: 'Home', name: 'Section Header',
    desc: 'Title + optional brand-pink action link. Used between feed sections.',
    render: () => (
      <div style={{ width: 360, background: '#fff', border: '1px solid #e6e9ef', borderRadius: 12 }}>
        <SectionHeader title="Fresh fruits & vegetables" action="See all" />
      </div>
    ),
  },
  'home/product-grid': {
    section: 'Home', name: 'Product Grid (live)',
    desc: '2-column responsive product grid. Live: tap ADD to see the stepper transition.',
    render: () => {
      const [qtyMap, setQtyMap] = React.useState({});
      const products = [
        { id: 'p1', name: 'Amul Taaza Toned Milk Pouch', qty: '500 ml', unit_price: '₹54/L', price: 27, mrp: 30, tone: 'milk', flag: 'Super Saver', rating: 4.6, rating_count: '2.3k' },
        { id: 'p2', name: 'Banana Robusta — Loose, ripe', qty: '1 kg', unit_price: '₹52/kg', price: 52, mrp: 70, tone: 'banana', attrs: ['1 kg'], rating: 4.3, rating_count: '1.4k' },
      ];
      const inc = (p) => setQtyMap(m => ({ ...m, [p.id]: (m[p.id] || 0) + 1 }));
      const dec = (p) => setQtyMap(m => ({ ...m, [p.id]: Math.max(0, (m[p.id] || 0) - 1) }));
      return (
        <div style={{ width: 360, background: '#fff', border: '1px solid #e6e9ef', borderRadius: 12 }}>
          <ProductGrid products={products} qtyMap={qtyMap}
            onAdd={inc} onInc={inc} onDec={dec} onTap={() => {}} />
        </div>
      );
    },
  },

  // ─── CART & CHECKOUT ────────────────────────────────────────────────
  'cart/cart-screen': {
    section: 'Cart', name: 'Cart Screen (live)',
    desc: 'Full cart screen with items, savings strip, bill breakdown, and place-order CTA.',
    render: () => {
      const [items, setItems] = React.useState([{ id: 'p1', qty: 2 }, { id: 'p2', qty: 1 }]);
      const products = [
        { id: 'p1', name: 'Amul Taaza Toned Milk Pouch', qty_label: '500 ml', price: 27, mrp: 30, tone: 'milk' },
        { id: 'p2', name: 'Banana Robusta — Loose, ripe', qty_label: '1 kg', price: 52, mrp: 70, tone: 'banana' },
      ];
      const inc = (it) => setItems(s => s.map(i => i.id === it.id ? { ...i, qty: i.qty + 1 } : i));
      const dec = (it) => setItems(s => s.map(i => i.id === it.id ? { ...i, qty: Math.max(0, i.qty - 1) } : i).filter(i => i.qty > 0));
      return (
        <div className="phone-shell">
          <CartScreen items={items} products={products} onInc={inc} onDec={dec}
            onCheckout={() => alert('Order placed!')} onBack={() => {}} />
        </div>
      );
    },
  },
  'cart/order-tracker': {
    section: 'Cart', name: 'Order Tracker (live)',
    desc: 'Post-checkout fulfillment tracker. Live countdown + 4-stage timeline.',
    render: () => (
      <div className="phone-shell">
        <OrderTracker onDone={() => {}} onClose={() => {}} />
      </div>
    ),
  },

  // ─── PROTOTYPE ──────────────────────────────────────────────────────
  'prototype/full-app': {
    section: 'Prototype', name: 'Full App (click-thru)',
    desc: 'End-to-end Zepto consumer-app prototype inside an iOS device frame. Splash → Home → Category → Cart → Order tracking. Tap through to test interactions and the cart/stepper flow.',
    iframe: '../ui_kits/zepto-app/index.html', height: 800,
  },
};

window.STORIES = STORIES;
