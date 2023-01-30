const colors = require("tailwindcss/colors");

/**@type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./content/**/*.{md,yml,json,yaml,toml,csv}",
		"./app.vue",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.fuchsia[700],
					...colors.fuchsia,
					
				},
			},
			fontFamily: {
				sans: ["Lato","sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
