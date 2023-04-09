import type { Meta, StoryObj } from '@storybook/react'

import { SmokeSensor } from './index'

const meta = {
  component: SmokeSensor,
} satisfies Meta<typeof SmokeSensor>

export default meta
type Story = StoryObj<typeof SmokeSensor>

export const Detected: Story = {
  args: {
    detected: true,
  },
}
export const NotDetected: Story = {
  args: {
    detected: false,
  },
}
