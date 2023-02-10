// https://v3.nuxtjs.org/api/configuration/nuxt.config
import rehypeKatex from 'rehype-katex'

export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", '@nuxtjs/color-mode', '@nuxtjs/robots', 'nuxt-simple-sitemap'],
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
			rehypePlugins: ['rehype-katex','katex/dist/contrib/mhchem.js'],
		},
		highlight: {
			theme: "dracula-soft",
		},
		locales: ['id']
	},
	css: [
		'~/assets/css/style.css',
		'katex/dist/katex.min.css'
	],
	app: {
		head: {
			script: [{
				src:process.env.GOOGLE_TAG_URL || '',
				async:"true"
			},
			{
				children: "window.dataLayer = window.dataLayer || []\; function gtag(){dataLayer.push(arguments)\;} gtag('js', new Date())\; gtag('config', 'G-S0SBT7P649')\;"
			}
			]
		}
	},
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://kelasmipa.com',
		}
	},
	vue: {
		compilerOptions: {
			isCustomElement: ((tag) => ["Annotation"].includes(tag))
		}
	},
});
