import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107',
        'primary-muted': '#E4C78B',
        gold: '#FFC107',
        'gold-light': '#FFD54F',
        'gold-dark': '#D4AF37',
        'navy-deep': '#1A1A1A',
        'background-light': '#1A1A1A',
        'background-dark': '#141414',
        'surface': '#242424',
        'surface-elevated': '#2d2d2d',
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(255, 193, 7, 0.25)',
        'gold-glow-lg': '0 0 40px rgba(255, 193, 7, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
