import { TbBolt } from 'react-icons/tb'
import { tv } from 'tailwind-variants'

const indicatorStyle = tv({
  base: 'h-full rounded-[1px] bg-neutral-500',
  variants: {
    percentageGroup: {
      very_low: 'bg-destructive',
      low: 'bg-warning',
      medium: '',
      high: '',
    },
    isCharging: {
      true: 'bg-success',
    },
  },
})

export const BatteryIndicator = ({
  percentage,
  isCharging,
}: { percentage: number | undefined; isCharging: boolean }) => {
  if (!percentage) return null

  let percentageGroup: 'high' | 'medium' | 'low' | 'very_low' = 'high'
  if (percentage < 15) {
    percentageGroup = 'very_low'
  } else if (percentage < 25) {
    percentageGroup = 'low'
  } else if (percentage < 75) {
    percentageGroup = 'medium'
  }

  return (
    <div className="flex items-center">
      <div className="relative h-3 w-6 overflow-hidden rounded-[2px] bg-neutral-700 p-[1px]">
        <div
          style={{ width: `${percentage}%` }}
          className={indicatorStyle({ percentageGroup, isCharging })}
        />
      </div>
      <div className="ml-[1px] h-[6px] w-[2px] rounded-r-[1px] bg-neutral-700" />
    </div>
  )
}
