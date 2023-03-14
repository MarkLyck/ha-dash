import { cva } from 'class-variance-authority'

export const deviceCardStyle = cva(
  'flex flex-col p-3 rounded-xl max-w-[140px] w-full border transition outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 ',
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
  return <button className={deviceCardStyle({ active })}>{children}</button>
}
