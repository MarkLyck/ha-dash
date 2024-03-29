import type { Meta, StoryObj } from '@storybook/react'

import { Lock as LockComponent } from './index'

const meta = {
  component: LockComponent,
} satisfies Meta<typeof LockComponent>

export default meta
type Story = StoryObj<typeof LockComponent>

const defaultProps = {
  name: 'Front door',
  icon: ['far', 'lock'],
  isLocked: true,
  setState: () => {
    //
  },
}

export const Lock: Story = {
  args: {
    ...defaultProps,
    icon: ['far', 'lock'],
    batteryPercentage: 72,
  },
}
export const LowBattery: Story = {
  args: {
    ...defaultProps,
    icon: ['far', 'lock-open'],
    batteryPercentage: 18,
  },
}
