import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The brand\'s primary CTA primitive. Variants follow Zesto: `primary` is the hot-pink Zepto CTA used on Add-to-Cart, Pay, and other commit actions. Sizes map to the height token scale (24/28/32/40/48/56 px).',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'neutral', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Add to cart',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default playground ─────────────────────────────────────────────
export const Playground: Story = {};

// ─── Variant gallery ────────────────────────────────────────────────
export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All six variants at the default `md` size. `primary` is the default; `secondary` is the brand-outlined sibling; `tertiary` and `ghost` are low-emphasis; `neutral` is the dark CTA used on white surfaces; `destructive` is reserved for delete/cancel.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

// ─── Size gallery ───────────────────────────────────────────────────
export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Heights: xxs 24 · xs 28 · sm 32 · md 40 · lg 48 · xl 56. Use `xl` for the bottom checkout CTA, `md` for in-card CTAs.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button size="xxs">XXS</Button>
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
};

// ─── States ────────────────────────────────────────────────────────
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
};

// ─── With icons ─────────────────────────────────────────────────────
import { Icon } from '../Icon';

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button leftIcon={<Icon name="lightning" weight="fill" size={14} />}>Order in 10 mins</Button>
      <Button rightIcon={<Icon name="caret-right" weight="bold" size={14} />}>Checkout</Button>
      <Button variant="secondary" leftIcon={<Icon name="lightning" weight="fill" size={14} />} rightIcon={<Icon name="caret-right" weight="bold" size={14} />}>
        Track order
      </Button>
    </div>
  ),
};

// ─── Full width ────────────────────────────────────────────────────
export const FullWidth: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Common layout for the sticky bottom CTA on mobile. Pair with `size="xl"`.',
      },
    },
  },
  render: () => (
    <div style={{ width: 320, padding: 16, background: 'var(--zd-grey-50)', borderRadius: 12 }}>
      <Button fullWidth size="xl">
        Pay ₹245
      </Button>
    </div>
  ),
};
