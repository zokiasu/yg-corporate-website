// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", '@nuxtjs/i18n'],
  
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  
  build: {
    transpile: ['gsap'],
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('swiper'),
    },
  },

  css: ['~/assets/css/tailwind.css', 'swiper/swiper-bundle.css'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
})