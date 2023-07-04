import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SensorCard } from '@/components/sensor/card'

export interface MotionSensorProps {
  detected: boolean
}

export const MotionSensor = ({ detected }: MotionSensorProps) => {
  let icon: IconProp = ['far', 'person']
  if (detected) {
    icon = ['far', 'walking']
  }

  return (
    <SensorCard icon={<FontAwesomeIcon icon={icon} />} name="motion sensor">
      <span className="first-letter:capitalize">
        {detected ? 'motion' : 'no motion'}
      </span>
    </SensorCard>
  )
}
