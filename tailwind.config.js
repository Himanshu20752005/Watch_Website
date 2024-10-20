/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '150': '445px', // Custom height class h-150
      },
      colors: {
        'custom': '#F1DDC9', // Correctly defined custom color
      },
    },
  },
  plugins: [],
}
