import type { Meta, StoryObj } from '@storybook/react'

import { LightCard } from './LightCard'

const meta = {
  component: LightCard,
  tags: ['autodocs'],
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
        color="yellow"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Living room light"
        icon={['far', 'light-ceiling']}
        isOn={false}
        color="yellow"
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
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Holiday lights"
        icon={['far', 'lights-holiday']}
        isOn
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
    color: 'yellow',
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
    color: 'yellow',
    setState: () => {
      //
    },
  },
}
