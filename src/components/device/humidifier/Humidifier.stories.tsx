import type { Meta, StoryObj } from '@storybook/react'

import { Humidifier as HumidifierComponent } from './index'

const meta = {
  component: HumidifierComponent,
} satisfies Meta<typeof HumidifierComponent>

export default meta
type Story = StoryObj<typeof HumidifierComponent>

const defaultProps = {
  name: 'Humidifier',
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
