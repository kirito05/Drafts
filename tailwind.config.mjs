/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradientStart: "#d8d605", // Light yellow-green
        gradientMiddle: "#1d724d", // Deep green
        gradientEnd: "#01a7cc", // Bright teal-blue
      },
      borderWidth:{
        80: '36px'
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(to right, #d8d605, #1d724d, #01a7cc)",
      },
      animation:{
        'bounce-once':'bounce 1s ease-in-out'
      }
    },
  },
  plugins: [],
};