/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#241E37',
        modal: '#1C172E',
        primary: '#8372CC',
        'primary-hover': '#6A5ACD',
        'text-secondary': 'rgb(135, 131, 148)',
      },
    },
  },
  plugins: [require("daisyui")],
} 