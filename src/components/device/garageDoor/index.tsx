import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { GarageDoorCard, type GarageDoorProps } from './Card'

export const GarageDoor = (props: Omit<GarageDoorProps, 'icon'>) => {
  let icon: IconProp = ['far', 'garage']
  const isOpen = props.isOpen

  if (isOpen) {
    icon = ['far', 'garage-open']
  }

  return <GarageDoorCard icon={icon} {...props} />
}
