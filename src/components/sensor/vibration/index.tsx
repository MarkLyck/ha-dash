import { SensorCard } from '@/components/sensor/card'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface VibrationSensorProps {
  detected: boolean
}

export const VibrationSensor = ({ detected }: VibrationSensorProps) => {
  let icon: IconProp = ['far', 'salt-shaker']
  if (detected) {
    icon = ['far', 'salt-shaker']
  }

  return (
    <SensorCard>
      <FontAwesomeIcon icon={icon} />
      <span className="first-letter:capitalize">
        {detected ? 'vibrating' : 'still'}
      </span>
    </SensorCard>
  )
}
