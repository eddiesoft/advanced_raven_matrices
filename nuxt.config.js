import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/advanced_raven_matrices/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Raven\'s Advanced Progressive Matrices | IQ Test Online Free',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Raven\'s Advanced Progressive Matrices is a highly trusted cognitive assessment that helps to measure an individual’s level of general ability by specifically assessing non-verbal abstract reasoning skills that are required for success in many job roles or training courses through the use of abstract reasoning tests' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'H3bSPAPxpyKN4qJf0CJHKOw5bkZv_2aF7CottaDpjr0' },
   
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/advanced_matrices_web/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://eddiesoft.github.io/advanced_matrices_web/',
    gzip: true,
    exclude: [
      '/test',
      '/result',
      '/mistakes', 
    ],
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.lighten2,
          accent: colors.grey.lighten3,
          secondary: colors.amber.lighten3,
          info: colors.teal.darken1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  loading: {
    color: '#2895EC',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
