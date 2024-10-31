import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1.2s ease-out forwards',
        suddenUp: 'fadeInUp 0s ease-out forwards',
      },
    },
    fontFamily: {
      tegomin: ['New Tegomin'],
      sofia: ['Princess Sofia'],
    },
  },
  plugins: [],
  darkMode: 'media',
};
export default config;
