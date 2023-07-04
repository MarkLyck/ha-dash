import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DeviceCard } from '@/components/ui/deviceCard'
import { StateActionButton } from '@/components/ui/quickActionButton'
import { Slider } from '@/components/ui/slider'

export interface CurtainCardProps {
  name: string
  icon: IconProp
  percentClosed: number
  batteryPercentage?: number
  setPercentClosed: (percent: number) => void
}

export const CurtainCard = ({
  name,
  icon,
  percentClosed,
  setPercentClosed,
  batteryPercentage,
}: CurtainCardProps) => {
  const isActive = percentClosed < 100
  let status = `${percentClosed}% closed`
  if (percentClosed === 0) {
    status = 'Open'
  } else if (percentClosed === 100) {
    status = 'Closed'
  }

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={status}
      action={
        <StateActionButton isActive={isActive}>
          <FontAwesomeIcon
            icon={['far', isActive ? 'down-to-line' : 'up-to-line']}
          />
        </StateActionButton>
      }
      batteryPercentage={
        batteryPercentage && batteryPercentage < 25
          ? batteryPercentage
          : undefined
      }
      setIsActive={() => {
        if (isActive) {
          setPercentClosed(100)
        } else {
          setPercentClosed(0)
        }
      }}
      icon={icon}
    >
      <Slider
        onClick={(e) => e.stopPropagation()}
        onChange={(value) => setPercentClosed(Number(value))}
        value={[percentClosed]}
        max={100}
        step={1}
        className="flex-1"
      />
    </DeviceCard>
  )
}
