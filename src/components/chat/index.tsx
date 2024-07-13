import { TbMicrophone } from 'react-icons/tb'

import useStore from '@/lib/useStore'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '../ui/input'
import { useEffect, useState } from 'react'

type ChatProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Chat = ({ className }: ChatProps) => {
  const [pipelineId, setPipelineId] = useState<string | null>(null)
  const connection = useStore((s) => s.connection)

  const startPipeline = async () => {
    const pipelineResult: any = await connection?.sendMessagePromise({
      type: 'assist_pipeline/pipeline/get',
    })
    setPipelineId(pipelineResult?.id)
  }

  useEffect(() => {
    if (connection) {
      startPipeline()
    }
  }, [connection])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className}>
          <TbMicrophone />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Josh AI</DialogTitle>
        </DialogHeader>
        <div>messages...</div>
        <form
          className="flex gap-2"
          onSubmit={async (e) => {
            e.preventDefault()
            console.log('submit')
            const result = await connection?.sendMessagePromise({
              type: 'assist_pipeline/run',
              start_stage: 'intent',
              end_stage: 'intent',
              input: {
                text: 'turn off office lights',
              },
              pipeline: pipelineId,
            })
            // const result = connection?.sendMessage({
            //   type: 'assist_pipeline/run',
            //   start_stage: 'intent',
            //   end_stage: 'intent',
            //   input: {
            //     text: 'turn off office lights',
            //   },
            //   // pipeline: pipelineId,
            // })
            console.log('🔈 ~ result:', result)
          }}
        >
          <Input />
          <Button type="submit">Ask AI</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
