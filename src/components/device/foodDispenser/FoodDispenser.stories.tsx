import type { Meta, StoryObj } from '@storybook/react'

import { FoodDispenser as FoodDispenserCardComponent } from './index'

const meta = {
  component: FoodDispenserCardComponent,
} satisfies Meta<typeof FoodDispenserCardComponent>

export default meta
type Story = StoryObj<typeof FoodDispenserCardComponent>

const defaultProps = {
  name: "Oliver's food",
  setState: () => {
    //
  },
}

export const On: Story = {
  args: {
    ...defaultProps,
    isEmpty: false,
    lastDispensed: new Date(),
  },
}
export const Empty: Story = {
  args: {
    ...defaultProps,
    isEmpty: true,
    lastDispensed: new Date(),
  },
}
