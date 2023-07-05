import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HassEntity } from 'home-assistant-js-websocket'

import { SensorCard } from '@/components/sensor/card'

export interface DurationSensorProps {
  entity: HassEntity
}

function formatSeconds(seconds: number): string {
  const days = Math.floor(seconds / (24 * 60 * 60))
  seconds %= 24 * 60 * 60
  const hours = Math.floor(seconds / (60 * 60))
  seconds %= 3600
  const minutes = Math.floor(seconds / 60)
  seconds %= 60

  let timeString = ''
  if (days > 0) timeString += `${days}d `
  if (hours > 0 || timeString) timeString += `${hours}h `
  if (minutes > 0 || timeString) timeString += `${minutes}m `
  timeString += `${seconds}s`

  return timeString
}

export const DurationSensor = ({ entity }: DurationSensorProps) => {
  const name = entity.attributes.friendly_name || entity.entity_id
  const duration = parseFloat(entity.state)
  const durationUnit = entity.attributes.unit_of_measurement ?? ''

  const durationText =
    durationUnit === 's'
      ? formatSeconds(duration)
      : `${duration}${durationUnit}`

  return (
    <SensorCard icon={<FontAwesomeIcon icon={['far', 'timer']} />} name={name}>
      <span className="first-letter:capitalize">{durationText}</span>
    </SensorCard>
  )
}
