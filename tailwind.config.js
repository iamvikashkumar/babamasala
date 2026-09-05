/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F3EAD8',
          soft: '#FAF4E8',
          deep: '#E9DBBE',
        },
        ink: {
          DEFAULT: '#241C15',
          soft: '#4A3D30',
        },
        forest: {
          DEFAULT: '#1F3D2B',
          light: '#2C5138',
          dark: '#152A1E',
        },
        burgundy: {
          DEFAULT: '#6B1E27',
          light: '#8A2A35',
          dark: '#4A1319',
        },
        gold: {
          DEFAULT: '#B8863B',
          light: '#D1A75E',
          dark: '#93692A',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      maxWidth: {
        content: '1360px',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.08) translate(0px, 0px)' },
          '100%': { transform: 'scale(1.18) translate(-1.5%, -1%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-out forwards',
        marquee: 'marquee 28s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
