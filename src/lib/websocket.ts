'use client'

import { signal } from '@preact/signals-core'
import {
  ERR_HASS_HOST_REQUIRED,
  ERR_INVALID_AUTH,
  //   callService,
  createConnection,
  getAuth,
  getUser,
  //   subscribeConfig,
  //   subscribeEntities,
  type Auth,
  type AuthData,
  type Connection,
  //   HassConfig,
  //   HassEntities,
  type HassUser,
} from 'home-assistant-js-websocket'
import store from 'store'

let connection: Connection, auth: Auth

export const entities = signal({})

export function saveTokens(tokens?: AuthData | null) {
  try {
    store.set('hassTokens', tokens)
  } catch (err) {}
}

export function loadTokens() {
  let hassTokens
  try {
    hassTokens = store.get('hass_tokens') as AuthData
  } catch (err) {}
  return hassTokens
}

const hassUrl = process.env.HASS_URL

const connectToHASS = () => {
  if (!connection) {
    void (async () => {
      store.set('hass_url', hassUrl)

      try {
        auth = await getAuth({
          hassUrl: hassUrl,
          saveTokens: saveTokens,
          loadTokens: () => Promise.resolve(loadTokens()),
        })
        connection = await createConnection({ auth })
      } catch (err) {
        try {
          if (err !== ERR_HASS_HOST_REQUIRED) {
            throw err
          }
          // @ts-expect-error - no overlap
          if (err !== ERR_INVALID_AUTH) {
            throw err
          }
          // We can get invalid auth if auth tokens were stored that are no longer valid
          // Clear stored tokens.
          saveTokens()
          auth = await getAuth({
            hassUrl: hassUrl,
            saveTokens: saveTokens,
            loadTokens: () => Promise.resolve(loadTokens()),
          })
          connection = await createConnection({ auth })
        } catch (err) {
          throw err
        }
      }
      //   props.setConnected(true)
      //   connection.removeEventListener('ready', eventHandler)
      //   connection.addEventListener('ready', eventHandler)
      //   props.setAuth(auth)
      //   subscribeConfig(connection, updateConfig)
      //   subscribeEntities(connection, updateEntites)
      await getUser(connection).then((user: HassUser) => {
        console.log('Logged into Home Assistant as', user.name)
      })
    })()
  }
}

// async function connect() {
//   let auth
//   try {
//     // Try to pick up authentication after user logs in
//     auth = await getAuth()
//   } catch (err) {
//     if (err === ERR_HASS_HOST_REQUIRED) {
//       const hassUrl = 'https://thranehome.com'
//       // Redirect user to log in on their instance
//       auth = await getAuth({
//         hassUrl,
//         saveTokens: saveTokens,
//         loadTokens: () => Promise.resolve(loadTokens()),
//       })
//     } else if (err === ERR_INVALID_AUTH) {
//       console.log('ERR_INVALID_AUTH')
//     } else {
//       console.log('🔈 ~ unknown err:', err)
//       return
//     }
//   }
//   const connection = await createConnection({ auth })
//   subscribeEntities(connection, (ent) => {
//     entities.value = ent
//     console.log(ent)
//   })
// }

// void connect()
connectToHASS()
