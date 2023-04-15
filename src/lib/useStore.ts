import type {
  HassConfig,
  HassEntities,
  HassServices,
} from 'home-assistant-js-websocket'
import { create } from 'zustand'

import type { Area, Device } from './types/homeAssistant'

interface StoreType {
  areas: Record<string, Area>
  setAreas: (areas: Record<string, Area>) => void
  entities: HassEntities
  setEntities: (entities: HassEntities) => void
  states: any
  setStates: (states: any) => void
  services: HassServices
  setServices: (services: HassServices) => void
  config: HassConfig | null
  setConfig: (config: HassConfig) => void
  deviceRegistry: Device[]
  setDeviceRegistry: (deviceRegistry: Device[]) => void
  entityRegistry: HassEntities
  setEntityRegistry: (entityRegistry: HassEntities) => void
  getDevice: (entityId: string) => Device | undefined
}

const useStore = create<StoreType>((set, get) => ({
  areas: {},
  setAreas: (areas) => set(() => ({ areas })),
  entities: {},
  setEntities: (entities) => set(() => ({ entities })),
  states: {},
  // TODO
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  setStates: (states) => set(() => ({ states })),
  services: {},
  setServices: (services) => set(() => ({ services })),
  config: null,
  setConfig: (config) => set(() => ({ config })),
  deviceRegistry: [],
  setDeviceRegistry: (deviceRegistry) => set(() => ({ deviceRegistry })),
  entityRegistry: {},
  setEntityRegistry: (entityRegistry) => set(() => ({ entityRegistry })),
  getDevice: (entityId: string) => {
    const entityRegistry = get().entityRegistry
    const deviceRegistry = get().deviceRegistry

    const entityFromRegistry = entityRegistry[entityId]
    // TODO
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const deviceId = entityFromRegistry.device_id

    // TODO
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const device = deviceRegistry[deviceId]

    return device
  },
}))

export default useStore
