import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HassEntity } from 'home-assistant-js-websocket'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { callService } from '@/lib/hass'

type AutomationProps = {
  entity: HassEntity
}

export const Automation = ({ entity }: AutomationProps) => {
  const { friendly_name } = entity.attributes

  const runAutomation = async () => {
    toast('Automation triggered', {
      description: friendly_name,
    })

    return await callService({
      domain: 'automation',
      service: 'trigger',
      service_data: { entity_id: entity.entity_id, skip_condition: true },
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <FontAwesomeIcon icon={['far', 'robot']} className="mr-2" />
          {friendly_name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => void runAutomation()} size="sm">
          <FontAwesomeIcon icon={['far', 'play']} className="mr-2" />
          Run
        </Button>
      </CardContent>
    </Card>
  )
}
