// import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HassEntity } from 'home-assistant-js-websocket'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { callService } from '@/lib/hass'

type AutomationProps = {
  entity: HassEntity
}

const test = {
  type: 'call_service',
  domain: 'automation',
  service: 'trigger',
  service_data: { entity_id: 'automation.feed_pet', skip_condition: true },
  id: 36,
}

export const Automation = ({ entity }: AutomationProps) => {
  const { toast } = useToast()
  console.log('🔈 ~ entity:', entity)

  const { friendly_name } = entity.attributes

  const runAutomation = async () => {
    console.log('✅ RUNNING AUTOMATION', friendly_name)
    toast({
      title: 'Automation triggered',
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
