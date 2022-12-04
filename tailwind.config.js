/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        spartan:['League Spartan', sans-serif],
      },
      backgroundImage:{
        'top':"url('/images/bg-pattern-top-desktop.svg)",
        'bottom':"url('/images/bg-pattern-bottom-desktop.svg)",
      }
    },
  },
  plugins: [],
}
