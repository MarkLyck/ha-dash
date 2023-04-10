import type { Meta, StoryObj } from '@storybook/react'

import { DownloadSpeedSensor } from './index'

const meta = {
  component: DownloadSpeedSensor,
} satisfies Meta<typeof DownloadSpeedSensor>

export default meta
type Story = StoryObj<typeof DownloadSpeedSensor>

export const Strong: Story = {
  args: {
    value: 422.86,
  },
}
export const Fair: Story = {
  args: {
    value: 19.23,
  },
}
export const Weak: Story = {
  args: {
    value: 7.4,
  },
}
export const NotWorking: Story = {
  args: {
    value: 0,
  },
}
