import { cva } from 'class-variance-authority'

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
    'rounded',
    'p-2',
    'px-3',
    'hover:bg-white',
  ],
  {
    variants: {
      active: {
        true: ['bg-white', 'shadow-sm'],
        false: 'bg-neutral-200',
      },
    },
  }
)

const text = cva(['font-md', 'leading-4', 'text-left', 'flex-1'], {
  variants: {
    active: {
      true: 'text-neutral-900',
      false: 'text-neutral-500',
    },
  },
})

export const Scene = ({ name, active, setActive }: SceneProps) => {
  const SceneIcon = getSceneIcon({ name })
  return (
    <button
      className={container({ active })}
      onClick={() => setActive(!active)}
    >
      <SceneIcon active={active} />
      <span className={text({ active })}>{name}</span>
    </button>
  )
}
