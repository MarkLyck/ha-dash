import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'
import colors from 'tailwindcss/colors'

import { BrightnessSlider } from '@/components/ui/brightnessSlider'
import { DeviceCard } from '@/components/ui/deviceCard'
import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'
import { calculateContrast } from './utils'

type LightCardProps = {
  name: string
  color: string
  isOn: boolean
  isDimmable?: boolean
  brightness?: number
  icon: IconProp
  setState: (state: boolean) => void
}

const iconStyle = cva(['text-xl'], {
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
}: LightCardProps) => {
  let lightColor: string = color
  const contrast = calculateContrast(lightColor)
  if (contrast < 1.1) {
    lightColor = colors.amber[500]
  }

  let statusText = 'Off'
  if (isOn) {
    statusText = 'On'
    if (isDimmable) {
      statusText = `${brightness}%`
    }
  }

  return (
    <DeviceCard active={isOn}>
      <div className="mb-4 flex w-full items-center justify-between">
        <FontAwesomeIcon
          icon={icon}
          className={iconStyle({ isOn })}
          style={{ color: isOn ? lightColor : undefined }}
        />
        <Switch
          checked={isOn}
          onCheckedChange={setState}
          style={{ backgroundColor: isOn ? '#5E6AD2' : undefined }}
        />
      </div>
      <Typography.Text className="text-sm font-medium">{name}</Typography.Text>
      <Typography.Subtle className="text-sm text-opacity-60">
        {statusText}
      </Typography.Subtle>
      {isOn && isDimmable ? (
        <div className="mt-2 w-full">
          <BrightnessSlider value={[brightness]} max={100} step={1} />
        </div>
      ) : null}
    </DeviceCard>
  )
}
