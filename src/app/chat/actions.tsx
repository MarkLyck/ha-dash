'use server'

import { createStreamableValue } from 'ai/rsc'
import { type CoreMessage, streamText } from 'ai'
import { openai } from '@ai-sdk/openai'
import z from 'zod'

import { deviceList } from './data'

const validIds = deviceList.map((device) => device.device_id)

export async function continueConversation(messages: CoreMessage[]) {
  const formattedDeviceList = deviceList
    .map(
      (device, index) => `
${index + 1}. Device ID: ${device.device_id}
   Area: ${device.area_id}
   Name: ${device.name}
   Friendly Name: ${device.friendly_name}
`,
    )
    .join('\n')

  const result = await streamText({
    model: openai('gpt-4'), // Consider using GPT-4 if available
    system: `You are a helpful smart home assistant controlling a homeassistant instance. 
    Available devices:

    ${formattedDeviceList}
    
    When a user asks to control a device, follow these steps:
    1. Identify the device from the list above based on the user's description.
    2. Use the exact device_id provided in the list when calling the getDevice tool.
    
    Do not invent or create new device IDs.
    `,
    messages: messages,
    tools: {
      getDevice: {
        description:
          'Get information about a smart home device using id from the device list.',
        parameters: z.object({
          device_id: z.string().describe('The device_id from the device list'),
        }),
        execute: async ({ device_id }) => {
          if (!validIds.includes(device_id)) {
            return `Error: Invalid device ID. Please use one of the following: ${validIds.join(', ')}`
          }
          return `Result: ${device_id}`
        },
      },
    },
  })

  const stream = createStreamableValue(result.textStream)
  return stream.value
}
