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
  const isActive = mode !== 'off'

  let statusText = isActive ? `${targetTemperature}°` : 'off'
  if (mode === 'cooling' || mode === 'heating') {
    statusText = `${mode} to ${targetTemperature}°`
  }

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={statusText}
      icon={icon}
      handleOnOffState={setState}
    >
      {isActive ? (
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
