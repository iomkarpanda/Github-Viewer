/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '175': '43.75rem', // 700px
        '200': '50rem',    // 800px
      },
      height: {
        '75': '18.75rem', // 300px
      },
    },
  },
  plugins: [],
}