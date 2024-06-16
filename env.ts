import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_HASS_URL: z.string().url(),
    NEXT_PUBLIC_HASS_TOKEN: z.string().min(1),
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_HASS_URL: process.env.NEXT_PUBLIC_HASS_URL,
    NEXT_PUBLIC_HASS_TOKEN: process.env.NEXT_PUBLIC_HASS_TOKEN,
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  },
})
