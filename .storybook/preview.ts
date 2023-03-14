import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Preview } from '@storybook/react'

import { WithTheme } from './decorators/withTheme'
import 'tailwindcss/tailwind.css'
import '@/lib/icons'
import './index.css'

const preview: Preview = {
  decorators: [WithTheme],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
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

export const globalTypes = {
  scheme: {
    name: 'Scheme',
    description: 'Select a theme',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark', 'both'],
      dynamicTitle: true,
    },
  },
}

export default preview
