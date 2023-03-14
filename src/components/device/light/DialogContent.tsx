import { ColorGrid } from '@/components/ui/colorPicker'

type ColorPickerProps = {
  color: string
  setColor: (color: string) => void
}
export const LightDialogContent = ({ color, setColor }: ColorPickerProps) => {
  return (
    <div>
      <ColorGrid color={color} setColor={setColor} />
    </div>
  )
}
