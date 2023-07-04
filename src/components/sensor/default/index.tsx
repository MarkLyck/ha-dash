import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SensorCard } from '@/components/sensor/card'

export interface DefaultSensorProps {
  value: string | number | boolean
}

export const DefaultSensor = ({ value }: DefaultSensorProps) => {
  let icon: IconProp = ['fas', 'sensor']
  let valueText = value

  if (typeof value === 'boolean') {
    if (value === true) {
      icon = ['fas', 'sensor-on']
      valueText = 'detecting'
    } else {
      valueText = 'not detecting'
    }
  }

  return (
    <SensorCard icon={<FontAwesomeIcon icon={icon} />} name="unknown">
      {valueText}
    </SensorCard>
  )
}
