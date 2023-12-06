/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', 
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px',
      },
      colors: {
        'primary': '#ffffff',
        'secondary': '#000000', 
        'accent': '#fa4b35', 
        'accent-dark': '#fb1c00',
      },
      fontFamily: {
        'body': ['Poppins', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
  
    },
  },
  plugins: [],
};
