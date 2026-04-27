import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Icon } from '../Icon';

const SearchIcon = () => <Icon name="magnifying-glass" size={16} />;

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Text input with optional label, helper, error, and inline left/right addons. Border `--zd-grey-200`, focus border `--zd-brand` with a soft pink halo. Size `lg` is the standalone search field on Home.',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    helper: { control: 'text' },
    placeholder: { control: 'text' },
    leftAddon: { control: false },
    rightAddon: { control: false },
  },
  args: {
    label: 'Delivery address',
    placeholder: 'House no., street, area',
    helper: 'We use this to estimate delivery time.',
    size: 'md',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input size="sm" label="Small" placeholder="Compact form" />
      <Input size="md" label="Medium (default)" placeholder="Most forms" />
      <Input size="lg" label="Large" placeholder="Search bar / hero" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input label="Default" placeholder="Type here" />
      <Input label="With value" defaultValue="Bandra West, Mumbai" />
      <Input label="Required" required placeholder="Mobile number" />
      <Input label="Disabled" disabled defaultValue="cant-edit@example.com" />
      <Input
        label="Error"
        error
        defaultValue="not-a-pin"
        helper="Enter a valid 6-digit PIN code."
      />
    </div>
  ),
};

export const WithAddons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input
        size="lg"
        leftAddon={<SearchIcon />}
        placeholder='Search "atta", "milk", "eggs"'
        aria-label="Search products"
      />
      <Input
        label="Quantity"
        defaultValue="500"
        rightAddon={<span style={{ fontSize: 12, fontWeight: 600 }}>g</span>}
      />
      <Input
        label="Price"
        defaultValue="245"
        leftAddon={<span style={{ fontSize: 14, fontWeight: 600 }}>₹</span>}
      />
    </div>
  ),
};
