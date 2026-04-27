import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProductCard, type Product } from './ProductCard';

const sample: Product = {
  id: 'milk',
  name: 'Amul Taaza Toned Fresh Milk Pouch',
  qty: '500 ml',
  unit_price: '₹54/L',
  price: 27,
  mrp: 30,
  flag: 'Best Value',
  attrs: ['500 ml'],
  rating: 4.6,
  rating_count: '2.3k',
  tone: 'milk',
};

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Zepto\'s hero product tile (M-Product Card). Stamp price block with offset shadow, dashed savings divider, asymmetric info label, attribute tags, gradient rating pill, ADD → stepper transition. All values from design tokens.',
      },
    },
  },
  argTypes: {
    qty: { control: { type: 'number', min: 0, max: 99 } },
    onAdd: { action: 'add' },
    onInc: { action: 'inc' },
    onDec: { action: 'dec' },
    onTap: { action: 'tap' },
  },
  args: { product: sample, qty: 0 },
  decorators: [
    (Story) => (
      <div style={{ width: 180 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithStepper: Story = {
  args: { qty: 2 },
};

export const NoSavings: Story = {
  args: {
    product: { ...sample, mrp: undefined, flag: undefined },
  },
};

export const Live: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tap ADD to see the stepper transition. Local state — no parent wiring.',
      },
    },
  },
  render: () => {
    const [qty, setQty] = useState(0);
    return (
      <ProductCard
        product={sample}
        qty={qty}
        onAdd={() => setQty(1)}
        onInc={() => setQty((q) => q + 1)}
        onDec={() => setQty((q) => Math.max(0, q - 1))}
      />
    );
  },
};
