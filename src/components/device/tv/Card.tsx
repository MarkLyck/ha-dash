import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DeviceCard } from '@/components/ui/deviceCard'
import { QuickActionButton } from '@/components/ui/quickActionButton'

export interface TVCardProps {
  name: string
  mode: 'off' | 'playing' | 'paused'
  volume?: number
  content?: string
  icon: IconProp
  setState: (state: boolean) => void
}

export const TVCard = ({
  name,
  icon,
  mode,
  volume,
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
      status={
        <div className="flex w-full items-center justify-between">
          <span className="flex-1 overflow-hidden first-letter:capitalize">
            {status}
          </span>
          {isActive && volume !== undefined ? (
            <span className="ml-1">
              <FontAwesomeIcon
                className="mr-1 text-[12px]"
                icon={['fas', 'volume']}
              />
              {volume}
            </span>
          ) : null}
        </div>
      }
      Icon={(props) => <FontAwesomeIcon icon={icon} {...props} />}
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
