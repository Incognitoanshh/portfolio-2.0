/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Bebas Neue"', 'cursive'],
      },
      colors: {
        bg: '#020205',
        surface: '#0a0a12',
        border: '#1a1a2e',
        cyan: {
          DEFAULT: '#00f5d4',
          dim: '#00c4a8',
          glow: 'rgba(0,245,212,0.15)',
        },
        electric: '#7b2fff',
        text: {
          primary: '#e8e8f0',
          secondary: '#8888aa',
          muted: '#444466',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glitch': 'glitch 2s steps(2, end) infinite',
        'typewriter': 'typewriter 3s steps(40) forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)', filter: 'none' },
          '33%': { transform: 'translate(-2px, 1px)', filter: 'hue-rotate(90deg)' },
          '66%': { transform: 'translate(2px, -1px)', filter: 'hue-rotate(-90deg)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,245,212,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,212,0.03) 1px, transparent 1px)`,
        'radial-glow': 'radial-gradient(ellipse at center, rgba(0,245,212,0.08) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
