import { SensorCard } from '@/components/sensor/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface BrightnessSensorProps {
  value: number
}

export const BrightnessSensor = ({ value }: BrightnessSensorProps) => {
  return (
    <SensorCard
      icon={<FontAwesomeIcon icon={['far', 'brightness']} />}
      name="brightness"
    >
      {value}
    </SensorCard>
  )
}
