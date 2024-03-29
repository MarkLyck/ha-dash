import type { Meta, StoryObj } from '@storybook/react'

import { Vacuum as VacuumComponent } from './index'

const meta = {
  component: VacuumComponent,
} satisfies Meta<typeof VacuumComponent>

export default meta
type Story = StoryObj<typeof VacuumComponent>

const defaultProps = {
  name: 'Vacuum',
  setState: () => {
    //
  },
}

export const Off: Story = {
  args: {
    ...defaultProps,
    mode: 'off',
    icon: ['far', 'vacuum-robot'],
    batteryPercentage: 100,
    isCharging: true,
  },
}
export const Charging: Story = {
  args: {
    ...defaultProps,
    mode: 'off',
    icon: ['far', 'vacuum-robot'],
    batteryPercentage: 97,
    isCharging: true,
  },
}

export const Cleaning: Story = {
  args: {
    ...defaultProps,
    mode: 'cleaning',
    icon: ['far', 'vacuum-robot'],
    batteryPercentage: 72,
  },
}
export const Returning: Story = {
  args: {
    ...defaultProps,
    mode: 'returning',
    icon: ['far', 'vacuum-robot'],
    batteryPercentage: 18,
  },
}
