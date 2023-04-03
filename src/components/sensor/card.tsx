import { cva } from 'class-variance-authority'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sensorStyle = cva(
  'relative inline-block rounded-lg border px-2 py-1 text-[14px] [&>svg]:mr-2',
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

export type SensorCardProps = {
  children: React.ReactNode
  type?: 'default' | 'warning' | 'error'
}

export const SensorCard = ({ children, type = 'default' }: SensorCardProps) => (
  <div className={sensorStyle({ type })}>
    <div className={stateIconStyle({ type })}>
      <FontAwesomeIcon
        icon={['fas', 'exclamation']}
        className="h-[10px] text-center"
      />
    </div>
    {children}
  </div>
)
