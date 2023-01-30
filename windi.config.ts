import { defineConfig } from 'windicss/helpers'
import colors from "windicss/colors"

export default defineConfig({
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
					DEFAULT: colors.teal[700],
				},
			},
			fontFamily: {
					sans: ['Lato','ui-sans-serif', 'system-ui'],
					serif: ['ui-serif', 'Georgia'],
					mono: ['ui-monospace', 'SFMono-Regular'],
					display: ['Oswald'],
					body: ['Open Sans'],
			},
			
		},
	},
	plugins: [require('windicss/plugin/typography'),require('windicss/plugin/filters')],
})
