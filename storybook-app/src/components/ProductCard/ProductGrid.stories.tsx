import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProductGrid } from './ProductGrid';
import type { Product } from './ProductCard';

const products: Product[] = [
  { id: 'milk', name: 'Amul Taaza Toned Milk Pouch', qty: '500 ml', unit_price: '₹54/L', price: 27, mrp: 30, tone: 'milk', flag: 'Super Saver', rating: 4.6, rating_count: '2.3k' },
  { id: 'banana', name: 'Banana Robusta — Loose, ripe', qty: '1 kg', unit_price: '₹52/kg', price: 52, mrp: 70, tone: 'banana', attrs: ['1 kg'], rating: 4.3, rating_count: '1.4k' },
  { id: 'bread', name: 'Britannia Brown Bread', qty: '400 g', unit_price: '₹11/100g', price: 45, mrp: 50, tone: 'bread', rating: 4.4, rating_count: '980' },
  { id: 'eggs', name: 'Farm-fresh Brown Eggs', qty: '6 pcs', price: 89, mrp: 99, tone: 'egg', flag: 'Bestseller', attrs: ['6 pcs'], rating: 4.7, rating_count: '3.1k' },
];

const meta = {
  title: 'Components/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Responsive product grid. Defaults to 2-up; pass `columns` to change density. Cart quantity is controlled via `qtyMap` + handlers.',
      },
    },
  },
  argTypes: {
    columns: { control: { type: 'number', min: 1, max: 6 } },
    gap: { control: { type: 'number', min: 4, max: 32 } },
  },
  args: { products, columns: 2 },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: 'var(--zd-surface)', border: '1px solid var(--zd-border)', borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoUp: Story = {};

export const ThreeUp: Story = {
  args: { columns: 3 },
  decorators: [
    (Story) => (
      <div style={{ width: 540, background: 'var(--zd-surface)', border: '1px solid var(--zd-border)', borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export const Live: Story = {
  render: () => {
    const [qtyMap, setQtyMap] = useState<Record<string, number>>({});
    const inc = (p: Product) => setQtyMap((m) => ({ ...m, [p.id]: (m[p.id] ?? 0) + 1 }));
    const dec = (p: Product) => setQtyMap((m) => ({ ...m, [p.id]: Math.max(0, (m[p.id] ?? 0) - 1) }));
    return (
      <ProductGrid
        products={products}
        qtyMap={qtyMap}
        onAdd={inc}
        onInc={inc}
        onDec={dec}
      />
    );
  },
};
