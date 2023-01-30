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
			rehypePlugins: ['rehype-mathjax'],
		},
		highlight: {
			theme: "dracula-soft",
		},
	},
	css: [
		'~/assets/css/style.css',
	]
});
