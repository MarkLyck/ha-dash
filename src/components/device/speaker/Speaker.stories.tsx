import type { Meta, StoryObj } from '@storybook/react'

import { Speaker as SpeakerComponent } from './index'

const meta = {
  component: SpeakerComponent,
} satisfies Meta<typeof SpeakerComponent>

export default meta
type Story = StoryObj<typeof SpeakerComponent>

const defaultProps = {
  name: 'Vacuum',
  setState: () => {
    //
  },
}

export const Off: Story = {
  args: {
    ...defaultProps,
    mode: 'off',
    icon: ['far', 'speaker'],
  },
}
export const Playing: Story = {
  args: {
    ...defaultProps,
    mode: 'playing',
    content: 'Celine Dion',
    icon: ['far', 'speaker'],
  },
}
export const Paused: Story = {
  args: {
    ...defaultProps,
    mode: 'paused',
    icon: ['far', 'speaker'],
  },
}
