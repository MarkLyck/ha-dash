import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'
import colors from 'tailwindcss/colors'

import { calculateContrast } from '@/lib/utils'
import { BrightnessSlider } from '@/components/ui/brightnessSlider'
import { DeviceCard, StatusText } from '@/components/ui/deviceCard'
import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'
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

const iconStyle = cva(['text-xl', 'text-slate-600', 'dark:text-slate-100'], {
  variants: {
    isOn: {
      false: ['text-slate-400', 'dark:text-slate-400'],
    },
  },
})

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
      status={status}
      showStatus={!isDimmable && isOn}
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
