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

type ChatProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>

type Message = {
  role: 'user' | 'assistant'
  content: string
  date: Date
}

type AssistantResponseData =
  | {
      code: 'no_intent_match'
    }
  | {
      failed?: { id: string; name: string; entity: string }[]
      success?: { id: string; name: string; entity: string }[]
      targets?: []
    }

type AssistantResponse = {
  response: {
    speech: {
      plain: {
        speech: string
        extra_data: unknown | null
      }
    }
    card: unknown
    language: 'en'
    response_type: 'error' | 'query_answer'
    data: AssistantResponseData
  }
  conversation_id: null
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
  const [isMuted, setIsMuted] = useState(false)
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

  const onSubmit = async ({ message }: { message: string }) => {
    form.reset()
    if (!message) return

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: message, date: new Date() },
    ])
    const result: AssistantResponse | undefined =
      await connection?.sendMessagePromise({
        type: 'conversation/process',
        text: message,
        language: 'en',
        conversation_id: '01hfmxf4d3d3crfpctk4z5tcsa',
      })
    if (result?.response?.speech?.plain?.speech) {
      const responseMessage = result.response.speech.plain.speech

      if (!isMuted) {
        const voiceResponse = await getElevenLabsResponse(responseMessage)

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
          content: result.response.speech.plain.speech,
          date: new Date(),
        },
      ])
    }
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
