import useStore from '@/lib/useStore'

export const useArea = (areaId: string | undefined) => {
  const areas = useStore((s) => s.areas)
  const area = areas.find((area) => area.area_id === areaId)
  const devices = useStore((s) => s.devices)

  const devicesByArea = devices.filter((device) => device.area_id === areaId)
  const deviceIds = devicesByArea.map((device) => device.id)

  const entityRegistry = useStore((s) => s.entityRegistry)

  const entitiesByArea = entityRegistry.filter((entity) => {
    return deviceIds.includes(entity.device_id)
  })

  if (!areaId) return { id: areaId, name: undefined, devices: [], entities: [] }

  return {
    id: areaId,
    name: area?.name ?? 'unknown',
    devices: devicesByArea,
    entities: entitiesByArea,
  }
}
