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
import { atom } from 'jotai'
import { z } from 'zod'

let connection: Connection

export const entitiesAtom = atom<HassEntities | null>(null)
export const servicesAtom = atom<HassServices | null>(null)
export const configAtom = atom<HassConfig | null>(null)
export const userAtom = atom<HassUser | null>(null)
export const areasAtom = atom<Area[]>([])
export const devicesAtom = atom<Device[]>([])

const hassUrl = z.string().url().parse(process.env.NEXT_PUBLIC_HASS_URL)
const hassToken = z.string().parse(process.env.NEXT_PUBLIC_HASS_TOKEN)

const deviceSchema = z.object({
  area_id: z.string().nullable(),
  config_entries: z.array(z.string()),
  configuration_url: z.string().nullable(),
  connections: z.array(z.tuple([z.string(), z.string()])),
  disabled_by: z.string().nullable(),
  entry_type: z.string().nullable(),
  hw_version: z.string().nullable(),
  id: z.string(),
  identifiers: z.array(z.array(z.string())),
  manufacturer: z.string().nullable(),
  model: z.string().nullable(),
  name: z.string(),
  name_by_user: z.string().nullable(),
  sw_version: z.string().nullable(),
  via_device_id: z.string().nullable(),
})

const areaSchema = z.object({
  aliases: z.array(z.string()),
  area_id: z.string(),
  name: z.string(),
  picture: z.string().nullable(),
})

type Area = z.infer<typeof areaSchema>
type Device = z.infer<typeof deviceSchema>

type connectToHASSOptions = {
  setEntities: (entities: HassEntities) => void
  setServices: (services: HassServices) => void
  setConfig: (config: HassConfig) => void
  setAreas: (areas: Area[]) => void
  setDevices: (devices: Device[]) => void
}

export const connectToHASS = ({
  setEntities,
  setServices,
  setConfig,
  setAreas,
  setDevices,
}: connectToHASSOptions) => {
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

      const areaData = await connection.sendMessagePromise({
        type: 'config/area_registry/list',
      })
      const deviceRegistry = await connection.sendMessagePromise({
        type: 'config/device_registry/list',
      })

      const areas = z.array(areaSchema).parse(areaData)
      const devices = z.array(deviceSchema).parse(deviceRegistry)

      setAreas(areas)
      setDevices(devices)

      await getUser(connection).then((user: HassUser) => {
        console.log('Logged into Home Assistant as', user.name)
      })
    })()
  }
}
