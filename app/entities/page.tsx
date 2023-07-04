'use client'

import type { HassEntity } from 'home-assistant-js-websocket'

import { Entity } from '@/components/entity'
import { Separator } from '@/components/ui/separator'
import useStore from '@/lib/useStore'

const groupEntitiesByDomain = (entities: (HassEntity | undefined)[]) => {
  const groupedEntities: Record<string, HassEntity[]> = {}

  entities.forEach((entity) => {
    const entityGroup = entity?.entity_id.split('.')[0]
    if (!entity || !entityGroup) return

    if (!groupedEntities[entityGroup]) {
      groupedEntities[entityGroup] = [entity]
    } else {
      groupedEntities[entityGroup]?.push(entity)
    }
  })

  return groupedEntities
}

const Entities = () => {
  const entities = useStore((s) => s.entities)
  // TODO: clean this up to avoid this loop before grouping.
  const entitiesList = Object.keys(entities).map((key) => entities[key])
  const EntitiesByDomain = groupEntitiesByDomain(entitiesList)
  const domains = Object.keys(EntitiesByDomain)

  return (
    <div className="flex flex-col gap-2 p-4">
      {domains.map((domain) => {
        return (
          <div key={domain}>
            <h1 className="font-bold capitalize">{domain}</h1>
            <Separator className="my-2" />
            <ul key={domain} className="flex flex-wrap gap-2">
              {EntitiesByDomain[domain]?.map((entity) => (
                <Entity entity={entity} key={entity.entity_id} />
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Entities
