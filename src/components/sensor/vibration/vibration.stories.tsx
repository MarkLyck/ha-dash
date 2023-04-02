import type { Meta, StoryObj } from '@storybook/react'

import { VibrationSensor } from './index'

const meta = {
  component: VibrationSensor,
} satisfies Meta<typeof VibrationSensor>

export default meta
type Story = StoryObj<typeof VibrationSensor>

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
