import type { Meta, StoryObj } from '@storybook/react'

import { AirPurifier as AirPurifierComponent } from './index'

const meta = {
  component: AirPurifierComponent,
} satisfies Meta<typeof AirPurifierComponent>

export default meta
type Story = StoryObj<typeof AirPurifierComponent>

const defaultProps = {
  name: 'Air purifier',
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
