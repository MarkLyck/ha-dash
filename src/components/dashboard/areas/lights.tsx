'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useStore from '@/lib/useStore'
import { callService } from '@/lib/hass'

import type { HassEntity } from 'home-assistant-js-websocket'
import { LightIcon, LightOnIcon, PowerButtonIcon } from '@/assets/icons'

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
    <Card className="inline-flex flex-col items-center justify-center gap-4 rounded-lg border-border/20 bg-black/20 p-4 text-white backdrop-blur-lg">
      <div className="flex flex-col items-center">
        {lightsOn.length > 0 ? (
          <LightOnIcon size={32} />
        ) : (
          <LightIcon size={32} />
        )}
        <span className="mt-2 text-sm text-white/50">
          {lightsOn.length > 0 ? `${lightsOn.length} lights on` : null}
          {areAllLightsOff ? 'Lights off' : null}
        </span>
      </div>
      <Button
        className="w-full"
        onClick={() =>
          toggleLights(lightsOn.length > 0 ? 'turn_off' : 'turn_on')
        }
      >
        <PowerButtonIcon />
      </Button>
    </Card>
  )
}
