import type { Meta, StoryObj } from '@storybook/react'

import { WaterSensor } from './index'

const meta = {
  component: WaterSensor,
} satisfies Meta<typeof WaterSensor>

export default meta
type Story = StoryObj<typeof WaterSensor>

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
