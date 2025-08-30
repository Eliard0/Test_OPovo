/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        screens: {
          'tablet': '700px',
        },
        gridTemplateColumns: {
          'footer': 'auto 1fr 1fr 1fr',
      }
      },
    },
    plugins: [],
  }
  