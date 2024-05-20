import type { Meta, StoryObj } from '@storybook/react'

import { phillipsHueLightStrip } from '@/../mocks/entities/light'

import { Light } from './index'

const meta = {
  component: Light,
} satisfies Meta<typeof Light>

export default meta
type Story = StoryObj<typeof Light>

export const Demo: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Light entity={phillipsHueLightStrip} />
    </div>
  ),
}
