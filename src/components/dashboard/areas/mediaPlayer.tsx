'use client'

import useStore from '@/lib/useStore'

import { Card } from '@/components/ui/card'
import { env } from '@/../env'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MediaTrack } from '@/components/ui/media-track'
import { VolumeControl } from '@/components/ui/volume-control'

import { callService } from '@/lib/hass'
import { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const homeAssistantURL = env.NEXT_PUBLIC_HASS_URL

type MediaPlayerProps = {
  entityId: string | undefined
}

export const MediaPlayer = ({ entityId }: MediaPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const entities = useStore((s) => s.entities)

  const entity = entities[entityId ?? '']
  console.log('🔈 ~ entity:', entity)

  useEffect(() => {
    if (!entity) return
    setIsPlaying(entity.state === 'playing')
  }, [entity])

  if (!entityId || !entity) return null

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev)
    callService({
      domain: 'media_player',
      service: isPlaying ? 'media_pause' : 'media_play',
      service_data: { entity_id: entityId },
    })
  }
  const handlePreviousOrNextTrack = (type: 'next' | 'previous') => {
    callService({
      domain: 'media_player',
      service: type === 'next' ? 'media_next_track' : 'media_previous_track',
      service_data: { entity_id: entityId },
    })
  }
  const handleSeekPosition = (currentTime: number) => {
    callService({
      domain: 'media_player',
      service: 'media_seek',
      service_data: { entity_id: entityId, seek_position: currentTime },
    })
  }
  const handleVolumeSet = (volume_level: number) => {
    callService({
      domain: 'media_player',
      service: 'volume_set',
      service_data: { entity_id: entityId, volume_level },
    })
  }

  return (
    <Card className="inline-flex gap-4 rounded-lg border-border/20 bg-black/20 p-4 text-white backdrop-blur-lg">
      <Image
        className="rounded"
        src={`${homeAssistantURL}${entity.attributes.entity_picture}`}
        alt={entity.attributes.media_album_name}
        width={96}
        height={96}
      />

      <div className="flex flex-col self-center">
        <div className="mb-4 flex justify-between">
          <div className="w-[180px]">
            <h5 className="truncate font-bold text-lg">
              {entity.attributes.media_title}
            </h5>
            <p className="truncate text-sm text-white/50">
              {entity.attributes.media_artist}
            </p>
          </div>
          <div className="ml-4 flex items-center">
            <VolumeControl
              volume={entity.attributes.volume_level * 100}
              setVolume={(volumePct) => handleVolumeSet(volumePct / 100)}
            />
            <Separator
              orientation="vertical"
              className="mx-2 h-6 bg-white/20"
            />
            <Button
              variant="ghost"
              onClick={() => handlePreviousOrNextTrack('previous')}
              className="size-10"
            >
              <FontAwesomeIcon icon={['fas', 'backward']} />
            </Button>
            <Button
              variant="ghost"
              onClick={handlePlayPause}
              className="size-10"
            >
              <FontAwesomeIcon icon={['fas', isPlaying ? 'pause' : 'play']} />
            </Button>
            <Button
              variant="ghost"
              onClick={() => handlePreviousOrNextTrack('next')}
              className="size-10"
            >
              <FontAwesomeIcon icon={['fas', 'forward']} />
            </Button>
          </div>
        </div>
        <MediaTrack
          key={entity.attributes.media_title}
          isPlaying={isPlaying}
          currentTime={entity.attributes.media_position}
          duration={entity.attributes.media_duration}
          seekToPosition={handleSeekPosition}
        />
      </div>
    </Card>
  )
}
