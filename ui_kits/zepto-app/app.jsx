/* global React, Header, BottomTabBar, ProductGrid, PromoBanner, CategoryStrip, PassStrip, SectionHeader, CartScreen, OrderTracker, I, ImgPH */
const { useState: uS, useMemo: uM } = React;

const PRODUCTS = [
  { id: 'milk', name: 'Amul Taaza Toned Milk Pouch', qty: '500 ml', qty_label: '500 ml', unit_price: '₹54/L', price: 27, mrp: 30, eta: '8 mins', tone: 'milk', flag: 'Super Saver', cat: 'dairy', rating: 4.6, rating_count: 2.3 },
  { id: 'bread', name: 'Britannia Brown Bread', qty: '400 g', qty_label: '400 g', unit_price: '₹11/100g', price: 45, mrp: 50, eta: '8 mins', tone: 'bread', cat: 'dairy', attrs: ['400 g'], rating: 4.4, rating_count: 812 },
  { id: 'banana', name: 'Banana Robusta — Loose, fresh & ripe', qty: '1 kg · 6–7 pcs', qty_label: '1 kg', unit_price: '₹52/kg', price: 52, mrp: 70, eta: '9 mins', tone: 'banana', flag: 'Bestseller', cat: 'fruits', attrs: ['1 kg'], rating: 4.3, rating_count: '1.4k' },
  { id: 'apple', name: 'Apple Shimla — Pack of 4', qty: '500 g · 4 pcs', qty_label: '500 g', unit_price: '₹248/kg', price: 124, mrp: 160, eta: '10 mins', tone: 'apple', cat: 'fruits', attrs: ['500 g', '4 pcs'], rating: 4.2, rating_count: 487 },
  { id: 'noodles', name: 'Maggi 2-Min Masala Noodles', qty: 'Pack of 4 · 70 g', qty_label: 'Pack of 4', unit_price: '₹20/pc', price: 56, mrp: 60, eta: '10 mins', tone: 'noodles', cat: 'snacks', attrs: ['70 g × 4'], rating: 4.7, rating_count: '5.2k' },
  { id: 'chips', name: 'Lay\'s Classic Salted Chips', qty: '52 g', qty_label: '52 g', unit_price: '₹38/100g', price: 20, eta: '10 mins', tone: 'chips', cat: 'snacks', rating: 4.5, rating_count: 932 },
  { id: 'egg', name: 'Farm Fresh Eggs — Brown, Pack of 6', qty: '6 pcs', qty_label: '6 pcs', unit_price: '₹13/pc', price: 78, mrp: 90, eta: '9 mins', tone: 'egg', flag: 'Best Value', cat: 'dairy', attrs: ['6 pcs'], rating: 4.5, rating_count: 654 },
  { id: 'cola', name: 'Coca-Cola Original Taste', qty: '750 ml', qty_label: '750 ml', unit_price: '₹53/L', price: 40, eta: '8 mins', tone: 'cola', cat: 'snacks', rating: 4.6, rating_count: 1240 },
  { id: 'rice', name: 'India Gate Basmati Rice — Premium', qty: '1 kg', qty_label: '1 kg', unit_price: '₹145/kg', price: 145, mrp: 175, eta: '10 mins', tone: 'rice', flag: 'Super Saver', cat: 'staples', attrs: ['1 kg'], rating: 4.4, rating_count: 318 },
  { id: 'soap', name: 'Dove Bathing Bar — Pack of 3', qty: '125 g × 3', qty_label: 'Pack of 3', unit_price: '₹44/pc', price: 165, mrp: 210, eta: '10 mins', tone: 'soap', cat: 'personal', attrs: ['125 g', 'Pack of 3'], rating: 4.7, rating_count: 902 },
];

const CATS = [
  { id: 'fruits', label: 'Fruits & Veg', glyph: '🥬', bg: 'var(--zd-green-50)', fg: 'var(--zd-green-800)' },
  { id: 'dairy', label: 'Dairy, Bread & Eggs', glyph: '🥛', bg: 'var(--zd-blue-50)', fg: 'var(--zd-blue-700)' },
  { id: 'snacks', label: 'Snacks & Drinks', glyph: '🍿', bg: 'var(--zd-orange-50)', fg: 'var(--zd-orange-700)' },
  { id: 'staples', label: 'Atta, Rice & Dal', glyph: '🍚', bg: 'var(--zd-yellow-50)', fg: 'var(--zd-yellow-700)' },
  { id: 'personal', label: 'Personal Care', glyph: '🧴', bg: 'var(--zd-purple-50)', fg: 'var(--zd-purple-700)' },
  { id: 'home', label: 'Home Care', glyph: '🧹', bg: 'var(--zd-teal-50)', fg: 'var(--zd-teal-700)' },
  { id: 'baby', label: 'Baby Care', glyph: '👶', bg: 'var(--zd-pink-50)', fg: 'var(--zd-pink-700)' },
  { id: 'meat', label: 'Meat & Fish', glyph: '🍗', bg: 'var(--zd-red-50)', fg: 'var(--zd-red-700)' },
];

