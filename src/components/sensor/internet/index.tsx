import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SensorCard, type SensorCardProps } from '@/components/sensor/card'

export interface InternetSpeedSensorProps {
  value: number
}

export const DownloadSpeedSensor = ({ value }: InternetSpeedSensorProps) => {
  let downloadSpeed = value.toFixed(0)
  let type: SensorCardProps['type']

  if (value < 10) {
    downloadSpeed = value.toFixed(2)
    type = 'warning'
  }
  if (value === 0) {
    type = 'error'
  }

  return (
    <SensorCard
      name="download speed"
      type={type}
      icon={<FontAwesomeIcon icon={['fas', 'download']} />}
    >
      {downloadSpeed} Mb/s
    </SensorCard>
  )
}

export const UploadSpeedSensor = ({ value }: InternetSpeedSensorProps) => {
  let downloadSpeed = value.toFixed(0)
  let type: SensorCardProps['type']

  if (value < 10) {
    downloadSpeed = value.toFixed(2)
  }
  if (value < 1) {
    type = 'warning'
  }
  if (value === 0) {
    type = 'error'
  }

  return (
    <SensorCard
      name="upload speed"
      type={type}
      icon={<FontAwesomeIcon icon={['fas', 'upload']} />}
    >
      {downloadSpeed} Mb/s
    </SensorCard>
  )
}
