import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { getSceneIcon } from './sceneIcons'

type SceneProps = {
  name: string
  active: boolean
  setActive: (active: boolean) => void
}

const container = cva(
  [
    'flex',
    'h-12',
    'w-[132px]',
    'items-center',
    'rounded-lg',
    'p-2',
    'px-3',
    'dark:border-none',
  ],
  {
    variants: {
      active: {
        true: ['shadow-sm', 'bg-white', 'dark:bg-slate-700'],
        false: [
          'bg-slate-200',
          'dark:bg-slate-900',
          '[&>p]:text-opacity-40',
          'dark:[&>p]:text-opacity-40',
        ],
      },
    },
  }
)

export const Scene = ({ name, active, setActive }: SceneProps) => {
  const SceneIcon = getSceneIcon({ name })
  return (
    <Button
      variant="outline"
      className={cn(container({ active }))}
      onClick={() => setActive(!active)}
    >
      <SceneIcon active={active} />
      <Typography.Text
        className={'font-md flex-1 text-left leading-4 text-slate-900'}
      >
        {name}
      </Typography.Text>
    </Button>
  )
}
