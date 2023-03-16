import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

import { DeviceCard } from '@/components/ui/deviceCard'
import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'

export interface LockCardProps {
  name: string
  icon: IconProp
  isLocked: boolean
  setState: (state: boolean) => void
}

const iconStyle = cva(['text-xl', 'text-slate-600', 'dark:text-slate-100'], {
  variants: {
    isLocked: {
      false: ['text-slate-400', 'dark:text-slate-400'],
    },
  },
})

export const LockCard = ({ name, icon, isLocked, setState }: LockCardProps) => {
  const statusText = isLocked ? 'locked' : 'unlocked'

  return (
    <DeviceCard active={isLocked} name={name}>
      <div className="mb-4 flex w-full items-center justify-between">
        <FontAwesomeIcon icon={icon} className={iconStyle({ isLocked })} />
        <Switch
          checked={isLocked}
          onCheckedChange={setState}
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: isLocked ? '#5E6AD2' : undefined }}
        />
      </div>
      <Typography.Text className="text-sm font-medium">{name}</Typography.Text>
      <Typography.Subtle className="text-sm capitalize text-opacity-60">
        {statusText}
      </Typography.Subtle>
    </DeviceCard>
  )
}
