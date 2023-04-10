import type { Meta, StoryObj } from '@storybook/react'

import { MotionSensor } from './index'

const meta = {
  component: MotionSensor,
} satisfies Meta<typeof MotionSensor>

export default meta
type Story = StoryObj<typeof MotionSensor>

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
