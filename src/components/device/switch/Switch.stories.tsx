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

export const Switch: Story = {
  args: {
    ...defaultProps,
    icon: ['far', 'light-switch'],
    isDimmable: true,
  },
}
