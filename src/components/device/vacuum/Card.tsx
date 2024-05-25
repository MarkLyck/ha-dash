import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DeviceCard } from '@/components/ui/deviceCard'
import {
  QuickActionButton,
  StateActionButton,
} from '@/components/ui/quickActionButton'

export interface VacuumCardProps {
  name: string
  mode: 'off' | 'cleaning' | 'returning'
  batteryPercentage?: number
  isCharging?: boolean
  icon: IconProp
  setState: (state: boolean) => void
}

export const VacuumCard = ({
  name,
  mode,
  batteryPercentage,
  isCharging,
  setState,
}: VacuumCardProps) => {
  const isActive = mode !== 'off'

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={mode}
      batteryPercentage={batteryPercentage}
      isCharging={isCharging}
      action={
        <StateActionButton isActive={isActive}>
          <FontAwesomeIcon icon={['far', isActive ? 'home' : 'play']} />
        </StateActionButton>
      }
      setIsActive={setState}
    >
      {isActive ? (
        <div className="flex justify-between gap-1">
          <QuickActionButton>
            <FontAwesomeIcon icon={['fas', 'pause']} />
          </QuickActionButton>
          <QuickActionButton>
            <FontAwesomeIcon icon={['far', 'fan']} />
          </QuickActionButton>
          <QuickActionButton>
            <FontAwesomeIcon icon={['far', 'water']} />
          </QuickActionButton>
        </div>
      ) : null}
    </DeviceCard>
  )
}
