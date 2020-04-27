module.exports = {
  theme: {
    textShadow: {
      glow: '0 0 5px rgba(255, 255, 255, 0.5)'
    },

    extend: {
      colors: {
        shade: {
          '10': 'rgba(0, 0, 0, .10)',
          '20': 'rgba(0, 0, 0, .20)',
          '30': 'rgba(0, 0, 0, .30)',
          '40': 'rgba(0, 0, 0, .40)',
          '50': 'rgba(0, 0, 0, .50)',
          '60': 'rgba(0, 0, 0, .60)',
          '70': 'rgba(0, 0, 0, .70)',
          '80': 'rgba(0, 0, 0, .80)',
          '90': 'rgba(0, 0, 0, .90)',
        },

        tint: {
          '10': 'rgba(255, 255, 255, .10)',
          '20': 'rgba(255, 255, 255, .20)',
          '30': 'rgba(255, 255, 255, .30)',
          '40': 'rgba(255, 255, 255, .40)',
          '50': 'rgba(255, 255, 255, .50)',
          '60': 'rgba(255, 255, 255, .60)',
          '70': 'rgba(255, 255, 255, .70)',
          '80': 'rgba(255, 255, 255, .80)',
          '90': 'rgba(255, 255, 255, .90)',
        }
      },

      fontFamily: {
        'display': ['"Inria Sans"', 'sans-serif'],
        'body': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },

      zIndex: {
        '-10': '-10'
      },

      spacing: {
        '76': '20rem'
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
