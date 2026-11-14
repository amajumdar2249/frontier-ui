/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-tokens/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#0b57d0',
          'blue-hover': '#0842a0',
          'blue-light': '#d3e3fd',
          'blue-container': '#c2e7ff',
          surface: '#f8fafd',
          'surface-dark': '#1e1f20',
          'bg-dark': '#131314',
          'border-light': '#e0e2ec',
          'border-dark': '#444746',
          'pill-bg': '#f0f4f9',
          'pill-bg-dark': '#282a2c',
        }
      },
      fontFamily: {
        sans: ['"Google Sans"', '"Google Sans Text"', 'system-ui', 'sans-serif'],
        display: ['"Google Sans Display"', '"Google Sans"', 'sans-serif'],
        mono: ['"Google Sans Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
