import { SensorCard, type SensorCardProps } from '@/components/sensor/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface HumiditySensorProps {
  value: number
}

export const HumiditySensor = ({ value }: HumiditySensorProps) => {
  let type: SensorCardProps['type'] = 'default'
  let text = `${value}%`
  if (value > 70) {
    type = 'warning'
    text = `${value}% - high`
  }
  if (value > 90) {
    type = 'error'
    text = `${value}% - extreme`
  }

  return (
    <SensorCard
      icon={<FontAwesomeIcon icon={['fas', 'humidity']} />}
      name="humidity"
      type={type}
    >
      {text}
    </SensorCard>
  )
}
