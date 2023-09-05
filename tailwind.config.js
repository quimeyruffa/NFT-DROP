/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-anton)'],
        mono: ['var(--font-inter)'],
      },
      letterSpacing: {
        standar: '0.3em',}
    },
    
  },
  plugins: [],
}