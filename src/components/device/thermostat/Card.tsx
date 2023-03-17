import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { DeviceCard } from '@/components/ui/deviceCard'
import { TemperatureSlider } from '@/components/ui/temperatureSlider'

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
  targetTemperature,
  setState,
}: ThermostatCardProps) => {
  const isOn = mode !== 'off'

  return (
    <DeviceCard
      isActive={isOn}
      name={name}
      status={`${targetTemperature}°`}
      icon={icon}
      handleOnOffState={setState}
    >
      {isOn ? (
        <div className="mt-2 flex w-full gap-2">
          <TemperatureSlider
            value={[targetTemperature]}
            onChange={() => {
              //
            }}
          />
        </div>
      ) : null}
    </DeviceCard>
  )
}
