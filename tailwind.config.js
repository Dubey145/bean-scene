/** @type {import('tailwindcss').Config} */
import {coffeeHero} from '../assets/images'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clicker: ["Clicker Script"],
        playfair: ["Playfair Display"]
      },
      backgroundImage: {
        heroBackground: "url('assets/images/coffee-hero.png')",
        coffeeBackground: "url('assets/images/coffee-background.png')"
      },
      colors:{
        'custom-yellow':'#F9C06A',
        coffee:'#6F4E37',
        gray:'#707070',
        'light-yellow': '#FFF9F1',
        footer:'#442808'
      }
    },
  },
  plugins: [],
};
