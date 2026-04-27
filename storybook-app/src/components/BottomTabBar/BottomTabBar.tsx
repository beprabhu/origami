import type { ComponentType } from 'react';
import { CartIcon, GridIcon, HomeIcon, UserIcon, type IconProps } from '../icons';
import styles from './BottomTabBar.module.css';

export type TabId = 'home' | 'cats' | 'cart' | 'acct' | string;

export interface TabItem {
  id: TabId;
  label: string;
  Icon: ComponentType<IconProps>;
  /** Optional badge count rendered as a brand-pink pill on the icon corner. */
  badge?: number;
}

export interface BottomTabBarProps {
  /** Currently active tab id. */
  tab: TabId;
  /** Tab change callback. */
  onTabChange?: (id: TabId) => void;
  /** Override the default 4 tabs. */
  tabs?: TabItem[];
  /** Convenience: badge count on the default Cart tab. Ignored when `tabs` is supplied. */
  cartCount?: number;
}

const DEFAULT_TABS: TabItem[] = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'cats', label: 'Categories', Icon: GridIcon },
  { id: 'cart', label: 'Cart', Icon: CartIcon },
  { id: 'acct', label: 'Account', Icon: UserIcon },
];

/**
 * Sticky bottom tab bar — Zepto's primary mobile nav. Active tab is brand-pink
 * with a filled icon variant; inactive tabs use the secondary text color and
 * outline icon. Cart can carry a badge count.
 */
export function BottomTabBar({
  tab,
  onTabChange,
  tabs = DEFAULT_TABS,
  cartCount = 0,
}: BottomTabBarProps) {
  return (
    <nav className={styles.bar} aria-label="Primary">
      {tabs.map((t) => {
        const active = tab === t.id;
        const badge =
          t.badge ?? (t.id === 'cart' && tabs === DEFAULT_TABS ? cartCount : undefined);
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onTabChange?.(t.id)}
            className={[styles.tab, active && styles.active].filter(Boolean).join(' ')}
            aria-current={active ? 'page' : undefined}
          >
            <t.Icon width={22} height={22} filled={active} />
            <span className={styles.label}>{t.label}</span>
            {badge && badge > 0 ? (
              <span className={styles.badge} aria-label={`${badge} items`}>
                {badge}
              </span>
            ) : null}
          </button>
        );
      })}
    </nav>
  );
}
