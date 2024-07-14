import useStore from '@/lib/useStore'
import { callService } from '@/lib/hass'

import { VacuumCard } from './Card'
// import { getSupportedFeatures } from '@/lib/supportedFeatures'

type VacuumProps = {
  entityId?: string
  className?: string
}

export const Vacuum = ({ entityId, className }: VacuumProps) => {
  const entities = useStore((s) => s.entities)

  if (!entityId) return null
  const entity = entities[entityId]
  if (!entity) return null

  // const supportedFeatures = getSupportedFeatures(
  //   'vacuum',
  //   entity.attributes.supported_features,
  // )

  const startVacuum = async () => {
    await callService({
      domain: 'vacuum',
      service: 'start',
      service_data: {},
      target: { entity_id: entityId },
    })
  }

  // console.log(supportedFeatures)

  return <VacuumCard className={className} startVacuum={startVacuum} />
}
