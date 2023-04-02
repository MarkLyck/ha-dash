import { SensorCard } from '@/components/sensor/card'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type OpenCloseType = 'door' | 'window'

type IconMap = Record<
  OpenCloseType,
  {
    open: IconProp
    closed: IconProp
  }
>

const iconMap: IconMap = {
  door: {
    open: ['far', 'door-open'],
    closed: ['far', 'door-closed'],
  },
  window: {
    open: ['far', 'window-frame-open'],
    closed: ['far', 'window-frame'],
  },
}

export interface OpenCloseSensorProps {
  isOpen: boolean
  type?: OpenCloseType
}

export const OpenCloseSensor = ({ isOpen, type }: OpenCloseSensorProps) => {
  let icon = iconMap[type as OpenCloseType]?.[isOpen ? 'open' : 'closed']

  if (!icon) {
    icon = isOpen ? ['far', 'door-open'] : ['far', 'door-closed']
  }

  return (
    <SensorCard>
      <FontAwesomeIcon icon={icon} />
      <span className="first-letter:capitalize">
        {isOpen ? 'open' : 'closed'}
      </span>
    </SensorCard>
  )
}
