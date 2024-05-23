// Button.stories.ts|tsx

import type { StoryObj } from '@storybook/react'

// import { phillipsHueLightStrip } from '@/../mocks/entities/light'

import {
  AirPurifier,
  Car,
  Curtain,
  FoodDispenser,
  GarageDoor,
  Humidifier,
  Lock,
  Speaker,
  Switch,
  TV,
  Thermostat,
  Vacuum,
  WaterSupply,
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
export const DevicesOn: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {/* <Switch
        name="kitchen lights"
        icon={['far', 'light-switch-on']}
        isOn
        setState={() => {
          //
        }}
      /> */}
      {/* <Lock
        name="front door"
        icon={['far', 'lock']}
        isLocked
        setState={(_state: boolean) => {
          //
        }}
      /> */}
      <GarageDoor
        name="Garage"
        isOpen={true}
        setState={(_state: boolean) => {
          //
        }}
      />
      {/* <AirPurifier
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
      <Curtain
        name="Blinds"
        percentClosed={75}
        setPercentClosed={() => {
          //
        }}
      /> */}
      {/* <Light entity={phillipsHueLightStrip} /> */}
      {/* <Thermostat
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
      <FoodDispenser
        name="Dog food"
        isEmpty={false}
        lastDispensed={new Date()}
        setState={() => {
          //
        }}
      />
      <WaterSupply
        name="Water supply"
        isOn={true}
        setState={() => {
          //
        }}
      /> */}
    </div>
  ),
}

export const DevicesOff: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {/* <Switch
        name="kitchen lights"
        icon={['far', 'light-switch-on']}
        isOn={false}
        setState={() => {
          //
        }}
      />
      <Lock
        name="front door"
        icon={['far', 'lock']}
        isLocked={false}
        setState={() => {
          //
        }}
      />
      <GarageDoor
        name="Garage"
        isOpen={false}
        setState={() => {
          //
        }}
      />
      <AirPurifier
        name="air purifier"
        isOn={false}
        setState={() => {
          //
        }}
      />
      <Humidifier
        name="Humidifier"
        isOn={false}
        setState={() => {
          //
        }}
      />
      <Curtain
        name="Blinds"
        percentClosed={100}
        setPercentClosed={() => {
          //
        }}
      /> */}
      {/* <Light entity={phillipsHueLightStrip} /> */}
      {/* <Thermostat
        name="Thermostat"
        icon={['far', 'air-conditioner']}
        mode="off"
        currentTemperature={76}
        targetTemperature={72}
        setState={() => {
          //
        }}
      />
      <Vacuum
        name="Vacuum"
        icon={['far', 'vacuum-robot']}
        mode="off"
        batteryPercentage={100}
        setState={() => {
          //
        }}
      />
      <Speaker
        name="Speaker"
        icon={['far', 'speaker']}
        mode="off"
        content="Celine Dion"
        volume={40}
        setState={() => {
          //
        }}
      />
      <TV
        name="TV"
        mode="off"
        content="Netflix"
        volume={40}
        setState={() => {
          //
        }}
      />
      <Car
        name="Tesla"
        mode="parked"
        batteryPercentage={90}
        isCharging={false}
        setState={() => {
          //
        }}
      />
      <FoodDispenser
        name="Dog food"
        isEmpty={false}
        lastDispensed={new Date()}
        setState={() => {
          //
        }}
      />
      <WaterSupply
        name="Water supply"
        isOn={false}
        setState={() => {
          //
        }}
      /> */}
    </div>
  ),
}
