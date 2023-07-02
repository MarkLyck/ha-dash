// import type { HassEntity } from 'home-assistant-js-websocket'
import { callService, type HassEntity } from 'home-assistant-js-websocket'
import { connection } from '@/lib/websocket'

import { LightCard } from './Card'

export const Light = ({ entity }: { entity: HassEntity }) => {
  const handleStateChange = async () => {
    await callService(
      connection,
      'light',
      'toggle',
      {},
      { entity_id: entity.entity_id }
    )
  }

  return (
    <LightCard
      setState={() => {
        void handleStateChange()
        //
      }}
      setColor={() => {
        //
      }}
      setBrightness={() => {
        //
      }}
      icon={['far', 'lightbulb']}
      color="#FFF"
      // ts-expect-error - unavailable exists
      isOn={entity.state !== 'off' && entity.state !== 'unavailable'}
      name={entity.attributes.friendly_name || entity.entity_id}
    />
  )
}
