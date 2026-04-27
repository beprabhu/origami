import type { CSSProperties } from 'react';
import { ProductCard, type Product, type ProductCardProps } from './ProductCard';

export interface ProductGridProps {
  /** Products to render. */
  products: Product[];
  /** Map of product id → current cart quantity. */
  qtyMap?: Record<string, number>;
  /** ADD-tap callback. Receives the product. */
  onAdd?: (product: Product) => void;
  /** Increment callback. */
  onInc?: (product: Product) => void;
  /** Decrement callback. */
  onDec?: (product: Product) => void;
  /** Card-tap callback (PDP open). */
  onTap?: (product: Product) => void;
  /** Number of columns. Default 2 (matches mobile). */
  columns?: number;
  /** Gap between cards. */
  gap?: number | string;
  /** Optional render-prop forwarded to each card. */
  renderImage?: ProductCardProps['renderImage'];
  /** CSS class for the outer grid wrapper. */
  className?: string;
  /** Inline styles for the outer grid wrapper. */
  style?: CSSProperties;
}

/**
 * Responsive product grid. Defaults to 2-up (mobile); pass `columns` to
 * change density. Layout is plain CSS grid, so it adapts cleanly inside any
 * container. Cart quantity is controlled — pass `qtyMap` and the four
 * callbacks; the grid itself stores no state.
 */
export function ProductGrid({
  products,
  qtyMap = {},
  onAdd,
  onInc,
  onDec,
  onTap,
  columns = 2,
  gap = 12,
  renderImage,
  className,
  style,
}: ProductGridProps) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        padding: '12px 16px',
        ...style,
      }}
    >
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          qty={qtyMap[p.id] ?? 0}
          onAdd={() => onAdd?.(p)}
          onInc={() => onInc?.(p)}
          onDec={() => onDec?.(p)}
          onTap={() => onTap?.(p)}
          renderImage={renderImage}
        />
      ))}
    </div>
  );
}
