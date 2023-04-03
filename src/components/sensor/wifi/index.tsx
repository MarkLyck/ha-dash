import { SensorCard, type SensorCardProps } from '@/components/sensor/card'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface WifiSensorProps {
  value: number
}

export const WifiSensor = ({ value }: WifiSensorProps) => {
  let icon: IconProp = ['far', 'wifi']
  let downloadSpeed = value.toFixed(0)
  let type: SensorCardProps['type']

  if (value < 100) {
    icon = ['fas', 'wifi']
  }
  if (value < 10) {
    icon = ['fad', 'wifi-fair']
    downloadSpeed = value.toFixed(2)
  }
  if (value < 1) {
    icon = ['fad', 'wifi-weak']
    type = 'warning'
  }
  if (value === 0) {
    icon = ['fad', 'wifi-slash']
    type = 'error'
  }

  return (
    <SensorCard
      name="download speed"
      type={type}
      icon={<FontAwesomeIcon icon={icon} />}
    >
      {downloadSpeed} Mb/s
    </SensorCard>
  )
}
