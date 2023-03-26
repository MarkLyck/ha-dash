import type { Meta, StoryObj } from '@storybook/react'

import { TV as TVComponent } from './index'

const meta = {
  component: TVComponent,
} satisfies Meta<typeof TVComponent>

export default meta
type Story = StoryObj<typeof TVComponent>

const defaultProps = {
  name: 'TV',
  setState: () => {
    //
  },
}

export const Off: Story = {
  args: {
    ...defaultProps,
    mode: 'off',
  },
}
export const Playing: Story = {
  args: {
    ...defaultProps,
    mode: 'playing',
    content: 'Netflix',
  },
}
export const Paused: Story = {
  args: {
    ...defaultProps,
    mode: 'paused',
  },
}
