import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SensorCard } from '@/components/sensor/card'

export interface OccupancySensorProps {
  detected: boolean
}

export const OccupancySensor = ({ detected }: OccupancySensorProps) => {
  let icon: IconProp = ['far', 'chair']
  if (detected) {
    icon = ['far', 'person']
  }

  return (
    <SensorCard icon={<FontAwesomeIcon icon={icon} />} name="occupancy sensor">
      <span className="first-letter:capitalize">
        {detected ? 'occupied' : 'unoccupied'}
      </span>
    </SensorCard>
  )
}
