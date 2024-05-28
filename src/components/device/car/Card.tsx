import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DeviceCard } from '@/components/ui/deviceCard'
import {
  QuickActionButton,
  StateActionButton,
} from '@/components/ui/quickActionButton'

import type { ChargingState, ShiftState } from './types'

export interface CarCardProps {
  name: string
  mode: ShiftState | undefined
  isLocked?: boolean
  batteryPercentage: number | undefined
  chargingState: ChargingState | undefined
  isHome?: boolean
  icon: IconProp
}

export const CarCard = ({
  name,
  icon,
  mode,
  batteryPercentage,
  chargingState,
  isLocked,
  // setState,
}: CarCardProps) => {
  const isActive = mode !== 'p'
  let status: string | undefined = mode
  const isCharging =
    chargingState === 'charging' || chargingState === 'starting'

  if (
    isCharging ||
    (typeof batteryPercentage === 'number' && batteryPercentage < 90)
  ) {
    status = `${mode} - ${batteryPercentage}%`
  }

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={status}
      Icon={(props) => <FontAwesomeIcon icon={icon} {...props} />}
      setIsActive={() => {}}
      batteryPercentage={batteryPercentage}
      isCharging={isCharging}
      action={
        mode === 'p' || isCharging ? (
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
