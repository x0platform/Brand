/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.svg"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      colors: {
        primary: "#2563eb",
        accent: "#0ea5e9",
        secondary: "#22c55e"
      }
    }
  },
  plugins: []
}