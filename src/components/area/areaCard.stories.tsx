import type { Meta, StoryObj } from '@storybook/react'

import { AreaCard } from './areaCard'

const meta = {
  component: AreaCard,
} satisfies Meta<typeof AreaCard>

export default meta
type Story = StoryObj<typeof AreaCard>

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

export const Areas: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {areasList.map((area) => (
        <AreaCard
          areaName={area}
          key={area}
          numberOfLightsOn={
            area.indexOf('e') > 0 ? area.indexOf('e') : undefined
          }
          temperature={area.indexOf('a') > 0 ? 72 : undefined}
          humidity={area.indexOf('i') > 0 ? 12 : undefined}
        />
      ))}
    </div>
  ),
}

export const Area: Story = {
  args: {
    areaName: 'bedarea',
    numberOfLightsOn: 2,
    temperature: 74,
  },
}
