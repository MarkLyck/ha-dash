import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

import { Card } from '@/components/ui/card'

const sensorStyle = cva(
  'relative rounded-lg border px-2 py-1 text-[14px] inline-block text-left hover:bg-slate-50 bg-slate-100 dark:bg-slate-900',
  {
    variants: {
      type: {
        default:
          'border-slate-200 dark:border-slate-500 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:border-slate-100 dark:hover:text-slate-100 hover:border-slate-900',
        warning:
          'border-warning-600 dark:border-warning-600 text-warning-600 dark:text-warning-600 hover:text-warning-700 dark:hover:border-warning-500 dark:hover:text-warning-500 hover:border-warning-700',
        error:
          'border-danger-600 dark:border-danger-600 text-danger-600 dark:text-danger-600 hover:text-danger-700 dark:hover:border-danger-500 dark:hover:text-danger-500 hover:border-danger-700',
      },
    },
  }
)

const stateIconStyle = cva(
  'absolute top-0 right-0 mr-0 -translate-y-1/2 translate-x-1/2 h-4 w-4 rounded-full flex items-center justify-center text-white dark:text-black',
  {
    variants: {
      type: {
        default: 'hidden',
        warning: 'bg-warning-600',
        error: 'bg-danger-600',
      },
    },
  }
)

const sensorStatusStyle = cva('first-letter:capitalize text-[12px]', {
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
        <div className="text-[10px] text-slate-500 opacity-50 first-letter:capitalize dark:text-slate-200">
          {name}
        </div>
        <div className={sensorStatusStyle({ type })}>{children}</div>
      </div>
    </div>
  </Card>
)
