import { Slider } from './slider'

type MediaTrackProps = {
  duration: number
  currentTime: number
}

function secondsToMMSS(seconds: number): string {
  const minutes: number = Math.floor(seconds / 60)
  const remainingSeconds: number = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds,
  ).padStart(2, '0')}`
}

export const MediaTrack = ({ duration, currentTime }: MediaTrackProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">{secondsToMMSS(currentTime)}</span>
      <Slider
        value={[currentTime]}
        max={duration}
        min={0}
        className="w-[200px]"
      />
      <span className="text-sm">{secondsToMMSS(duration)}</span>
    </div>
  )
}
