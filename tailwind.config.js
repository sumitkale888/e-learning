// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This array tells Tailwind where to look for CSS classes
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'eshiksha-dark': '#0f0f0f', 
        'eshiksha-orange': '#f97316',
      }
    },
  },
  plugins: [],
}