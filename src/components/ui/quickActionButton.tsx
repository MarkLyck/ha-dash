import { cva } from 'class-variance-authority'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const buttonStyle = cva(
  'h-6 w-10 flex-1 rounded-md bg-slate-100 text-[12px] text-slate-600 transition dark:bg-slate-1000 dark:hover:bg-slate-1200 dark:hover:text-slate-100 dark:text-slate-300 hover:text-slate-100',
  {
    variants: {
      isActive: {
        false: 'border border-slate-200 dark:border-slate-700',
      },
    },
  },
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

export const StateActionButton = ({
  isActive,
  children,
}: {
  isActive: boolean
  children: React.ReactNode
}) => (
  <QuickActionButton isActive={isActive} className="round h-8 w-8 flex-none">
    {children}
  </QuickActionButton>
)
