import type { HassEntity } from 'home-assistant-js-websocket'

import { Light } from '@/components/device'
import { Automation } from '@/components/entity/automation'
import { Person } from '@/components/entity/person'
import { Sun } from '@/components/entity/sun'
import { Update } from '@/components/entity/update'
import { Zone } from '@/components/entity/zone'

type EntityProps = {
  entity: HassEntity
}

export const Entity = ({ entity }: EntityProps) => {
  const domain = entity.entity_id.split('.')[0]

  if (domain === 'person') return <Person entity={entity} />
  if (domain === 'update') return <Update entity={entity} />
  if (domain === 'light') return <Light entity={entity} />
  if (domain === 'zone') return <Zone entity={entity} />
  if (domain === 'sun') return <Sun entity={entity} />
  if (domain === 'automation') return <Automation entity={entity} />

  return <div>{entity.entity_id}</div>
}
