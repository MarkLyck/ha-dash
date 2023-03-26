import type { Meta, StoryObj } from '@storybook/react'

import { Thermostat as ThermostatComponent } from './index'

const meta = {
  component: ThermostatComponent,
} satisfies Meta<typeof ThermostatComponent>

export default meta
type Story = StoryObj<typeof ThermostatComponent>

const defaultProps = {
  name: 'Thermostat',
  currentTemperature: 76,
  targetTemperature: 72,
  setState: () => {
    //
  },
}

export const Cooling: Story = {
  args: {
    ...defaultProps,
    mode: 'cooling',
    icon: ['far', 'air-conditioner'],
  },
}
export const Heating: Story = {
  args: {
    ...defaultProps,
    mode: 'heating',
    currentTemperature: 69,
    targetTemperature: 74,
    icon: ['far', 'air-conditioner'],
  },
}
