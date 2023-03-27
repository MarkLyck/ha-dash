// Button.stories.ts|tsx

import type { StoryObj } from '@storybook/react'

import {
  AirPurifier,
  Car,
  GarageDoor,
  Humidifier,
  Light,
  Lock,
  Speaker,
  Switch,
  TV,
  Thermostat,
  Vacuum,
} from './index'

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
      <GarageDoor
        name="Garage"
        isOpen={true}
        setState={() => {
          //
        }}
      />
      <AirPurifier
        name="air purifier"
        isOn={true}
        setState={() => {
          //
        }}
      />
      <Humidifier
        name="Humidifier"
        isOn={true}
        setState={() => {
          //
        }}
      />
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
      <Vacuum
        name="Vacuum"
        icon={['far', 'vacuum-robot']}
        mode="cleaning"
        batteryPercentage={72}
        setState={() => {
          //
        }}
      />
      <Speaker
        name="Speaker"
        icon={['far', 'speaker']}
        mode="playing"
        content="Celine Dion"
        volume={40}
        setState={() => {
          //
        }}
      />
      <TV
        name="TV"
        mode="playing"
        content="Netflix"
        volume={40}
        setState={() => {
          //
        }}
      />
      <Car
        name="Tesla"
        mode="driving"
        batteryPercentage={59}
        isCharging={false}
        setState={() => {
          //
        }}
      />
    </div>
  ),
}
