/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ink: '#161616',
        cream: '#fffdf9',
        mint: '#c7ecd4',
        'mint-dark': '#a9dfba',
        pink: '#f6c7dd',
        coral: '#f16a58',
        violet: '#7c4fe0',
        sand: '#f4f2ee',
      },
      fontFamily: {
        display: ['"Baloo 2"', '"Comic Sans MS"', 'cursive'],
        body: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
