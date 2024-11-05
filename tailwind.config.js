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
      }
   },
   plugins: []
};
