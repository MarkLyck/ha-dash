import type { Meta, StoryObj } from '@storybook/react'

import { LightCard } from './LightCard'

const meta = {
  component: LightCard,
  tags: ['autodocs'],
  argTypes: {
    brightness: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof LightCard>

export default meta
type Story = StoryObj<typeof LightCard>

export const Demo: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <LightCard
        name="Outdoor bulb"
        icon={['far', 'lightbulb-on']}
        isOn
        color="white"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Living room light"
        icon={['far', 'light-ceiling']}
        isOn={false}
        color="white"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Desk lamp"
        icon={['far', 'lamp-desk']}
        isOn
        color="purple"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Floor lamp"
        icon={['far', 'lamp-floor']}
        isOn={false}
        isDimmable
        brightness={70}
        color="#ffffff"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Sofa lamp"
        icon={['far', 'lamp']}
        isOn
        color="lightpink"
        isDimmable
        brightness={14}
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Holiday lights"
        icon={['far', 'lights-holiday']}
        isOn
        isDimmable
        brightness={99}
        color="red"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Christmas tree"
        icon={['far', 'tree-christmas']}
        isOn
        color="green"
        setState={() => {
          //
        }}
      />
    </div>
  ),
}

export const OutdoorBulb: Story = {
  args: {
    name: 'Outdoor bulb',
    icon: ['far', 'light-ceiling'],
    isOn: true,
    isDimmable: true,
    color: 'white',
    setState: () => {
      //
    },
  },
}

export const DeskLamp: Story = {
  args: {
    name: 'Desk lamp',
    icon: ['far', 'lamp-desk'],
    isOn: true,
    color: 'white',
    setState: () => {
      //
    },
  },
}
