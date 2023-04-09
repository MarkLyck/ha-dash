import { SensorCard, type SensorCardProps } from '@/components/sensor/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface MemorySensorProps {
  value: number
}

export const MemorySensor = ({ value }: MemorySensorProps) => {
  let type: SensorCardProps['type'] = 'default'
  let text = `${value}%`
  if (value > 80) {
    type = 'warning'
    text = `${value}% - high`
  }
  if (value > 95) {
    type = 'error'
    text = `${value}% - overloaded`
  }

  return (
    <SensorCard
      icon={<FontAwesomeIcon icon={['fas', 'memory']} />}
      name="Memory"
      type={type}
    >
      {text}
    </SensorCard>
  )
}
