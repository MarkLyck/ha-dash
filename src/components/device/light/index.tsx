import type { HassEntity } from 'home-assistant-js-websocket'

import { LightCard } from './Card'

export const Light = ({ entity }: { entity: HassEntity }) => {
  console.log('🔈 ~ entity:', entity)

  return (
    <LightCard
      setState={() => {
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
      isOn={entity.state !== 'off'}
      name={entity.attributes.friendly_name || entity.entity_id}
    />
  )
}
