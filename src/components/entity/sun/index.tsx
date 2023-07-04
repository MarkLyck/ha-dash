import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HassEntity } from 'home-assistant-js-websocket'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type SunProps = {
  entity: HassEntity
}

export const Sun = ({ entity }: SunProps) => {
  const { rising } = entity.attributes

  let icon: IconProp = ['far', 'sunrise']
  if (!rising) icon = ['far', 'sunset']
  if (entity.state === 'below_horizon') icon = ['far', 'moon']

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {entity.attributes.friendly_name}
        </CardTitle>
      </CardHeader>
      <CardContent>{entity.state}</CardContent>
    </Card>
  )
}
