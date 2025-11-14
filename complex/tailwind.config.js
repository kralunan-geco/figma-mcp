/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#F48522',
        },
        secondary: {
          red: '#EC1C24',
        },
        text: {
          default: '#333333',
          gray: '#757575',
        },
        bg: {
          white: '#FFFFFF',
          gray: '#F9F9F9',
        },
      },
      fontFamily: {
        'noto-sans': ['Noto Sans JP', 'sans-serif'],
        'sf-pro': ['SF Pro Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
