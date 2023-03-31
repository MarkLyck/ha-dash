import type { Meta, StoryObj } from '@storybook/react'

import { BrightnessSensor } from './index'

const meta = {
  component: BrightnessSensor,
} satisfies Meta<typeof BrightnessSensor>

export default meta
type Story = StoryObj<typeof BrightnessSensor>

export const Brightness: Story = {
  args: {
    value: 91,
  },
}
