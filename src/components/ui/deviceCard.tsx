import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'

export const deviceCardStyle = cva(
  'flex flex-1 flex-col p-3 rounded-xl w-full border transition ',
  {
    variants: {
      active: {
        false: [
          'bg-slate-100',
          'border-slate-200',
          'dark:bg-slate-1000',
          'dark:border-slate-700',
          'dark:hover:border-slate-500',
        ],
        true: [
          'bg-white',
          'dark:bg-slate-800',
          'dark:border-slate-500',
          'dark:hover:border-slate-600',
        ],
      },
    },
  }
)

const iconStyle = cva(['text-xl', 'text-slate-600', 'dark:text-slate-100'], {
  variants: {
    active: {
      false: ['text-slate-400', 'dark:text-slate-400'],
    },
  },
})

type DeviceCardProps = {
  isActive: boolean
  name: string
  icon: IconProp
  status?: React.ReactNode
  setIsActive: (value: boolean) => void
  children?: React.ReactNode
  modalContent?: React.ReactNode
}
export const DeviceCard = ({
  name,
  icon,
  status,
  setIsActive,
  isActive,
  modalContent,
  children,
}: DeviceCardProps) => {
  if (!modalContent) {
    return (
      <div className="w-full max-w-[140px]">
        <div className={deviceCardStyle({ active: isActive })}>
          <div className="mb-4 flex w-full items-center justify-between">
            <FontAwesomeIcon
              icon={icon}
              className={iconStyle({ active: isActive })}
            />
            <Switch
              checked={isActive}
              onCheckedChange={() => setIsActive(!isActive)}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: isActive ? '#5E6AD2' : undefined }}
            />
          </div>
          <DeviceName>{name}</DeviceName>
          {status ? <Status>{status}</Status> : null}
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[140px]">
      <Dialog>
        <DialogTrigger className="w-full rounded-xl text-left outline-none transition focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900">
          <div className={deviceCardStyle({ active: isActive })}>
            <div className="mb-4 flex w-full items-center justify-between">
              <FontAwesomeIcon
                icon={icon}
                className={iconStyle({ active: isActive })}
              />
              <Switch
                checked={isActive}
                onCheckedChange={() => setIsActive(!isActive)}
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor: isActive ? '#5E6AD2' : undefined }}
              />
            </div>
            <DeviceName>{name}</DeviceName>
            {status ? <Status>{status}</Status> : null}
            {children}
          </div>
        </DialogTrigger>
        <DialogContent className="w-auto">
          <DialogHeader>
            <DialogTitle className="mb-4">{name}</DialogTitle>
            {modalContent}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export const DeviceName = ({ children }: { children: React.ReactNode }) => (
  // TODO capitalize only first letter
  <Typography.Text className="text-sm font-medium first-letter:capitalize">
    {children}
  </Typography.Text>
)

export const Status = ({ children }: { children: React.ReactNode }) => (
  // TODO capitalize only first letter
  <Typography.Subtle className="text-sm text-opacity-60 first-letter:capitalize">
    {children}
  </Typography.Subtle>
)
