import { SensorCard } from '@/components/sensor/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface HumiditySensorProps {
  value: number
}

export const HumiditySensor = ({ value }: HumiditySensorProps) => {
  return (
    <SensorCard>
      <FontAwesomeIcon icon={['fas', 'droplet']} />
      {value}%
    </SensorCard>
  )
}
