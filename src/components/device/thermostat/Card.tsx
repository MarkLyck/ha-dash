import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'
import { TemperatureSlider } from '@/components/ui/temperatureSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ThermostatCardProps {
  name: string
  mode: 'heating' | 'cooling' | 'auto' | 'off'
  currentTemperature: number
  targetTemperature: number
  icon: IconProp
  setState: (state: boolean) => void
}

export const ThermostatCard = ({
  name,
  icon,
  mode,
  currentTemperature,
  targetTemperature,
  setState,
}: ThermostatCardProps) => {
  const isActive = mode !== 'off'

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={
        <div className="flex w-full items-center justify-between">
          <span className="first-letter:capitalize">{mode}</span>
          {isActive ? (
            <span className="ml-auto">
              <FontAwesomeIcon
                className="text-[12px]"
                icon={['far', 'temperature-half']}
              />{' '}
              {targetTemperature}°
            </span>
          ) : null}
        </div>
      }
      icon={icon}
      setIsActive={setState}
    >
      {isActive ? (
        <div className="flex w-full gap-2">
          <TemperatureSlider
            value={[targetTemperature]}
            currentValue={currentTemperature}
            min={50}
            max={90}
            onChange={() => {
              //
            }}
          />
        </div>
      ) : null}
    </DeviceCard>
  )
}
