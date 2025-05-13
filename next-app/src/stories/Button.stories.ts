import type { Meta, StoryObj } from '@storybook/react';

import ButtonWithState from '@/components/ButtonWithState';

const meta = {
  title: 'Example/Button',
  component: ButtonWithState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
  args: {
    variant: 'primary',
  },
} satisfies Meta<typeof ButtonWithState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    variant: 'primary',
  },
};
