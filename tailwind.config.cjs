const colors = require('tailwindcss/colors')
const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		colors: {
			orange: colors.orange,
			red: colors.red,
			blue: colors.blue,
		},
		extend: {
			
		},
	},
	plugins: [],
};

module.exports = config;
