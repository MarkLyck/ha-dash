import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DeviceCard } from '@/components/ui/deviceCard'
import { QuickActionButton } from '@/components/ui/quickActionButton'

export interface TVCardProps {
  name: string
  mode: 'off' | 'playing' | 'paused'
  content?: string
  icon: IconProp
  setState: (state: boolean) => void
}

export const TVCard = ({
  name,
  icon,
  mode,
  content,
  setState,
}: TVCardProps) => {
  const isActive = mode !== 'off'

  let status: string = mode
  if (mode === 'playing' && content) {
    status = `${mode} - ${content}`
  }

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={status}
      icon={icon}
      setIsActive={setState}
    >
      {isActive ? (
        <div className="flex justify-between gap-1">
          <QuickActionButton>
            <FontAwesomeIcon
              icon={['fas', mode === 'playing' ? 'pause' : 'play']}
            />
          </QuickActionButton>
          <QuickActionButton>
            <FontAwesomeIcon icon={['fas', 'volume']} />
          </QuickActionButton>
          <QuickActionButton>
            <FontAwesomeIcon icon={['fas', 'tv-retro']} />
          </QuickActionButton>
        </div>
      ) : null}
    </DeviceCard>
  )
}
