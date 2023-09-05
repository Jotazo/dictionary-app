/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        interBold: ['InterBold', 'sans-serif'],
        lora: ['Lora', 'serif'],
        inconsolata: ['Inconsolata', 'mono'],
        inconsolataBold: ['InconsolataBold', 'mono']
      },
      colors: {
        primaryDark: '#050505',
        secondaryDark: '#1f1f1f',
        primaryLightDark: '#2d2d2d',
        secondaryLightDark: '#3a3a3a',
        primaryGrey: '#757575',
        secondaryGrey: '#e9e9e9',
        lightGrey: '#f4f4f4',
        custWhite: '#ffffff',
        custPurple: '#a445ed',
        custRed: '#ff5252'
      }
    }
  },
  plugins: []
}
