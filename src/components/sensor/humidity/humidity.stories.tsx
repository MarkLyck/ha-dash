import type { Meta, StoryObj } from '@storybook/react'

import { HumiditySensor } from './index'

const meta = {
  component: HumiditySensor,
} satisfies Meta<typeof HumiditySensor>

export default meta
type Story = StoryObj<typeof HumiditySensor>

export const Humidity: Story = {
  args: {
    value: 59,
  },
}
export const HighHumidity: Story = {
  args: {
    value: 74,
  },
}
export const ExtremeHumidity: Story = {
  args: {
    value: 98,
  },
}
