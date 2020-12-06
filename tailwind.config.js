const colors = require("tailwindcss/colors");
module.exports = {
     purge: [],
     darkMode: false, // or 'media' or 'class'
     theme: {
          colors: {
               transparent: "transparent",
               current: "currentColor",
               bgColor: "#f5f6fa",
               border: "#31363A",
               robin: "#5ac538",
               black: colors.black,
               white: colors.white,
               gray: colors.coolGray,
               red: colors.red,
               yellow: colors.amber,
               green: colors.emerald,
               blue: colors.blue,
               indigo: colors.indigo,
               purple: colors.violet,
               pink: colors.pink,
          },
          screens: {
               "2xl": { max: "1535px" },
               // => @media (max-width: 1535px) { ... }

               xl: { max: "1279px" },
               // => @media (max-width: 1279px) { ... }

               lg: { max: "1023px" },
               // => @media (max-width: 1023px) { ... }

               md: { max: "767px" },
               // => @media (max-width: 767px) { ... }

               sm: { max: "639px" },
               // => @media (max-width: 639px) { ... }
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
};
