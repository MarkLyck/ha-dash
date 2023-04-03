import { SensorCard } from '@/components/sensor/card'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface OccupancySensorProps {
  detected: boolean
}

export const OccupancySensor = ({ detected }: OccupancySensorProps) => {
  let icon: IconProp = ['far', 'chair']
  if (detected) {
    icon = ['far', 'person']
  }

  return (
    <SensorCard>
      <FontAwesomeIcon icon={icon} />
      <span className="first-letter:capitalize">
        {detected ? 'occupied' : 'unoccupied'}
      </span>
    </SensorCard>
  )
}
