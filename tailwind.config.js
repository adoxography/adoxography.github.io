module.exports = {
  theme: {
    textShadow: {
      glow: '0 0 5px rgba(255, 255, 255, 0.5)'
    },

    extend: {
      fontFamily: {
        'display': ['"Inria Sans"', 'sans-serif'],
        'body': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },

      zIndex: {
        '-10': '-10'
      }
    },
  },
  variants: {
    textShadow: ['responsive', 'hover', 'focus']
  },
  plugins: [
    require('tailwindcss-typography')()
  ],
}
