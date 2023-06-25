import type { HassEntity } from 'home-assistant-js-websocket'

import { Light } from '@/components/device'
import { Person } from '@/components/entity/person'
import { Update } from '@/components/entity/update'

type EntityProps = {
  entity: HassEntity
}

export const Entity = ({ entity }: EntityProps) => {
  const domain = entity.entity_id.split('.')[0]

  if (domain === 'person') return <Person entity={entity} />
  if (domain === 'update') return <Update entity={entity} />
  if (domain === 'light') return <Light entity={entity} />

  return <div>{entity.entity_id}</div>
}
