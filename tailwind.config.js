/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2A4365', 
        secondary: '#68D391', 
        accent: '#EDF2F7', 
        background: '#F7FAFC', 
        textPrimary: '#1A202C', 
        textSecondary: '#718096', 
      },    
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },    
    },
  },
  plugins: [],
}

