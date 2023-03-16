import type { Meta, StoryObj } from '@storybook/react'

import { Lock as LockComponent } from './index'

const meta = {
  component: LockComponent,
  tags: ['autodocs'],
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
  },
}
