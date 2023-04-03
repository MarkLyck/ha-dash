import { SensorCard } from '@/components/sensor/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface AirQualitySensorProps {
  value: number
}

export const AirQualitySensor = ({ value }: AirQualitySensorProps) => {
  return (
    <SensorCard>
      <FontAwesomeIcon icon={['fas', 'leaf']} />
      {value} ppm
    </SensorCard>
  )
}
