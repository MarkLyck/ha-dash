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

export const entitySchema = z.object({})

export type Area = z.infer<typeof areaSchema>
export type Device = z.infer<typeof deviceSchema>
export type State = z.infer<typeof stateSchema>
