// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", '@nuxtjs/color-mode'],
	colorMode: {
		classSuffix: ''
	},
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
			remarkPlugins: ['remark-math'],
			rehypePlugins: ['rehype-katex', 'katex/dist/contrib/mhchem.js'],
		},
		highlight: {
			theme: "dracula-soft",
		},
	},
	css: [
		'~/assets/css/style.css',
		'katex/dist/katex.min.css'
	],
	app: {
		head: {
			script: [
			]
		}
	}
});
