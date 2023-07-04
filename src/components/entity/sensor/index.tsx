import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HassEntity } from 'home-assistant-js-websocket'

import { SensorCard } from '@/components/sensor/card'

import { BatterySensor } from './battery'
import { DateSensor } from './date'
import { DurationSensor } from './duration'

type SensorProps = {
  entity: HassEntity
}

export const Sensor = ({ entity }: SensorProps) => {
  if (entity.attributes.device_class === 'timestamp') {
    return <DateSensor entity={entity} />
  }
  if (entity.attributes.device_class === 'duration') {
    return <DurationSensor entity={entity} />
  }
  if (entity.attributes.device_class === 'battery') {
    return <BatterySensor entity={entity} />
  }

  let icon: IconProp = ['far', 'sensor']
  if (entity.attributes.device_class === 'temperature') {
    icon = ['far', 'temperature-half']
  } else if (entity.attributes.device_class === 'humidity') {
    icon = ['far', 'humidity']
  } else if (entity.attributes.device_class === 'pressure') {
    icon = ['far', 'weight-hanging']
  } else if (
    entity.attributes.device_class === 'energy' ||
    entity.attributes.device_class === 'voltage'
  ) {
    icon = ['far', 'bolt']
  } else if (entity.attributes.device_class === 'current') {
    icon = ['far', 'transformer-bolt']
  } else if (entity.attributes.device_class === 'frequency') {
    icon = ['far', 'wave-square']
  } else if (entity.attributes.icon === 'mdi:sim') {
    icon = ['far', 'sim-card']
  } else if (entity.attributes.icon === 'mdi:wifi') {
    icon = ['far', 'wifi']
  } else if (entity.attributes.icon === 'mdi:wifi-off') {
    icon = ['far', 'wifi-slash']
  } else if (entity.attributes.icon === 'mdi:map') {
    icon = ['far', 'location']
  } else if (entity.attributes.icon === 'mdi:database') {
    icon = ['far', 'database']
  } else if (entity.attributes.icon?.includes('battery')) {
    icon = ['far', 'battery']
  } else if (entity.attributes.icon?.includes('cellphone')) {
    icon = ['far', 'mobile']
  }

  let unit = entity.attributes.unit_of_measurement ?? ''
  if (unit === 'days' || unit === 'minutes' || unit === 'seconds')
    unit = ` ${unit}`
  if (unit.includes('pending')) unit = ` ${unit}`
  const description = `${entity.state}${unit}`

  return (
    <SensorCard
      icon={<FontAwesomeIcon icon={icon} />}
      name={entity.attributes.friendly_name ?? entity.entity_id}
    >
      <span className="first-letter:capitalize">{description}</span>
    </SensorCard>
  )
}
