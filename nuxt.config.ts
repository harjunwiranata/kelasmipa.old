// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuefire from 'nuxt-vuefire'

export default defineNuxtConfig({
	modules: ["@nuxt/content",
		"@nuxtjs/tailwindcss",
		'@nuxtjs/color-mode',
		'@nuxtjs/robots',
		'nuxt-simple-sitemap',
		'nuxt-vuefire',
		'@nuxtjs/google-adsense'],
	colorMode: {
		classSuffix: ''
	},
	vuefire: {
		config: {
			apiKey: "AIzaSyAHyfFhuQhwjTWDaeDN0O2FnEI2PpmG5uA",
			authDomain: "kelasmipa-id.firebaseapp.com",
			projectId: "kelasmipa-id",
			storageBucket: "kelasmipa-id.appspot.com",
			messagingSenderId: "62139172073",
			appId: "1:62139172073:web:fee319c790027f0ab95c78",
			measurementId: "G-HHGQ5H0JQM"
		}
	},
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
			remarkPlugins: ['remark-math'],
			rehypePlugins: [['rehype-katex', {output: "htmlyar"}], 'katex/dist/contrib/mhchem.js'],
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
				src: process.env.GOOGLE_TAG_URL || '',
				async: "true"
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
			googleAdsense: {
				id: process.env.GOOGLE_ADSENSE_ID,
				testMode: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true'
			}
		},
	},
	vue: {
		compilerOptions: {
			isCustomElement: ((tag) => ["Annotation"].includes(tag))
		}
	},
	nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ]
    }
  }
});
