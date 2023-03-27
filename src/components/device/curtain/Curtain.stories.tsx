import type { Meta, StoryObj } from '@storybook/react'

import { Curtain as CurtainComponent } from './index'

const meta = {
  component: CurtainComponent,
  argTypes: {
    percentClosed: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof CurtainComponent>

export default meta
type Story = StoryObj<typeof CurtainComponent>

const defaultProps = {
  name: 'Curtains',
  setState: () => {
    //
  },
}

export const Open: Story = {
  args: {
    ...defaultProps,
    percentClosed: 0,
  },
}
export const HalfClosed: Story = {
  args: {
    ...defaultProps,
    percentClosed: 50,
  },
}
export const Closed: Story = {
  args: {
    ...defaultProps,
    percentClosed: 100,
  },
}
