/** @type {import('tailwindcss').Config} */

module.exports = {
 content: [
   "./src/**/*.{js,jsx,ts,tsx}",
   "./public/index.html",
 ],
 theme: {
      colors: {
        primary: "#2b3087",
        secondary: "#1faefc",
        teritiary: "#373eae",
        orange: "#ff892d",
        red: "#ff0000",
        "dark-grey": "#6b7688",
        "light-grey": "#edf2f8",
      },
     },
     fontFamily: {
       // Polices personnalisées
       'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
       'serif': ['ui-serif', 'Georgia'],
       'mono': ['ui-monospace', 'SFMono-Regular'],
       'outfit':['Outfit', sans-serif]
     },
     spacing: {
       // Espacements personnalisés
       '18': '4.5rem',
       '88': '22rem',
     },
     borderRadius: {
       // Rayons personnalisés
       '4xl': '2rem',
     },
     animation: {
       // Animations personnalisées
       'fade-in': 'fadeIn 0.5s ease-in-out',
       'slide-up': 'slideUp 0.3s ease-out',
     },
     keyframes: {
       fadeIn: {
         '0%': { opacity: '0' },
         '100%': { opacity: '1' },
       },
       slideUp: {
         '0%': { transform: 'translateY(10px)', opacity: '0' },
         '100%': { transform: 'translateY(0)', opacity: '1' },
       },
     },
   }

 
