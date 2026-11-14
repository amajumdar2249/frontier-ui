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
        deepmind: {
          black: '#000000',
          surface: '#0e0e10',
          card: '#141418',
          hover: '#1c1c22',
          border: '#1f1f23',
          borderGlow: '#33333d',
          cyan: '#00e5ff',
          purple: '#a855f7',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['"Google Sans Flex"', '"Google Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Roboto Mono"', 'monospace'],
      },
      boxShadow: {
        glowCyan: '0 0 30px rgba(0, 229, 255, 0.25)',
        glowPurple: '0 0 30px rgba(168, 85, 247, 0.25)',
        hud: '0 8px 32px 0 rgba(0, 0, 0, 0.85), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
