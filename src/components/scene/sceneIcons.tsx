import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

const defaultClasses = ['mr-3', 'text-2xl', 'h-6', 'w-6']

const icon = cva(defaultClasses, {
  variants: {
    active: {
      true: ['text-neutral-500', 'dark:text-neutral-100', 'opacity-100'],
      false: ['text-neutral-700', 'dark:text-neutral-300', 'opacity-50'],
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

  return DefaultIcon
}

export const DefaultIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon icon={['fad', 'stars']} className={icon({ active })} />
)

export const GoodMorningIcon = ({ active }: { active: boolean }) => (
  <span className={icon({ active, className: 'fa-layers' })}>
    <FontAwesomeIcon
      icon={['fas', 'sun-bright']}
      transform="shrink-6 up-2 left-3"
      inverse
      className="opacity-50"
      style={
        active
          ? {
              color: '#fbbf24',
            }
          : {
              color: '#737373',
            }
      }
    />
    <FontAwesomeIcon
      icon={['fas', 'house-window']}
      transform="shrink-6 down-1 right-1"
      style={
        active
          ? {
              color: '#5b21b6',
            }
          : undefined
      }
    />
  </span>
)

export const GoodNightIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'house-night']}
    className={icon({ active })}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#5b21b6',
            '--fa-secondary-color': '#DBC157',
          }
        : undefined
    }
  />
)
export const AwayIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'house-person-leave']}
    className={`${icon({ active })} fa-swap-opacity`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#fbbf24',
            '--fa-secondary-color': '#fbbf24',
          }
        : undefined
    }
  />
)

export const RomanticIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fas', 'heart']}
    className={icon({ active })}
    style={
      active
        ? {
            color: '#dc2626',
          }
        : undefined
    }
  />
)
export const CookingIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'pot-food']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#000',
            '--fa-secondary-color': '#EBB305',
          }
        : undefined
    }
  />
)
export const BreakfastIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'pan-frying']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#000',
            '--fa-secondary-color': '#F2AC06',
          }
        : undefined
    }
  />
)
export const DinnerIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'plate-utensils']}
    className={`${icon({ active })} fa-swap-opacity`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-secondary-color': '#0284c7',
          }
        : undefined
    }
  />
)
export const PartyIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'party-horn']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#fcd34d',
            '--fa-secondary-color': '#dc2626',
          }
        : undefined
    }
  />
)
export const WorkIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'briefcase']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#713f12',
            '--fa-secondary-color': '#713f12',
          }
        : undefined
    }
  />
)
export const StudyIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'books']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#059669',
            '--fa-secondary-color': '#eab308',
            '--fa-secondary-opacity': '0.6',
          }
        : undefined
    }
  />
)
export const ExerciseIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'dumbbell']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#000',
            '--fa-secondary-color': '#727272',
          }
        : undefined
    }
  />
)

export const TVIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'tv']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#000',
            '--fa-secondary-color': '#727272',
          }
        : undefined
    }
  />
)
export const GamingIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'gamepad-modern']}
    className={`${icon({ active })} fa-swap-opacity`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#000',
            '--fa-secondary-color': '#000',
            '--fa-primary-opacity': '1',
          }
        : undefined
    }
  />
)
export const VacationIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'island-tropical']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#059669',
            '--fa-secondary-color': '#fbbf24',
          }
        : undefined
    }
  />
)
export const BathIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'bath']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#0284c7',
            '--fa-secondary-color': '#0284c7',
          }
        : undefined
    }
  />
)
export const MakeupIcon = ({ active }: { active: boolean }) => (
  <FontAwesomeIcon
    icon={['fad', 'lips']}
    className={`${icon({ active })}`}
    style={
      active
        ? {
            // @ts-expect-error - font awesome
            '--fa-primary-color': '#dc2626',
            '--fa-secondary-color': '#dc2626',
          }
        : undefined
    }
  />
)
