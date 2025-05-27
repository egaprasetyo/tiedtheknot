// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css'],

  fonts: {
    provider: 'google',
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
})