// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/device',
    'dayjs-nuxt',
    'nuxt-aos',
    '@nuxtjs/supabase'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  css: ['~/assets/css/main.css', '~/assets/css/transitions.css'],

  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/2rrf00fq0/tiedtheknot'
    }
  },

  fonts: {
    provider: 'google'
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },

  dayjs: {
    locales: ['id'],
    defaultLocale: 'id'
  },

  supabase: {
    redirect: false
  }
})
