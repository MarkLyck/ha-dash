import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { cva } from 'class-variance-authority'

import { DeviceCard } from '@/components/ui/deviceCard'

export interface ThermostatCardProps {
  name: string
  mode: 'heating' | 'cooling' | 'auto' | 'off'
  currentTemperature: number
  targetTemperature: number
  icon: IconProp
  setState: (state: boolean) => void
}

export const ThermostatCard = ({
  name,
  icon,
  mode,
  setState,
}: ThermostatCardProps) => {
  const isOn = mode !== 'off'

  return (
    <DeviceCard
      isActive={isOn}
      name={name}
      status={mode}
      icon={icon}
      handleOnOffState={setState}
    />
  )
}
