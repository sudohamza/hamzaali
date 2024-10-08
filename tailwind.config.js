/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./dist/index.html",
    "./build/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: false,
};
