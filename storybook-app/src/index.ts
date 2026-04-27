// Origami — public component API.
//
// Re-export every component + its types from this single entry so consumers can
// `import { Button } from 'origami'` without reaching into folders.

export * from './components/Button';
export * from './components/Input';
export * from './components/Badge';
export * from './components/ProductCard';
export * from './components/Header';
export * from './components/BottomTabBar';

// Tokens module (JS-side mirror of tokens.css).
export * as tokens from './tokens';
export { default as TOKENS } from './tokens';
