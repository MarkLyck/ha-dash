import type { Meta, StoryObj } from '@storybook/react'

import Typography from '@/components/ui/typography'

import { Scene } from './scene'

const meta = {
  component: Scene,
} satisfies Meta<typeof Scene>

export default meta
type Story = StoryObj<typeof Scene>

const sceneTypes = [
  'Home',
  'Away',
  'Good morning',
  'Good night',
  'Romance',
  'Cooking',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Party',
  'Work',
  'Meeting',
  'Reading',
  'Homework',
  'TV',
  'Horror',
  'Board game',
  'Gaming',
  'Exercise',
  'Yoga',
  'Laundry',
  'Vacation',
  'Bath',
  'Makeup',
  'Cleaning',
  'Default',
]

export const Demo: Story = {
  parameters: {
    controls: false,
  },
  render: () => {
    return (
      <>
        <div className="mb-8">
          <Typography.Title className="mb-4">Scenes</Typography.Title>
          <div className="flex flex-wrap gap-2 ">
            {sceneTypes.map((name) => (
              <Scene key={name} name={name} active setActive={console.log} />
            ))}
          </div>
        </div>
        <div>
          <Typography.Title className="mb-4">Scenes</Typography.Title>
          <div className="flex flex-wrap gap-2 ">
            {sceneTypes.map((name) => (
              <Scene
                key={name}
                name={name}
                active={false}
                setActive={console.log}
              />
            ))}
          </div>
        </div>
      </>
    )
  },
}

export const SceneCard: Story = {
  argTypes: {
    name: {
      options: sceneTypes,
      control: { type: 'select' },
    },
  },
  args: {
    name: 'Good Morning',
    active: true,
    setActive: (active) => {
      console.dir(active)
    },
  },
}
