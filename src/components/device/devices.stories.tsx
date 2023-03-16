// Button.stories.ts|tsx

import type { StoryObj } from '@storybook/react'

import { Light, Lock, Switch, Thermostat } from './index'

const meta = {
  title: 'components/device',
}

export default meta
type Story = StoryObj

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Devices: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Light
        name="ceiling light"
        icon={['far', 'light-ceiling']}
        isOn
        isDimmable
        brightness={80}
        color="white"
        setState={() => {
          //
        }}
        setColor={() => {
          //
        }}
        setBrightness={() => {
          //
        }}
      />
      <Switch
        name="kitchen lights"
        icon={['far', 'light-switch-on']}
        isOn
        setState={() => {
          //
        }}
      />
      <Lock
        name="front door"
        icon={['far', 'lock']}
        isLocked
        setState={() => {
          //
        }}
      />
      <Thermostat
        name="Thermostat"
        icon={['far', 'air-conditioner']}
        mode="cooling"
        currentTemperature={76}
        targetTemperature={72}
        setState={() => {
          //
        }}
      />
    </div>
  ),
}
