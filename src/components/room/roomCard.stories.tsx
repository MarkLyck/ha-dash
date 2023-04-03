import type { Meta, StoryObj } from '@storybook/react'

import { RoomCard } from './roomCard'

const meta = {
  component: RoomCard,
} satisfies Meta<typeof RoomCard>

export default meta
type Story = StoryObj<typeof RoomCard>

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
  render: () => (
    <div className="flex flex-wrap gap-4">
      {roomsList.map((room) => (
        <RoomCard
          roomName={room}
          key={room}
          numberOfLightsOn={
            room.indexOf('e') > 0 ? room.indexOf('e') : undefined
          }
          temperature={room.indexOf('a') > 0 ? 72 : undefined}
          humidity={room.indexOf('i') > 0 ? 12 : undefined}
        />
      ))}
    </div>
  ),
}

export const Room: Story = {
  args: {
    roomName: 'bedroom',
    numberOfLightsOn: 2,
    temperature: 74,
  },
}
