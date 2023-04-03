import { SensorCard } from '@/components/sensor/card'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface VibrationSensorProps {
  detected: boolean
}

export const VibrationSensor = ({ detected }: VibrationSensorProps) => {
  let icon: IconProp = ['far', 'sensor']
  if (detected) {
    icon = ['far', 'sensor-on']
  }

  return (
    <SensorCard name="vibration sensor" icon={<FontAwesomeIcon icon={icon} />}>
      <span className="first-letter:capitalize">
        {detected ? 'vibrating' : 'still'}
      </span>
    </SensorCard>
  )
}
