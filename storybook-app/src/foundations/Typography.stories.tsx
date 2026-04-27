import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    docs: {
      description: {
        component:
          '**Zepto Norms** carries the entire system. Headings sit at 700+; UI labels at 600; body at 400. Tight tracking on h16+ (-0.2 px); overlines tracked +0.5 px and uppercase.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const sample = 'Groceries delivered in 10 minutes';

function Row({ cls, label }: { cls: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--zd-border)' }}>
      <code style={{ fontFamily: 'var(--zd-font-mono)', fontSize: 11, color: 'var(--zd-text-tertiary)', minWidth: 100 }}>
        .{cls}
      </code>
      <div style={{ minWidth: 80, fontSize: 11, color: 'var(--zd-text-tertiary)' }}>{label}</div>
      <div className={cls}>{sample}</div>
    </div>
  );
}

export const Display: Story = {
  render: () => (
    <div>
      <Row cls="zd-h48" label="48 / 56 · 700" />
      <Row cls="zd-h32" label="32 / 36 · 700" />
      <Row cls="zd-h28" label="28 / 32 · 700" />
      <Row cls="zd-h24" label="24 / 28 · 700" />
      <Row cls="zd-h20" label="20 / 24 · 700" />
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div>
      <Row cls="zd-h18" label="18 / 22 · 600" />
      <Row cls="zd-h16" label="16 / 20 · 600" />
      <Row cls="zd-h14" label="14 / 18 · 600" />
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div>
      <Row cls="zd-b16" label="16 / 24 · 400" />
      <Row cls="zd-b14" label="14 / 20 · 400" />
      <Row cls="zd-b12" label="12 / 16 · 400" />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--zd-border)' }}>
        <code style={{ fontFamily: 'var(--zd-font-mono)', fontSize: 11, color: 'var(--zd-text-tertiary)', minWidth: 100 }}>.zd-b10</code>
        <div style={{ minWidth: 80, fontSize: 11, color: 'var(--zd-text-tertiary)' }}>10 / 12 · 400</div>
        <div className="zd-b10">500 g · ₹85 / kg · Net qty + unit price on product cards</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--zd-border)' }}>
        <code style={{ fontFamily: 'var(--zd-font-mono)', fontSize: 11, color: 'var(--zd-text-tertiary)', minWidth: 100 }}>.zd-b8</code>
        <div style={{ minWidth: 80, fontSize: 11, color: 'var(--zd-text-tertiary)' }}>8 / 10 · 400</div>
        <div className="zd-b8">BEST VALUE — micro pills, ribbon copy, savings stamps</div>
      </div>
    </div>
  ),
};

export const Action: Story = {
  render: () => (
    <div>
      <Row cls="zd-a16" label="16 / 24 · 600 · +0.2px" />
      <Row cls="zd-a14" label="14 / 20 · 600 · +0.2px" />
      <Row cls="zd-a12" label="12 / 16 · 600 · +0.2px" />
    </div>
  ),
};

export const Overline: Story = {
  render: () => (
    <div>
      <div style={{ padding: '10px 0', display: 'flex', gap: 16, alignItems: 'baseline' }}>
        <code style={{ fontFamily: 'var(--zd-font-mono)', fontSize: 11, color: 'var(--zd-text-tertiary)', minWidth: 100 }}>
          .zd-overline
        </code>
        <div className="zd-overline">Super Saver · Bestseller · Pass Only</div>
      </div>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {[
        ['400', 'Regular'],
        ['500', 'Medium'],
        ['600', 'DemiBold'],
        ['700', 'Bold'],
        ['900', 'Black'],
      ].map(([w, name]) => (
        <div key={w} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <code style={{ fontFamily: 'var(--zd-font-mono)', fontSize: 11, color: 'var(--zd-text-tertiary)', minWidth: 80 }}>
            {w}
          </code>
          <div style={{ minWidth: 80, fontSize: 11, color: 'var(--zd-text-tertiary)' }}>{name}</div>
          <div style={{ fontFamily: 'var(--zd-font-sans)', fontWeight: Number(w), fontSize: 24 }}>
            Zepto Norms
          </div>
        </div>
      ))}
    </div>
  ),
};
