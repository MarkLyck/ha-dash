import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

import { BrightnessSlider } from '@/components/ui/brightnessSlider'
import { DeviceCard, StatusText } from '@/components/ui/deviceCard'
import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'

export interface SwitchCardProps {
  name: string
  isOn: boolean
  isDimmable?: boolean
  brightness?: number
  icon: IconProp
  setState: (state: boolean) => void
  setBrightness?: (brightness: number) => void
}

const iconStyle = cva(['text-xl', 'text-slate-600', 'dark:text-slate-100'], {
  variants: {
    isOn: {
      false: ['text-slate-400', 'dark:text-slate-400'],
    },
  },
})

export const SwitchCard = ({
  name,
  icon,
  isOn,
  isDimmable,
  brightness = 0,
  setState,
  setBrightness,
}: SwitchCardProps) => {
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
      name={name}
      status={status}
      showStatus={!isDimmable && isOn}
      icon={icon}
      handleOnOffState={setState}
    >
      {isOn && isDimmable ? (
        <div className="mt-2 flex w-full gap-2">
          <BrightnessSlider
            onClick={(e) => e.stopPropagation()}
            onChange={(value) => setBrightness?.(Number(value))}
            value={[brightness]}
            color="white"
            max={100}
            step={1}
            className="flex-1"
          />
        </div>
      ) : null}
    </DeviceCard>
  )
}
