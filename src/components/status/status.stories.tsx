import type { Meta, StoryObj } from '@storybook/react'

import { Status } from './status'

const meta = {
  component: Status,
  tags: ['autodocs'],
} satisfies Meta<typeof Status>

export default meta
type Story = StoryObj<typeof Status>

export const Lock: Story = {
  args: {
    entity: {
      entity_id: 'lock.front_door',
      object_id: 'front_door',
      domain: 'lock',
      name: 'Front door',
      state: 'locked',
      last_updated: new Date(),
      last_changed: new Date(),
    },
  },
}

export const Light: Story = {
  args: {
    entity: {
      entity_id: 'light.ceiling',
      object_id: 'ceiling_light',
      domain: 'light',
      name: 'Ceiling light',
      state: 'on',
      last_updated: new Date(),
      last_changed: new Date(),
    },
  },
}

export const Camera: Story = {
  args: {
    entity: {
      entity_id: 'camera.backyard',
      object_id: 'backyard_camera',
      domain: 'camera',
      name: 'Camera',
      state: 'on',
      last_updated: new Date(),
      last_changed: new Date(),
    },
  },
}
