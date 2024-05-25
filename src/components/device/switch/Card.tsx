import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'
import { Slider } from '@/components/ui/slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface SwitchCardProps {
  name: string
  isOn: boolean
  isDimmable?: boolean
  brightness?: number
  icon: IconProp
  setState: (state: boolean) => void
  setBrightness?: (brightness: number) => void
}

export const SwitchCard = ({
  name,
  icon,
  isOn,
  isDimmable,
  brightness = 0,
  setState,
  setBrightness,
}: SwitchCardProps) => {
  let status = 'Off'
  if (isOn) {
    status = 'On'
    if (isDimmable) {
      status = `${brightness}%`
    }
  }

  return (
    <DeviceCard
      isActive={isOn}
      name={name}
      status={status}
      Icon={(props) => <FontAwesomeIcon icon={icon} {...props} />}
      setIsActive={setState}
    >
      {isOn && isDimmable ? (
        <div className="flex w-full gap-2">
          <Slider
            onClick={(e) => e.stopPropagation()}
            onChange={(value) => setBrightness?.(Number(value))}
            value={[brightness]}
            color="white"
            max={100}
            step={1}
            className="flex-1"
          />
        </div>
      ) : null}
    </DeviceCard>
  )
}
