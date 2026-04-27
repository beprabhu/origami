import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'neutral'
  | 'link-secondary'
  | 'link-neutral'
  | 'super-saver'
  | 'super-saver-outline';

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
 * Variants follow the canonical token JSON: `primary` (brand-pink filled),
 * `secondary` (brand-pink outline), `tertiary` (dark filled), `neutral`
 * (white w/ border), `link-secondary` & `link-neutral` (text-only), and
 * the Super-Saver pair (`super-saver`, `super-saver-outline`).
 * Sizes `xxs`–`xl` map 1:1 to the height tokens (24, 28, 32, 40, 48, 56 px).
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
  const variantClass: Record<ButtonVariant, string> = {
    'primary': styles.primary,
    'secondary': styles.secondary,
    'tertiary': styles.tertiary,
    'neutral': styles.neutral,
    'link-secondary': styles.linkSecondary,
    'link-neutral': styles.linkNeutral,
    'super-saver': styles.superSaver,
    'super-saver-outline': styles.superSaverOutline,
  };

  const cls = [
    styles.button,
    variantClass[variant],
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
