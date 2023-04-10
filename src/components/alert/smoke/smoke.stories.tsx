import type { Meta, StoryObj } from '@storybook/react'

import { SmokeAlert } from './index'

const meta = {
  component: SmokeAlert,
} satisfies Meta<typeof SmokeAlert>

export default meta
type Story = StoryObj<typeof SmokeAlert>

export const SmokeDetected: Story = {
  args: {
    area: 'kitchen',
    dateTime: new Date(),
  },
}
