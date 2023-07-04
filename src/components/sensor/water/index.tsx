import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SensorCard, type SensorCardProps } from '@/components/sensor/card'

export interface WaterSensorProps {
  detected: boolean
}

export const WaterSensor = ({ detected }: WaterSensorProps) => {
  const icon: IconProp = ['far', 'house-flood-water']
  let type: SensorCardProps['type'] = 'default'
  if (detected) {
    type = 'error'
  }

  return (
    <SensorCard
      name="leak detector"
      type={type}
      icon={<FontAwesomeIcon icon={icon} />}
    >
      <span className="first-letter:capitalize">
        {detected ? 'water detected' : 'no water'}
      </span>
    </SensorCard>
  )
}
