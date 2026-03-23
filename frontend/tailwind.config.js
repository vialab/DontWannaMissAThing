/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}', // Scan all React components
    './src/renderer/**/*.{js,jsx,ts,tsx}',   // If you have other renderer files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
