'use server'

import { createStreamableValue } from 'ai/rsc'
import { type CoreMessage, streamText } from 'ai'
import { openai } from '@ai-sdk/openai'
import z from 'zod'

import { deviceList } from './data'

export async function continueConversation(messages: CoreMessage[]) {
  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    system:
      'You are a helpful smart home assistant controlling a homeassistant instance.',
    messages: [
      {
        role: 'assistant',
        content: `In the following messages I will ask to control or get states from my smart home. I want you to figure out which device_id to use from the following JSON device list:
      ${deviceList}`,
      },
      ...messages,
    ],
    tools: {
      getDevice: {
        description:
          'Get information about a smart home device using id from the device_list.',
        parameters: z.object({
          device_id: z.string().describe('The device_id from the device_list'),
        }),
        execute: async ({ device_id }) => {
          return `Result: ${device_id}`
        },
      },
    },
  })

  const stream = createStreamableValue(result.textStream)
  return stream.value
}
