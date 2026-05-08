import {
  forwardRef,
  useId,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import './Input.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helper?: string;
  error?: boolean;
  required?: boolean;
  size?: InputSize;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

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
    'zd-input',
    `zd-input--${size}`,
    focused && 'zd-input--focused',
    error && 'zd-input--error',
    disabled && 'zd-input--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={['zd-input-field', className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={id} className="zd-input__label">
          {label}
          {required && <span className="zd-input__required" aria-hidden>*</span>}
        </label>
      )}
      <div className={wrapperCls}>
        {leftAddon && <span className="zd-input__affix zd-input__affix--left">{leftAddon}</span>}
        <input
          {...rest}
          id={id}
          ref={ref}
          disabled={disabled}
          required={required}
          aria-invalid={error || undefined}
          aria-describedby={helperId}
          className="zd-input__control"
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
        />
        {rightAddon && <span className="zd-input__affix zd-input__affix--right">{rightAddon}</span>}
      </div>
      {helper && (
        <span
          id={helperId}
          className={['zd-input__helper', error && 'zd-input__helper--error'].filter(Boolean).join(' ')}
        >
          {helper}
        </span>
      )}
    </div>
  );
});
