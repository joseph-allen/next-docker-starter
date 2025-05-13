import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ButtonWithState from '@/components/ButtonWithState';

// Default export metadata
const meta = {
  title: 'Example/Button',
  component: ButtonWithState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonWithState>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Primary: Story = {};
