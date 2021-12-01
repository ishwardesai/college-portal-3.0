module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nav-active': '#5E3FC6',
        'nav-inactive': '#ACB1BB',
        green: {
          light: '#EAF9E6',
        },
        peach: '#F5EDE7',
        orange: '#f37658',
        'blue-card': '#5e3ec5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
