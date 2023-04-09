import type { Meta, StoryObj } from '@storybook/react'

import { CPUSensor } from './index'

const meta = {
  component: CPUSensor,
} satisfies Meta<typeof CPUSensor>

export default meta
type Story = StoryObj<typeof CPUSensor>

export const CPU: Story = {
  args: {
    value: 11,
  },
}
export const CPUHigh: Story = {
  args: {
    value: 82,
  },
}
export const CPUOverloaded: Story = {
  args: {
    value: 99,
  },
}
