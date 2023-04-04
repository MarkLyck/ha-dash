import type { Meta, StoryObj } from '@storybook/react'

import { ToothBrush } from './index'

const meta = {
  component: ToothBrush,
} satisfies Meta<typeof ToothBrush>

export default meta
type Story = StoryObj<typeof ToothBrush>

export const Brushing: Story = {
  args: {
    brushing: true,
  },
}
export const Idle: Story = {
  args: {
    brushing: false,
  },
}
