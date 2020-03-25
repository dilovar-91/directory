<template>
  <section class="py-7 pt-3 pb-3">
      <div class="container">
        <div class="text-center">
          <p class="subtitle text-primary">{{$t('recent-reviews')}}</p>
          <h2 class="mb-5">{{$t('recent-review-desc')}}</h2>
        </div>        
        <!-- Slider main container-->
        <client-only>
        <div v-swiper:mySwiper="swiperOption" class="testimonials-slider testimonials">
          <!-- Additional required wrapper-->
          <div class="swiper-wrapper pt-2 pb-5">
            <div  v-for="review in reviews.data" :key="review.id" class="swiper-slide px-3">
              <router-link :to="'/company/'+review.company['id']" class="text-decoration-none">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="/img/avatar/user.png" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">{{truncate(review.text || '', 160)}}</p><strong>{{review.author}}</strong>
                </div>
              </div>
               </router-link>
            </div>
          </div>
           <div class="swiper-pagination" slot="pagination"></div>
        </div>
        </client-only>
      </div>
    </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        swiperOption: {        
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        roundLengths: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            565: {
                slidesPerView: 1
            }
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
      }
      }
    },

    beforeCreate() {      
      this.$store.dispatch('review/get_latest')
    },

    computed: mapGetters({      
    reviews: 'review/latest',    
  }),
    
  }
</script>