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
        icon={['fad', 'lightbulb-on']}
        isOn
        color="yellow"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Living room light"
        icon={['fad', 'light-ceiling']}
        isOn={false}
        color="yellow"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Desk lamp"
        icon={['fad', 'lamp-desk']}
        isOn
        color="purple"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Floor lamp"
        icon={['fad', 'lamp-floor']}
        isOn={false}
        color="#ffffff"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Sofa lamp"
        icon={['fad', 'lamp']}
        isOn
        color="lightpink"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Holiday lights"
        icon={['fad', 'lights-holiday']}
        isOn
        color="red"
        setState={() => {
          //
        }}
      />
      <LightCard
        name="Christmas tree"
        icon={['fad', 'tree-christmas']}
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
    icon: ['fad', 'light-ceiling'],
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
    icon: ['fad', 'lamp-desk'],
    isOn: true,
    color: 'yellow',
    setState: () => {
      //
    },
  },
}
