import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './index'

const meta = {
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    brightness: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof Switch>

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

export const LightSwitch: Story = {
  args: {
    ...defaultProps,
    icon: ['far', 'light-switch'],
    isDimmable: true,
  },
}
