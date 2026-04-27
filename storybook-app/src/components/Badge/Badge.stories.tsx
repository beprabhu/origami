import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Icon } from '../Icon';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Status pill used for product chips (SUPER SAVER, BESTSELLER, NEW), urgency, and small counts. Three fill styles × six tones × three sizes.',
      },
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['brand', 'success', 'warning', 'error', 'neutral', 'info'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    uppercase: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    tone: 'success',
    variant: 'subtle',
    size: 'md',
    uppercase: true,
    children: 'Super Saver',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge tone="brand">Bestseller</Badge>
      <Badge tone="success">Super Saver</Badge>
      <Badge tone="warning">Hot Deal</Badge>
      <Badge tone="error">Out of Stock</Badge>
      <Badge tone="neutral">New</Badge>
      <Badge tone="info">Pass Only</Badge>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(['solid', 'subtle', 'outline'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 64, fontSize: 11, color: '#6b7280', textTransform: 'capitalize' }}>{variant}</span>
          <Badge variant={variant} tone="brand">Brand</Badge>
          <Badge variant={variant} tone="success">Saved</Badge>
          <Badge variant={variant} tone="warning">Deal</Badge>
          <Badge variant={variant} tone="error">Error</Badge>
          <Badge variant={variant} tone="neutral">Neutral</Badge>
          <Badge variant={variant} tone="info">Info</Badge>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Badge size="sm" tone="brand">SM</Badge>
      <Badge size="md" tone="brand">MD</Badge>
      <Badge size="lg" tone="brand">LG</Badge>
    </div>
  ),
};

export const SentenceCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `uppercase={false}` for sentence-case badges, e.g. money-saved chips on cart screens.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge tone="success" variant="subtle" uppercase={false}>
        ₹26 saved
      </Badge>
      <Badge tone="brand" variant="subtle" uppercase={false}>
        Pass member
      </Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge
        tone="brand"
        icon={<Icon name="lightning" weight="fill" size={10} />}
      >
        10 mins
      </Badge>
      <Badge
        tone="success"
        uppercase={false}
        icon={<Icon name="star" weight="fill" size={10} />}
      >
        4.6 (2.3k)
      </Badge>
    </div>
  ),
};
