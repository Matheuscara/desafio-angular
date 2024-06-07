

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        background: '#F7F8FA',
        primary: '#6691FF',
        title: '#252933',
        subtitle: '#A8A2B4',
        text: '#5A5460',
        placeholder: '#a8a2b4'
      },
      borderRadius: {
        'xl': '1rem',
      },
      borderColor: {
        subtitle: '#D1D5DB',
      },
      borderOpacity: {
        50: '0.5',
      },
    },
  },
  plugins: [],
};