// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "nuxt-windicss"],
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
		},
		highlight: {
			theme: "dracula-soft",
		},
	},
	css: [
		'~/assets/css/style.css'
	]
});
