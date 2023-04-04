import type { Meta, StoryObj } from '@storybook/react'

import { OpenCloseSensor } from './index'

const meta = {
  component: OpenCloseSensor,
} satisfies Meta<typeof OpenCloseSensor>

export default meta
type Story = StoryObj<typeof OpenCloseSensor>

export const OpenDoor: Story = {
  args: {
    isOpen: true,
    type: 'door',
  },
}
export const ClosedDoor: Story = {
  args: {
    isOpen: false,
    type: 'door',
  },
}
export const OpenWindow: Story = {
  args: {
    isOpen: true,
    type: 'window',
  },
}
export const ClosedWindow: Story = {
  args: {
    isOpen: false,
    type: 'window',
  },
}
export const Safe: Story = {
  args: {
    isOpen: false,
    type: 'safe',
  },
}
export const Mailbox: Story = {
  args: {
    isOpen: false,
    type: 'mailbox',
  },
}
export const Unknown: Story = {
  args: {
    isOpen: true,
  },
}
