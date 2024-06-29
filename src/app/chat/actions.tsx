'use server'

import { createStreamableValue } from 'ai/rsc'
import { type CoreMessage, streamText } from 'ai'
import { openai } from '@ai-sdk/openai'
import z from 'zod'

import { deviceList } from './data'

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
    // Example:
    // User: Turn on the office light
    // Assistant: Certainly! I'll turn on the office light for you. Let me fetch the device information.

    // To do this, I'll use the getDevice tool with the device ID for the office corner lamp.

    // getDevice(device_id: "e47d99aae59c29200828536dc821c681")

    // [Wait for tool response]

    // Great! I've retrieved the information for the office corner lamp. I'll proceed to turn it on for you.`,
    messages: messages,
    tools: {
      getDevice: {
        description:
          'Get information about a smart home device using id from the device list.',
        parameters: z.object({
          device_id: z.string().describe('The device_id from the device list'),
        }),
        execute: async ({ device_id }) => {
          console.log('🔈 ~ device_id:', device_id)
          const validIds = deviceList.map((device) => device.device_id)
          if (!validIds.includes(device_id)) {
            return `Error: Invalid device ID. Please use one of the following: ${validIds.join(', ')}`
          }
          return `Result: ${device_id}`
        },
      },
    },
  })

  // ... rest of your function

  const stream = createStreamableValue(result.textStream)
  return stream.value
}
