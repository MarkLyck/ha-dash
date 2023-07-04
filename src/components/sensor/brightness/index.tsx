import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SensorCard } from '@/components/sensor/card'

export interface BrightnessSensorProps {
  value: number
}

export const BrightnessSensor = ({ value }: BrightnessSensorProps) => {
  return (
    <SensorCard
      icon={<FontAwesomeIcon icon={['far', 'brightness']} />}
      name="brightness"
    >
      {value} lumen
    </SensorCard>
  )
}
