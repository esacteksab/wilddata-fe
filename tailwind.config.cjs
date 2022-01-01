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
	variants: {
		extend: {
			backgroundColor: ['checked', 'unchecked'],
			borderColor: ['checked', 'unchecked'],

		}
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};

module.exports = config;
