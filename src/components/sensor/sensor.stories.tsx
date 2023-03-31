// Button.stories.ts|tsx

import type { StoryObj } from '@storybook/react'

import {
  BrightnessSensor,
  TemperatureSensor,
  HumiditySensor,
  WifiSensor,
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
      <BrightnessSensor value={89} />
      <WifiSensor value={42.86} />
    </div>
  ),
}
