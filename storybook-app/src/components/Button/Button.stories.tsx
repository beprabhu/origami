import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from './Button';
import { Icon } from '../Icon';

type PlaygroundArgs = ButtonProps & {
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
};

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The brand\'s primary CTA primitive. Eight variants drive every commit action across the product: `primary` (hot-pink filled, default Add-to-Cart / Pay), `secondary` (outlined), `tertiary` (dark filled), `neutral` (white w/ border), `link-secondary` & `link-neutral` (text-only), and the Super Saver pair (`super-saver`, `super-saver-outline`). Sizes map to the height token scale (24/28/32/40/48/56 px). Toggle `showLeftIcon` / `showRightIcon` in the Playground to see icon slots.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'neutral', 'link-secondary', 'link-neutral', 'super-saver', 'super-saver-outline'],
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
    leftIcon: { control: false, table: { disable: true } },
    rightIcon: { control: false, table: { disable: true } },
    showLeftIcon: {
      control: 'boolean',
      description: 'Playground only — toggles a `<Icon name="lightning" weight="fill" />` in the leftIcon slot.',
    },
    showRightIcon: {
      control: 'boolean',
      description: 'Playground only — toggles a `<Icon name="caret-right" weight="bold" />` in the rightIcon slot.',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Add to cart',
    showLeftIcon: false,
    showRightIcon: false,
  },
  render: ({ showLeftIcon, showRightIcon, ...args }: PlaygroundArgs) => (
    <Button
      {...args}
      leftIcon={showLeftIcon ? <Icon name="lightning" weight="fill" size={14} /> : undefined}
      rightIcon={showRightIcon ? <Icon name="caret-right" weight="bold" size={14} /> : undefined}
    />
  ),
} satisfies Meta<PlaygroundArgs>;

export default meta;
type Story = StoryObj<PlaygroundArgs>;

// ─── Default playground ─────────────────────────────────────────────
export const Playground: Story = {};

// ─── Variant gallery ────────────────────────────────────────────────
export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All eight variants at the default `md` size. `primary` is the brand-pink filled CTA; `secondary` is the outlined sibling; `tertiary` is the dark filled; `neutral` is white with a default border; the `link-*` pair is text-only; `super-saver` and `super-saver-outline` carry the deep-green Super Saver mark.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="link-secondary">Link secondary</Button>
      <Button variant="link-neutral">Link neutral</Button>
      <Button variant="super-saver">Super Saver</Button>
      <Button variant="super-saver-outline">Super Saver outline</Button>
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
    <div style={{ width: 320, padding: 16, background: 'var(--zd-surface-secondary)', borderRadius: 12 }}>
      <Button fullWidth size="xl">
        Pay ₹245
      </Button>
    </div>
  ),
};
