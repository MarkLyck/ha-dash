import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import colors from 'tailwindcss/colors'

import { DeviceCard } from '@/components/ui/deviceCard'
import { Slider } from '@/components/ui/slider'
import { calculateContrast, debounce } from '@/lib/utils'

import { LightDialogContent } from './DialogContent'
import type { SupportedFeaturesMap } from './types'
import { useEffect, useRef, useState } from 'react'

export interface LightCardProps {
  supportedFeatures: SupportedFeaturesMap
  name: string
  color: string | undefined
  isOn: boolean
  brightness?: number
  icon: IconProp
  setState: (state: boolean) => void
  setColor: (color: string) => void
  setBrightness: (brightness: number | undefined) => void
}

export const LightCard = ({
  supportedFeatures = new Map(),
  name,
  isOn,
  brightness = 0,
  color,
  icon,
  setState,
  setColor,
  setBrightness,
}: LightCardProps) => {
  const [sliderValue, setSliderValue] = useState<number>(brightness)

  useEffect(() => {
    setSliderValue(brightness)
  }, [brightness])

  const debouncedSetBrightness = useRef(
    debounce((value: number | undefined) => setBrightness(value), 300),
  ).current

  useEffect(() => {
    if (
      sliderValue !== brightness &&
      supportedFeatures.has('SUPPORT_BRIGHTNESS')
    ) {
      debouncedSetBrightness(sliderValue)
    }
  }, [sliderValue, supportedFeatures])

  let colorOfLight: string | undefined = color
  const contrast = calculateContrast(colorOfLight, 'white')
  if (contrast < 1.1) {
    colorOfLight = colors.slate[100]
  }

  let status = 'Off'
  if (isOn) {
    status = 'On'
    if (supportedFeatures.has('SUPPORT_BRIGHTNESS')) {
      status = `${brightness}%`
    }
  }

  return (
    <DeviceCard
      isActive={isOn}
      icon={icon}
      name={name}
      status={status}
      setIsActive={setState}
      modalContent={
        <LightDialogContent
          color={color}
          setColor={setColor}
          brightness={brightness}
          setBrightness={setBrightness}
          supportedFeatures={supportedFeatures}
        />
      }
    >
      {isOn && supportedFeatures.has('SUPPORT_BRIGHTNESS') ? (
        <div className="flex w-full gap-2">
          <Slider
            onValueChange={(value) => setSliderValue(Number(value))}
            onClick={(e) => e.stopPropagation()}
            value={[sliderValue]}
            color={color}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>
      ) : null}
    </DeviceCard>
  )
}
