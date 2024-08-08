module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #3333A3 5.09%, #121212 69.4%)',
        'liked-gradient': 'linear-gradient(180deg, #604EC1 5.09%, #121212 86.28%)',
      },
    },
  },
  plugins: [],
}
