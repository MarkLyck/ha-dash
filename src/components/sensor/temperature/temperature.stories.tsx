import type { Meta, StoryObj } from '@storybook/react'

import { TemperatureSensor } from './index'

const meta = {
  component: TemperatureSensor,
} satisfies Meta<typeof TemperatureSensor>

export default meta
type Story = StoryObj<typeof TemperatureSensor>

export const Temperature: Story = {
  args: {
    value: 72,
  },
}
