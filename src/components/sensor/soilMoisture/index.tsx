import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SensorCard, type SensorCardProps } from '@/components/sensor/card'

export interface SoilMoistureSensorProps {
  value: number
}

export const SoilMoistureSensor = ({ value }: SoilMoistureSensorProps) => {
  let type: SensorCardProps['type'] = 'default'
  let text = `${value}%`
  if (value < 10) {
    type = 'warning'
    text = `${value}% - needs water`
  }
  if (value < 5) {
    type = 'error'
    text = `${value}% - needs water`
  }

  return (
    <SensorCard
      icon={<FontAwesomeIcon icon={['fas', 'plant-wilt']} />}
      name="soil moisture"
      type={type}
    >
      {text}
    </SensorCard>
  )
}
