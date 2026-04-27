/**
 * Back-compat shims that wrap the Phosphor-backed <Icon /> primitive.
 *
 * New code should import { Icon } from './Icon' and pass `name`/`weight`
 * directly. These aliases exist only for existing call sites in
 * Header / BottomTabBar.
 */
import { Icon, type IconProps as BaseIconProps } from './Icon';

export interface IconProps extends Omit<BaseIconProps, 'name' | 'weight'> {
  /** When true, renders the filled weight (used for active tab states). */
  filled?: boolean;
}

export function HomeIcon({ filled, ...rest }: IconProps) {
  return <Icon name="house" weight={filled ? 'fill' : 'regular'} {...rest} />;
}

export function GridIcon(props: IconProps) {
  return <Icon name="list" {...props} />;
}

export function CartIcon({ filled, ...rest }: IconProps) {
  return <Icon name="shopping-cart" weight={filled ? 'fill' : 'regular'} {...rest} />;
}

export function UserIcon({ filled, ...rest }: IconProps) {
  return <Icon name="user" weight={filled ? 'fill' : 'regular'} {...rest} />;
}

export function PinIcon(props: IconProps) {
  return <Icon name="map-pin" {...props} />;
}

export function DownIcon(props: IconProps) {
  return <Icon name="caret-down" {...props} />;
}

export function SearchIcon(props: IconProps) {
  return <Icon name="magnifying-glass" {...props} />;
}

export function BoltIcon(props: IconProps) {
  return <Icon name="lightning" weight="fill" {...props} />;
}

export { Icon } from './Icon';
export type { IconName, Weight } from './Icon';
