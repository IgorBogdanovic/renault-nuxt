module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'renault-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Renault Nuxt.js-CMS project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070', height: '3px', duration: 5000 },
  css: [
    { lang: 'scss', src: '~assets/scss/main.scss' }
  ],
  /*
  ** Build configuration
  */
  plugins: [
    '~/plugins/api',
    '~/plugins/core-components',
    '~/plugins/vuelidate',
    '~/plugins/vue-slick',
    '~/plugins/thumbor'
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],

  toast: {
    position: 'top-center',
    duration: '3000'
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/404/index.vue')
      });
    }
  },

  build: {
    vendor: ['axios'],
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend (config, { isServer }) {
      if (isServer) {
        config.externals += [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}
