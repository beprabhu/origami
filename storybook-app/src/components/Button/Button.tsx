import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'neutral'
  | 'ghost'
  | 'destructive';

export type ButtonSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` is the default Zepto brand-pink CTA. */
  variant?: ButtonVariant;
  /** Height. `xl` (56px) is the standard cart/checkout CTA. */
  size?: ButtonSize;
  /** Stretches the button to its container's width. */
  fullWidth?: boolean;
  /** Show a spinner and disable interaction. */
  loading?: boolean;
  /** Icon rendered before the label. */
  leftIcon?: ReactNode;
  /** Icon rendered after the label. Often `<Chevron />` for next-step CTAs. */
  rightIcon?: ReactNode;
  /** Button label. */
  children?: ReactNode;
}

/**
 * Origami Button — the brand's primary CTA primitive.
 *
 * Variants follow the Zesto reference palette: `primary` (brand-filled),
 * `secondary` (brand-outlined), `tertiary` (ghost on neutral), `neutral`
 * (dark), `ghost`, and `destructive`. Sizes `xxs`–`xl` map 1:1 to the height
 * tokens (24, 28, 32, 40, 48, 56 px).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    fullWidth,
    loading,
    disabled,
    leftIcon,
    rightIcon,
    className,
    children,
    type = 'button',
    ...rest
  },
  ref,
) {
  const cls = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={ref}
      type={type}
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? (
        <span className={styles.spinner} aria-hidden />
      ) : (
        leftIcon && <span className={styles.icon}>{leftIcon}</span>
      )}
      {children}
      {!loading && rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
});
