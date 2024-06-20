'use client'

import { useChat } from '@ai-sdk/react'
import type { ToolInvocation } from 'ai'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, addToolResult } =
    useChat({
      maxToolRoundtrips: 5,
      // run client-side tools that are automatically executed:
      async onToolCall({ toolCall }) {
        if (toolCall.toolName === 'getLocation') {
          const cities = ['New York', 'Los Angeles', 'Chicago', 'San Francisco']
          return cities[Math.floor(Math.random() * cities.length)]
        }
      },
    })
  return (
    <div className="stretch mx-auto flex w-full max-w-md flex-col py-24">
      {messages.map((m) => (
        <div
          key={m.id}
          className="whitespace-pre-wrap text-gray-500 dark:text-gray-400 mb-4"
        >
          <span className="font-bold text-white">
            {m.role === 'user' ? 'User: ' : 'AI: '}
          </span>
          <p>{m.content}</p>
          {m.toolInvocations?.map((toolInvocation: ToolInvocation) => {
            const toolCallId = toolInvocation.toolCallId
            const addResult = (result: string) =>
              addToolResult({ toolCallId, result })

            // render confirmation tool (client-side tool with user interaction)
            if (toolInvocation.toolName === 'askForConfirmation') {
              return (
                <div key={toolCallId}>
                  {toolInvocation.args.message}
                  <div>
                    {'result' in toolInvocation ? (
                      <b>{toolInvocation.result}</b>
                    ) : (
                      <>
                        <button type="button" onClick={() => addResult('Yes')}>
                          Yes
                        </button>
                        <button type="button" onClick={() => addResult('No')}>
                          No
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )
            }

            // other tools:
            return 'result' in toolInvocation ? (
              <div key={toolCallId}>
                Tool call {`${toolInvocation.toolName}: `}
                {toolInvocation.result}
              </div>
            ) : (
              <div key={toolCallId}>Calling {toolInvocation.toolName}...</div>
            )
          })}
          <br />
        </div>
      ))}

      <div className="flex flex-1 flex-col gap-4">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <Input
            value={input}
            placeholder="Type your question here..."
            onChange={handleInputChange}
          />
          <Button type="submit">Ask AI</Button>
        </form>
      </div>
    </div>
  )
}

export default Chat
