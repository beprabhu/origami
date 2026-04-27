/* global React, I, ImgPH */

function PromoBanner({ title, kicker, bg = 'var(--zd-brand)', accent = '#fff', onClick }) {
  return (
    <div onClick={onClick} style={{
      margin: '12px 16px 0', borderRadius: 14, padding: '16px 18px',
      background: bg, color: '#fff', cursor: 'pointer', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', opacity: 0.9, color: accent }}>{kicker}</div>
      <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4, letterSpacing: -0.2, lineHeight: 1.2 }}>{title}</div>
    </div>
  );
}

function CategoryStrip({ categories, onTap }) {
  return (
    <div style={{ padding: '14px 0' }}>
      <div style={{ padding: '0 16px 8px', fontSize: 13, fontWeight: 700, color: 'var(--zd-text-primary)' }}>Shop by category</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, padding: '0 16px' }}>
        {categories.map(c => (
          <button key={c.id} onClick={() => onTap(c)} style={{
            background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: 6,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 12, background: c.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.fg, fontSize: 22, fontWeight: 700,
            }}>{c.glyph}</div>
            <span style={{ fontSize: 10, color: 'var(--zd-text-primary)', textAlign: 'center', lineHeight: 1.2 }}>{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function PassStrip({ onTap }) {
  return (
    <div onClick={onTap} style={{
      margin: '12px 16px', borderRadius: 14, padding: '14px 16px', cursor: 'pointer',
      background: 'radial-gradient(at 20% 30%, rgba(150,126,206,0.45), transparent 60%), var(--zd-pass-bg)',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div>
        <div style={{ fontSize: 9, color: 'var(--zd-pass-accent)', letterSpacing: 0.5, fontWeight: 700, textTransform: 'uppercase' }}>Membership</div>
        <div style={{ fontSize: 15, fontWeight: 700, marginTop: 2 }}>Save ₹200 monthly with Zepto Pass</div>
        <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>Free deliveries · No surge fees</div>
      </div>
      <I.Chevron width="20" height="20" />
    </div>
  );
}

function SectionHeader({ title, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px 6px' }}>
      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--zd-text-primary)' }}>{title}</span>
      {action && (
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--zd-brand)', letterSpacing: 0.2 }}>{action} ›</span>
      )}
    </div>
  );
}

window.PromoBanner = PromoBanner;
window.CategoryStrip = CategoryStrip;
window.PassStrip = PassStrip;
window.SectionHeader = SectionHeader;
