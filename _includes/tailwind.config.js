module.exports = {
  theme: {
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif']
    },
    extend: {
      transitionProperty: {
        spacing: 'margin, padding'
      }
    }
  },
  variants: {
    padding: ['responsive', 'hover'],
    margin: ['responsive', 'hover']
  },
  plugins: []
};
