'use client'

import useStore from '@/lib/useStore'

import { Card } from '@/components/ui/card'
import { env } from '@/../env'
import { Button } from '@/components/ui/button'

import { MediaTrack } from '@/components/ui/media-track'
import { VolumeControl } from '@/components/ui/volume-control'

import { callService } from '@/lib/hass'
import { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { getSupportedFeatures } from '@/lib/supportedFeatures'
import {
  TbDeviceSpeaker,
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from 'react-icons/tb'

const homeAssistantURL = env.NEXT_PUBLIC_HASS_URL

type MediaPlayerProps = {
  entityId: string | undefined
}

export const MediaPlayer = ({ entityId }: MediaPlayerProps) => {
  const entities = useStore((s) => s.entities)
  const entity = entities[entityId ?? '']

  const [isPlaying, setIsPlaying] = useState(false)
  const [imgSrc, setImgSrc] = useState(
    entity?.attributes.entity_picture
      ? `${homeAssistantURL}${entity.attributes.entity_picture}`
      : null,
  )

  useEffect(() => {
    if (!entity) return
    setIsPlaying(entity.state === 'playing')
    setImgSrc(
      entity?.attributes.entity_picture
        ? `${homeAssistantURL}${entity.attributes.entity_picture}`
        : null,
    )
  }, [entity])

  if (!entityId || !entity) return null

  const supportedFeatures = getSupportedFeatures(
    'media_player',
    entity.attributes.supported_features,
  )

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

  let description = ''
  if (entity.attributes.media_artist)
    description = entity.attributes.media_artist
  if (!description && entity.attributes.app_name)
    description = entity.attributes.app_name

  let mediaPosition = Math.round(entity.attributes.media_position)
  if (entity.attributes.media_position_updated_at) {
    const updated = new Date(entity.attributes.media_position_updated_at)
    const now = new Date()
    const diff = now.getTime() - updated.getTime()
    mediaPosition += Math.round(diff / 1000)
  }

  return (
    <Card className="inline-flex gap-4 rounded-lg border-border/20 bg-black/20 p-4 text-white backdrop-blur-lg">
      <Button
        onClick={handlePlayPause}
        className="group relative h-auto max-h-[96px] w-auto max-w-[96px] bg-transparent p-0 hover:bg-transparent"
      >
        <span className="absolute inset-0 flex items-center justify-center rounded bg-black/50 text-2xl text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {isPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />}
        </span>
        {imgSrc ? (
          <Image
            className="max-h-[96px] w-auto rounded bg-black/40 text-xs"
            src={imgSrc}
            alt={
              entity.attributes.media_album_name ??
              entity.attributes.friendly_name
            }
            width={96}
            height={96}
            onError={() => setImgSrc(null)}
          />
        ) : (
          <div className="flex size-[96px] items-center justify-center rounded bg-black/20 text-white">
            <TbDeviceSpeaker size={52} />
          </div>
        )}
      </Button>

      {entity.state === 'playing' || entity.state === 'paused' ? (
        <div className="flex flex-col self-center">
          <div className="mb-4 flex justify-between">
            <div className="w-[180px]">
              <h5 className="truncate font-bold text-lg">
                {entity.attributes.media_title}
              </h5>
              <p className="truncate text-sm text-white/50">{description}</p>
            </div>
            <div className="ml-4 flex items-center">
              {supportedFeatures.has('VOLUME_SET') &&
              typeof entity.attributes.volume_level === 'number' ? (
                <VolumeControl
                  volume={entity.attributes.volume_level * 100}
                  setVolume={(volumePct) => handleVolumeSet(volumePct / 100)}
                />
              ) : null}
              <Separator
                orientation="vertical"
                className="mx-2 h-6 bg-white/20"
              />
              {supportedFeatures.has('PREVIOUS_TRACK') ? (
                <Button
                  variant="ghost"
                  onClick={() => handlePreviousOrNextTrack('previous')}
                  className="size-10 p-0"
                >
                  <TbPlayerTrackPrevFilled size={20} />
                </Button>
              ) : null}
              {supportedFeatures.has('PAUSE') ? (
                <Button
                  variant="ghost"
                  onClick={handlePlayPause}
                  className="size-10 p-0"
                >
                  {isPlaying ? (
                    <TbPlayerPauseFilled size={20} />
                  ) : (
                    <TbPlayerPlayFilled size={20} />
                  )}
                </Button>
              ) : null}
              {supportedFeatures.has('NEXT_TRACK') ? (
                <Button
                  variant="ghost"
                  onClick={() => handlePreviousOrNextTrack('next')}
                  className="size-10 p-0"
                >
                  <TbPlayerTrackNextFilled size={20} />
                </Button>
              ) : null}
            </div>
          </div>
          <MediaTrack
            key={entity.attributes.media_title}
            isPlaying={isPlaying}
            currentTime={mediaPosition}
            duration={entity.attributes.media_duration}
            seekToPosition={handleSeekPosition}
          />
        </div>
      ) : null}
    </Card>
  )
}
