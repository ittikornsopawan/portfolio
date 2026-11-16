import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-thai)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-thai)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'drift-1': 'drift1 18s ease-in-out infinite',
        'drift-2': 'drift2 22s ease-in-out infinite',
        'drift-3': 'drift3 16s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        drift1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px,40px) scale(.95)' },
        },
        drift2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(-50px,20px) scale(.95)' },
          '66%': { transform: 'translate(30px,-40px) scale(1.08)' },
        },
        drift3: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(60px,-50px) scale(1.1)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
