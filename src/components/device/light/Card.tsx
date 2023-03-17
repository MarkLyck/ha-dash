import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { cva } from 'class-variance-authority'
import colors from 'tailwindcss/colors'

import { calculateContrast } from '@/lib/utils'
import { BrightnessSlider } from '@/components/ui/brightnessSlider'
import { DeviceCard } from '@/components/ui/deviceCard'
import { LightDialogContent } from './DialogContent'

export interface LightCardProps {
  name: string
  color: string | undefined
  isOn: boolean
  isDimmable?: boolean
  brightness?: number
  icon: IconProp
  setState: (state: boolean) => void
  setColor: (color: string) => void
  setBrightness: (brightness: number) => void
}

export const LightCard = ({
  name,
  isOn,
  isDimmable,
  brightness = 0,
  color,
  icon,
  setState,
  setColor,
  setBrightness,
}: LightCardProps) => {
  let colorOfLight: string | undefined = color
  const contrast = calculateContrast(colorOfLight, 'white')
  if (contrast < 1.1) {
    colorOfLight = colors.slate[100]
  }

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
      icon={icon}
      name={name}
      status={!isDimmable && isOn ? status : null}
      handleOnOffState={setState}
      modalContent={<LightDialogContent color={color} setColor={setColor} />}
    >
      {isOn && isDimmable ? (
        <div className="mt-2 flex w-full gap-2">
          <BrightnessSlider
            onClick={(e) => e.stopPropagation()}
            onChange={(value) => setBrightness(Number(value))}
            value={[brightness]}
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
