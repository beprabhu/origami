import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Foundations/Spacing & Shape',
  parameters: {
    docs: {
      description: {
        component: '4px-base spacing scale, soft radii (12–16 on cards), and barely-visible ambient shadows. Cards rely more on shadow than border.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <code style={{ fontFamily: 'var(--zd-font-mono)', fontSize: 11, minWidth: 100 }}>--zd-space-{s}</code>
          <div
            style={{
              height: 16,
              width: `var(--zd-space-${s})`,
              background: 'var(--zd-brand)',
              borderRadius: 2,
            }}
          />
          <span style={{ fontSize: 11, color: 'var(--zd-text-secondary)' }}>
            {{ 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px', 7: '32px', 8: '40px', 9: '48px', 10: '64px' }[s]}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const Radii: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {[
        ['xs', '4px'],
        ['sm', '6px'],
        ['md', '8px'],
        ['lg', '12px'],
        ['xl', '16px'],
        ['2xl', '20px'],
        ['pill', '999px'],
      ].map(([name, val]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div
            style={{
              width: 80,
              height: 80,
              background: 'var(--zd-brand-subtle)',
              border: '1px solid var(--zd-brand)',
              borderRadius: `var(--zd-radius-${name})`,
            }}
          />
          <code style={{ fontFamily: 'var(--zd-font-mono)', fontSize: 11 }}>{name}</code>
          <span style={{ fontSize: 11, color: 'var(--zd-text-secondary)' }}>{val}</span>
        </div>
      ))}
    </div>
  ),
};

export const Elevation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 24, background: 'var(--zd-grey-50)' }}>
      {['xs', 'sm', 'md', 'lg', 'xl', 'brand', 'cardPop'].map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 110,
              height: 80,
              background: 'var(--zd-surface)',
              borderRadius: 12,
              boxShadow: `var(--zd-shadow-${name === 'cardPop' ? 'card-pop' : name})`,
            }}
          />
          <code style={{ fontFamily: 'var(--zd-font-mono)', fontSize: 11 }}>{name}</code>
        </div>
      ))}
    </div>
  ),
};
