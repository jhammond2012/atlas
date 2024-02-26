module.exports = {
  mode: 'jit',
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        'wine': "#F8F1DE"
      },
      fontFamily: {
        'rama': ['rama-gothic-m', 'sans-serif'],
        'freight': ['freightdispcmp-pro', 'serif'],
        'proxima': ['proxima-nova', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
