import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const buttonStyle = cva(
  'h-6 w-10 rounded-md bg-slate-100 text-[12px] flex-1 text-slate-600 transition hover:text-slate-100 dark:bg-slate-1000 dark:text-slate-300 dark:hover:bg-slate-1200 dark:hover:text-slate-100',
  {
    variants: {
      isActive: {
        false: 'border border-slate-200 dark:border-slate-700',
      },
    },
  }
)

type QuickActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean
}

export const QuickActionButton = ({
  children,
  isActive,
  className,
  ...props
}: QuickActionButtonProps) => (
  <Button
    size="sm"
    {...props}
    className={cn(buttonStyle({ isActive }), className)}
  >
    {children}
  </Button>
)
