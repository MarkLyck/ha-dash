'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useStore from '@/lib/useStore'
import { callService } from '@/lib/hass'

import type { HassEntity } from 'home-assistant-js-websocket'
import { TbBulb, TbBulbOff } from 'react-icons/tb'

type LightsControlProps = {
  entityIds: string[]
}

export const LightsControl = ({ entityIds }: LightsControlProps) => {
  const entities = useStore((s) => s.entities)

  const lightEntities = entityIds
    .map((id) => entities[id])
    .filter(Boolean) as HassEntity[]

  const lightsOn = lightEntities.filter((entity) => entity.state === 'on')
  const areAllLightsOff = lightsOn.length === 0

  const toggleLights = async (service: 'turn_on' | 'turn_off') => {
    await callService({
      domain: 'light',
      service,
      service_data: {},
      target: { entity_id: lightEntities.map((entity) => entity.entity_id) },
    })
  }

  return (
    <Card className="inline-flex flex-col items-center justify-center gap-2 rounded-lg border-border/20 bg-black/20 p-4 text-white backdrop-blur-lg">
      <Button
        variant={lightsOn.length > 0 ? 'default' : 'outline'}
        className="w-full"
        onClick={() =>
          toggleLights(lightsOn.length > 0 ? 'turn_off' : 'turn_on')
        }
      >
        {lightsOn.length > 0 ? <TbBulb size={14} /> : <TbBulbOff size={14} />}
      </Button>
      <div className="flex flex-col items-center">
        <span className="mt-2 text-sm text-white/50">
          {lightsOn.length > 0
            ? `${lightsOn.length} light${lightsOn.length !== 1 ? 's' : ''} on`
            : null}
          {areAllLightsOff ? 'Lights off' : null}
        </span>
      </div>
    </Card>
  )
}
