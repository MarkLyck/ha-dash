import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DeviceCard } from '@/components/ui/deviceCard'
import { QuickActionButton } from '@/components/ui/quickActionButton'

export interface SpeakerCardProps {
  name: string
  mode: 'off' | 'playing' | 'paused'
  volume: number
  content?: string
  icon: IconProp
  setState: (state: boolean) => void
}

export const SpeakerCard = ({
  name,
  icon,
  mode,
  volume,
  content,
  setState,
}: SpeakerCardProps) => {
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
          <span className="first-letter:capitalize">{status}</span>
          {isActive && volume !== undefined ? (
            <span className="ml-auto">
              <FontAwesomeIcon
                className="mr-1 text-[12px]"
                icon={['fas', 'volume']}
              />
              {volume}
            </span>
          ) : null}
        </div>
      }
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
            <FontAwesomeIcon icon={['fas', 'forward']} />
          </QuickActionButton>
        </div>
      ) : null}
    </DeviceCard>
  )
}
