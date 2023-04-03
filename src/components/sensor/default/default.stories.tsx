import type { Meta, StoryObj } from '@storybook/react'

import { DefaultSensor } from './index'

const meta = {
  component: DefaultSensor,
} satisfies Meta<typeof DefaultSensor>

export default meta
type Story = StoryObj<typeof DefaultSensor>

export const Default: Story = {
  args: {
    value: 4,
  },
}
