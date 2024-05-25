import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

import { BatteryIcon } from '@/components/ui/batteryIcon'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'

export const deviceCardStyle = cva(
  'relative flex w-full flex-1 flex-col rounded-xl border border-border p-3 transition',
  {
    variants: {
      active: {
        false: ['bg-bg-white', 'dark:bg-bg-white', 'dark:border-slate-700'],
        true: ['bg-white', 'dark:bg-bg-weak', 'dark:hover:border-slate-600'],
      },
    },
  },
)

export const deviceCardTypeStyle = cva('', {
  variants: {
    type: {
      default: '',
      warning:
        'border-warning-600 text-warning-600 dark:border-warning-600 dark:hover:border-warning-500 hover:border-warning-700 [&>.device-status]:text-warning-600 dark:hover:text-warning-500 dark:text-warning-600 hover:text-warning-700',
      error:
        'border-danger-600 text-danger-600 dark:border-danger-600 dark:hover:border-danger-500 hover:border-danger-700 [&>.device-status]:text-danger-600 dark:hover:text-danger-500 dark:text-danger-600 hover:text-danger-700',
    },
  },
})

export const deviceIconStyle = cva(
  ['text-xl', 'text-slate-600', 'dark:text-slate-100'],
  {
    variants: {
      active: {
        false: ['text-slate-400', 'dark:text-slate-400'],
      },
    },
  },
)

const stateIconStyle = cva(
  '-translate-y-1/2 absolute top-0 right-0 mr-0 flex h-6 w-6 translate-x-1/2 items-center justify-center rounded-full text-white dark:text-black',
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

export type DeviceCardType = 'default' | 'warning' | 'error'

type DeviceCardProps = {
  name: string | undefined
  Icon?: React.ElementType
  status?: React.ReactNode
  batteryPercentage?: number
  isCharging?: boolean
  action?: React.ReactNode
  isActive: boolean
  setIsActive: (value: boolean) => void
  children?: React.ReactNode
  modalContent?: React.ReactNode
  type?: DeviceCardType
}
export const DeviceCard = ({
  name,
  Icon,
  status,
  action,
  isActive,
  batteryPercentage,
  isCharging,
  setIsActive,
  modalContent,
  type = 'default',
  children,
}: DeviceCardProps) => {
  if (action === undefined) {
    action = (
      <Switch
        checked={isActive}
        onCheckedChange={() => setIsActive(!isActive)}
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: isActive ? '#5E6AD2' : undefined }}
      />
    )
  }

  const content = (
    <div className="w-full max-w-[160px]">
      <div
        className={cn(
          deviceCardStyle({ active: isActive }),
          deviceCardTypeStyle({ type }),
        )}
      >
        <div className={stateIconStyle({ type })}>
          <FontAwesomeIcon
            icon={['fas', 'exclamation']}
            className="h-4 text-center"
          />
        </div>
        <div className="mb-2 flex h-8 w-full items-center justify-between">
          {Icon ? (
            <Icon className={deviceIconStyle({ active: isActive })} />
          ) : null}
          {action}
        </div>
        <DeviceName>{name}</DeviceName>

        {status ? (
          <DeviceStatus>
            <span className="w-full first-letter:capitalize">{status}</span>
            {batteryPercentage ? (
              <BatteryIcon
                percentage={batteryPercentage}
                isCharging={isCharging}
                className="ml-1"
              />
            ) : null}
          </DeviceStatus>
        ) : null}
        {children ? <div className="mt-2">{children}</div> : null}
      </div>
    </div>
  )

  if (!modalContent) {
    return content
  }

  return (
    <div className="w-full max-w-[160px]">
      <Dialog>
        <DialogTrigger
          asChild
          className="w-full cursor-pointer rounded-xl text-left outline-none transition dark:focus:ring-slate-400 focus:ring-2 focus:ring-slate-400 dark:focus:ring-offset-slate-900 focus:ring-offset-2"
        >
          {content}
        </DialogTrigger>
        <DialogContent className="w-auto min-w-[280px] bg-bg-white">
          <DialogHeader>
            <DialogTitle className="mb-4 first-letter:capitalize">
              {name}
            </DialogTitle>
            {modalContent}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export const DeviceName = ({ children }: { children: React.ReactNode }) => (
  <Typography.Text className="font-medium text-sm first-letter:capitalize">
    {children}
  </Typography.Text>
)

export const DeviceStatus = ({ children }: { children: React.ReactNode }) => (
  <Typography.Subtle className="device-status flex w-full items-center justify-between overflow-hidden whitespace-nowrap text-sm text-opacity-60 first-letter:capitalize">
    {children}
  </Typography.Subtle>
)
