import useStore from '@/lib/useStore'

import type { Area, Device } from './types/homeAssistant'

const formatAreas = (areas: Area[]) => {
  return areas.map((area) => {
    return {
      name: area.name,
      aliases: area.aliases,
      area_id: area.area_id,
    }
  })
}

const formatDevices = (devices: Device[]) => {
  return devices
    .map((device) => {
      return {
        id: device.id,
        area_id: device.area_id,
        manufacturer: device.manufacturer,
        model: device.model,
        name: device.name,
        friendly_name: device.name_by_user ?? device.name,
      }
    })
    .filter((device) => {
      if (device.manufacturer === 'Home Assistant') return false
      if (device.manufacturer === 'Official add-ons') return false
      if (device.manufacturer === 'hacs.xyz') return false
      if (device.manufacturer === 'Home Assistant Community Add-ons')
        return false
      if (device.model === 'Home Assistant Add-on') return false

      return true
    })
}

const formatEntityRegistry = (
  entityRegistry: any[],
  entities: Record<string, any>,
) => {
  return entityRegistry.map((entityRegistryItem) => {
    const entity = entities[entityRegistryItem.entity_id]
    return {
      entity_id: entityRegistryItem.entity_id,
      device_id: entityRegistryItem.device_id,
      platform: entityRegistryItem.platform,
      original_name: entityRegistryItem.original_name,
      attributes: entity?.attributes,
      state: entity?.state,
    }
  })
}

const SERVICES_ALLOW_LIST = [
  'button',
  'switch',
  'climate',
  'eight_sleep',
  'fan',
  'device_tracker',
  'light',
  'lock',
  'media_player',
  'vacuum',
  'humidifier',
]

function filterServices(services: Record<string, any>) {
  const filteredServices: Record<string, any> = {}

  for (const key in services) {
    if (SERVICES_ALLOW_LIST.includes(key)) {
      filteredServices[key] = services[key]
    }
  }

  return filteredServices
}

export const getAIData = () => {
  const state = useStore.getState()

  const formattedDevices = formatDevices(state.devices)
  const deviceIds = formattedDevices.map((device) => device.id)
  const filteredEntityRegistry = state.entityRegistry.filter(
    (entityRegistryItem) => {
      if (entityRegistryItem.entity_category === 'diagnostic') return false
      if (entityRegistryItem.entity_category === 'config') return false
      if (!state.entities[entityRegistryItem.entity_id]) return false

      return deviceIds.includes(entityRegistryItem.device_id)
    },
  )

  const aiObject = {
    areas: formatAreas(state.areas),
    devices: formattedDevices,
    entities: formatEntityRegistry(filteredEntityRegistry, state.entities),
    services: filterServices(state.services),
  }

  const initialAIData = aiObject.devices.map((device) => {
    const deviceEntities = aiObject.entities.filter(
      (entity) => entity.device_id === device.id,
    )

    return {
      device_id: device.id,
      area_id: device.area_id,
      name: device.name,
      friendly_name: device.friendly_name,
      entities: deviceEntities.map(
        (entity) => entity.attributes.friendly_name ?? entity.original_name,
      ),
    }
  })

  console.log('🔈 ~ aiObject:', aiObject)
  console.log('🔈 ~ initialAIData:', initialAIData)
  return aiObject
}
