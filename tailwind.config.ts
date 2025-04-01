import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-poppins)', 'sans-serif'], // Default font
      poor: ['var(--font-poor-story)', 'cursive'], // Custom font class
    },
  },
  plugins: [],
};

export default config;