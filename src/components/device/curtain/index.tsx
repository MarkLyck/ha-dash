import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { CurtainCard, type CurtainCardProps } from './Card'

export const Curtain = (props: Omit<CurtainCardProps, 'icon'>) => {
  const percentClosed = props.percentClosed
  let icon: IconProp = ['far', 'blinds-raised']
  if (percentClosed === 100) {
    icon = ['far', 'blinds']
  }

  return <CurtainCard icon={icon} {...props} />
}
