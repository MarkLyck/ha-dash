import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import type { HassEntity } from 'home-assistant-js-websocket'

import { SensorCard } from '@/components/sensor/card'

export interface MotionSensorProps {
  entity: HassEntity
  date: Date
}

export const DateSensor = ({ entity, date }: MotionSensorProps) => {
  const name = entity.attributes.friendly_name || entity.entity_id

  return (
    <SensorCard
      icon={<FontAwesomeIcon icon={['far', 'calendar']} />}
      name={name}
    >
      <span className="first-letter:capitalize">
        {dayjs(date).format('DD/MM/YYYY')}
      </span>
    </SensorCard>
  )
}
