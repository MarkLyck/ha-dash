import type { Meta, StoryObj } from '@storybook/react'

import { OccupancySensor } from './index'

const meta = {
  component: OccupancySensor,
} satisfies Meta<typeof OccupancySensor>

export default meta
type Story = StoryObj<typeof OccupancySensor>

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
