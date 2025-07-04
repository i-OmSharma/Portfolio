/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          pinyon: ['"Pinyon Script"', 'cursive'],
          libre: ['"Libre Caslon Display"', 'serif'],
        },
      },
    },
    plugins: [],
  };
  