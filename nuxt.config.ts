// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  extends: [
    '@gabortorma/nuxt-eslint-layer',
  ],

  modules: [
    './src/module',
  ],

  imports: {
    autoImport: false,
  },

  typescript: {
    builder: 'shared',
  },
})
