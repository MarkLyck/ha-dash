// Button.stories.ts|tsx

import type { StoryObj } from '@storybook/react'

import {
  AirQualitySensor,
  BrightnessSensor,
  TemperatureSensor,
  HumiditySensor,
  WifiSensor,
  MotionSensor,
  VibrationSensor,
  OpenCloseSensor,
  SmokeSensor,
  DefaultSensor,
  WaterSensor,
  OccupancySensor,
} from './index'

const meta = {
  title: 'components/sensor',
}

export default meta
type Story = StoryObj

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Sensors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <TemperatureSensor value={72} />
      <HumiditySensor value={59} />
      <AirQualitySensor value={992} />
      <BrightnessSensor value={89} />
      <WifiSensor value={42.86} />
      <MotionSensor detected={true} />
      <OccupancySensor detected={true} />
      <VibrationSensor detected={true} />
      <SmokeSensor detected={false} />
      <OpenCloseSensor isOpen={false} type="door" />
      <OpenCloseSensor isOpen={true} type="window" />
      <OpenCloseSensor isOpen={true} type={undefined} />
      <WaterSensor detected={false} />

      <DefaultSensor value={true} />
    </div>
  ),
}
