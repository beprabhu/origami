/* global React, I, ImgPH */

function CartScreen({ items, products, onInc, onDec, onCheckout, onBack, onClose }) {
  const cartItems = items.map(i => ({ ...i, ...products.find(p => p.id === i.id) }));
  const subtotal = cartItems.reduce((s, it) => s + (it.price * it.qty), 0);
  const saved = cartItems.reduce((s, it) => s + ((it.mrp || it.price) - it.price) * it.qty, 0);
  const delivery = subtotal > 199 ? 0 : 19;
  const total = subtotal + delivery;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--zd-grey-50)' }}>
      <div style={{ background: '#fff', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--zd-border)' }}>
        <button onClick={onBack} style={iconBtn}><I.Back width="22" height="22"/></button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Your cart</div>
          <div style={{ fontSize: 11, color: 'var(--zd-text-secondary)' }}>Delivery in 10 mins</div>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, color: 'var(--zd-text-secondary)' }}>
          <I.Cart width="40" height="40" style={{ color: 'var(--zd-grey-300)' }} />
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--zd-text-primary)' }}>Your cart is empty</div>
          <div style={{ fontSize: 12 }}>Add items to get started</div>
        </div>
      ) : (
        <>
          <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
            {saved > 0 && (
              <div style={{ background: 'var(--zd-green-50)', color: 'var(--zd-green-800)', padding: '8px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, marginBottom: 10 }}>
                You saved ₹{saved} on this order 🎉
              </div>
            )}
            <div style={{ background: '#fff', borderRadius: 12, padding: 4 }}>
              {cartItems.map(it => (
                <div key={it.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 8, borderBottom: '1px solid var(--zd-border)' }}>
                  <div style={{ width: 50, height: 50, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
                    <ImgPH tone={it.tone} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--zd-text-primary)' }}>{it.name}</div>
                    <div style={{ fontSize: 10, color: 'var(--zd-text-secondary)' }}>{it.qty_label}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--zd-text-primary)', marginTop: 2 }}>₹{it.price}</div>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--zd-brand)', borderRadius: 6, color: '#fff' }}>
                    <button onClick={() => onDec(it)} style={qBtn2}><I.Minus width="12" height="12"/></button>
                    <span style={{ fontSize: 12, fontWeight: 700, padding: '0 6px', minWidth: 18, textAlign: 'center' }}>{it.qty}</span>
                    <button onClick={() => onInc(it)} style={qBtn2}><I.Plus width="12" height="12"/></button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '12px 14px', marginTop: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Bill details</div>
              {[['Item total', `₹${subtotal}`], ['Delivery fee', delivery === 0 ? 'FREE' : `₹${delivery}`], ['Handling charge', '₹2']].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--zd-text-secondary)', marginBottom: 4 }}>
                  <span>{l}</span><span style={{ color: l === 'Delivery fee' && delivery === 0 ? 'var(--zd-green-800)' : 'var(--zd-text-primary)' }}>{v}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--zd-border)', marginTop: 8, paddingTop: 8, display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 700 }}>
                <span>To pay</span><span>₹{total + 2}</span>
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', padding: 12, borderTop: '1px solid var(--zd-border)' }}>
            <button onClick={onCheckout} style={{
              width: '100%', height: 52, background: 'var(--zd-brand)', color: '#fff', border: 'none',
              borderRadius: 12, fontSize: 16, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px',
            }}>
              <span>₹{total + 2} · {cartItems.length} item{cartItems.length > 1 ? 's' : ''}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>Place order <I.Chevron width="18" height="18"/></span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const iconBtn = { background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--zd-text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4 };
const qBtn2 = { background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '6px 8px', display: 'flex', alignItems: 'center' };

window.CartScreen = CartScreen;
