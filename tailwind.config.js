/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{css,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'primary': {
        light: '#6533FF',
        DEFAULT: '#6533FF',
        dark: '#6533FF',
      },
      'secondary': {
        light: '#FBE4AB',
        DEFAULT: '#FBE4AB',
        dark: '#FBE4AB',
      },
      'neutral': {
        light: '#272727',
        DEFAULT: '#272727',
        dark: '#272727',
      },
    },
    extend: {},
  },
  plugins: [],
}