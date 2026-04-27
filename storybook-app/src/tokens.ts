/**
 * Origami — design tokens, JS edition.
 *
 * Mirrors src/styles/tokens.css. Use these for:
 *   - Storybook controls (dropdown of color/spacing options)
 *   - Programmatic theming
 *   - Token-aware components that need the raw value (e.g. SVG fills)
 *
 * The CSS file is still the source of truth at runtime — these just
 * re-export the same names as JS strings.
 */

// ─── Color · Base ramps ────────────────────────────────────────────
export const pink = {
  50: 'var(--zd-pink-50)',
  100: 'var(--zd-pink-100)',
  200: 'var(--zd-pink-200)',
  300: 'var(--zd-pink-300)',
  400: 'var(--zd-pink-400)',
  500: 'var(--zd-pink-500)',
  600: 'var(--zd-pink-600)',
  700: 'var(--zd-pink-700)',
  800: 'var(--zd-pink-800)',
  900: 'var(--zd-pink-900)',
} as const;

export const grey = {
  50: 'var(--zd-grey-50)',
  100: 'var(--zd-grey-100)',
  200: 'var(--zd-grey-200)',
  300: 'var(--zd-grey-300)',
  400: 'var(--zd-grey-400)',
  500: 'var(--zd-grey-500)',
  600: 'var(--zd-grey-600)',
  700: 'var(--zd-grey-700)',
  800: 'var(--zd-grey-800)',
  900: 'var(--zd-grey-900)',
  white: 'var(--zd-white)',
  black: 'var(--zd-black)',
} as const;

export const green = {
  50: 'var(--zd-green-50)',
  100: 'var(--zd-green-100)',
  200: 'var(--zd-green-200)',
  500: 'var(--zd-green-500)',
  700: 'var(--zd-green-700)',
  800: 'var(--zd-green-800)',
  900: 'var(--zd-green-900)',
} as const;

export const grass = {
  100: 'var(--zd-grass-100)',
  500: 'var(--zd-grass-500)',
  700: 'var(--zd-grass-700)',
  800: 'var(--zd-grass-800)',
  900: 'var(--zd-grass-900)',
} as const;

export const orange = {
  50: 'var(--zd-orange-50)',
  100: 'var(--zd-orange-100)',
  500: 'var(--zd-orange-500)',
  700: 'var(--zd-orange-700)',
  800: 'var(--zd-orange-800)',
} as const;

export const red = {
  50: 'var(--zd-red-50)',
  500: 'var(--zd-red-500)',
  600: 'var(--zd-red-600)',
} as const;

export const blue = {
  50: 'var(--zd-blue-50)',
  500: 'var(--zd-blue-500)',
  700: 'var(--zd-blue-700)',
} as const;

// ─── Color · Semantic ──────────────────────────────────────────────
export const semantic = {
  brand: 'var(--zd-brand)',
  brandHover: 'var(--zd-brand-hover)',
  brandPressed: 'var(--zd-brand-pressed)',
  brandSubtle: 'var(--zd-brand-subtle)',
  brandOn: 'var(--zd-brand-on)',
  text: 'var(--zd-text)',
  textSecondary: 'var(--zd-text-secondary)',
  textTertiary: 'var(--zd-text-tertiary)',
  textDisabled: 'var(--zd-text-disabled)',
  textOnBold: 'var(--zd-text-on-bold)',
  textSuccess: 'var(--zd-text-success)',
  textError: 'var(--zd-text-error)',
  textWarning: 'var(--zd-text-warning)',
  surface: 'var(--zd-surface)',
  surfaceMuted: 'var(--zd-surface-muted)',
  surfaceTertiary: 'var(--zd-surface-tertiary)',
  surfaceDark: 'var(--zd-surface-dark)',
  border: 'var(--zd-border)',
  borderMedium: 'var(--zd-border-medium)',
  borderBold: 'var(--zd-border-bold)',
  borderBrand: 'var(--zd-border-brand)',
  borderError: 'var(--zd-border-error)',
} as const;

// ─── Typography ────────────────────────────────────────────────────
export const fontFamily = {
  sans: 'var(--zd-font-sans)',
  mono: 'var(--zd-font-mono)',
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  demi: 600,
  bold: 700,
  black: 900,
} as const;

export type TypeScale =
  | 'h48' | 'h32' | 'h28' | 'h24' | 'h20' | 'h18' | 'h16' | 'h14'
  | 'b16' | 'b14' | 'b12' | 'b10'
  | 'a18' | 'a16' | 'a14' | 'a12'
  | 'o14' | 'o12' | 'o10';

// ─── Spacing (4px grid) ────────────────────────────────────────────
export const space = {
  0: 'var(--zd-space-0)',
  1: 'var(--zd-space-1)',
  2: 'var(--zd-space-2)',
  3: 'var(--zd-space-3)',
  4: 'var(--zd-space-4)',
  5: 'var(--zd-space-5)',
  6: 'var(--zd-space-6)',
  7: 'var(--zd-space-7)',
  8: 'var(--zd-space-8)',
  9: 'var(--zd-space-9)',
  10: 'var(--zd-space-10)',
} as const;

// ─── Radius ────────────────────────────────────────────────────────
export const radius = {
  xs: 'var(--zd-radius-xs)',
  sm: 'var(--zd-radius-sm)',
  md: 'var(--zd-radius-md)',
  lg: 'var(--zd-radius-lg)',
  xl: 'var(--zd-radius-xl)',
  '2xl': 'var(--zd-radius-2xl)',
  pill: 'var(--zd-radius-pill)',
} as const;

// ─── Elevation ─────────────────────────────────────────────────────
export const shadow = {
  xs: 'var(--zd-shadow-xs)',
  sm: 'var(--zd-shadow-sm)',
  md: 'var(--zd-shadow-md)',
  lg: 'var(--zd-shadow-lg)',
  xl: 'var(--zd-shadow-xl)',
  brand: 'var(--zd-shadow-brand)',
  cardPop: 'var(--zd-shadow-card-pop)',
} as const;

// ─── Motion ────────────────────────────────────────────────────────
export const motion = {
  durFast: 'var(--zd-dur-fast)',
  durNormal: 'var(--zd-dur-normal)',
  durSlow: 'var(--zd-dur-slow)',
  easeStandard: 'var(--zd-ease-standard)',
  easeOut: 'var(--zd-ease-out)',
  easeSpring: 'var(--zd-ease-spring)',
} as const;

// ─── Aggregate (handy for spreading into Storybook controls) ───────
export const tokens = {
  pink, grey, green, grass, orange, red, blue,
  semantic,
  fontFamily, fontWeight,
  space, radius, shadow, motion,
} as const;

export default tokens;
