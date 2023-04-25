/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-yellow': "#fef68a",
        'light-paste': "#67d7cc",
      },
      gridTemplateColumns: {
        'container': 'repeat(auto-fit, minmax(250px, 1fr))',
      }
    },
  },
  plugins: [],
}

