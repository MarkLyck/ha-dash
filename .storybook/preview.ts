import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Preview } from '@storybook/react'

import { WithTheme } from './decorators/withTheme'

import 'tailwindcss/tailwind.css'
import '@/lib/icons'
import '@/styles/global.css'
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
  theme: {
    name: 'Theme',
    description: 'Select a theme',
    defaultValue: 'both',
    toolbar: {
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark', title: 'Dark', icon: 'moon' },
        { value: 'both', title: 'Both', icon: 'mirror' },
      ],
    },
  },
}

export default preview
