import type { Meta, StoryObj } from '@storybook/react';
import FileControls from '@/components/FileControls';

const meta = {
  title: 'Components/FileControls',
  component: FileControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disableDelete: {
      control: 'boolean',
    },
    onDownload: { action: 'download clicked' },
    onDelete: { action: 'delete clicked' },
  },
  args: {
    disableDelete: false,
  },
} satisfies Meta<typeof FileControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DeleteDisabled: Story = {
  args: {
    disableDelete: true,
  },
};
