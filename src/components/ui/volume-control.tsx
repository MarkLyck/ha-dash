import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn, debounce } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
// import { Slider } from '@/components/ui/slider'

type VolumeControlProps = {
  ref?: React.RefObject<React.ElementRef<typeof SliderPrimitive.Root>>
  volume: number
  setVolume: (volume: number) => void
}

export const VolumeControl = ({
  ref,
  volume: initialVolume,
  setVolume: setVolumeProp,
  ...props
}: VolumeControlProps) => {
  const [volume, setVolume] = useState(initialVolume)

  const debouncedSetVolume = useRef(
    debounce((value: number) => setVolumeProp(value), 300),
  ).current

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="size-10" variant="ghost">
          <FontAwesomeIcon icon={['fas', 'volume']} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        sideOffset={4}
        className="z-10 flex h-[100px] w-8 flex-col items-center justify-center rounded-lg bg-bg-white"
      >
        <SliderPrimitive.Root
          orientation="vertical"
          ref={ref}
          className={cn(
            'relative flex w-[8px] touch-none select-none items-center',
          )}
          value={[volume]}
          {...props}
          onValueChange={(value) => {
            if (value[0] === undefined) return
            setVolume(value[0])
            debouncedSetVolume(value[0])
          }}
        >
          <SliderPrimitive.Track className="relative h-[80px] w-full grow overflow-hidden rounded-[20px] border-2 border-border bg-white hover:cursor-pointer dark:bg-black">
            <SliderPrimitive.Range className="absolute w-full bg-white" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="-translate-x-[4px] block h-4 w-4 rounded-full border border-2 border-border/90 border-primary/50 bg-white shadow transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
        </SliderPrimitive.Root>
      </PopoverContent>
    </Popover>
  )
}
