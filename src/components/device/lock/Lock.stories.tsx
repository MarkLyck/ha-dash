import type { Meta, StoryObj } from '@storybook/react'

import { Lock } from './index'

const meta = {
  component: Lock,
  tags: ['autodocs'],
} satisfies Meta<typeof Lock>

export default meta
type Story = StoryObj<typeof Lock>

const defaultProps = {
  name: 'Front door',
  icon: ['far', 'lock'],
  isLocked: true,
  setState: () => {
    //
  },
}

export const LightSwitch: Story = {
  args: {
    ...defaultProps,
    icon: ['far', 'lock'],
  },
}
