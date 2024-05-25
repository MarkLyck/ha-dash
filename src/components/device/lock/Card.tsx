import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface LockCardProps {
  name: string
  icon: IconProp
  isLocked: boolean
  batteryPercentage?: number
  setState: (state: boolean) => void
}

export const LockCard = ({
  name,
  icon,
  isLocked,
  batteryPercentage,
  setState,
}: LockCardProps) => {
  const status = isLocked ? 'locked' : 'unlocked'

  return (
    <DeviceCard
      isActive={isLocked}
      name={name}
      status={status}
      batteryPercentage={
        batteryPercentage && batteryPercentage < 25
          ? batteryPercentage
          : undefined
      }
      setIsActive={setState}
      Icon={(props) => <FontAwesomeIcon icon={icon} {...props} />}
    />
  )
}
