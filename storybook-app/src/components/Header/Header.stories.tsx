import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'App Shell/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Sticky top header used on the Zepto consumer app. Pairs the ETA-bolt headline with the active address and a quiet search button. Sits above all primary tabs.',
      },
    },
    backgrounds: { default: 'muted' },
  },
  argTypes: {
    eta: { control: 'text' },
    address: { control: 'text' },
    addressTag: { control: 'text' },
    searchPlaceholder: { control: 'text' },
    onSearch: { action: 'search' },
    onAddressTap: { action: 'address' },
  },
  args: {
    eta: '10 mins',
    address: 'Bandra West, Mumbai',
    addressTag: 'HOME',
    searchPlaceholder: 'Search "atta"',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: 'var(--zd-surface)', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--zd-border)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FastETA: Story = {
  args: { eta: '8 mins' },
};

export const WorkAddress: Story = {
  args: { addressTag: 'WORK', address: 'BKC, Mumbai 400051' },
};
