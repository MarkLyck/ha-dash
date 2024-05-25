import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'

export interface AirPurifierCardProps {
  name: string
  icon: IconProp
  isOn: boolean
  setState: (state: boolean) => void
}

export const AirPurifierCard = ({
  name,
  isOn,
  setState,
}: AirPurifierCardProps) => {
  const status = isOn ? 'on' : 'off'

  return (
    <DeviceCard
      isActive={isOn}
      name={name}
      status={status}
      setIsActive={setState}
    />
  )
}
