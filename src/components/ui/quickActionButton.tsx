import { Button } from '@/components/ui/button'

export const QuickActionButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Button
    size="sm"
    {...props}
    className="h-6 w-10 rounded-sm bg-slate-100 text-slate-600 transition hover:text-slate-100 dark:bg-slate-1000 dark:text-slate-300 dark:hover:bg-slate-1200 dark:hover:text-slate-100"
  >
    {children}
  </Button>
)
