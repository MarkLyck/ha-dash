import type { Meta, StoryObj } from '@storybook/react'

import Typography from '@/components/ui/typography'
import { Scene } from './scene'

const meta = {
  component: Scene,
  tags: ['autodocs'],
} satisfies Meta<typeof Scene>

export default meta
type Story = StoryObj<typeof Scene>

const sceneTypes = [
  'Good morning',
  'Good night',
  'Away',
  'Romance',
  'Cooking',
  'Breakfast',
  'Dinner',
  'Party',
  'Work',
  'Reading',
  'TV',
  'Gaming',
  'Exercise',
  'Vacation',
  'Bath',
  'Makeup',
  'Default',
]

export const Demo: Story = {
  parameters: {
    controls: false,
  },
  render: () => {
    return (
      <>
        <div className="rounded bg-white p-4 dark:bg-slate-700">
          <Typography.Title className="mb-4">Scenes</Typography.Title>
          <div className="flex flex-wrap gap-2 ">
            {sceneTypes.map((name) => (
              <Scene key={name} name={name} active setActive={console.log} />
            ))}
          </div>
        </div>
        <div className="rounded bg-white p-4 dark:bg-slate-700">
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
