import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DeviceCard } from '@/components/ui/deviceCard'
import {
  QuickActionButton,
  StateActionButton,
} from '@/components/ui/quickActionButton'

export interface CarCardProps {
  name: string
  mode: 'parked' | 'driving' | 'charging'
  isLocked?: boolean
  batteryPercentage: number
  isCharging?: boolean
  isHome?: boolean
  icon: IconProp
  setState: (state: boolean) => void
}

export const CarCard = ({
  name,
  icon,
  mode,
  batteryPercentage,
  isCharging,
  isLocked,
  setState,
}: CarCardProps) => {
  const isActive = mode !== 'parked'
  let status: string = mode
  if (isCharging || batteryPercentage < 90) {
    status = `${mode} - ${batteryPercentage}%`
  }

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={status}
      Icon={(props) => <FontAwesomeIcon icon={icon} {...props} />}
      setIsActive={setState}
      batteryPercentage={batteryPercentage}
      isCharging={isCharging}
      action={
        mode === 'parked' || mode === 'charging' ? (
          <StateActionButton isActive={isActive}>
            <FontAwesomeIcon icon={['far', isLocked ? 'lock-open' : 'lock']} />
          </StateActionButton>
        ) : null
      }
    >
      <div className="flex justify-between gap-1">
        {!isActive ? (
          <QuickActionButton isActive={isActive}>
            <FontAwesomeIcon icon={['fas', 'heat']} />
          </QuickActionButton>
        ) : null}
        <QuickActionButton isActive={isActive}>
          <FontAwesomeIcon icon={['fas', 'map-location']} />
        </QuickActionButton>
      </div>
    </DeviceCard>
  )
}
