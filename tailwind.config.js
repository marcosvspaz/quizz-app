module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
      },
      height: {
        '14': '3.6rem',
      },
      spacing: {
        '14': '3.6rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
