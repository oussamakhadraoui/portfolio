import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: { max: '479px' },
      sm: { max: '576px' },
      // => @media (min-width: 576px) { ... }

      md: { max: '960px' },
      // => @media (min-width: 960px) { ... }
      lg: { max: '1440px' },
      // => @media (min-width: 1440px) { ... }
      xl: { max: '2000px' },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        xx: '0 0 25px #fef4f5',
      },
    },
  },
  plugins: [],
}
export default config
