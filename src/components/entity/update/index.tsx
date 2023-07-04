import { CaretRightIcon, UpdateIcon } from '@radix-ui/react-icons'
import type { HassEntity } from 'home-assistant-js-websocket'
import Image from 'next/image'
import Link from 'next/link'

import { env } from '@/../env'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { callService } from '@/lib/hass'

const hassUrl = env.NEXT_PUBLIC_HASS_URL

type UpdateProps = {
  entity: HassEntity
}

export const Update = ({ entity }: UpdateProps) => {
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
          className="mr-3 rounded"
        />
        <div className="w-full overflow-hidden">
          <CardTitle className="overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </CardTitle>
          <CardDescription className="flex items-center font-light">
            {installed_version}
            <CaretRightIcon />
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
          <UpdateIcon className="mr-2" />
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
