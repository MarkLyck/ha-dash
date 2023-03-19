import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DeviceCard } from '@/components/ui/deviceCard'
import { QuickActionButton } from '@/components/ui/quickActionButton'

export interface VacuumCardProps {
  name: string
  mode: 'off' | 'cleaning' | 'returning'
  icon: IconProp
  setState: (state: boolean) => void
}

export const VacuumCard = ({ name, icon, mode, setState }: VacuumCardProps) => {
  const isActive = mode !== 'off'

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={mode}
      action={
        <QuickActionButton>
          <FontAwesomeIcon icon={['far', isActive ? 'home' : 'play']} />
        </QuickActionButton>
      }
      icon={icon}
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
