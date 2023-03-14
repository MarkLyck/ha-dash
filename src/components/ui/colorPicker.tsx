'use client'

import { Button } from '@/components/ui/button'

type ColorPickerProps = {
  color: string
  setColor: (color: string) => void
}

export const ColorPicker = ({ color }: ColorPickerProps) => {
  return (
    <Button
      className="h-4 w-4 rounded border border-slate-500 p-0"
      style={{ background: color }}
    />
  )
}
