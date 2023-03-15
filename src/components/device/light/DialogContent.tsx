import { ColorGrid } from '@/components/ui/colorPicker'

type ColorPickerProps = {
  color?: string
  setColor: (color: string) => void
}
export const LightDialogContent = ({ color, setColor }: ColorPickerProps) => (
  <div>{color ? <ColorGrid color={color} setColor={setColor} /> : null}</div>
)
