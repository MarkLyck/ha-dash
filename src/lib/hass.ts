import {
  callService as haCallService,
  type HassServiceTarget,
} from 'home-assistant-js-websocket'
import { connection } from '@/lib/websocket'

type CallServiceOptions = {
  domain: string
  service: string
  service_data?: object | undefined
  target: HassServiceTarget | undefined
}

export const callService = async ({
  domain,
  service,
  service_data,
}: CallServiceOptions) => {
  return await haCallService(connection, domain, service, service_data)
}
