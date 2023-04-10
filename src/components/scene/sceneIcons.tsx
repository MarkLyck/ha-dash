import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

const defaultClasses = ['mr-3', 'h-4', 'w-4']

const iconStyle = cva(defaultClasses, {
  variants: {
    active: {
      true: ['text-neutral-500', 'dark:text-neutral-100', 'opacity-100'],
      false: ['text-neutral-700', 'dark:text-neutral-300', 'opacity-30'],
    },
  },
})

type SceneIconProps = {
  name: string
  active?: boolean
}

export const SceneIcon = ({ name, active = false }: SceneIconProps) => {
  const sceneName = name.toLowerCase()
  const icon: IconProp = ['fad', 'stars']

  if (sceneName.includes('night')) icon[1] = 'moon'
  if (sceneName.includes('morning')) icon[1] = 'sun-bright'
  if (sceneName.includes('cooking')) icon[1] = 'oven'
  if (sceneName.includes('dinner')) icon[1] = 'plate-utensils'
  if (sceneName.includes('lunch')) icon[1] = 'burger-soda'
  if (sceneName.includes('breakfast')) icon[1] = 'pan-frying'
  if (sceneName.includes('party')) icon[1] = 'party-horn'
  if (sceneName.includes('work')) icon[1] = 'briefcase'
  if (sceneName.includes('meeting')) icon[1] = 'webcam'
  if (sceneName.includes('laundry')) icon[1] = 'washing-machine'
  if (sceneName.includes('exercise') || sceneName.includes('workout')) {
    icon[1] = 'dumbbell'
  }
  if (sceneName.includes('yoga') || sceneName.includes('meditat')) {
    icon[1] = 'yin-yang'
  }
  if (sceneName.includes('away') || sceneName.includes('leaving')) {
    icon[1] = 'house-person-leave'
  }
  if (sceneName.includes('home') || sceneName.includes('arriving')) {
    icon[1] = 'house-person-arrive'
  }
  if (sceneName.includes('study') || sceneName.includes('homework'))
    icon[1] = 'book'
  if (sceneName.includes('vacation')) icon[1] = 'island-tropical'
  if (sceneName.includes('makeup')) icon[1] = 'lips'
  if (sceneName.includes('clean')) icon[1] = 'broom-wide'
  if (sceneName.includes('bath') || sceneName.includes('shower')) {
    icon[1] = 'bath'
  }
  if (sceneName.includes('gaming') || sceneName.includes('game')) {
    icon[1] = 'gamepad-modern'
  }
  if (sceneName.includes('board game')) {
    icon[1] = 'game-board'
  }
  if (
    sceneName.includes('tv') ||
    sceneName.includes('televison') ||
    sceneName.includes('watching') ||
    sceneName.includes('movie')
  ) {
    icon[1] = 'tv'
  }
  if (sceneName.includes('reading')) icon[1] = 'books'
  if (
    sceneName === 'romance' ||
    sceneName === 'love' ||
    sceneName.includes('romantic') ||
    sceneName.includes('sexy')
  ) {
    icon[1] = 'heart'
  }
  if (sceneName.includes('horror') || sceneName.includes('scary')) {
    icon[1] = 'skull'
  }

  return <FontAwesomeIcon icon={icon} className={iconStyle({ active })} />
}
