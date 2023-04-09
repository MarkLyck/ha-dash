import type { Meta, StoryObj } from '@storybook/react'

import { AirQualitySensor } from './index'

const meta = {
  component: AirQualitySensor,
} satisfies Meta<typeof AirQualitySensor>

export default meta
type Story = StoryObj<typeof AirQualitySensor>

export const AirQuality: Story = {
  args: {
    value: 91,
  },
}
export const Poor: Story = {
  args: {
    value: 910,
  },
}
export const VeryBad: Story = {
  args: {
    value: 1498,
  },
}
