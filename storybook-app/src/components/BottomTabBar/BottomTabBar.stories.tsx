import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BottomTabBar, type TabId } from './BottomTabBar';

const meta = {
  title: 'App Shell/BottomTabBar',
  component: BottomTabBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Primary mobile navigation. Four tabs by default; supply your own via the `tabs` prop. Active tab is brand-pink with a filled icon variant.',
      },
    },
  },
  argTypes: {
    tab: { control: 'select', options: ['home', 'cats', 'cart', 'acct'] },
    cartCount: { control: { type: 'number', min: 0, max: 99 } },
    onTabChange: { action: 'tab' },
  },
  args: { tab: 'home', cartCount: 3 },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: 'var(--zd-surface)', border: '1px solid var(--zd-border)', borderRadius: 12, overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BottomTabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoBadge: Story = {
  args: { cartCount: 0 },
};

export const Live: Story = {
  parameters: {
    docs: { description: { story: 'Tap any tab to see the active state move.' } },
  },
  render: () => {
    const [tab, setTab] = useState<TabId>('home');
    return <BottomTabBar tab={tab} onTabChange={setTab} cartCount={3} />;
  },
};
