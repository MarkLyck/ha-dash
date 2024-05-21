import { CaretRightIcon, UpdateIcon } from '@radix-ui/react-icons'
import type { HassEntity } from 'home-assistant-js-websocket'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'

import { env } from '@/../env'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Spin } from '@/components/ui/loading'
import { toast } from 'sonner'
import { callService } from '@/lib/hass'

const hassUrl = env.NEXT_PUBLIC_HASS_URL

type UpdateProps = {
  entity: HassEntity
}

const updateAttributesSchema = z.object({
  title: z.string().nullable(),
  installed_version: z.string(),
  latest_version: z.string(),
  entity_picture: z.string().nullable(),
  release_url: z.string().nullable(),
  skipped_version: z.string().nullable(),
  in_progress: z.boolean(),
})

export const Update = ({ entity }: UpdateProps) => {
  const attributes = updateAttributesSchema.parse(entity.attributes)
  const {
    title,
    installed_version,
    latest_version,
    skipped_version,
    entity_picture,
    release_url,
    in_progress,
  } = attributes

  if (installed_version === latest_version) return null
  if (latest_version === skipped_version) return null

  const pictureSrc =
    entity_picture?.[0] === '/' ? `${hassUrl}${entity_picture}` : entity_picture

  const handleUpdate = async () => {
    toast(`Updating ${title}`, {
      description: `To version: ${latest_version}`,
    })
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
          alt={title ?? 'unknown'}
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
        <Button
          size="sm"
          onClick={() => void handleUpdate()}
          disabled={!!in_progress}
        >
          {in_progress ? (
            <Spin size="sm" className="mr-2" />
          ) : (
            <UpdateIcon className="mr-2" />
          )}
          {in_progress ? 'Updating' : 'Update'}
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
