import { cva } from 'class-variance-authority'

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
  children: React.ReactNode
}
export const DeviceCard = ({ active, children }: DeviceCardProps) => {
  return <div className={deviceCardStyle({ active })}>{children}</div>
}
