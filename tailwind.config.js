/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm near-black charcoals for a deep, cinematic base
        charcoal: {
          950: '#08080A',
          900: '#0C0C0F',
          850: '#111114',
          800: '#16161B',
          700: '#1E1E25',
          600: '#2A2A33',
        },
        // Champagne / gold accent system
        gold: {
          DEFAULT: '#C6A05C',
          light: '#E6CE96',
          soft: '#D8B978',
          deep: '#9A7B3F',
        },
        cream: '#F4EFE3',
        sand: '#A89F8E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'ui-serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.35em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
