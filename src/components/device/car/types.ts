export type ChargingState =
  | 'starting'
  | 'charging'
  | 'stopped'
  | 'complete'
  | 'disconnected'
  | 'no_power'

export type ShiftState = 'p' | 'd' | 'r' | 'n' | 'unknown'

export type Location = {
  address: string
  latitude: number
  longitude: number
  saved_location: null | unknown
}
