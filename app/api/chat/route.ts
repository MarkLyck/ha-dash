import { openai } from '@ai-sdk/openai'
import { convertToCoreMessages, streamText } from 'ai'

import { z } from 'zod'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = await streamText({
    model: openai('gpt-4o'),
    system:
      'You are a helpful smart home assistant controlling a homeassistant instance',
    messages: convertToCoreMessages(messages),
    tools: {
      lightControl: {
        description: 'Control a smart home light',
        parameters: z.object({
          entityId: z
            .string()
            .describe('The home assistant entity id of the entity to control'),
          domain: z.string().describe('The domain of the entity'),
          service: z.string().describe('The service to call on the entity'),
        }),
        execute: async ({ entityId, domain, service }) => {
          // TODO: implement smart home control
          return `Result: ${entityId} ${domain} service`
        },
      },
      // server-side tool with execute function:
      getWeatherInformation: {
        description: 'show the weather in a given city to the user',
        parameters: z.object({ city: z.string() }),
        execute: async ({}: { city: string }) => {
          const weatherOptions = ['sunny', 'cloudy', 'rainy', 'snowy', 'windy']
          return weatherOptions[
            Math.floor(Math.random() * weatherOptions.length)
          ]
        },
      },
      // client-side tool that starts user interaction:
      askForConfirmation: {
        description: 'Ask the user for confirmation.',
        parameters: z.object({
          message: z.string().describe('The message to ask for confirmation.'),
        }),
      },
      // client-side tool that is automatically executed on the client:
      getLocation: {
        description:
          'Get the user location. Always ask for confirmation before using this tool.',
        parameters: z.object({}),
      },
    },
  })

  return result.toAIStreamResponse()
}
