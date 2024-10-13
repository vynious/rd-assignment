/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['IBM Plex Mono', 'sans-serif'],  // For a modern sans-serif look
    }
  },
  plugins: [],
}