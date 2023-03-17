import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'

export interface LockCardProps {
  name: string
  icon: IconProp
  isLocked: boolean
  setState: (state: boolean) => void
}

export const LockCard = ({ name, icon, isLocked, setState }: LockCardProps) => {
  const status = isLocked ? 'locked' : 'unlocked'

  return (
    <DeviceCard
      isActive={isLocked}
      name={name}
      status={status}
      setIsActive={setState}
      icon={icon}
    />
  )
}
