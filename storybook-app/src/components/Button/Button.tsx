import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';

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
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  'primary': 'zd-btn--primary',
  'secondary': 'zd-btn--secondary',
  'tertiary': 'zd-btn--tertiary',
  'neutral': 'zd-btn--neutral',
  'link-secondary': 'zd-btn--linkSecondary',
  'link-neutral': 'zd-btn--linkNeutral',
  'super-saver': 'zd-btn--superSaver',
  'super-saver-outline': 'zd-btn--superSaverOutline',
};

/**
 * Origami Button — the brand's primary CTA primitive.
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
    'zd-btn',
    VARIANT_CLASS[variant],
    `zd-btn--${size}`,
    fullWidth && 'zd-btn--fullWidth',
    loading && 'zd-btn--loading',
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
        <span className="zd-btn__spinner" aria-hidden />
      ) : (
        leftIcon && <span className="zd-btn__icon">{leftIcon}</span>
      )}
      {children}
      {!loading && rightIcon && <span className="zd-btn__icon">{rightIcon}</span>}
    </button>
  );
});
