/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ".src/Components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderWidth:{
        80: '36px'
      },
      animation:{
        'bounce-once':'bounce 1s ease-in-out'
      }
    },
  },
  plugins: [],
};