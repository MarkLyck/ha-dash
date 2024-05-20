import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

import { Card } from '@/components/ui/card'

const sensorStyle = cva(
  'relative inline-block rounded-lg border bg-slate-100 px-2 py-1 text-left text-[14px] dark:bg-slate-900 hover:bg-slate-50',
  {
    variants: {
      type: {
        default:
          'border-slate-200 text-slate-500 dark:border-slate-500 dark:hover:border-slate-100 hover:border-slate-900 dark:hover:text-slate-100 dark:text-slate-300 hover:text-slate-900',
        warning:
          'border-warning-600 text-warning-600 dark:border-warning-600 dark:hover:border-warning-500 hover:border-warning-700 dark:hover:text-warning-500 dark:text-warning-600 hover:text-warning-700',
        error:
          'border-danger-600 text-danger-600 dark:border-danger-600 dark:hover:border-danger-500 hover:border-danger-700 dark:hover:text-danger-500 dark:text-danger-600 hover:text-danger-700',
      },
    },
  },
)

const stateIconStyle = cva(
  '-translate-y-1/2 absolute top-0 right-0 mr-0 flex h-4 w-4 translate-x-1/2 items-center justify-center rounded-full text-white dark:text-black',
  {
    variants: {
      type: {
        default: 'hidden',
        warning: 'bg-warning-600',
        error: 'bg-danger-600',
      },
    },
  },
)

const sensorStatusStyle = cva('text-[12px] first-letter:capitalize', {
  variants: {
    type: {
      default: 'dark:text-slate-100',
      warning: 'dark:text-warning-600',
      error: 'dark:text-danger-600',
    },
  },
})

export type SensorCardProps = {
  children: React.ReactNode
  icon: React.ReactNode
  name: string
  type?: 'default' | 'warning' | 'error'
}

export const SensorCard = ({
  children,
  icon,
  name,
  type = 'default',
}: SensorCardProps) => (
  <Card className={sensorStyle({ type })}>
    <div className={stateIconStyle({ type })}>
      <FontAwesomeIcon icon={['fas', 'exclamation']} className="h-2 w-2" />
    </div>
    <div className="flex flex-row items-center [&>svg]:mr-2 [&>svg]:h-5 [&>svg]:w-5">
      {icon}
      <div>
        <div className="text-[10px] text-slate-500 opacity-50 dark:text-slate-200 first-letter:capitalize">
          {name}
        </div>
        <div className={sensorStatusStyle({ type })}>{children}</div>
      </div>
    </div>
  </Card>
)
