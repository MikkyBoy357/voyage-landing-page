// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'], // Default font
        'rammeto-one': ['var(--font-rammeto-one)', 'cursive'],
        'poor-story': ['var(--font-poor-story)', 'cursive'],
        'grape-nuts': ['var(--font-grape-nuts)', 'cursive'],
        'princess-sofia': ['var(--font-princess-sofia)', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;