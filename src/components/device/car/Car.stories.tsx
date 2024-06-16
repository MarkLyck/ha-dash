import type { Meta, StoryObj } from '@storybook/react'

import { Car as CarComponent } from './index'

const meta = {
  component: CarComponent,
} satisfies Meta<typeof CarComponent>

export default meta
type Story = StoryObj<typeof CarComponent>

export const Parked: Story = {
  args: {},
}
