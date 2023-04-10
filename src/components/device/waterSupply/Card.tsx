import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'

export interface WaterSupplyCardProps {
  name: string
  icon: IconProp
  isOn: boolean
  setState: (state: boolean) => void
}

export const WaterSupplyCard = ({
  name,
  icon,
  isOn,
  setState,
}: WaterSupplyCardProps) => {
  const status = isOn ? 'on' : 'off'

  return (
    <DeviceCard
      isActive={isOn}
      name={name}
      status={status}
      setIsActive={setState}
      icon={icon}
    />
  )
}
