import Vue from 'vue'
// require styles
import 'swiper/dist/css/swiper.css' 
if (process.browser) {
    const VueAwesomeSwiper = require('vue-swiper4/dist/ssr')
    Vue.use(VueAwesomeSwiper)
  }