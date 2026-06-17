/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050510',
          900: '#080814',
          800: '#0d0d1c',
          700: '#141426',
        },
        accent: {
          DEFAULT: '#6C63FF',
          glow: '#8b85ff',
        },
        cyan: {
          DEFAULT: '#00D4FF',
          glow: '#5ce4ff',
        },
        muted: '#A0A0B0',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
      },
    },
  },
  plugins: [],
}
