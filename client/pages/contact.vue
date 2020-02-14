<template>
<div>
<Hero></Hero>

    <Popular></Popular>
    
    <RecentReviews></RecentReviews> 

    <section class="py-5">
<div class="container">
<Swiper></Swiper>
</div>
</section>
</div>
</template>
<script>
import Swiper from '~/components/Swiper'
import Popular from '~/components/Popular'
import RecentReviews from '~/components/RecentReviews'
import Hero from '~/components/Hero'
import { mapGetters } from 'vuex'

export default {
  layout: 'main',
  components: {
      Swiper,
      Popular,
      RecentReviews,
      Hero
  },
  head () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: process.env.appName,
    swiperOption: {
          loop: true,
          slidesPerView: 5,          
          roundLengths: false,
          spaceBetween: 1,
          centeredSlides: true,
          breakpoints: {
            1200: {
                slidesPerView: 4
            },
            991: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            400: {
                slidesPerView: 1
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },         
        }
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 85px;
}

.laravel {
  color: #2e495e;
}

.nuxt {
  color: #00c48d;
}
  
</style>