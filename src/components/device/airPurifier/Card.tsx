import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface AirPurifierCardProps {
  name: string
  icon: IconProp
  isOn: boolean
  setState: (state: boolean) => void
}

export const AirPurifierCard = ({
  name,
  icon,
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
      Icon={(props) => <FontAwesomeIcon icon={icon} {...props} />}
    />
  )
}
