export default defineNuxtConfig({
	css: ['~/assets/tailwind.css'],
	buildModules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
	nitro: {
		externals: {},
	},
})
