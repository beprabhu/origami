import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Status pill used for product chips, urgency, and small counts. Single canonical style: outline error tone — `--zd-surface-error-subtle` fill, `--zd-border-error-subtle` stroke, `--zd-text-error-bold` label.',
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    uppercase: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    tone: { control: false, table: { disable: true } },
    variant: { control: false, table: { disable: true } },
    icon: { control: false, table: { disable: true } },
  },
  args: {
    tone: 'featureTag',
    variant: 'outline',
    size: 'md',
    uppercase: false,
    children: 'Butterscotch',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
