import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'
import colors from 'tailwindcss/colors'

import { calculateContrast } from '@/lib/utils'
import { BrightnessSlider } from '@/components/ui/brightnessSlider'
import { DeviceCard } from '@/components/ui/deviceCard'
import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'

export interface LightCardProps {
  name: string
  color: string | undefined
  isOn: boolean
  isDimmable?: boolean
  brightness?: number
  icon: IconProp
  setState: (state: boolean) => void
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
}: LightCardProps) => {
  let colorOfLight: string | undefined = color
  const contrast = calculateContrast(colorOfLight, 'white')
  if (contrast < 1.1) {
    colorOfLight = colors.slate[100]
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
        <FontAwesomeIcon icon={icon} className={iconStyle({ isOn })} />
        <Switch
          checked={isOn}
          onCheckedChange={setState}
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: isOn ? '#5E6AD2' : undefined }}
        />
      </div>
      <Typography.Text className="text-sm font-medium">{name}</Typography.Text>
      {isOn && isDimmable ? null : (
        <Typography.Subtle className="text-sm text-opacity-60">
          {statusText}
        </Typography.Subtle>
      )}
      {isOn && isDimmable ? (
        <div className="mt-2 flex w-full gap-2">
          <BrightnessSlider
            onClick={(e) => e.stopPropagation()}
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
