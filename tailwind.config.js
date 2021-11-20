module.exports = {
  purge: [
    './public/index.html',
    './src/*.jsx',
    './src/**/*.jsx'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      bottom: '0 6px 6px -8px #333',
      xl: '0 10px 30px -6px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
