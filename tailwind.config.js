/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B0000', // Deep Red
          dark: '#6B0000',
        },
        secondary: {
          DEFAULT: '#202020', // Dark Gray
          blue: '#3A75C4', // Metallic Blue
          purple: '#6610F2', // Electric Purple
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};