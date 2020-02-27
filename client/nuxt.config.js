require('dotenv').config()
const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

module.exports = {
  //mode: 'spa', // Comment this for SSR

  srcDir: __dirname,

  env: {
    apiUrl: process.env.API_URL || process.env.APP_URL+'/api',
    appName: process.env.APP_NAME || 'DIrectory app',
    appLocale: process.env.APP_LOCALE || 'ru',
    githubAuth: !!process.env.GITHUB_CLIENT_ID
  },

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s - ' + process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }, 
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    bodyAttrs: {
      style: 'padding-top: 72px;'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700' }, 
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity:'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin:'anonymous'},
      { rel: 'stylesheet', href: '/css/magnific-popup.css'},
    ]
    ,
    script: [      
        { src: '/js/jquery.min.js', defer: true },                
        { src: '/js/jquery.magnific-popup.min.js', defer: true },
        { src: '/js/theme.js', defer: true },       
             
    ]    
  },

  loading: { color: '#007bff' },

  router: {
    middleware: ['locale', 'check-auth']
  },

  css: [
    { src: '~assets/sass/app.scss', lang: 'scss' },
    { src: 'swiper/dist/css/swiper.css'},
  ], 

  plugins: [
    '~components/global',    
    '~/plugins/i18n',
    '~plugins/vform',
    '~plugins/axios',
    '~plugins/fontawesome',
    { src: '~/plugins/cool-lightbox', ssr: false },
    //'~plugins/nuxt-client-init', // Comment this for SSR
    { src: '~plugins/bootstrap', mode: 'client' },
    { src: '~plugins/swiper.js', mode: 'client' },
    { src: '~plugins/vue-select.js', mode: 'client' },
    { src: '~plugins/vue-star-rating', mode: 'client' },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/router', 
    '@nuxtjs/moment',     
    ['vue-yandex-maps/nuxt', {
      apiKey: 'a902bc85-efc1-4908-9b11-5f84a3316883',
      lang: 'ru_RU',
      coordorder: 'latlong',
      version: '2.1'
    }
    ]  
  ],

  build: {
    extractCSS: true
  },

  axios: {
    baseURL: 'http://directory'
  },

  hooks: {
    generate: {
      done (generator) {
        // Copy dist files to public/_nuxt
        if (generator.nuxt.options.dev === false && generator.nuxt.options.mode === 'spa') {
          const publicDir = join(generator.nuxt.options.rootDir, 'public', '_nuxt')
          removeSync(publicDir)
          copySync(join(generator.nuxt.options.generate.dir, '_nuxt'), publicDir)
          copySync(join(generator.nuxt.options.generate.dir, '200.html'), join(publicDir, 'index.html'))
          removeSync(generator.nuxt.options.generate.dir)
        }
      }
    }
  }
}
