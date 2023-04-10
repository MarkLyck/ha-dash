import type { Meta, StoryObj } from '@storybook/react'

import { AreaTabs } from './areaTabs'

const meta = {
  component: AreaTabs,
} satisfies Meta<typeof AreaTabs>

export default meta
type Story = StoryObj<typeof AreaTabs>

const areasList = [
  'bedarea',
  'guest area',
  'kids area',
  'play area',
  'nursery',
  'living area',
  'batharea',
  'toilet',
  'dining area',
  'kitchen',
  'pantry',
  'office',
  'tv area',
  'home cinema',
  'wine cellar',
  'man cave',
  'gaming area',
  'library',
  'art studio',
  'laundry',
  'mudarea',
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

export const areas: Story = {
  args: {
    areas: areasList,
  },
}
