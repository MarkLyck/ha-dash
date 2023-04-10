/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class', //['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          100: '#EEEFFC', // highlight text
          200: '#D1D3DF', // text color
          300: '#A8A9B6', // unselected text
          400: '#9898A5', // unselected text
          500: '#383943', // border
          600: '#292A34', // selected bg
          700: '#2C2D36', // disabled border color
          800: '#272831', // selected bg
          900: '#23242D', // disabled bg
          1000: '#1F2029', // unselected bg
          1100: '#191A22', // dashboard bg
          1200: '#15161E', // dark bg
        },
        warning: {
          // tailwind css amber
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        danger: {
          // tailwind css rose
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
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
