import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

const defaultClasses = ['mr-3', 'h-4', 'w-4']

const icon = cva(defaultClasses, {
  variants: {
    active: {
      true: ['text-neutral-500', 'dark:text-neutral-100', 'opacity-100'],
      false: ['text-neutral-700', 'dark:text-neutral-300', 'opacity-30'],
    },
  },
})

export const getSceneIcon = ({ name }: { name: string }) => {
  const sceneName = name.toLowerCase()
  if (sceneName.includes('night')) return GoodNightIcon
  if (sceneName.includes('morning')) return GoodMorningIcon
  if (sceneName.includes('cooking')) return CookingIcon
  if (sceneName.includes('dinner')) return DinnerIcon
  if (sceneName.includes('breakfast')) return BreakfastIcon
  if (sceneName.includes('party')) return PartyIcon
  if (sceneName.includes('work')) return WorkIcon
  if (sceneName.includes('exercise')) return ExerciseIcon
  if (sceneName.includes('away')) return AwayIcon
  if (sceneName.includes('vacation')) return VacationIcon
  if (sceneName.includes('makeup')) return MakeupIcon
  if (sceneName.includes('bath') || sceneName.includes('shower')) {
    return BathIcon
  }
  if (sceneName.includes('board game')) {
    return BoardGameIcon
  }
  if (sceneName.includes('gaming') || sceneName.includes('game')) {
    return GamingIcon
  }
  if (
    sceneName.includes('tv') ||
    sceneName.includes('televison') ||
    sceneName.includes('watching') ||
    sceneName.includes('movie')
  ) {
    return TVIcon
  }
  if (sceneName.includes('study') || sceneName.includes('reading')) {
    return StudyIcon
  }
  if (
    sceneName === 'romance' ||
    sceneName === 'love' ||
    sceneName.includes('romantic') ||
    sceneName.includes('sexy')
  ) {
    return RomanticIcon
  }
  if (sceneName.includes('horror') || sceneName.includes('scary')) {
    return HorrorIcon
  }

  return DefaultIcon
}

export const DefaultIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'stars']} className={icon({ active })} />
)

export const GoodMorningIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    className={icon({ active })}
    icon={['fad', 'sun-bright']}
    inverse
  />
)

export const GoodNightIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'moon']} className={icon({ active })} />
)
export const AwayIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'house-person-leave']}
    className={icon({ active })}
  />
)

export const RomanticIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'heart']} className={icon({ active })} />
)
export const CookingIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'pot-food']} className={icon({ active })} />
)
export const BreakfastIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'pan-frying']} className={icon({ active })} />
)
export const DinnerIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'plate-utensils']}
    className={icon({ active })}
  />
)
export const PartyIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'party-horn']} className={icon({ active })} />
)
export const WorkIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'briefcase']} className={icon({ active })} />
)
export const StudyIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'books']} className={icon({ active })} />
)
export const ExerciseIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'dumbbell']} className={icon({ active })} />
)

export const TVIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'tv']} className={icon({ active })} />
)
export const BoardGameIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'game-board']} className={icon({ active })} />
)
export const GamingIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'gamepad-modern']}
    className={icon({ active })}
  />
)
export const VacationIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'island-tropical']}
    className={icon({ active })}
  />
)
export const BathIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'bath']} className={icon({ active })} />
)
export const MakeupIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'lips']} className={icon({ active })} />
)
export const HorrorIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'skull']} className={icon({ active })} />
)
