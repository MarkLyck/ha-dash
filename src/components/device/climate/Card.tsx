import { DeviceCard } from '@/components/ui/deviceCard'
import { TemperatureSlider } from '@/components/ui/temperatureSlider'
import {
  FireIcon,
  SnowIcon,
  MidTemperatureIcon,
  CoolerIcon,
} from '@/assets/icons'
import { useRef, useState } from 'react'
import { debounce } from '@/lib/utils'
import type { ClimateFeature } from '@/lib/supportedFeatures'

export interface ClimateCardProps {
  name?: string
  state: 'heat' | 'cool' | 'auto' | 'off'
  currentTemperature: number
  targetTemperature: number
  setState: (state: 'heat' | 'cool' | 'auto' | 'off') => void
  setTargetTemperature: (temperature: number) => void
  supportedFeatures: Map<ClimateFeature, number>
}

export const ClimateCard = ({
  name,
  state,
  currentTemperature,
  targetTemperature,
  setState,
  setTargetTemperature,
  supportedFeatures,
}: ClimateCardProps) => {
  const [targetTempValue, setTargetTempValue] = useState(targetTemperature)
  const debouncedSetTargetTemperature = useRef(
    debounce((value: number) => setTargetTemperature(value), 300),
  ).current

  const isActive = state !== 'off'

  let StateIcon = CoolerIcon
  if (state === 'heat') StateIcon = FireIcon
  if (state === 'cool') StateIcon = SnowIcon

  return (
    <DeviceCard
      isActive={isActive}
      name={name}
      status={
        <div className="flex w-full items-center justify-between">
          <span className="first-letter:capitalize">{state}</span>
          {isActive ? (
            <span className="ml-auto flex items-center">
              <MidTemperatureIcon size={18} />
              {targetTempValue}°
            </span>
          ) : null}
        </div>
      }
      Icon={StateIcon}
      setIsActive={(value) => setState(value ? 'cool' : 'off')}
    >
      {supportedFeatures.has('TARGET_TEMPERATURE') && isActive ? (
        <div className="flex w-full gap-2">
          <TemperatureSlider
            value={[targetTempValue]}
            currentValue={currentTemperature}
            min={50}
            max={90}
            onValueChange={(value) => {
              setTargetTempValue(value[0] ?? targetTemperature)
              debouncedSetTargetTemperature(value[0] ?? targetTemperature)
            }}
          />
        </div>
      ) : null}
    </DeviceCard>
  )
}
