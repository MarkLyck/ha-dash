import {
  createConnection,
  createLongLivedTokenAuth,
  getUser,
  subscribeConfig,
  subscribeEntities,
  subscribeServices,
  type Connection,
  type HassConfig,
  type HassEntities,
  type HassServices,
  type HassUser,
} from 'home-assistant-js-websocket'
import { z } from 'zod'

import {
  areaSchema,
  deviceSchema,
  stateSchema,
  type Area,
  type Device,
  type State,
} from '@/lib/types/homeAssistant'
import useStore from '@/lib/useStore'

export let connection: Connection

const hassUrl = z.string().url().parse(process.env.NEXT_PUBLIC_HASS_URL)
const hassToken = z.string().parse(process.env.NEXT_PUBLIC_HASS_TOKEN)

const setEntities = (entities: HassEntities) => {
  useStore.getState().setEntities(entities)
}
const setServices = (services: HassServices) => {
  useStore.getState().setServices(services)
}
const setConfig = (config: HassConfig) => {
  useStore.getState().setConfig(config)
}
const setAreas = (areas: Area[]) => {
  useStore.getState().setAreas(areas)
}
const setDevices = (devices: Device[]) => {
  useStore.getState().setDevices(devices)
}
const setStates = (states: State[]) => {
  useStore.getState().setStates(states)
}

export const connectToHASS = () => {
  if (!connection) {
    void (async () => {
      try {
        const auth = createLongLivedTokenAuth(hassUrl, hassToken)
        connection = await createConnection({ auth })
      } catch (err) {
        throw err
      }

      subscribeEntities(connection, setEntities)
      subscribeServices(connection, setServices)
      subscribeConfig(connection, setConfig)

      const areaRegistry = await connection.sendMessagePromise({
        type: 'config/area_registry/list',
      })
      const deviceRegistry = await connection.sendMessagePromise({
        type: 'config/device_registry/list',
      })
      const stateData = await connection.sendMessagePromise({
        type: 'get_states',
      })

      const areas = z.array(areaSchema).parse(areaRegistry)
      const devices = z.array(deviceSchema).parse(deviceRegistry)
      const states = z.array(stateSchema).parse(stateData)

      setAreas(areas)
      setDevices(devices)
      setStates(states)

      await getUser(connection).then((user: HassUser) => {
        console.log('🚪 Logged into Home Assistant as', user.name)
      })
    })()
  }
}
