import { BoltIcon, DownIcon, PinIcon, SearchIcon } from '../icons';
import styles from './Header.module.css';

export interface HeaderProps {
  /** Delivery estimate, shown after "Delivery in". */
  eta?: string;
  /** Active address line. */
  address?: string;
  /** Address-tag prefix, e.g. "HOME", "WORK". */
  addressTag?: string;
  /** Placeholder copy in the search button. */
  searchPlaceholder?: string;
  /** Tap on the search button (open search route or sheet). */
  onSearch?: () => void;
  /** Tap on the address row (open address picker). */
  onAddressTap?: () => void;
}

/**
 * Sticky top header for the Zepto consumer app: ETA bolt, address pill, search.
 *
 * The header is purely cosmetic — there's no real address picker or search
 * route. Wire `onSearch` / `onAddressTap` to open whatever route or sheet
 * makes sense in your app shell.
 */
export function Header({
  eta = '10 mins',
  address = 'Bandra West, Mumbai',
  addressTag = 'HOME',
  searchPlaceholder = 'Search "atta"',
  onSearch,
  onAddressTap,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.eta}>
        <BoltIcon width={14} height={14} className={styles.bolt} />
        <div className={styles.label}>Delivery in {eta}</div>
      </div>
      <button
        type="button"
        onClick={onAddressTap}
        className={styles.address}
        style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
      >
        <PinIcon width={13} height={13} />
        <span>
          <strong>{addressTag}</strong> · {address}
        </span>
        <DownIcon width={14} height={14} />
      </button>
      <button type="button" onClick={onSearch} className={styles.search}>
        <SearchIcon width={16} height={16} />
        <span>{searchPlaceholder}</span>
      </button>
    </header>
  );
}
