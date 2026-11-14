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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'drift-1': 'drift1 18s ease-in-out infinite',
        'drift-2': 'drift2 22s ease-in-out infinite',
        'drift-3': 'drift3 16s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
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
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.4', transform: 'scale(.7)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow':        '0 0 40px rgba(124,58,237,0.3)',
        'glow-sm':     '0 4px 20px rgba(124,58,237,0.2)',
        'glow-hover':  '0 12px 40px rgba(124,58,237,0.4)',
        'glow-blue':   '0 0 20px rgba(59,130,246,0.25)',
        'avatar':      '0 0 40px rgba(124,58,237,0.55)',
        'icon':        '0 4px 16px rgba(124,58,237,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
