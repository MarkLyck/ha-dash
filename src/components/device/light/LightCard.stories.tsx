import type { Meta, StoryObj } from '@storybook/react'

import { LightCard } from './LightCard'

const meta = {
  component: LightCard,
  tags: ['autodocs'],
} satisfies Meta<typeof LightCard>

export default meta
type Story = StoryObj<typeof LightCard>

export const OutdoorBulb: Story = {
  args: {
    name: 'Outdoor bulb',
    icon: ['fad', 'light-ceiling'],
    isOn: true,
    color: 'yellow',
    setState: () => {
      //
    },
  },
}

export const DeskLamp: Story = {
  args: {
    name: 'Desk lamp',
    icon: ['fad', 'lamp'],
    isOn: true,
    color: 'yellow',
    setState: () => {
      //
    },
  },
}
