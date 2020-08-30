module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".line-clamp": {
          'display': '-webkit-box',
          'overflow': 'hidden',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          'overflow': 'hidden',
          'max-height': '75px'
        },
        ".l-grid-cols" : {
          'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))'
        }
      };

      addUtilities(newUtilities);
    }
  ]
};
