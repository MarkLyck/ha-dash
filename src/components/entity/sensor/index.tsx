import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import type { HassEntity } from 'home-assistant-js-websocket'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { DateSensor } from './date'

type SensorProps = {
  entity: HassEntity
}

export const Sensor = ({ entity }: SensorProps) => {
  console.log('🔈 ~ entity:', entity)

  if (entity.attributes.device_class === 'timestamp') {
    return <DateSensor entity={entity} date={new Date(entity.state)} />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <FontAwesomeIcon icon={['far', 'sensor']} className="mr-2" />
          {entity.attributes.friendly_name}
        </CardTitle>
      </CardHeader>
      <CardContent>{entity.state}</CardContent>
    </Card>
  )
}
