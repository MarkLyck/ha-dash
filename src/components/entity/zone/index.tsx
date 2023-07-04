import type { HassEntity } from 'home-assistant-js-websocket'
import { MapIcon } from 'lucide-react'
import Link from 'next/link'

import { env } from '@/../env'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const hassUrl = env.NEXT_PUBLIC_HASS_URL

type ZoneProps = {
  entity: HassEntity
}

export const Zone = ({ entity }: ZoneProps) => {
  const name = entity.attributes.friendly_name || entity.entity_id

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Link href={`${hassUrl}/config/zone`} target="_blank">
          <Button size="sm">
            <MapIcon className="mr-2 h-4 w-4" />
            View zone
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
