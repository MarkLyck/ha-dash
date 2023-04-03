import { SensorCard, type SensorCardProps } from '@/components/sensor/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface CPUSensorProps {
  value: number
}

export const CPUSensor = ({ value }: CPUSensorProps) => {
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
      icon={<FontAwesomeIcon icon={['fas', 'microchip']} />}
      name="CPU"
      type={type}
    >
      {text}
    </SensorCard>
  )
}
