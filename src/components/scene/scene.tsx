import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { SceneIcon } from './sceneIcons'

type SceneProps = {
  name: string
  active: boolean
  setActive: (active: boolean) => void
}

export const container = cva('py-3 px-4 rounded-xl border transition ', {
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
          'flex-1 text-left text-sm font-normal leading-4 text-slate-900'
        }
      >
        {name}
      </Typography.Text>
    </Button>
  )
}
