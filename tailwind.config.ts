import type { Config } from 'tailwindcss'

import { nextui } from '@nextui-org/react'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/utils/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        //
        'light-bg': '#ffffff',
        'light-text': '#344767',
        'dark-bg': '#202940',
        'dark-text': '#344767',
        'cetacean-blue': '#070d2b',
        'rich-black': '#000312',
        gunmetal: '#2e313a',
        'charleston-green': '#282828',
      },
      fontFamily: {
        ['monaspace-argon']: ['Monaspace Argon', 'monospace', 'sans-serif'],
        ['monaspace-krypton']: ['Monaspace Krypton', 'monospace', 'sans-serif'],
        ['monaspace-neon']: ['Monaspace Neon', 'monospace', 'sans-serif'],
        ['monaspace-radon']: ['Monaspace Radon', 'monospace', 'sans-serif'],
        ['monaspace-xenon']: ['Monaspace Xenon', 'monospace', 'sans-serif'],
      },
    },
  },
  plugins: [
    nextui(),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-base-gradient-sidebar': {
          '@apply bg-gradient-to-l from-cetacean-blue to-rich-black': {},
        },
        '.bg-base-gradient-navbar': {
          '@apply bg-gradient-to-r from-cetacean-blue to-rich-black': {},
        },
        '.bg-base-gradient-content': {
          '@apply bg-gradient-to-r from-cetacean-blue to-rich-black': {},
        },
        '.scrolling-touch': { '-webkit-overflow-scrolling': 'touch' },
        '.scrolling-auto': { '-webkit-overflow-scrolling': 'auto' },
      })
    }),
  ],
}

export default config
