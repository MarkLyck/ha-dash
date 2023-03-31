import { SensorCard } from '@/components/sensor/card'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface MotionSensorProps {
  detected: boolean
}

export const MotionSensor = ({ detected }: MotionSensorProps) => {
  let icon: IconProp = ['far', 'person']
  if (detected) {
    icon = ['far', 'walking']
  }

  return (
    <SensorCard>
      <FontAwesomeIcon icon={icon} />
      <span className="first-letter:capitalize">
        {detected ? 'motion' : 'still'}
      </span>
    </SensorCard>
  )
}
