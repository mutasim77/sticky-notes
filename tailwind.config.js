module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};