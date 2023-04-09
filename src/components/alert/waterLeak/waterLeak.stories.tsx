import type { Meta, StoryObj } from '@storybook/react'

import { WaterLeakAlert } from './index'

const meta = {
  component: WaterLeakAlert,
} satisfies Meta<typeof WaterLeakAlert>

export default meta
type Story = StoryObj<typeof WaterLeakAlert>

export const WaterLeakDetected: Story = {
  args: {
    room: 'laundry room',
    dateTime: new Date(),
  },
}
