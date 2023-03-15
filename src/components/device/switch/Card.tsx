import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

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

export const SwitchCard = ({ name, isOn, icon, setState }: LightCardProps) => {
  return (
    <DeviceCard active={isOn} name={name}>
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
      <Typography.Subtle className="text-sm text-opacity-60">
        {isOn}
      </Typography.Subtle>
    </DeviceCard>
  )
}
