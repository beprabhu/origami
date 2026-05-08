import type { HTMLAttributes, ReactNode } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Icon } from '../Icon';
import './ProductCard.css';

export interface ProductCardProps extends HTMLAttributes<HTMLElement> {
  /** Product title — clamped to 2 lines. */
  title: string;
  /** Discounted/selling price in rupees. Rendered inside the green Super Saver chip. */
  price: number;
  /** MRP (struck-out reference price). Omit if there's no discount. */
  mrp?: number;
  /** Pre-computed savings string e.g. "₹24 OFF". Omit to hide the savings row. */
  savingsLabel?: string;
  /** Top-left ribbon pill text (e.g. "Best Value"). Omit to hide. */
  ribbon?: string;
  /** Quantity-in-pack label, top-of-quantity-strip (e.g. "84 pcs"). */
  packCount?: string;
  /** Per-unit rate label (e.g. "₹7.5/ pc"). */
  unitRate?: string;
  /** Square product image URL. If omitted, a placeholder is shown. */
  imageUrl?: string;
  imageAlt?: string;
  /** Lightweight attribute chips below the title (size, weight, …). */
  tags?: string[];
  /** Average rating, e.g. 4.5. */
  rating?: number;
  /** Number of reviews. */
  ratingCount?: number;
  /** Wishlist state. */
  favorited?: boolean;
  onToggleFavorite?: () => void;
  /** Add-to-cart click. */
  onAdd?: () => void;
  /** Replace the floating ADD button with custom node (e.g. a stepper). */
  addSlot?: ReactNode;
}

/**
 * Origami ProductCard — the canonical 156-wide product tile.
 * Composes the design system's Badge (tags + ribbon) and Button (ADD)
 * primitives. All colors and type are sourced from `tokens.css`.
 */
export function ProductCard({
  title,
  price,
  mrp,
  savingsLabel,
  ribbon,
  packCount,
  unitRate,
  imageUrl,
  imageAlt = '',
  tags,
  rating,
  ratingCount,
  favorited = false,
  onToggleFavorite,
  onAdd,
  addSlot,
  className,
  ...rest
}: ProductCardProps) {
  return (
    <article className={['zd-pcard', className].filter(Boolean).join(' ')} {...rest}>
      {/* ── Header (image frame) ── */}
      <div className="zd-pcard__header">
        {ribbon && (
          <span className="zd-pcard__pill">
            <Badge tone="warning" variant="subtle" size="sm" uppercase={false}>
              {ribbon}
            </Badge>
          </span>
        )}

        <button
          type="button"
          className={[
            'zd-pcard__heart',
            favorited && 'zd-pcard__heart--active',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-label={favorited ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={favorited}
          onClick={onToggleFavorite}
        >
          <Icon name="heart" weight={favorited ? 'fill' : 'bold'} size={14} />
        </button>

        <div className="zd-pcard__image">
          {imageUrl ? (
            <img src={imageUrl} alt={imageAlt} />
          ) : (
            <div className="zd-pcard__image-placeholder" aria-hidden>
              <Icon name="package" weight="regular" size={32} />
            </div>
          )}
        </div>

        {(packCount || unitRate) && (
          <div className="zd-pcard__quantity">
            {packCount && <span className="zd-pcard__quantity-count">{packCount}</span>}
            {unitRate && <span className="zd-pcard__quantity-rate">{unitRate}</span>}
          </div>
        )}

        <div className="zd-pcard__add">
          {addSlot ?? (
            <Button variant="secondary" size="sm" onClick={onAdd}>
              ADD
            </Button>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="zd-pcard__body">
        <div className="zd-pcard__price">
          <span className="zd-pcard__sp" aria-label={`Price ₹${price}`}>
            <span className="zd-pcard__sp-rupee">₹</span>
            <span className="zd-pcard__sp-amount">{price}</span>
          </span>
          {typeof mrp === 'number' && (
            <span className="zd-pcard__mrp" aria-label={`MRP ₹${mrp}`}>₹{mrp}</span>
          )}
        </div>

        {savingsLabel && (
          <div className="zd-pcard__savings">
            <span className="zd-pcard__savings-amount">{savingsLabel}</span>
            <span className="zd-pcard__savings-divider" aria-hidden />
          </div>
        )}

        <h3 className="zd-pcard__title" title={title}>{title}</h3>

        {tags && tags.length > 0 && (
          <div className="zd-pcard__tags">
            {tags.map((t) => (
              <Badge key={t} tone="neutral" variant="subtle" size="sm" uppercase={false}>
                {t}
              </Badge>
            ))}
          </div>
        )}

        {typeof rating === 'number' && (
          <div className="zd-pcard__rating">
            <span className="zd-pcard__rating-star" aria-hidden>
              <Icon name="star" weight="fill" size={12} />
            </span>
            <span className="zd-pcard__rating-score">{rating}</span>
            {typeof ratingCount === 'number' && (
              <span className="zd-pcard__rating-count">({ratingCount.toLocaleString()})</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
