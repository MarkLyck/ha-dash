import { useState } from 'react'
// import { HexColorPicker } from 'react-colorful'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components/ui/button'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover'

type ColorPickerProps = {
  color: string
  setColor: (color: string) => void
}

const defaultColors = [
  '#ffffff', // white
  '#fdba74', // warm
  '#16a34a', // green,
  '#2563eb', // blue,
  // '#6d28d9', // violet
  // '#ec4899', // pink
  // '#dc2626', // red
  // '#ea580c', // orange
]

export const ColorGrid = ({ setColor }: ColorPickerProps) => {
  // TODO save grid colors in database
  const [gridColors, _setGridColors] = useState(defaultColors)

  return (
    <div className="flex flex-wrap gap-2">
      {gridColors.map((gridColor) => (
        <Button
          key={gridColor}
          className="h-8 w-8 rounded border border-border p-0"
          style={{ background: gridColor }}
          onClick={() => setColor(gridColor)}
        />
      ))}
      {/* <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-8 w-8 p-0 dark:border-slate-500"
            onClick={() => {
              setGridColors((colors) => [...colors, color])
            }}
          >
            <FontAwesomeIcon icon={['far', 'plus']} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto border-none p-4">
          <ColorPicker color={color} setColor={setColor} />
        </PopoverContent>
      </Popover> */}
    </div>
  )
}

// export const ColorPicker = ({ color, setColor }: ColorPickerProps) => (
//   <HexColorPicker color={color} onChange={setColor} />
// )
