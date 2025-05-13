import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '@/components/Button';
import { useButtonMachine } from '@/hooks/useButtonMachine';
import React from 'react';

const ButtonWithState = () => {
  const { currentState, clickButton, resetButton } = useButtonMachine();

  return (
    <Button
      variant={currentState === 'idle' ? 'primary' : 'secondary'}
      onClick={currentState === 'idle' ? clickButton : resetButton}
    >
      {currentState === 'idle' ? 'Click me' : 'Clicked!'}
    </Button>
  );
};

// Storybook metadata
const meta = {
  title: 'Example/CustomButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

// Story using your state machine
export const WithStateMachine: Story = {
  render: () => <ButtonWithState />,
};
