import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dragonforge-nexus': '#3f6212',
        'dragonforge-media': '#1e40af',
        'dragonforge-code': '#5b21b6',
        'dragonforge-news': '#065f46',
        'dragonforge-network': '#92400e',
        'dragonforge-gaming': '#86198f',
      },
    },
  },  
  plugins: [require("daisyui"),require('@tailwindcss/typography'),],
} satisfies Config

