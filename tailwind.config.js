/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "midnight": "#2c3e50",
        "riseshine": "#fbc531",
      }
    },
  },
  plugins: [],
}
