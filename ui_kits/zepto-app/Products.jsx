/* global React */

// Placeholder image swatch — colored block representing the catalog photo
function ImgPH({ tone = 'milk' }) {
  const tones = {
    milk: ['#e8f4fb', '#bcd9ec'], banana: ['#fff7d6', '#f0d96a'], noodles: ['#fde8d3', '#e8a35a'],
    apple: ['#ffe0e0', '#e88080'], egg: ['#fff8e8', '#e8c870'], chips: ['#f0e8ff', '#a890d8'],
    bread: ['#fbf1da', '#d4a96a'], cola: ['#dde6f5', '#5b6fa3'], soap: ['#e3f3ed', '#7bc0a3'],
    rice: ['#fff5e3', '#dfb070'], diaper: ['#fef0f5', '#f9b9d0'],
  };
  const [bg, dot] = tones[tone] || tones.milk;
  return (
    <div style={{
      width: '100%', height: '100%', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: dot, opacity: 0.55 }} />
    </div>
  );
}

// — Sub-pieces — recreated from MProductCardExp.tsx with design tokens —

function HeartIcon() {
  return <Icon name="heart" size={14} style={{ color: '#fff', filter: 'drop-shadow(0 0 0.5px var(--zd-grey-300))' }} />;
}

function StarIcon() {
  return <Icon name="star" weight="fill" size={10} style={{ color: 'var(--zd-green-800)' }} />;
}

function InfoLabel({ children, bg = 'var(--zd-orange-50)', border = 'var(--zd-orange-100)', color = 'var(--zd-orange-800)' }) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, height: 16, maxWidth: 74,
      display: 'inline-flex', alignItems: 'center', padding: '2px 4px',
      background: bg, border: `0.5px solid ${border}`,
      borderRadius: '6px 1px 4px 1px',
      color, fontSize: 8, fontWeight: 500, lineHeight: '10px',
      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      fontFamily: 'var(--zd-font-sans)',
    }}>{children}</div>
  );
}

function AddButton({ onClick }) {
  return (
    <div style={{ position: 'absolute', bottom: 4, right: 4 }}>
      <button onClick={onClick} style={{
        background: '#fff', border: '0.75px solid var(--zd-pink-600)',
        boxShadow: '1px 1px 0 0 var(--zd-pink-600)',
        color: 'var(--zd-pink-600)', fontWeight: 600, letterSpacing: 0.2,
        fontSize: 12, lineHeight: '16px', borderRadius: 8,
        width: 56, height: 32, cursor: 'pointer',
        fontFamily: 'var(--zd-font-sans)', padding: 0,
      }}>ADD</button>
    </div>
  );
}

function QtyStepper({ qty, onInc, onDec }) {
  return (
    <div style={{ position: 'absolute', bottom: 4, right: 4 }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        background: 'var(--zd-pink-600)', color: '#fff',
        border: '0.75px solid var(--zd-pink-600)',
        boxShadow: '1px 1px 0 0 var(--zd-pink-600)',
        borderRadius: 8, width: 56, height: 32,
      }}>
        <button onClick={(e)=>{e.stopPropagation();onDec();}} style={qBtn}>−</button>
        <span style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 600, fontFamily: 'var(--zd-font-sans)' }}>{qty}</span>
        <button onClick={(e)=>{e.stopPropagation();onInc();}} style={qBtn}>+</button>
      </div>
    </div>
  );
}
const qBtn = { background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', width: 18, height: 32, fontSize: 14, fontWeight: 700, padding: 0 };

function PriceBlock({ price, mrp }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 8px', paddingBottom: 2, width: '100%' }}>
      {/* Stamp price */}
      <div style={{
        position: 'relative', display: 'inline-flex', alignItems: 'baseline',
        background: 'var(--zd-green-800)', color: '#fff',
        border: '0.5px solid var(--zd-grass-800)',
        boxShadow: '1.5px 1.5px 0 0 var(--zd-grass-800)',
        padding: '4px 6px 2px', borderRadius: 6,
        fontFamily: 'var(--zd-font-sans)',
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, lineHeight: '14px' }}>₹</span>
        <span style={{ fontSize: 14, fontWeight: 700, lineHeight: '16px' }}>{price}</span>
      </div>
      {mrp && (
        <span style={{
          fontSize: 12, lineHeight: '14px', color: 'var(--zd-grey-400)',
          textDecoration: 'line-through', fontFamily: 'var(--zd-font-sans)',
        }}>₹{mrp}</span>
      )}
    </div>
  );
}

