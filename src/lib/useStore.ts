import type {
  HassConfig,
  HassEntities,
  HassServices,
} from 'home-assistant-js-websocket'
import { create } from 'zustand'

import type { Area, Device, State, EntityRegistry } from './types/homeAssistant'

interface StoreType {
  areas: Area[]
  setAreas: (areas: Area[]) => void
  entities: HassEntities
  setEntities: (entities: HassEntities) => void
  entityRegistry: EntityRegistry[]
  setEntityRegistry: (entityRegistry: EntityRegistry[]) => void
  states: State[]
  setStates: (states: State[]) => void
  services: HassServices
  setServices: (services: HassServices) => void
  config: HassConfig | null
  setConfig: (config: HassConfig) => void
  devices: Device[]
  setDevices: (deviceRegistry: Device[]) => void
}

const useStore = create<StoreType>((set) => ({
  areas: [],
  setAreas: (areas) => set(() => ({ areas })),
  entityRegistry: [],
  setEntityRegistry: (entityRegistry) => set(() => ({ entityRegistry })),
  entities: {},
  setEntities: (entities) => set(() => ({ entities })),
  states: [],
  setStates: (states) => set(() => ({ states })),
  services: {},
  setServices: (services) => set(() => ({ services })),
  config: null,
  setConfig: (config) => set(() => ({ config })),
  devices: [],
  setDevices: (devices) => set(() => ({ devices })),
}))

export default useStore
