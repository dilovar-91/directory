<template>
  <div v-swiper:mySwiper="swiperOption" @someSwiperEvent="callback">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        banners: [ '/img/photo/barcelona.jpg', '/img/photo/new-york.jpg', '/img/photo/paris.jpg', '/img/photo/prague.jpg' ],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          // some swiper options...
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.banners.push('/img/photo/paris.jpg')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper, 
        'It will slideTo banners 3')
      //this.mySwiper.slideTo(3, 1000, false)
    },
    methods: {
        callback() {


        }


    }
  }
</script>
