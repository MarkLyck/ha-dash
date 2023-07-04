// Button.stories.ts|tsx

import type { StoryObj } from '@storybook/react'

import {
  AirQualitySensor,
  BrightnessSensor,
  CPUSensor,
  DefaultSensor,
  DownloadSpeedSensor,
  HumiditySensor,
  MemorySensor,
  MotionSensor,
  OccupancySensor,
  OpenCloseSensor,
  SmokeSensor,
  SoilMoistureSensor,
  TemperatureSensor,
  ToothBrush,
  UploadSpeedSensor,
  VibrationSensor,
  WaterSensor,
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
      <AirQualitySensor value={892} />
      <BrightnessSensor value={89} />
      <MotionSensor detected={true} />
      <OccupancySensor detected={true} />
      <VibrationSensor detected={true} />
      <SmokeSensor detected={false} />
      <WaterSensor detected={false} />
      <OpenCloseSensor isOpen={false} type="door" />
      <OpenCloseSensor isOpen={true} type="window" />
      <OpenCloseSensor isOpen={false} type="safe" />
      <OpenCloseSensor isOpen={true} type={undefined} />
      <DownloadSpeedSensor value={422.86} />
      <UploadSpeedSensor value={98.22} />
      <CPUSensor value={38} />
      <MemorySensor value={44} />
      <ToothBrush brushing={false} />
      <SoilMoistureSensor value={24} />

      <DefaultSensor value={true} />
    </div>
  ),
}
