const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  //   darkMode: 'media', // 'media' or 'class' to enable dark mode support
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      inset: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '5/5': '100%',
      },
      zIndex: {
        '-10': '-10',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
