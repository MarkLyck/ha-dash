'use client'

import { useQuery } from '@tanstack/react-query'
import { withErrorBoundary } from 'react-error-boundary'

import { TeslaCard } from './TeslaCard'
import useStore from '@/lib/useStore'
import type { ChargingState, ShiftState } from './types'
import { useEffect } from 'react'

const CAR_ENTITY_IDS = {
  battery_level: 'sensor.tesla_model_y_battery_level',
  battery_range: 'sensor.tesla_model_y_battery_range',
  charge_energy_added: 'sensor.tesla_model_y_charge_energy_added',
  charge_rate: 'sensor.tesla_model_y_charge_rate',
  charger_current: 'sensor.tesla_model_y_charger_current',
  charger_power: 'sensor.tesla_model_y_charger_power',
  charger_voltage: 'sensor.tesla_model_y_charger_voltage',
  charging: 'sensor.tesla_model_y_charging',
  distance_to_arrival: 'sensor.tesla_model_y_distance_to_arrival',
  inside_temperature: 'sensor.tesla_model_y_inside_temperature',
  outside_temperature: 'sensor.tesla_model_y_outside_temperature',
  time_to_arrival: 'sensor.tesla_model_y_time_to_arrival',
  time_to_full_charge: 'sensor.tesla_model_y_time_to_full_charge',
  shift_state: 'sensor.tesla_model_y_shift_state',
  speed: 'sensor.tesla_model_y_speed',
  lock: 'lock.tesla_model_y_lock',
}

const fetchTeslaLocation = async () => {
  const response = await fetch('/api/tessie/location')
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }
  return response.json()
}
const fetchTeslaState = async () => {
  const response = await fetch('/api/tessie/state')
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }
  return response.json()
}

type CarProps = {
  className?: string
}

const CarComponent = ({ className }: CarProps) => {
  const entities = useStore((s) => s.entities)
  const { data: state, refetch } = useQuery({
    queryKey: ['tesla', 'state'],
    queryFn: fetchTeslaState,
  })
  const { data: location } = useQuery({
    queryKey: ['tesla', 'location'],
    queryFn: fetchTeslaLocation,
  })

  const lockEntity = entities[CAR_ENTITY_IDS.lock]
  const batteryEntity = entities[CAR_ENTITY_IDS.battery_level]
  const chargingEntity = entities[CAR_ENTITY_IDS.charging]
  const shiftStateEntity = entities[CAR_ENTITY_IDS.shift_state]

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined

    if (shiftStateEntity?.state === 'd') {
      intervalId = setInterval(() => {
        refetch()
      }, 5000)
    } else {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }

    // Cleanup function to clear the interval on unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [shiftStateEntity?.state, refetch])

  return (
    <TeslaCard
      className={className}
      location={{
        address: location.address,
        latitude: state?.drive_state.latitude ?? location.latitude,
        longitude: state?.drive_state.longitude ?? location.longitude,
        saved_location: location.saved_location,
      }}
      heading={state?.drive_state.heading}
      locked={lockEntity?.state === 'locked'}
      batteryPercentage={
        batteryEntity?.state ? Number.parseInt(batteryEntity.state) : undefined
      }
      gear={shiftStateEntity?.state as ShiftState | undefined}
      chargingState={chargingEntity?.state as ChargingState | undefined}
    />
  )
}

export const Car = withErrorBoundary(CarComponent, {
  fallback: <div>Car Error</div>,
})

