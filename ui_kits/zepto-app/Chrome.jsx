/* global React, I */
const { useState: useStateH } = React;

function Header({ eta = "10 mins", address = "Bandra West, Mumbai", onSearch }) {
  return (
    <div style={{
      background: '#fff', padding: '12px 16px 10px', borderBottom: '1px solid var(--zd-border)',
      position: 'sticky', top: 0, zIndex: 5,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <I.Bolt width="14" height="14" style={{ color: 'var(--zd-brand)' }} />
        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--zd-text)' }}>
          Delivery in {eta}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--zd-text-secondary)', marginBottom: 10 }}>
        <I.Pin width="13" height="13" />
        <span style={{ fontSize: 12 }}>HOME · {address}</span>
        <I.Down width="14" height="14" />
      </div>
      <button onClick={onSearch} style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: 8,
        background: 'var(--zd-grey-50)', border: '1px solid var(--zd-border)',
        borderRadius: 10, padding: '10px 12px', cursor: 'pointer',
        color: 'var(--zd-text-tertiary)', fontFamily: 'inherit', fontSize: 13,
      }}>
        <I.Search width="16" height="16" />
        <span>Search "atta"</span>
      </button>
    </div>
  );
}

function BottomTabBar({ tab, setTab, cartCount = 0 }) {
  const tabs = [
    { id: 'home', label: 'Home', Icon: I.Home },
    { id: 'cats', label: 'Categories', Icon: I.Grid },
    { id: 'cart', label: 'Cart', Icon: I.Cart, badge: cartCount },
    { id: 'acct', label: 'Account', Icon: I.User },
  ];
  return (
    <div style={{
      background: '#fff', borderTop: '1px solid var(--zd-border)',
      display: 'flex', justifyContent: 'space-around', padding: '8px 0 6px',
      position: 'sticky', bottom: 0, zIndex: 5,
    }}>
      {tabs.map(t => {
        const active = tab === t.id;
        return (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: active ? 'var(--zd-brand)' : 'var(--zd-text-secondary)',
            fontFamily: 'inherit', padding: '4px 12px', position: 'relative',
          }}>
            <t.Icon width="22" height="22" filled={active} />
            <span style={{ fontSize: 10, fontWeight: active ? 700 : 500 }}>{t.label}</span>
            {t.badge > 0 && (
              <span style={{
                position: 'absolute', top: 0, right: 6, background: 'var(--zd-brand)',
                color: '#fff', fontSize: 9, fontWeight: 700, borderRadius: 999,
                minWidth: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px',
              }}>{t.badge}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

window.Header = Header;
window.BottomTabBar = BottomTabBar;
