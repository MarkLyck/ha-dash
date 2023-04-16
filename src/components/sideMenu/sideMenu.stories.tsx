import type { Meta, StoryObj } from '@storybook/react'

import { SideMenu } from './index'

const meta = {
  component: SideMenu,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideMenu>

export default meta
type Story = StoryObj<typeof SideMenu>

export const Menu: Story = {
  args: {},
}
