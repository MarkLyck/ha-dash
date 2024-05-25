import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'

export interface LockCardProps {
  name: string
  icon: IconProp
  isLocked: boolean
  batteryPercentage?: number
  setState: (state: boolean) => void
}

export const LockCard = ({
  name,
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
    />
  )
}
