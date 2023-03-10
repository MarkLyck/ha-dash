import type { Icon } from '@fortawesome/fontawesome-svg-core'
import {
  faCameraCctv,
  faLightbulb,
  faLightbulbOn,
  faLock,
  faLockOpen,
  faQuestion,
} from '@fortawesome/pro-duotone-svg-icons'

import type { Entity } from '@/lib/types/entities'

export { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const getEntityIcon = (entity: Entity): Icon => {
  let icon: unknown = faQuestion
  if (entity.domain === 'lock') {
    icon = faLock
    if (entity.state === 'unlocked') icon = faLockOpen
  } else if (entity.domain === 'light') {
    icon = faLightbulb
    if (entity.state === 'on') icon = faLightbulbOn
  } else if (entity.domain === 'camera') {
    icon = faCameraCctv
  }

  return icon as Icon
}
