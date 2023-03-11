import type { Meta, StoryObj } from '@storybook/react'

import { Status } from './status'

const meta = {
  component: Status,
  tags: ['autodocs'],
} satisfies Meta<typeof Status>

export default meta
type Story = StoryObj<typeof Status>

export const Lock: Story = {
  args: {
    name: 'Front door',
    state: 'locked',
    type: 'lock',
    icon: ['fad', 'lock'],
  },
}

export const Light: Story = {
  args: {
    name: 'Ceiling light',
    state: 'on',
    type: 'light',
    icon: ['fad', 'lightbulb'],
  },
}

export const Camera: Story = {
  args: {
    name: 'Backyard camera',
    state: 'on',
    type: 'camera',
    icon: ['fad', 'camera-cctv'],
  },
}
