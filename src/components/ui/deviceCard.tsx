import { cva } from 'class-variance-authority'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

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

type DeviceCardProps = {
  active: boolean
  name: string
  children: React.ReactNode
  modalContent?: React.ReactNode
}
export const DeviceCard = ({
  name,
  active,
  modalContent,
  children,
}: DeviceCardProps) => {
  if (!modalContent) {
    return (
      <div className="w-full max-w-[140px]">
        <div className={deviceCardStyle({ active })}>{children}</div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[140px]">
      <Dialog>
        <DialogTrigger className="w-full rounded-xl text-left outline-none transition focus:ring-2 focus:ring-slate-400 focus:ring-offset-2  dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900">
          <div className={deviceCardStyle({ active })}>{children}</div>
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
