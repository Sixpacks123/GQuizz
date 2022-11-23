const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './index.html',
      './src/**/*.{vue,js,ts}',
      // etc.
    ],
  },
  theme: {
    extend: {
      colors: {
        'regal-blue': '#359f9d',
        'jaune' : '#fcba03',
        'jaune-grey' : '#B79900',
        'level1': '#CABF0C',
        'level2': '#d8602e'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        bha: ['Bahnschrift'],
        paint:['Finger Paint']

      }, animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      backgroundImage: {
        'footer-texture': "url('/img/logos/plateau.png')",
      },
      variants: {
        animation: ["motion-safe"]
    }
    },
  },
}
