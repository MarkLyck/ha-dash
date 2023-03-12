import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import type { Entity } from '@/lib/types/entities'

export { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const getEntityIcon = (entity: Entity): IconProp => {
  let icon: IconProp = ['fad', 'question']
  if (entity.domain === 'lock') {
    icon = ['fad', 'lock']
    if (entity.state === 'unlocked') icon = ['fad', 'lock-open']
  } else if (entity.domain === 'light') {
    icon = ['fad', 'lightbulb']
    if (entity.state === 'on') icon = ['fad', 'lightbulb-on']
  } else if (entity.domain === 'camera') {
    icon = ['fad', 'camera-cctv']
  }

  return icon
}
