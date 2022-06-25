const colors = require("tailwindcss/colors");
const config = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      orange: colors.orange,
      red: colors.red,
      blue: colors.blue,
      gray: colors.gray,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tw-elements/dist/plugin")],
};

module.exports = config;
