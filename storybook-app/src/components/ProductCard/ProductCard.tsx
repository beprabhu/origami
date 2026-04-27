import type { ReactNode } from 'react';
import { Icon } from '../Icon';
import styles from './ProductCard.module.css';

export interface Product {
  /** Stable id (used as React key + handler payload). */
  id: string;
  /** Display name (1–2 lines, clamped). */
  name: string;
  /** Quantity label, e.g. "500 ml", "1 kg". */
  qty: string;
  /** Optional unit-rate label, e.g. "₹54/L". */
  unit_price?: string;
  /** Selling price (rupees, integer). */
  price: number;
  /** Optional MRP for strike-through + savings calc. */
  mrp?: number;
  /** Optional info-label text shown top-left of the image (e.g. "Best Value"). */
  flag?: string;
  /** Attribute chips below the title (e.g. ["1 kg", "Pack of 6"]). */
  attrs?: string[];
  /** Star rating value (e.g. 4.6). */
  rating?: number;
  /** Display string for review count (e.g. "2.3k"). */
  rating_count?: string | number;
  /** Image URL. If absent, a colored placeholder is rendered. */
  image?: string;
  /** Hint for the placeholder swatch when no image is provided. */
  tone?: PlaceholderTone;
}

export type PlaceholderTone =
  | 'milk'
  | 'banana'
  | 'noodles'
  | 'apple'
  | 'egg'
  | 'chips'
  | 'bread'
  | 'cola'
  | 'soap'
  | 'rice'
  | 'diaper';

const TONES: Record<PlaceholderTone, [string, string]> = {
  milk: ['#e8f4fb', '#bcd9ec'],
  banana: ['#fff7d6', '#f0d96a'],
  noodles: ['#fde8d3', '#e8a35a'],
  apple: ['#ffe0e0', '#e88080'],
  egg: ['#fff8e8', '#e8c870'],
  chips: ['#f0e8ff', '#a890d8'],
  bread: ['#fbf1da', '#d4a96a'],
  cola: ['#dde6f5', '#5b6fa3'],
  soap: ['#e3f3ed', '#7bc0a3'],
  rice: ['#fff5e3', '#dfb070'],
  diaper: ['#fef0f5', '#f9b9d0'],
};

function Placeholder({ tone = 'milk' }: { tone?: PlaceholderTone }) {
  const [bg, dot] = TONES[tone] ?? TONES.milk;
  return (
    <div className={styles.placeholder} style={{ background: bg }}>
      <div className={styles.dot} style={{ background: dot }} />
    </div>
  );
}

function HeartIcon() {
  return (
    <Icon
      name="heart"
      size={14}
      style={{ color: '#fff', filter: 'drop-shadow(0 0 0.5px var(--zd-grey-300))' }}
    />
  );
}

function StarIcon() {
  return <Icon name="star" weight="fill" size={10} style={{ color: 'var(--zd-green-800)' }} />;
}

export interface ProductCardProps {
  /** The product to display. */
  product: Product;
  /** Current cart quantity. `0` shows ADD; `> 0` shows the stepper. */
  qty?: number;
  /** ADD button click handler. */
  onAdd?: () => void;
  /** Stepper increment handler. */
  onInc?: () => void;
  /** Stepper decrement handler. */
  onDec?: () => void;
  /** Card-body tap handler — typically opens the PDP. */
  onTap?: () => void;
  /**
   * Render-prop slot for the image. If supplied, takes precedence over
   * `product.image` (lets you wire in `next/image`, lazy loaders, etc.).
   */
  renderImage?: (product: Product) => ReactNode;
}

/**
 * Origami M-Product Card — Zepto's hero product tile.
 *
 * Faithful port of `MProductCardExp.tsx`: stamp price block with offset shadow,
 * dashed savings divider, asymmetric info label, attribute tags, gradient
 * rating pill, ADD → stepper transition. All values resolved from design tokens.
 */
export function ProductCard({
  product,
  qty = 0,
  onAdd,
  onInc,
  onDec,
  onTap,
  renderImage,
}: ProductCardProps) {
  const savings = product.mrp ? product.mrp - product.price : 0;
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const image = renderImage
    ? renderImage(product)
    : product.image
      ? <img src={product.image} alt={product.name} />
      : <Placeholder tone={product.tone} />;

  return (
    <div className={styles.card} onClick={onTap}>
      {/* ─── Header ─── */}
      <div className={styles.header}>
        <div className={styles.imageBox}>{image}</div>

        <div className={styles.heart}>
          <HeartIcon />
        </div>

        {product.flag && <div className={styles.infoLabel}>{product.flag}</div>}

        <div className={styles.qtyRow}>
          <span className={styles.qty}>{product.qty}</span>
          {product.unit_price && (
            <span className={styles.unitPrice}>{product.unit_price}</span>
          )}
        </div>

        {qty === 0 ? (
          <div className={styles.addBtn}>
            <button
              type="button"
              onClick={(e) => {
                stop(e);
                onAdd?.();
              }}
              aria-label={`Add ${product.name} to cart`}
            >
              ADD
            </button>
          </div>
        ) : (
          <div className={styles.stepper}>
            <div>
              <button
                type="button"
                onClick={(e) => {
                  stop(e);
                  onDec?.();
                }}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className={styles.qtyValue}>{qty}</span>
              <button
                type="button"
                onClick={(e) => {
                  stop(e);
                  onInc?.();
                }}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ─── Body ─── */}
      <div className={styles.body}>
        <div className={styles.priceRow}>
          <div className={styles.stamp}>
            <span className={styles.currency}>₹</span>
            <span className={styles.priceValue}>{product.price}</span>
          </div>
          {product.mrp && <span className={styles.mrp}>₹{product.mrp}</span>}
        </div>

        {savings > 0 && (
          <div className={styles.savings}>
            <span className={styles.savingsValue}>₹{savings} OFF</span>
            <div className={styles.divider} />
          </div>
        )}

        <p className={styles.name}>{product.name}</p>

        {product.attrs && product.attrs.length > 0 && (
          <div className={styles.attrs}>
            {product.attrs.map((a) => (
              <div key={a} className={styles.attrTag}>
                {a}
              </div>
            ))}
          </div>
        )}

        {product.rating !== undefined && (
          <div className={styles.rating}>
            <StarIcon />
            <span className={styles.ratingValue}>{product.rating}</span>
            <span className={styles.ratingCount}>
              ({product.rating_count ?? 100})
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
