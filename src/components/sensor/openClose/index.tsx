import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'

import { SensorCard } from '@/components/sensor/card'

const iconStyle = cva('', {
  variants: {
    unknownType: {
      true: 'rotate-90',
    },
  },
})

type OpenCloseType = 'door' | 'window' | 'safe' | 'mailbox'

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
  safe: {
    open: ['far', 'vault'],
    closed: ['far', 'vault'],
  },
  mailbox: {
    open: ['far', 'mailbox-flag-up'],
    closed: ['far', 'mailbox'],
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
    <SensorCard
      name={type ? type : 'contact sensor'}
      icon={
        <FontAwesomeIcon icon={icon} className={iconStyle({ unknownType })} />
      }
    >
      <span className="first-letter:capitalize">
        {isOpen ? 'open' : 'closed'}
      </span>
    </SensorCard>
  )
}
