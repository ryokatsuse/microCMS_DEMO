module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
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
          '-webkit-box-orient': 'vertical'
        }
      };

      addUtilities(newUtilities);
    }
  ]
};
