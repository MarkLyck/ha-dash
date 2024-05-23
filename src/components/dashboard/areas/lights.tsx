'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useStore from '@/lib/useStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { HassEntity } from 'home-assistant-js-websocket'

type LightsControlProps = {
  entityIds: string[]
}

export const LightsControl = ({ entityIds }: LightsControlProps) => {
  const entities = useStore((s) => s.entities)

  const lightEntities = entityIds
    .map((id) => entities[id])
    .filter(Boolean) as HassEntity[]

  const lightsOn = lightEntities.filter((entity) => entity.state === 'on')
  const areAllLightsOn = lightEntities.length === lightsOn.length

  return (
    <Card className="inline-flex flex-col items-center justify-center gap-4 rounded-lg border-border/20 bg-black/20 p-4 text-white backdrop-blur-lg">
      {areAllLightsOn
        ? `${lightsOn.length} all lights on`
        : `${lightsOn.length}/${lightEntities.length} lights on`}
      <Button>
        <FontAwesomeIcon icon={['fast', 'power-off']} />
      </Button>
    </Card>
  )
}
