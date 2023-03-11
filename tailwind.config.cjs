/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
console.log('🔈 ~ colors:', colors)

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class', //['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          0: '#ffffff', // card bg light theme
          50: '#f9fafb',
          100: '#F7F8FA', // db bg & unselected scene (light theme
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6C717F', // icon color
          600: '#4b5563',
          700: '#3C424B', // highlighted scene
          800: '#252A32', // card background
          900: '#1D2126', // db bg & unselected scene
          1000: '#000000',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // @ts-expect-error - no type declaration
  plugins: [require('tailwindcss-animate')],
}

module.exports = config
