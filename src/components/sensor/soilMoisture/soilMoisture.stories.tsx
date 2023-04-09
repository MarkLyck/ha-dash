import type { Meta, StoryObj } from '@storybook/react'

import { SoilMoistureSensor } from './index'

const meta = {
  component: SoilMoistureSensor,
} satisfies Meta<typeof SoilMoistureSensor>

export default meta
type Story = StoryObj<typeof SoilMoistureSensor>

export const SoilMoisture: Story = {
  args: {
    value: 27,
  },
}
export const SoilMoistureLow: Story = {
  args: {
    value: 7,
  },
}
export const SoilMoistureVeryLow: Story = {
  args: {
    value: 2,
  },
}
