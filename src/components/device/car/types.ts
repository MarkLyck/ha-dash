export type ChargingState =
  | 'starting'
  | 'charging'
  | 'stopped'
  | 'complete'
  | 'disconnected'
  | 'no_power'

export type ShiftState = 'p' | 'd' | 'r' | 'n'
