import type { Meta, StoryObj } from '@storybook/react'

import { AreaTabs } from './areaTabs'

const meta = {
  component: AreaTabs,
} satisfies Meta<typeof AreaTabs>

export default meta
type Story = StoryObj<typeof AreaTabs>

const roomsList = [
  'bedroom',
  'guest room',
  'kids room',
  'play room',
  'nursery',
  'living room',
  'bathroom',
  'toilet',
  'dining room',
  'kitchen',
  'pantry',
  'office',
  'tv room',
  'home cinema',
  'wine cellar',
  'man cave',
  'gaming room',
  'library',
  'art studio',
  'laundry',
  'mudroom',
  'entry way',
  'hallway',
  'stairway',
  'basement',
  'attic',
  'roof top',
  'balcony',
  'patio',
  'bar',
  'gym',
  'pool',
  'sauna',
  'garage',
  'workshop',
  'shed',
  'outside',
  'front yard',
  'default',
]

export const Rooms: Story = {
  args: {
    rooms: roomsList,
  },
}
