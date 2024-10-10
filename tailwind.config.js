import { getSpacing } from './tailwindTheme.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: getSpacing(),
    },
  },
  plugins: [],
}
