import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.css';

export type BadgeTone =
  | 'brand'
  | 'success'
  | 'warning'
  | 'error'
  | 'neutral'
  | 'info';

export type BadgeVariant = 'solid' | 'subtle' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color category. */
  tone?: BadgeTone;
  /** Fill style. `solid` is the high-contrast pill; `subtle` is the tinted background; `outline` is white with a colored stroke. */
  variant?: BadgeVariant;
  /** Pill height. */
  size?: BadgeSize;
  /** Force UPPERCASE styling (default for tonal status pills). */
  uppercase?: boolean;
  /** Optional icon rendered before the label. */
  icon?: ReactNode;
  children?: ReactNode;
}

/**
 * Origami status pill. Used for product chips (`SUPER SAVER`, `BESTSELLER`,
 * `HOT DEAL`, `NEW`), order-status indicators, and small numeric counts.
 *
 * Defaults: subtle variant, medium size, uppercase on. Override `uppercase={false}`
 * for sentence-case badges (e.g. "₹26 saved").
 */
export function Badge({
  tone = 'neutral',
  variant = 'subtle',
  size = 'md',
  uppercase = true,
  icon,
  className,
  children,
  ...rest
}: BadgeProps) {
  const variantClass =
    variant === 'solid'
      ? styles[tone]
      : variant === 'subtle'
        ? styles[`${tone}Subtle` as keyof typeof styles]
        : `${styles.outline} ${styles[tone]}`;

  const cls = [
    styles.badge,
    styles[size],
    variantClass,
    uppercase && styles.uppercase,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={cls} {...rest}>
      {icon}
      {children}
    </span>
  );
}
