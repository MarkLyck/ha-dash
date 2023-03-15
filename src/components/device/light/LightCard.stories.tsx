import type { Meta, StoryObj } from '@storybook/react'

import { Light as LightCard } from './index'

// import { LightCard } from './LightCard'

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

const defaultProps = {
  name: 'Light',
  icon: ['far', 'lightbulb-on'],
  isOn: true,
  isDimmable: false,
  color: 'white',
  setState: () => {
    //
  },
  setColor: () => {
    //
  },
  setBrightness: () => {
    //
  },
}

export const Demo: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <LightCard
        {...defaultProps}
        name="Outdoor bulb"
        icon={['far', 'lightbulb-on']}
        isOn
        color="white"
      />
      <LightCard
        {...defaultProps}
        name="Living room light"
        icon={['far', 'light-ceiling']}
        isOn={false}
      />
      <LightCard
        {...defaultProps}
        name="Desk lamp"
        icon={['far', 'lamp-desk']}
        color="purple"
      />
      <LightCard
        {...defaultProps}
        name="Floor lamp"
        icon={['far', 'lamp-floor']}
        isDimmable
        brightness={100}
      />
      <LightCard
        {...defaultProps}
        name="Sofa lamp"
        icon={['far', 'lamp']}
        color="lightpink"
        isDimmable
        brightness={14}
      />
      <LightCard
        {...defaultProps}
        name="Holiday lights"
        icon={['far', 'lights-holiday']}
        isDimmable
        brightness={79}
        color="red"
      />
      <LightCard
        {...defaultProps}
        name="Christmas tree"
        icon={['far', 'tree-christmas']}
        color="green"
      />
    </div>
  ),
}

export const OutdoorBulb: Story = {
  args: {
    ...defaultProps,
    name: 'Outdoor bulb',
    icon: ['far', 'light-ceiling'],
    isDimmable: true,
    brightness: 80,
  },
}

export const DeskLamp: Story = {
  args: {
    ...defaultProps,
    name: 'Desk lamp',
    icon: ['far', 'lamp-desk'],
  },
}
