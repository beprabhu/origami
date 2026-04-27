/* global React, I */
const { useEffect: useEffectO, useState: useStateO } = React;

function OrderTracker({ onDone, onClose }) {
  const [secs, setSecs] = useStateO(8 * 60);
  const [stage, setStage] = useStateO(0); // 0 packed, 1 dispatched, 2 nearby, 3 delivered
  useEffectO(() => {
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  useEffectO(() => {
    if (secs > 6 * 60) setStage(0);
    else if (secs > 4 * 60) setStage(1);
    else if (secs > 0) setStage(2);
    else setStage(3);
  }, [secs]);
  const m = Math.floor(secs / 60), s = secs % 60;
  const stages = [
    { label: 'Order placed', sub: 'We received your order' },
    { label: 'Being packed', sub: 'Items being collected at the dark store' },
    { label: 'Out for delivery', sub: 'Rider is on the way' },
    { label: 'Delivered', sub: 'Enjoy your order!' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--zd-grey-50)' }}>
      <div style={{ background: 'var(--zd-brand)', color: '#fff', padding: '16px 16px 24px', position: 'relative' }}>
        <button onClick={onClose} style={{ ...iconBtn2, color: '#fff', position: 'absolute', top: 12, right: 12 }}><I.X width="22" height="22"/></button>
        <div style={{ fontSize: 11, letterSpacing: 0.5, textTransform: 'uppercase', fontWeight: 700, opacity: 0.85 }}>Arriving in</div>
        <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: -1, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>
          {m}:{String(s).padStart(2, '0')}
        </div>
        <div style={{ fontSize: 13, opacity: 0.95 }}>{stage < 3 ? `Your order is ${stages[stage].label.toLowerCase()}` : 'Delivered to your door'}</div>
      </div>
      <div style={{ flex: 1, padding: 16, overflowY: 'auto' }}>
        <div style={{ background: '#fff', borderRadius: 14, padding: 16 }}>
          {stages.map((st, i) => {
            const done = i < stage, active = i === stage;
            return (
              <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: i === stages.length - 1 ? 0 : 14, position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: 999,
                    background: done || active ? 'var(--zd-brand)' : 'var(--zd-grey-200)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{done ? <I.Check width="14" height="14"/> : active ? <span style={{ width: 8, height: 8, background: '#fff', borderRadius: 999 }}/> : null}</div>
                  {i < stages.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: done ? 'var(--zd-brand)' : 'var(--zd-grey-200)', minHeight: 22 }}/>
                  )}
                </div>
                <div style={{ paddingTop: 2, paddingBottom: i === stages.length - 1 ? 0 : 4 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: active || done ? 'var(--zd-text-primary)' : 'var(--zd-text-tertiary)' }}>{st.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--zd-text-secondary)' }}>{st.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={onDone} style={{
          marginTop: 16, width: '100%', height: 48, background: '#fff',
          border: '1px solid var(--zd-border)', borderRadius: 12,
          color: 'var(--zd-text-primary)', fontFamily: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer',
        }}>Back to home</button>
      </div>
    </div>
  );
}
const iconBtn2 = { background: 'transparent', border: 'none', cursor: 'pointer' };
window.OrderTracker = OrderTracker;
