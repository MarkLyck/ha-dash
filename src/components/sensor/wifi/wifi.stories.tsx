import type { Meta, StoryObj } from '@storybook/react'

import { WifiSensor } from './index'

const meta = {
  component: WifiSensor,
} satisfies Meta<typeof WifiSensor>

export default meta
type Story = StoryObj<typeof WifiSensor>

export const Strong: Story = {
  args: {
    value: 42.86,
  },
}
export const Fair: Story = {
  args: {
    value: 9.23,
  },
}
export const Weak: Story = {
  args: {
    value: 0.74,
  },
}
export const NotWorking: Story = {
  args: {
    value: 0,
  },
}
