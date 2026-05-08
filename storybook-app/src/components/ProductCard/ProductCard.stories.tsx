import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'muted' },
    docs: {
      description: {
        component:
          'The canonical 156-wide product tile used across the Zepto storefront. Composes the design-system `Badge` (ribbon + attribute tags) and `Button` (ADD) primitives. Every color and type value is sourced from `tokens.css` — no inline hex values.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    price: { control: 'number' },
    mrp: { control: 'number' },
    savingsLabel: { control: 'text' },
    ribbon: { control: 'text' },
    packCount: { control: 'text' },
    unitRate: { control: 'text' },
    imageUrl: { control: 'text' },
    rating: { control: { type: 'number', min: 0, max: 5, step: 0.1 } },
    ratingCount: { control: 'number' },
    favorited: { control: 'boolean' },
    tags: { control: 'object' },
    onAdd: { action: 'add' },
    onToggleFavorite: { action: 'toggle-favorite' },
    addSlot: { control: false, table: { disable: true } },
  },
  args: {
    title: 'TEDDYY Baby Easy Pant Diapers 74 Count (M) 7-12 kgs',
    price: 510,
    mrp: 949,
    savingsLabel: '₹24 OFF',
    ribbon: 'Best Value',
    packCount: '84 pcs',
    unitRate: '₹7.5/ pc',
    imageUrl:
      '/products/akshayakalpa-cow-milk.png',
    tags: ['M', '7 - 12 kg'],
    rating: 4.5,
    ratingCount: 928,
    favorited: false,
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const NoDiscount: Story = {
  parameters: {
    docs: {
      description: {
        story: 'When MRP equals selling price the struck-out MRP and savings row are hidden — pass `mrp={undefined}` and `savingsLabel={undefined}`.',
      },
    },
  },
  args: {
    mrp: undefined,
    savingsLabel: undefined,
    ribbon: undefined,
  },
};

export const Favorited: Story = {
  args: { favorited: true },
};

export const NoImage: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Falls back to a Phosphor `package` glyph on tertiary surface when no image URL is provided.',
      },
    },
  },
  args: { imageUrl: undefined },
};

export const Grid: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Cards in a typical storefront grid (gap 12, 4-up at 720px).',
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 156px)',
        gap: 12,
        padding: 16,
        background: 'var(--zd-surface-secondary)',
      }}
    >
      <ProductCard
        title="TEDDYY Baby Easy Pant Diapers 74 Count (M) 7-12 kgs"
        price={510}
        mrp={949}
        savingsLabel="₹24 OFF"
        ribbon="Best Value"
        packCount="84 pcs"
        unitRate="₹7.5/ pc"
        imageUrl="/products/akshayakalpa-cow-milk.png"
        tags={['M', '7 - 12 kg']}
        rating={4.5}
        ratingCount={928}
      />
      <ProductCard
        title="Amul Taaza Toned Fresh Milk Pouch"
        price={32}
        packCount="500 ml"
        unitRate="₹64/ L"
        imageUrl="/products/akshayakalpa-cow-milk.png"
        tags={['500ml']}
        rating={4.7}
        ratingCount={2814}
      />
      <ProductCard
        title="Lays Magic Masala Potato Chips"
        price={18}
        mrp={20}
        savingsLabel="₹2 OFF"
        ribbon="Hot Deal"
        packCount="52 g"
        unitRate="₹35/ 100g"
        imageUrl="/products/akshayakalpa-cow-milk.png"
        tags={['52g']}
        rating={4.4}
        ratingCount={1240}
      />
      <ProductCard
        title="Mother Dairy Pure Ghee Premium"
        price={559}
        mrp={650}
        savingsLabel="₹91 OFF"
        packCount="1 L"
        unitRate="₹559/ L"
        imageUrl="/products/akshayakalpa-cow-milk.png"
        tags={['1 L']}
        rating={4.6}
        ratingCount={487}
        favorited
      />
    </div>
  ),
};
