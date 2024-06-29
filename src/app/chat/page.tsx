'use client'

import type { CoreMessage } from 'ai'
import { useState } from 'react'
import { continueConversation } from './actions'
import { readStreamableValue } from 'ai/rsc'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic'
export const maxDuration = 30

const Chat = () => {
  const [messages, setMessages] = useState<CoreMessage[]>([])
  console.log('🔈 ~ messages:', messages)
  const [input, setInput] = useState('')

  return (
    <div className="stretch mx-auto flex w-full max-w-md flex-col py-24">
      {messages.map((m, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={i}
          className="mb-4 whitespace-pre-wrap text-gray-500 dark:text-gray-400"
        >
          <span className="font-bold text-white">
            {m.role === 'user' ? 'User: ' : 'AI: '}
          </span>
          <p>{m.content as string}</p>
        </div>
      ))}

      <div className="flex flex-1 flex-col gap-4">
        <form
          className="grid gap-4"
          action={async () => {
            const newMessages: CoreMessage[] = [
              ...messages,
              { content: input, role: 'user' },
            ]

            setMessages(newMessages)
            setInput('')

            const result = await continueConversation(newMessages)

            for await (const content of readStreamableValue(result)) {
              setMessages([
                ...newMessages,
                {
                  role: 'assistant',
                  content: content as string,
                },
              ])
            }
          }}
        >
          <Input
            value={input}
            placeholder="Type your question here..."
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit">Ask AI</Button>
        </form>
      </div>
    </div>
  )
}

export default Chat
