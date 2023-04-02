import { SensorCard } from '@/components/sensor/card'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface WifiSensorProps {
  value: number
}

export const WifiSensor = ({ value }: WifiSensorProps) => {
  let icon: IconProp = ['far', 'wifi']
  let downloadSpeed = value.toFixed(0)

  if (value < 100) {
    icon = ['fas', 'wifi']
  }
  if (value < 10) {
    icon = ['fad', 'wifi-fair']
    downloadSpeed = value.toFixed(2)
  }
  if (value < 1) {
    icon = ['fad', 'wifi-weak']
  }
  if (value === 0) {
    icon = ['fad', 'wifi-slash']
  }

  return (
    <SensorCard>
      <FontAwesomeIcon icon={icon} />
      {downloadSpeed} Mb/s
    </SensorCard>
  )
}