function App() {
  const [tab, setTab] = uS('home');
  const [route, setRoute] = uS('home'); // home, category, cart, tracking
  const [activeCat, setActiveCat] = uS(null);
  const [qtyMap, setQtyMap] = uS({});

  const cartCount = uM(() => Object.values(qtyMap).reduce((a, b) => a + b, 0), [qtyMap]);
  const cartItems = uM(() => Object.entries(qtyMap).filter(([, q]) => q > 0).map(([id, qty]) => ({ id, qty })), [qtyMap]);

  const inc = (p) => setQtyMap(m => ({ ...m, [p.id]: (m[p.id] || 0) + 1 }));
  const dec = (p) => setQtyMap(m => ({ ...m, [p.id]: Math.max(0, (m[p.id] || 0) - 1) }));

  const goCart = () => { setRoute('cart'); setTab('cart'); };
  const goHome = () => { setRoute('home'); setTab('home'); };
  const goCat = (c) => { setActiveCat(c); setRoute('category'); };

  React.useEffect(() => {
    if (tab === 'cart') setRoute('cart');
    else if (tab === 'home' && route !== 'category' && route !== 'tracking') setRoute('home');
  }, [tab]);

  let content;
  if (route === 'tracking') {
    content = <OrderTracker onDone={() => { setQtyMap({}); goHome(); }} onClose={goHome} />;
  } else if (route === 'cart') {
    content = (
      <CartScreen items={cartItems} products={PRODUCTS}
        onInc={inc} onDec={dec}
        onCheckout={() => setRoute('tracking')}
        onBack={goHome}
      />
    );
  } else if (route === 'category') {
    const filtered = PRODUCTS.filter(p => p.cat === activeCat?.id);
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
        <div style={{ background: '#fff', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--zd-border)' }}>
          <button onClick={goHome} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex' }}><I.Back width="22" height="22"/></button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{activeCat.label}</div>
            <div style={{ fontSize: 11, color: 'var(--zd-text-secondary)' }}>{filtered.length} items · 10 mins</div>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <ProductGrid products={filtered.length ? filtered : PRODUCTS} qtyMap={qtyMap}
            onAdd={inc} onInc={inc} onDec={dec} onTap={() => {}}
          />
        </div>
      </div>
    );
  } else {
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Header onSearch={() => {}} />
        <div style={{ flex: 1, overflowY: 'auto', background: '#fff' }}>
          <PromoBanner kicker="Super Saver" title="Up to 50% off on monthly essentials" bg="var(--zd-brand)"/>
          <CategoryStrip categories={CATS} onTap={goCat} />
          <PassStrip />
          <SectionHeader title="Fresh fruits & vegetables" action="See all"/>
          <ProductGrid products={PRODUCTS.filter(p => p.cat === 'fruits' || p.cat === 'dairy').slice(0, 4)} qtyMap={qtyMap}
            onAdd={inc} onInc={inc} onDec={dec} onTap={() => {}}
          />
          <SectionHeader title="Snacks & drinks" action="See all"/>
          <ProductGrid products={PRODUCTS.filter(p => p.cat === 'snacks' || p.cat === 'staples')} qtyMap={qtyMap}
            onAdd={inc} onInc={inc} onDec={dec} onTap={() => {}}
          />
          <div style={{ height: 16 }}/>
        </div>
      </div>
    );
  }

  const showTabs = route !== 'tracking';
  const showFloatingCart = cartCount > 0 && route !== 'cart' && route !== 'tracking';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', position: 'relative', paddingTop: 54, paddingBottom: 30 }}>
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>{content}</div>
      {showFloatingCart && (
        <button onClick={goCart} style={{
          position: 'absolute', left: 12, right: 12, bottom: showTabs ? 64 : 12,
          background: 'var(--zd-brand)', color: '#fff', border: 'none', borderRadius: 12,
          padding: '12px 16px', fontFamily: 'inherit', fontSize: 14, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer',
          boxShadow: 'var(--zd-shadow-brand)', zIndex: 10,
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <I.Cart width="18" height="18"/> {cartCount} item{cartCount > 1 ? 's' : ''} added
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>View cart <I.Chevron width="16" height="16"/></span>
        </button>
      )}
      {showTabs && <BottomTabBar tab={tab} setTab={(t) => { setTab(t); if (t === 'cart') goCart(); else if (t === 'home') goHome(); }} cartCount={cartCount}/>}
    </div>
  );
}

window.App = App;
