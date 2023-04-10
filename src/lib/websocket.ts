'use client'

import { signal } from '@preact/signals-react'
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

import { entityMapSchema } from '@/lib/types/entities'

let connection: Connection

export const haEntities = signal<HassEntities>({})
export const haServices = signal<HassServices>({})
export const haConfig = signal<HassConfig | null>(null)
export const haUser = signal<HassUser | null>(null)

const updateConfig = (config: HassConfig) => {
  haConfig.value = config
}
const updateEntities = (entitiesMap: HassEntities) => {
  const data = entityMapSchema.parse(entitiesMap)
  haEntities.value = data
}
const updateServices = (services: HassServices) => {
  haServices.value = services
}

const hassUrl = z.string().url().parse(process.env.NEXT_PUBLIC_HASS_URL)
const hassToken = z.string().parse(process.env.NEXT_PUBLIC_HASS_TOKEN)

export const connectToHASS = () => {
  if (!connection) {
    void (async () => {
      try {
        const auth = createLongLivedTokenAuth(hassUrl, hassToken)
        connection = await createConnection({ auth })
      } catch (err) {
        throw err
      }

      subscribeEntities(connection, updateEntities)
      subscribeServices(connection, updateServices)
      subscribeConfig(connection, updateConfig)

      await getUser(connection).then((user: HassUser) => {
        console.log('Logged into Home Assistant as', user.name)
        haUser.value = user
      })
    })()
  }
}
