import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface GarageDoorProps {
  name: string
  icon: IconProp
  isOpen: boolean
  setState: (state: boolean) => void
}

export const GarageDoorCard = ({
  name,
  icon,
  isOpen,
  setState,
}: GarageDoorProps) => {
  const status = isOpen ? 'open' : 'closed'

  return (
    <DeviceCard
      isActive={isOpen}
      name={name}
      status={status}
      setIsActive={setState}
      Icon={(props) => <FontAwesomeIcon icon={icon} {...props} />}
    />
  )
}
