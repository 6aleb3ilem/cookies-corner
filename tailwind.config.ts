import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F1',
        creamAlt: '#FFF6EE',
        blush: '#EF6F91',
        blushSoft: '#FDE7EE',
        lavender: '#A989C5',
        lavenderSoft: '#F2E8F8',
        cocoa: '#2B1712',
        beige: '#EFD8C7',
        gold: '#C99A45',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'Noto Naskh Arabic', 'Tajawal', 'serif'],
        script: ['var(--font-script)', 'Dancing Script', 'cursive'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 6px 24px -10px rgba(43, 23, 18, 0.18)',
        card: '0 10px 30px -16px rgba(43, 23, 18, 0.25)',
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        progress: 'progress linear forwards',
        fadeIn: 'fadeIn 0.25s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
