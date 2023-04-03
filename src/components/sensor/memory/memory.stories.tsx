import type { Meta, StoryObj } from '@storybook/react'

import { MemorySensor } from './index'

const meta = {
  component: MemorySensor,
} satisfies Meta<typeof MemorySensor>

export default meta
type Story = StoryObj<typeof MemorySensor>

export const Memory: Story = {
  args: {
    value: 11,
  },
}
export const MemoryHigh: Story = {
  args: {
    value: 82,
  },
}
export const MemoryOverloaded: Story = {
  args: {
    value: 99,
  },
}