function AttrTag({ children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      background: 'rgba(11,12,14,0.04)',
      border: '0.5px solid var(--zd-grey-200)',
      padding: '2px 4px', minHeight: 18, borderRadius: 4,
      fontSize: 10, lineHeight: '12px', fontWeight: 600,
      color: 'var(--zd-grey-600)', fontFamily: 'var(--zd-font-sans)',
      whiteSpace: 'nowrap',
    }}>{children}</div>
  );
}

function Rating({ value, count }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 2,
      padding: '1px 6px 1px 2px',
      background: 'linear-gradient(to right, var(--zd-green-50), rgba(255,255,255,0.16))',
      borderRadius: '20px 0 0 20px', fontFamily: 'var(--zd-font-sans)',
    }}>
      <StarIcon />
      <span style={{ fontSize: 10, lineHeight: '12px', color: 'var(--zd-green-800)', fontWeight: 500 }}>{value}</span>
      <span style={{ fontSize: 10, lineHeight: '12px', color: 'var(--zd-grey-500)' }}>({count})</span>
    </div>
  );
}

function ProductCard({ product, qty = 0, onAdd, onInc, onDec, onTap }) {
  const savings = product.mrp ? product.mrp - product.price : 0;
  return (
    <div onClick={onTap} style={{
      display: 'flex', flexDirection: 'column', gap: 6,
      cursor: 'pointer', fontFamily: 'var(--zd-font-sans)',
    }}>
      {/* Card Header — image area */}
      <div style={{
        position: 'relative', width: '100%',
        background: 'var(--zd-grey-50)', borderRadius: 8,
        border: '0.5px solid var(--zd-grey-200)',
        overflow: 'hidden',
      }}>
        {/* Image container — square */}
        <div style={{
          position: 'relative', width: '100%', aspectRatio: '1',
          background: '#fff', borderBottom: '0.5px solid var(--zd-grey-200)',
        }}>
          <ImgPH tone={product.tone} />
        </div>
        {/* Heart top-right */}
        <div style={{ position: 'absolute', top: 3, right: 3 }}><HeartIcon /></div>
        {/* Badge top-left */}
        {product.flag && <InfoLabel>{product.flag}</InfoLabel>}
        {/* Quantity row inside card header — bottom strip */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          padding: 6, color: 'var(--zd-grey-900)', fontSize: 10, lineHeight: '12px',
        }}>
          <span style={{ fontWeight: 600 }}>{product.qty}</span>
          {product.unit_price && <span style={{ fontWeight: 500 }}>{product.unit_price}</span>}
        </div>
        {/* Add / Stepper bottom-right of header */}
        {qty === 0
          ? <AddButton onClick={(e)=>{e.stopPropagation();onAdd();}} />
          : <QtyStepper qty={qty} onInc={onInc} onDec={onDec} />}
      </div>

      {/* Card Body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 2px', width: '100%' }}>
        <PriceBlock price={product.price} mrp={product.mrp} />
        {savings > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingTop: 2 }}>
            <span style={{ fontSize: 10, lineHeight: '12px', fontWeight: 700, color: 'var(--zd-green-800)' }}>₹{savings} OFF</span>
            <div style={{ flex: 1, height: 1, borderTop: '1px dashed var(--zd-grey-200)' }} />
          </div>
        )}
        <p style={{
          margin: 0, fontSize: 12, lineHeight: '14px', fontWeight: 500,
          color: 'var(--zd-grey-900)', overflow: 'hidden', textOverflow: 'ellipsis',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', minHeight: 28,
        }}>{product.name}</p>
        {product.attrs && product.attrs.length > 0 && (
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', padding: '4px 0' }}>
            {product.attrs.map(a => <AttrTag key={a}>{a}</AttrTag>)}
          </div>
        )}
        {product.rating && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Rating value={product.rating} count={product.rating_count || 100} />
          </div>
        )}
      </div>
    </div>
  );
}

function ProductGrid({ products, qtyMap, onAdd, onInc, onDec, onTap }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '12px 16px' }}>
      {products.map(p => (
        <ProductCard key={p.id} product={p}
          qty={qtyMap[p.id] || 0}
          onAdd={() => onAdd(p)} onInc={() => onInc(p)} onDec={() => onDec(p)}
          onTap={() => onTap(p)}
        />
      ))}
    </div>
  );
}

window.ProductCard = ProductCard;
window.ProductGrid = ProductGrid;
window.ImgPH = ImgPH;
