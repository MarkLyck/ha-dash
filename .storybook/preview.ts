import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Preview } from '@storybook/react'

import 'tailwindcss/tailwind.css'
import '@/lib/icons'
import './index.css'

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'Light',
          class: [],
          color: '#ffffff',
          default: true,
        },
        {
          name: 'Dark',
          class: ['dark'],
          color: '#1E2227',
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
