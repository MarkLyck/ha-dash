import type { Meta, StoryObj } from '@storybook/react'

import { Switch as SwitchComponent } from './index'

const meta = {
  component: SwitchComponent,
  argTypes: {
    brightness: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof SwitchComponent>

export default meta
type Story = StoryObj<typeof SwitchComponent>

const defaultProps = {
  name: 'Light Switch',
  icon: ['far', 'light-switch'],
  isOn: true,
  brightness: 80,
  isDimmable: false,
  setState: () => {
    //
  },
  setBrightness: () => {
    //
  },
}

export const On: Story = {
  args: {
    ...defaultProps,
    icon: ['far', 'light-switch-on'],
    isDimmable: false,
    isOn: true,
  },
}
export const Off: Story = {
  args: {
    ...defaultProps,
    icon: ['far', 'light-switch-off'],
    isDimmable: false,
    isOn: false,
  },
}
export const DimmableOn: Story = {
  args: {
    ...defaultProps,
    icon: ['far', 'light-switch-off'],
    isDimmable: true,
    isOn: true,
  },
}
