import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'
import colors from 'tailwindcss/colors'

import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'
import { calculateContrast } from './utils'

type LightCardProps = {
  name: string
  color: string
  isOn: boolean
  icon: IconProp
  setState: (state: boolean) => void
}

const containerStyle = cva([
  'flex',
  'flex-col',
  'p-3',
  'rounded-xl',
  'bg-white',
  'dark:bg-slate-700',
  'max-w-[140px]',
  'w-full',
])

const iconStyle = cva(['text-xl'], {
  variants: {
    isOn: {
      false: ['text-slate-500', 'dark:text-slate-400'],
    },
  },
})

export const LightCard = ({
  name,
  isOn,
  color,
  icon,
  setState,
}: LightCardProps) => {
  let lightColor: string = color
  const contrast = calculateContrast(lightColor)
  if (contrast < 1.1) {
    lightColor = colors.amber[500]
  }

  return (
    <div className={containerStyle()}>
      <div className="mb-4 flex w-full items-center justify-between">
        <FontAwesomeIcon
          icon={icon}
          className={iconStyle({ isOn })}
          style={{ color: isOn ? lightColor : undefined }}
        />
        <Switch
          checked={isOn}
          onCheckedChange={setState}
          style={{ backgroundColor: isOn ? lightColor : undefined }}
        />
      </div>
      <Typography.Text className="text-sm font-medium">{name}</Typography.Text>
      <Typography.Subtle className="text-sm text-opacity-60">
        {isOn ? 'On' : 'Off'}
      </Typography.Subtle>
    </div>
  )
}
