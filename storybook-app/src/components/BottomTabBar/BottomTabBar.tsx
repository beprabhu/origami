import type { ComponentType } from 'react';
import { CartIcon, GridIcon, HomeIcon, UserIcon, type IconProps } from '../icons';
import './BottomTabBar.css';

export type TabId = 'home' | 'cats' | 'cart' | 'acct' | string;

export interface TabItem {
  id: TabId;
  label: string;
  Icon: ComponentType<IconProps>;
  badge?: number;
}

export interface BottomTabBarProps {
  tab: TabId;
  onTabChange?: (id: TabId) => void;
  tabs?: TabItem[];
  cartCount?: number;
}

const DEFAULT_TABS: TabItem[] = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'cats', label: 'Categories', Icon: GridIcon },
  { id: 'cart', label: 'Cart', Icon: CartIcon },
  { id: 'acct', label: 'Account', Icon: UserIcon },
];

export function BottomTabBar({
  tab,
  onTabChange,
  tabs = DEFAULT_TABS,
  cartCount = 0,
}: BottomTabBarProps) {
  return (
    <nav className="zd-tabbar" aria-label="Primary">
      {tabs.map((t) => {
        const active = tab === t.id;
        const badge =
          t.badge ?? (t.id === 'cart' && tabs === DEFAULT_TABS ? cartCount : undefined);
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onTabChange?.(t.id)}
            className={['zd-tabbar__tab', active && 'zd-tabbar__tab--active'].filter(Boolean).join(' ')}
            aria-current={active ? 'page' : undefined}
          >
            <t.Icon width={22} height={22} filled={active} />
            <span className="zd-tabbar__label">{t.label}</span>
            {badge && badge > 0 ? (
              <span className="zd-tabbar__badge" aria-label={`${badge} items`}>
                {badge}
              </span>
            ) : null}
          </button>
        );
      })}
    </nav>
  );
}
