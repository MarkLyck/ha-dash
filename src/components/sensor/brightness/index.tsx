import { SensorCard } from '@/components/sensor/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface BrightnessSensorProps {
  value: number
}

export const BrightnessSensor = ({ value }: BrightnessSensorProps) => {
  return (
    <SensorCard>
      <FontAwesomeIcon icon={['far', 'brightness']} />
      {value}
    </SensorCard>
  )
}
