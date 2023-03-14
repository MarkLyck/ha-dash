import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LightDialogContent } from './DialogContent'
import { LightCard, type LightCardProps } from './LightCard'

export const Light = (props: LightCardProps) => {
  const { name } = props
  return (
    <div className="w-full max-w-[140px]">
      <Dialog>
        <DialogTrigger className="w-full rounded-xl text-left outline-none transition focus:ring-2 focus:ring-slate-400 focus:ring-offset-2  dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900">
          <LightCard {...props} />
        </DialogTrigger>
        <DialogContent className="w-auto">
          <DialogHeader>
            <DialogTitle className="mb-4">{name}</DialogTitle>
            <LightDialogContent
              color="red"
              setColor={() => {
                //
              }}
            />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
