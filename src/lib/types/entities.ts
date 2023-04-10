import { z } from 'zod'

interface Attributes {
  friendly_name?: string
  icon?: string
  entity_picture?: string
  unit_of_measurement?: string
  [key: string]: unknown
}

interface Context {
  id: string
  user_id: string
  parent_id: string
}

export interface EntityBase {
  state: string
  entity_id: string
  domain: string
  object_id: string
  name: string
  last_updated: Date
  last_changed: Date
  attributes?: Attributes
  context?: Context
}

export const entitySchema = z.object({
  state: z.string(),
  entity_id: z.string(),
  domain: z.string().optional(),
  object_id: z.string().optional(),
  name: z.string().optional(),
  last_updated: z.string(),
  last_changed: z.string(),
  attributes: z.object({
    friendly_name: z.string().optional(),
    icon: z.string().optional(),
    entity_picture: z.string().optional(),
    unit_of_measurement: z.string().optional(),
  }),
  context: z.object({
    id: z.string(),
    user_id: z.string().nullable(),
    parent_id: z.string().nullable(),
  }),
})
export const entityMapSchema = z.record(entitySchema)

interface Lock extends Omit<EntityBase, 'state' | 'domain'> {
  domain: 'lock'
  state: 'locked' | 'unlocked'
}

interface Camera extends Omit<EntityBase, 'state' | 'domain'> {
  domain: 'camera'
  state: 'on' | 'off'
}

interface Light extends Omit<EntityBase, 'state' | 'domain'> {
  domain: 'light'
  state: 'on' | 'off'
}

// special entity state for scenes
interface Scene extends Omit<EntityBase, 'state' | 'domain'> {
  domain: 'scene'
  state: 'on' | 'off'
}

export type Entity = Scene | Lock | Camera | Light
