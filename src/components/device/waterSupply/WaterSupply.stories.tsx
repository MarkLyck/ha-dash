import type { Meta, StoryObj } from '@storybook/react'

import { WaterSupply as WaterSupplyComponent } from './index'

const meta = {
  component: WaterSupplyComponent,
} satisfies Meta<typeof WaterSupplyComponent>

export default meta
type Story = StoryObj<typeof WaterSupplyComponent>

const defaultProps = {
  name: 'Water supply',
  setState: () => {
    //
  },
}

export const On: Story = {
  args: {
    ...defaultProps,
    isOn: true,
  },
}
export const Off: Story = {
  args: {
    ...defaultProps,
    isOn: false,
  },
}
