/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
          wiggle: {
              '0%, 100%': {
                  transform: 'rotate(-3deg)'
              },
              '50%': {
                  transform: 'rotate(3deg)'
              },
          }
      },
      animation: {
          wiggle: 'wiggle 2s ease-in-out infinite',
      }
  },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'lime': '#bac34e',
      'lightyellow': '#e2d8c3',
      'bslight':'#fff',
      'white':' #ffffff',
      'light':'#fee4e7',
      'black':'#333333',
      'red':'#d3122a',
   
    },
  },
  plugins: [require("daisyui")],
}
