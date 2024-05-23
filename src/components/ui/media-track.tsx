import { useEffect, useRef, useState } from 'react'

import { debounce } from '@/lib/utils'

import { Slider } from './slider'

type MediaTrackProps = {
  isPlaying: boolean
  duration: number
  currentTime: number
  seekToPosition: (time: number) => void
}

function secondsToHHMMSS(seconds: number): string {
  const hours: number = Math.floor(seconds / 3600)
  const minutes: number = Math.floor((seconds % 3600) / 60)
  const remainingSeconds: number = seconds % 60

  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}:${String(remainingSeconds).padStart(2, '0')}`
  }

  return `${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds,
  ).padStart(2, '0')}`
}

export const MediaTrack = ({
  isPlaying,
  duration,
  currentTime: initialCurrentTime,
  seekToPosition,
}: MediaTrackProps) => {
  const [currentTime, setCurrentTime] = useState(initialCurrentTime)

  const debouncedSeekTo = useRef(
    debounce((value: number) => seekToPosition(value), 300),
  ).current

  useEffect(() => {
    setCurrentTime(initialCurrentTime)
  }, [initialCurrentTime])

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => prev + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  if (!duration) return null

  return (
    <div className="relative flex items-center gap-2">
      {/* 62px fits 88:88:88 */}
      <span className="absolute text-end font-light text-sm text-white/50">
        {secondsToHHMMSS(Math.min(currentTime, duration))}
      </span>
      <Slider
        value={[currentTime]}
        max={duration}
        min={0}
        className="ml-[48px] w-full [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-black/80 [&_.slider-thumb]:bg-white"
        onValueChange={(value) => {
          if (value[0] === undefined) return
          setCurrentTime(value[0])
          debouncedSeekTo(value[0])
        }}
      />
      <span className="font-light text-sm text-white/50">
        {secondsToHHMMSS(duration)}
      </span>
    </div>
  )
}
