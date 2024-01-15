// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vee-validate.js'
  ],
  modules: [
   ['@vee-validate/nuxt', {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
      },
    },
  ],
    '@pinia/nuxt',
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome'] 
  },
})
