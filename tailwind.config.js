// npx tailwindcss -i ./src/styles/globals.css -o ./dist/output.css --watch

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
