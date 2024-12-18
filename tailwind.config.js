/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        yellow: '#FFCC00',
        funkyYellow: '#CCA645',
        funkyBlack: '#0C0D0C',
        funkyGray: '#131212',
        funkyGold: '#AA8031',
        funkyGray2: '@515151',
      },
    },
  },
  plugins: [],
};
