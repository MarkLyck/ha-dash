import { SensorCard, type SensorCardProps } from '@/components/sensor/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface AirQualitySensorProps {
  value: number
}

export const AirQualitySensor = ({ value }: AirQualitySensorProps) => {
  let type: SensorCardProps['type'] = 'default'
  let text = `${value} ppm`
  if (value > 900) {
    type = 'warning'
    text = `${value} ppm - poor`
  }
  if (value > 1200) {
    type = 'error'
    text = `${value} ppm - very bad`
  }

  return (
    <SensorCard
      icon={<FontAwesomeIcon icon={['fas', 'leaf']} />}
      name="air quality"
      type={type}
    >
      {text}
    </SensorCard>
  )
}
