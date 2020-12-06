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
     },
     variants: {
          extend: {},
     },
     plugins: [],
};
