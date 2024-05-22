'use client'

import useStore from '@/lib/useStore'

import { Card } from '@/components/ui/card'
import { env } from '@/../env'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MediaTrack } from '@/components/ui/media-track'

import { callService } from '@/lib/hass'

const homeAssistantURL = env.NEXT_PUBLIC_HASS_URL

type MediaPlayerProps = {
  entityId: string | undefined
}

export const MediaPlayer = ({ entityId }: MediaPlayerProps) => {
  const entities = useStore((s) => s.entities)
  // console.log('🔈 ~ store:', store)

  if (!entityId) return null
  const entity = entities[entityId]
  if (!entity) return null

  const isPlaying = entity.state === 'playing'
  console.log('🔈 ~ entity:', entity)

  const handlePlayPause = () => {
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

  return (
    <Card className="flex gap-2 rounded-lg border-border/20 bg-black/20 p-4 backdrop-blur-lg">
      <div
        className="size-20 rounded bg-black/50 bg-center bg-cover"
        style={{
          backgroundImage: `url(${homeAssistantURL}${entity.attributes.entity_picture})`,
        }}
      />
      <div>
        <h5 className="font-bold text-lg">{entity.attributes.media_title}</h5>
        <p className="text-sm">{entity.attributes.media_artist}</p>
      </div>
      <div className="flex items-center justify-center">
        <MediaTrack
          currentTime={entity.attributes.media_position}
          duration={entity.attributes.media_duration}
        />
        <Button
          variant="ghost"
          onClick={() => handlePreviousOrNextTrack('previous')}
        >
          <FontAwesomeIcon icon={['fas', 'backward']} />
        </Button>
        <Button variant="ghost" onClick={handlePlayPause}>
          <FontAwesomeIcon
            icon={[
              'fas',
              entity.state === 'paused' ||
              entity.state === 'idle' ||
              entity.state === 'off'
                ? 'play'
                : 'pause',
            ]}
          />
        </Button>
        <Button
          variant="ghost"
          onClick={() => handlePreviousOrNextTrack('next')}
        >
          <FontAwesomeIcon icon={['fas', 'forward']} />
        </Button>
      </div>
    </Card>
  )
}
