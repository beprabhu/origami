import {
  forwardRef,
  useId,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './Input.module.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label rendered above the input. Omit for unlabeled fields (use `aria-label`). */
  label?: string;
  /** Helper text below the input. Becomes error text if `error` is true. */
  helper?: string;
  /** Switches helper text + border into the error palette. */
  error?: boolean;
  /** Marks the field as required and renders a red asterisk after the label. */
  required?: boolean;
  /** Vertical density. */
  size?: InputSize;
  /** Element rendered inside the input on the left. Common: search icon. */
  leftAddon?: ReactNode;
  /** Element rendered inside the input on the right. Common: clear button, unit. */
  rightAddon?: ReactNode;
}

/**
 * Origami text input.
 *
 * Mirrors Zepto's product input field — quiet 1-px border, brand-pink focus ring,
 * inline left/right addons for icons or units. The `error` prop is the only
 * way to surface the error palette; we don't recolor based on `aria-invalid`.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helper,
    error,
    required,
    size = 'md',
    leftAddon,
    rightAddon,
    id: idProp,
    className,
    onFocus,
    onBlur,
    disabled,
    ...rest
  },
  ref,
) {
  const reactId = useId();
  const id = idProp ?? `input-${reactId}`;
  const helperId = helper ? `${id}-helper` : undefined;
  const [focused, setFocused] = useState(false);

  const wrapperCls = [
    styles.wrapper,
    styles[size],
    focused && styles.focused,
    error && styles.error,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={[styles.field, className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden>*</span>}
        </label>
      )}
      <div className={wrapperCls}>
        {leftAddon && <span className={`${styles.affix} ${styles.leftAffix}`}>{leftAddon}</span>}
        <input
          {...rest}
          id={id}
          ref={ref}
          disabled={disabled}
          required={required}
          aria-invalid={error || undefined}
          aria-describedby={helperId}
          className={styles.input}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
        />
        {rightAddon && <span className={`${styles.affix} ${styles.rightAffix}`}>{rightAddon}</span>}
      </div>
      {helper && (
        <span
          id={helperId}
          className={[styles.helper, error && styles.errorText].filter(Boolean).join(' ')}
        >
          {helper}
        </span>
      )}
    </div>
  );
});
