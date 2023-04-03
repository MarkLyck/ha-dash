import { SensorCard, type SensorCardProps } from '@/components/sensor/card'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface SmokeSensorProps {
  detected: boolean
}

export const SmokeSensor = ({ detected }: SmokeSensorProps) => {
  let icon: IconProp = ['far', 'sensor-smoke']
  let type: SensorCardProps['type'] = 'default'
  if (detected) {
    icon = ['far', 'sensor-fire']
    type = 'error'
  }

  return (
    <SensorCard type={type}>
      <FontAwesomeIcon icon={icon} />
      <span className="first-letter:capitalize">
        {detected ? 'smoke detected' : 'no smoke'}
      </span>
    </SensorCard>
  )
}