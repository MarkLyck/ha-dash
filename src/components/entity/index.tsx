import type { HassEntity } from 'home-assistant-js-websocket'

import { Light } from '@/components/device'

type EntityProps = {
  entity: HassEntity
}

export const Entity = ({ entity }: EntityProps) => {
  const domain = entity.entity_id.split('.')[0]

  if (domain === 'light') return <Light entity={entity} />

  return <div>{entity.entity_id}</div>
}
