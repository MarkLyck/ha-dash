import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'

export interface GarageDoorProps {
  name: string
  icon: IconProp
  isOpen: boolean
  setState: (state: boolean) => void
}

export const GarageDoorCard = ({ name, isOpen, setState }: GarageDoorProps) => {
  const status = isOpen ? 'open' : 'closed'

  return (
    <DeviceCard
      isActive={isOpen}
      name={name}
      status={status}
      setIsActive={setState}
    />
  )
}
