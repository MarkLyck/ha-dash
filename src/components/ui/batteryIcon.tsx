import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

// import { Tooltip } from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

const batteryStyle = cva('text-[16px]', {
  variants: {
    lowBattery: {
      true: 'text-red-500',
    },
  },
})

export const BatteryIcon = ({
  isCharging,
  percentage,
  className,
}: {
  isCharging?: boolean
  percentage: number
  className?: string
}) => {
  let icon: IconProp = ['far', 'battery-full']

  if (percentage < 100 && percentage > 75) {
    icon = ['far', 'battery-three-quarters']
  } else if (percentage < 75 && percentage >= 50) {
    icon = ['far', 'battery-half']
  } else if (percentage < 50 && percentage >= 25) {
    icon = ['far', 'battery-quarter']
  } else if (percentage < 25 && percentage > 0) {
    icon = ['far', 'battery-low']
  } else if (percentage === 0) {
    icon = ['far', 'battery-empty']
  }

  if (isCharging) {
    icon = ['far', 'battery-bolt']
    if (percentage === 100) return null
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      className={cn(batteryStyle({ lowBattery: percentage < 20 }), className)}
    />
  )
}