const carStateWhileDrivingToFiveGuys = {
  id: 3744615095451644,
  user_id: 241236972189,
  vehicle_id: 2252234679493885,
  vin: '7SAYGDEEXPF836682',
  color: null,
  access_type: 'OWNER',
  granular_access: {
    hide_private: false,
  },
  tokens: ['706e174ec6875bb9', '055f83766949af76'],
  state: 'online',
  in_service: false,
  id_s: '3744615095451644',
  calendar_enabled: true,
  api_version: 76,
  backseat_token: null,
  backseat_token_updated_at: null,
  ble_autopair_enrolled: false,
  charge_state: {
    battery_heater_on: false,
    battery_level: 46,
    battery_range: 140.33,
    charge_amps: 48,
    charge_current_request: 48,
    charge_current_request_max: 48,
    charge_enable_request: true,
    charge_energy_added: 60.74,
    charge_limit_soc: 80,
    charge_limit_soc_max: 100,
    charge_limit_soc_min: 50,
    charge_limit_soc_std: 80,
    charge_miles_added_ideal: 253,
    charge_miles_added_rated: 253,
    charge_port_cold_weather_mode: false,
    charge_port_color: '<invalid>',
    charge_port_door_open: false,
    charge_port_latch: 'Engaged',
    charge_rate: 0,
    charger_actual_current: 0,
    charger_phases: null,
    charger_pilot_current: 48,
    charger_power: 0,
    charger_voltage: 2,
    charging_state: 'Disconnected',
    conn_charge_cable: '<invalid>',
    est_battery_range: 107.36,
    fast_charger_brand: '<invalid>',
    fast_charger_present: false,
    fast_charger_type: '<invalid>',
    ideal_battery_range: 140.33,
    max_range_charge_counter: 1,
    minutes_to_full_charge: 0,
    not_enough_power_to_heat: null,
    off_peak_charging_enabled: false,
    off_peak_charging_times: 'all_week',
    off_peak_hours_end_time: 360,
    preconditioning_enabled: false,
    preconditioning_times: 'all_week',
    scheduled_charging_mode: 'Off',
    scheduled_charging_pending: false,
    scheduled_charging_start_time: null,
    scheduled_charging_start_time_app: 0,
    scheduled_departure_time: null,
    supercharger_session_trip_planner: false,
    time_to_full_charge: 0,
    timestamp: 1718747076686,
    trip_charging: false,
    usable_battery_level: 46,
    user_charge_enable_request: null,
  },
  climate_state: {
    allow_cabin_overheat_protection: true,
    auto_seat_climate_left: false,
    auto_seat_climate_right: false,
    auto_steering_wheel_heat: false,
    battery_heater: false,
    battery_heater_no_power: null,
    bioweapon_mode: false,
    cabin_overheat_protection: 'On',
    cabin_overheat_protection_actively_cooling: false,
    climate_keeper_mode: 'off',
    cop_activation_temperature: 'High',
    defrost_mode: 0,
    driver_temp_setting: 20,
    fan_status: 7,
    hvac_auto_request: 'Override',
    inside_temp: 20,
    is_auto_conditioning_on: true,
    is_climate_on: true,
    is_front_defroster_on: false,
    is_preconditioning: false,
    is_rear_defroster_on: false,
    left_temp_direction: -162,
    max_avail_temp: 28,
    min_avail_temp: 15,
    outside_temp: 31,
    passenger_temp_setting: 20,
    remote_heater_control_enabled: true,
    right_temp_direction: -160,
    seat_heater_left: 0,
    seat_heater_rear_center: 0,
    seat_heater_rear_left: 0,
    seat_heater_rear_right: 0,
    seat_heater_right: 0,
    side_mirror_heaters: false,
    steering_wheel_heat_level: 0,
    steering_wheel_heater: false,
    supports_fan_only_cabin_overheat_protection: true,
    timestamp: 1718747076686,
    wiper_blade_heater: false,
  },
  drive_state: {
    active_route_destination: 'Five Guys',
    active_route_energy_at_arrival: 45,
    active_route_latitude: 39.117155,
    active_route_longitude: -77.186009,
    active_route_miles_to_arrival: 0.649857,
    active_route_minutes_to_arrival: 2.616781,
    active_route_traffic_minutes_delay: 0,
    gps_as_of: 1718747076,
    heading: 222,
    latitude: 39.122875,
    longitude: -77.177551,
    native_latitude: 39.122875,
    native_location_supported: 1,
    native_longitude: -77.177551,
    native_type: 'wgs',
    power: 1,
    shift_state: 'D',
    speed: 0,
    timestamp: 1718747076686,
    cruise_state: null,
  },
  gui_settings: {
    gui_24_hour_time: false,
    gui_charge_rate_units: 'kW',
    gui_distance_units: 'mi/hr',
    gui_range_display: 'Rated',
    gui_temperature_units: 'F',
    gui_tirepressure_units: 'Psi',
    show_range_units: false,
    timestamp: 1718747076686,
  },
  vehicle_config: {
    aux_park_lamps: 'NaPremium',
    badge_version: 1,
    can_accept_navigation_requests: true,
    can_actuate_trunks: true,
    car_special_type: 'base',
    car_type: 'modely',
    charge_port_type: 'US',
    cop_user_set_temp_supported: true,
    dashcam_clip_save_supported: true,
    default_charge_to_max: false,
    driver_assist: 'TeslaAP4',
    ece_restrictions: false,
    efficiency_package: 'MY2021',
    eu_vehicle: false,
    exterior_color: 'MidnightSilver',
    exterior_trim: 'Black',
    exterior_trim_override: '',
    has_air_suspension: false,
    has_ludicrous_mode: false,
    has_seat_cooling: false,
    headlamp_type: 'Global',
    interior_trim_type: 'White2',
    key_version: 2,
    motorized_charge_port: true,
    paint_color_override: '61,61,64,0.9,0.3',
    performance_package: 'Base',
    plg: true,
    pws: true,
    rear_drive_unit: 'PM216MOSFET',
    rear_seat_heaters: 1,
    rear_seat_type: 0,
    rhd: false,
    roof_color: 'RoofColorGlass',
    seat_type: null,
    sentry_preview_supported: true,
    spoiler_type: 'None',
    sun_roof_installed: null,
    supports_qr_pairing: false,
    third_row_seats: 'None',
    timestamp: 1718747076686,
    trim_badging: '74d',
    use_range_badging: true,
    utc_offset: -18000,
    webcam_selfie_supported: true,
    webcam_supported: true,
    wheel_type: 'Induction20Black',
  },
  vehicle_state: {
    api_version: 76,
    autopark_state_v3: 'unavailable',
    calendar_supported: true,
    car_version: '2024.20.1 831cee498fc0',
    center_display_state: 4,
    dashcam_clip_save_available: true,
    dashcam_state: 'Recording',
    df: 0,
    dr: 0,
    fd_window: 0,
    feature_bitmask: 'fbdffbff,24cbc7f',
    fp_window: 0,
    ft: 0,
    is_user_present: true,
    locked: true,
    media_info: {
      a2dp_source_name: 'Grace iPhone',
      audio_volume: 2.3333,
      audio_volume_increment: 0.333333,
      audio_volume_max: 10.333333,
      media_playback_status: 'Playing',
      now_playing_album: 'Beautiful Offerings',
      now_playing_artist: 'Big Daddy Weave',
      now_playing_duration: 0,
      now_playing_elapsed: 0,
      now_playing_source: '13',
      now_playing_station: '91.9 HD1 WGTS 91.9',
      now_playing_title: 'My Story',
    },
    media_state: {
      remote_control_enabled: true,
    },
    notifications_supported: true,
    odometer: 9154.846136,
    parsed_calendar_supported: true,
    pf: 0,
    pr: 0,
    rd_window: 0,
    remote_start: false,
    remote_start_enabled: true,
    remote_start_supported: true,
    rp_window: 0,
    rt: 0,
    santa_mode: 0,
    sentry_mode: false,
    sentry_mode_available: false,
    service_mode: false,
    service_mode_plus: false,
    software_update: {
      download_perc: 0,
      expected_duration_sec: 2700,
      install_perc: 1,
      status: '',
      version: ' ',
    },
    speed_limit_mode: {
      active: false,
      current_limit_mph: 85,
      max_limit_mph: 120,
      min_limit_mph: 50,
      pin_code_set: false,
    },
    timestamp: 1718747076686,
    tpms_hard_warning_fl: false,
    tpms_hard_warning_fr: false,
    tpms_hard_warning_rl: false,
    tpms_hard_warning_rr: false,
    tpms_last_seen_pressure_time_fl: null,
    tpms_last_seen_pressure_time_fr: null,
    tpms_last_seen_pressure_time_rl: null,
    tpms_last_seen_pressure_time_rr: null,
    tpms_pressure_fl: 3.15,
    tpms_pressure_fr: 3.1,
    tpms_pressure_rl: 3.05,
    tpms_pressure_rr: 3.05,
    tpms_rcp_front_value: 2.9,
    tpms_rcp_rear_value: 2.9,
    tpms_soft_warning_fl: false,
    tpms_soft_warning_fr: false,
    tpms_soft_warning_rl: false,
    tpms_soft_warning_rr: false,
    valet_mode: false,
    valet_pin_needed: true,
    vehicle_name: 'Lyck',
    vehicle_self_test_progress: 0,
    vehicle_self_test_requested: false,
    webcam_available: true,
  },
  display_name: 'Lyck',
}
