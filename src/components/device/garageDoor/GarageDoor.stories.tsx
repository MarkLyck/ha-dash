import type { Meta, StoryObj } from '@storybook/react'

import { GarageDoor as GarageDoorComponent } from './index'

const meta = {
  component: GarageDoorComponent,
} satisfies Meta<typeof GarageDoorComponent>

export default meta
type Story = StoryObj<typeof GarageDoorComponent>

const defaultProps = {
  name: 'Garage',
  setState: () => {
    //
  },
}

export const Open: Story = {
  args: {
    ...defaultProps,
    isOpen: true,
  },
}
export const Closed: Story = {
  args: {
    ...defaultProps,
    isOpen: false,
  },
}
