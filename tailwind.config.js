/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            comic: ['ComicSans', 'sans-serif'],
            luckiest: ['LuckiestGuy', 'sans-serif'],
            groboldov: ['Groboldov', 'sans-serif']
         }
      },
      keyframes: {
         fade: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
         }
      },
      animation: {
         fade: 'fade 0.5s ease-in-out'
      }
   },
   plugins: []
};
