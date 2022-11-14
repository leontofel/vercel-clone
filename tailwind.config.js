/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      color: "white",
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
