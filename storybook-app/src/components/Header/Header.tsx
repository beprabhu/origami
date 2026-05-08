import { BoltIcon, DownIcon, PinIcon, SearchIcon } from '../icons';
import './Header.css';

export interface HeaderProps {
  eta?: string;
  address?: string;
  addressTag?: string;
  searchPlaceholder?: string;
  onSearch?: () => void;
  onAddressTap?: () => void;
}

export function Header({
  eta = '10 mins',
  address = 'Bandra West, Mumbai',
  addressTag = 'HOME',
  searchPlaceholder = 'Search "atta"',
  onSearch,
  onAddressTap,
}: HeaderProps) {
  return (
    <header className="zd-header">
      <div className="zd-header__eta">
        <BoltIcon width={14} height={14} className="zd-header__bolt" />
        <div className="zd-header__label">Delivery in {eta}</div>
      </div>
      <button type="button" onClick={onAddressTap} className="zd-header__address">
        <PinIcon width={13} height={13} />
        <span>
          <strong>{addressTag}</strong> · {address}
        </span>
        <DownIcon width={14} height={14} />
      </button>
      <button type="button" onClick={onSearch} className="zd-header__search">
        <SearchIcon width={16} height={16} />
        <span>{searchPlaceholder}</span>
      </button>
    </header>
  );
}
