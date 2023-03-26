import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { TVCard, type TVCardProps } from './Card'

export const TV = (props: Omit<TVCardProps, 'icon'>) => {
  const icon: IconProp = ['far', 'tv']

  return <TVCard icon={icon} {...props} />
}
