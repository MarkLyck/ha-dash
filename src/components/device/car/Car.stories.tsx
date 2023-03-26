import type { Meta, StoryObj } from '@storybook/react'

import { Car as CarComponent } from './index'

const meta = {
  component: CarComponent,
} satisfies Meta<typeof CarComponent>

export default meta
type Story = StoryObj<typeof CarComponent>

const defaultProps = {
  name: 'Tesla',
  setState: () => {
    //
  },
}

export const Parked: Story = {
  args: {
    ...defaultProps,
    mode: 'parked',
    isLocked: true,
    batteryPercentage: 100,
    isCharging: false,
  },
}
export const ParkedAtHome: Story = {
  args: {
    ...defaultProps,
    mode: 'parked',
    isLocked: true,
    batteryPercentage: 100,
    isCharging: false,
    isHome: true,
  },
}
export const Charging: Story = {
  args: {
    ...defaultProps,
    mode: 'charging',
    isLocked: true,
    batteryPercentage: 79,
    isCharging: true,
  },
}
export const Driving: Story = {
  args: {
    ...defaultProps,
    mode: 'driving',
    isLocked: false,
    batteryPercentage: 37,
    isCharging: false,
  },
}
