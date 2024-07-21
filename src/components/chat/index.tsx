import { TbMessageDots, TbSend, TbVolume, TbVolumeOff } from 'react-icons/tb'
import { useForm } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import { tv } from 'tailwind-variants'

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
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
import { cn } from '@/lib/utils'

import type { Connection, UnsubscribeFunc } from 'home-assistant-js-websocket'

interface AssistPipelineResponse {
  type: 'run-start' | 'run-end' | 'intent-start' | 'intent-end'
  timestamp: string
  data: any
}

interface AssistPipelineResult {
  [key: string]: any
}

type ChatProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>

type Message = {
  role: 'user' | 'assistant'
  content: string
  date: Date
}

const messageClass = tv({
  base: 'w-fit rounded-lg px-3 py-2',
  variants: {
    role: {
      user: 'self-end bg-info text-white',
      assistant: 'border border-border bg-neutral-0 text-white',
    },
  },
})

export const Chat = ({ className }: ChatProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const messagesContainerRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])
  const connection = useStore((s) => s.connection)
  const form = useForm({
    defaultValues: {
      message: '',
    },
  })

  const getElevenLabsResponse = async (text: string) => {
    const response = await fetch('/api/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: text,
        voice: 'Bill',
      }),
    })

    const data = await response.blob()
    return data
  }

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      // @ts-expect-error - it does exist on ul.
      const lastMessage = messagesContainerRef.current.lastElementChild
      lastMessage?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages.length])

  const runAssistPipeline = async (
    connection: Connection,
    message: string,
  ): Promise<AssistPipelineResult> => {
    return new Promise<AssistPipelineResult>((resolve, reject) => {
      const pipelineResult: AssistPipelineResult = {}
      let unsubscribeFunc: UnsubscribeFunc | null = null

      const setupSubscription = async () => {
        unsubscribeFunc = await connection.subscribeMessage(
          async (event: AssistPipelineResponse) => {
            if (event.type === 'intent-end') {
              const responseMessage =
                event.data?.intent_output.response.speech.plain.speech

              if (!isMuted) {
                const voiceResponse =
                  await getElevenLabsResponse(responseMessage)

                const reader = new FileReader()
                reader.readAsDataURL(voiceResponse)
                reader.onload = () => {
                  if (audioRef.current) {
                    audioRef.current.src = reader.result as string
                    audioRef.current.play()
                  }
                }
              }

              setMessages((prev) => [
                ...prev,
                {
                  role: 'assistant',
                  content: responseMessage,
                  date: new Date(),
                },
              ])
            }

            if (event.type === 'run-end') {
              unsubscribeFunc?.()
              resolve(pipelineResult)
            }
          },
          {
            type: 'assist_pipeline/run',
            start_stage: 'intent',
            end_stage: 'intent',
            input: {
              text: message,
            },
          },
        )
      }

      setupSubscription().catch(reject)

      // Optional: Set a timeout in case the pipeline doesn't complete
      setTimeout(() => {
        if (unsubscribeFunc) {
          unsubscribeFunc()
        }
        reject(new Error('Pipeline timed out'))
      }, 30000) // 30 seconds timeout
    })
  }

  const onSubmit = async ({ message }: { message: string }) => {
    form.reset()
    if (!message || !connection) return
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: message, date: new Date() },
    ])
    await runAssistPipeline(connection, message)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn(className, 'size-12 rounded-full p-0')}>
          <TbMessageDots size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex justify-center text-center">
          <DialogTitle className="text-center">
            <span className="mr-2">Home AI</span>
            <Button
              onClick={() => setIsMuted((prev) => !prev)}
              className="size-8 p-0"
              variant="ghost"
            >
              {isMuted ? (
                <TbVolumeOff size={16} className="text-destructive" />
              ) : (
                <TbVolume size={16} />
              )}
            </Button>
          </DialogTitle>
        </DialogHeader>
        <ul
          ref={messagesContainerRef}
          className="flex max-h-[400px] flex-col gap-2 overflow-y-auto"
        >
          {messages.map((message) => (
            <li
              key={message.date.getTime()}
              className={messageClass({ role: message.role })}
            >
              {message.content}
            </li>
          ))}
        </ul>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Ask AI"
                      autoFocus
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="h-9 w-12 p-0">
              <TbSend />
            </Button>
          </form>
        </Form>
        {/* biome-ignore lint/a11y/useMediaCaption: no captions needed*/}
        <audio ref={audioRef} controls className="mb-2 hidden" />
      </DialogContent>
    </Dialog>
  )
}
