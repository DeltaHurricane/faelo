import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        Eyellow: {
          100: "#fff3cc",
          200: "#fee799",
          300: "#fedc66",
          400: "#fdd033",
          500: "#fdc400",
          600: "#ca9d00",
          700: "#987600",
          800: "#654e00",
          900: "#332700"
        },
      },
    },
  },
  plugins: [],
}
export default config
