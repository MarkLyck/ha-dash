import type { HassEntity } from 'home-assistant-js-websocket'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

import { callService } from '@/lib/hass'

import { env } from '@/../env'

const hassUrl = env.NEXT_PUBLIC_HASS_URL

type UpdateProps = {
  entity: HassEntity
}

export const Update = ({ entity }: UpdateProps) => {
  if (entity.entity_id === 'update.ssh_web_terminal_update') {
    console.log('🔈 ~ entity:', entity)
  }
  const {
    title,
    installed_version,
    latest_version,
    entity_picture,
    release_url,
    in_progress,
  } = entity.attributes

  if (installed_version === latest_version) return null

  const pictureSrc =
    entity_picture?.[0] === '/' ? `${hassUrl}${entity_picture}` : entity_picture

  const handleUpdate = async () => {
    return callService({
      domain: 'update',
      service: 'install',
      service_data: {
        entity_id: entity.entity_id,
        backup: true,
      },
      target: { entity_id: entity.entity_id },
    })
  }

  return (
    <Card className="w-[240px] overflow-hidden">
      <CardHeader className="flex flex-row items-center p-4 pb-0">
        <Image
          src={pictureSrc ?? ''}
          height={32}
          width={32}
          alt={title as string}
          className="mr-2 rounded"
        />
        <div className="w-full">
          <CardTitle className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </CardTitle>
          <CardDescription>
            {installed_version}
            {' > '}
            {latest_version}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex gap-2 p-4">
        {in_progress ? <p>in progress</p> : null}
        <Button
          size="sm"
          onClick={() => void handleUpdate()}
          disabled={!!in_progress}
        >
          Update
        </Button>
        {typeof release_url === 'string' ? (
          <Link href={release_url} target="_blank">
            <Button size="sm" variant="link">
              Release notes
            </Button>
          </Link>
        ) : null}
      </CardContent>
    </Card>
  )
}
