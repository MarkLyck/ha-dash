import { SensorCard } from '@/components/sensor/card'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

const iconStyle = cva('', {
  variants: {
    unknownType: {
      true: 'rotate-90',
    },
  },
})

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
  let unknownType = false

  if (!icon) {
    unknownType = true
    icon = isOpen ? ['far', 'arrows-from-line'] : ['far', 'arrows-to-line']
  }

  return (
    <SensorCard>
      <FontAwesomeIcon icon={icon} className={iconStyle({ unknownType })} />
      <span className="first-letter:capitalize">
        {isOpen ? 'open' : 'closed'}
      </span>
    </SensorCard>
  )
}
