import { cva } from 'class-variance-authority'

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'

import { SceneIcon } from './sceneIcons'

type SceneProps = {
  name: string
  active: boolean
  setActive: (active: boolean) => void
}

export const container = cva('rounded-xl border px-4 py-3 transition', {
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
})

export const Scene = ({ name, active, setActive }: SceneProps) => {
  return (
    <Button
      variant="outline"
      className={cn(container({ active }))}
      onClick={() => setActive(!active)}
    >
      <SceneIcon name={name} active={active} />
      <Typography.Text
        className={
          'flex-1 text-left font-normal text-slate-900 text-sm leading-4'
        }
      >
        {name}
      </Typography.Text>
    </Button>
  )
}
