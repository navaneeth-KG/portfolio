/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#BED754',
        'slate-gray': '#6D6D6D',
        'pale-blue': '#AA14F0',
        'white-400': 'rgba(255, 255, 255, 0.80)',
        
      }
    },
  },
  plugins: [],
}
