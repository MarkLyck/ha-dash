import { z } from 'zod'

export const deviceSchema = z.object({
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

export const areaSchema = z.object({
  aliases: z.array(z.string()),
  area_id: z.string(),
  name: z.string(),
  picture: z.string().nullable(),
})

export const stateSchema = z.object({
  attributes: z.any(),
  context: z.object({
    id: z.string(),
    parent_id: z.string().nullable(),
    user_id: z.string().nullable(),
  }),
  entity_id: z.string(),
  last_changed: z.string(),
  last_updated: z.string(),
  state: z.string(),
})

export const entityRegistrySchema = z.object({
  area_id: z.string().nullable(),
  categories: z.object({}),
  config_entry_id: z.string(),
  device_id: z.string(),
  disabled_by: z.string(),
  entity_category: z.unknown().nullable(),
  entity_id: z.string(),
  has_entity_name: z.boolean(),
  hidden_by: z.unknown().nullable(),
  icon: z.unknown().nullable(),
  id: z.string(),
  labels: z.array(z.unknown()),
  name: z.string().nullable(),
  options: z.object({
    conversation: z.object({
      should_expose: z.boolean(),
    }),
    // 'sensor.private': z.object({
    //   refresh_initial_entity_options: z.boolean(),
    // }),
  }),
  original_name: z.string(),
  platform: z.string(),
  translation_key: z.string(),
  unique_id: z.string(),
})

export type Area = z.infer<typeof areaSchema>
export type Device = z.infer<typeof deviceSchema>
export type State = z.infer<typeof stateSchema>
export type EntityRegistry = z.infer<typeof entityRegistrySchema>
