import { cva } from 'class-variance-authority'

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { getSceneIcon } from './sceneIcons'

type SceneProps = {
  name: string
  active: boolean
  setActive: (active: boolean) => void
}

const container = cva(
  ['flex', 'h-12', 'w-[132px]', 'items-center', 'rounded', 'p-2', 'px-3'],
  {
    variants: {
      active: {
        true: ['shadow-sm', 'bg-white', 'dark:bg-neutral-800'],
        false: ['bg-neutral-200', 'dark:bg-neutral-700'],
      },
    },
  }
)

const text = cva(
  ['font-md', 'leading-4', 'text-left', 'flex-1', 'text-neutral-900'],
  {
    variants: {
      active: {
        false: 'text-opacity-40',
      },
    },
  }
)

export const Scene = ({ name, active, setActive }: SceneProps) => {
  const SceneIcon = getSceneIcon({ name })
  return (
    <Button
      variant="outline"
      className={container({ active })}
      onClick={() => setActive(!active)}
    >
      <SceneIcon active={active} />
      <Typography.Text className={text({ active })}>{name}</Typography.Text>
    </Button>
  )
}
