/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "blue":"#2069F7",
        "black-8":"rgba(14, 14, 14, 0.8)",
        "black-9":"rgba(14, 14, 14, 0.9)",
        "white-primary":"rgba(255, 255, 255, 1)",
        "white-secondary":"rgba(215, 215, 215, 1)",
        "black-primary":"rgba(44, 44, 44, 0.8)"
      },
      fontFamily:{
        "Whyte":['Whyte Inktrap'],
        "inter":['Inter','sans-serif'],
        "Mono":['Space Mono', 'monospace']
      },
    
    },
  },
  plugins: [],
}
