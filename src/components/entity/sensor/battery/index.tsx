import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HassEntity } from 'home-assistant-js-websocket'

import { SensorCard } from '@/components/sensor/card'

export interface DurationSensorProps {
  entity: HassEntity
}

export const BatterySensor = ({ entity }: DurationSensorProps) => {
  const name = entity.attributes.friendly_name || entity.entity_id
  const unit = entity.attributes.unit_of_measurement ?? ''
  const percentage = Number(entity.state)

  let icon: IconProp = ['far', 'battery-full']
  if (isNaN(percentage)) icon = ['far', 'question-circle']
  if (percentage < 100) icon = ['far', 'battery-three-quarters']
  if (percentage < 75) icon = ['far', 'battery-half']
  if (percentage < 25) icon = ['far', 'battery-quarter']
  if (percentage < 15) icon = ['far', 'battery-low']
  if (percentage === 0) icon = ['far', 'battery-empty']

  return (
    <SensorCard icon={<FontAwesomeIcon icon={icon} />} name={name}>
      <span className="first-letter:capitalize">
        {percentage}
        {unit}
      </span>
    </SensorCard>
  )
}
