/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        18: "repeat(18, minmax(0, 1fr))",
      },
      gridRow: {
        "span-16": "span 12 / span 12",
      },
      gridRow: {
        "span-16": "span 16 / span 16",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
