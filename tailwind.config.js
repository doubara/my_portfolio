/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '80vh': '80vh',
        'h270': '270px',
      }
      // backgroundImage:  {
      //   'saitama': 'url(./src/assets/saitama.png)',

      // }

    },
  },
  plugins: [],
}