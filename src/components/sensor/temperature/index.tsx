import { SensorCard } from '@/components/sensor/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface TemperatureSensorProps {
  value: number
}

export const TemperatureSensor = ({ value }: TemperatureSensorProps) => {
  return (
    <SensorCard>
      <FontAwesomeIcon icon={['far', 'temperature-half']} />
      {value}°F
    </SensorCard>
  )
}