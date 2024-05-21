import { ColorGrid } from '@/components/ui/colorPicker'
import { BrightnessSlider } from '@/components/ui/brightnessSlider'
import { debounce } from '@/lib/utils'

import type { SupportedFeaturesMap } from './types'
import { useRef } from 'react'

type ColorPickerProps = {
  color?: string
  setColor: (color: string) => void
  brightness?: number
  setBrightness: (brightness: number | undefined) => void
  supportedFeatures: SupportedFeaturesMap
}
export const LightDialogContent = ({
  supportedFeatures,
  color,
  setColor,
  brightness,
  setBrightness,
}: ColorPickerProps) => {
  const debouncedSetBrightness = useRef(
    debounce((value: number | undefined) => setBrightness(value), 300),
  ).current

  return (
    <div className="flex flex-col items-center gap-4">
      {supportedFeatures.has('SUPPORT_BRIGHTNESS') && brightness ? (
        <BrightnessSlider
          value={[brightness]}
          color={color}
          onValueChange={(values) => debouncedSetBrightness(values[0])}
        />
      ) : null}
      {supportedFeatures.has('SUPPORT_COLOR') && color ? (
        <ColorGrid color={color} setColor={setColor} />
      ) : null}
    </div>
  )
}
