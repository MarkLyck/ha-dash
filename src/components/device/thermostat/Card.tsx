import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { cva } from 'class-variance-authority'

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

const statusStyle = cva('', {
  variants: {
    mode: {
      heating: ['text-amber-500'],
      cooling: ['text-blue-500'],
    },
  },
})

export const ThermostatCard = ({
  name,
  icon,
  mode,
  currentTemperature,
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
      setIsActive={setState}
    >
      {isActive ? (
        <div className="mt-2 flex w-full gap-2">
          <TemperatureSlider
            value={[targetTemperature]}
            currentValue={currentTemperature}
            min={0}
            max={100}
            onChange={() => {
              //
            }}
          />
        </div>
      ) : null}
    </DeviceCard>
  )
}
