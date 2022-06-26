/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        swingInTop: {
          '0%': {
            transform: 'rotateX(-100deg)',
            transformOrigin: 'top',
            opacity: 0,
          },
          '100%': {
            transform: 'rotateX(0deg)',
            transformOrigin: 'top',
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both',
        swingInTop: 'swingInTop 1s cubic-bezier(0.39, 0.575, 0.565, 1) both',
      },
    },
  },
  plugins: [],
};
