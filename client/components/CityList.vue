<template> 

  <div v-swiper:mySwiper="swiperOption" class="guides-slider" >
    <div class="swiper-wrapper pb-5">
      <div class="swiper-slide h-auto px-2" v-for="city in cities" :key="city.id">
      <div class="card card-poster gradient-overlay mb-4 mb-lg-0"><router-link :to="{ name : 'city-detail', params : { slug : city.slug, id : city.id } }" class="tile-link"></router-link><img :src="'/img/cities/'+city.pic" :alt="city.name" class="bg-image rounded">
                  <div class="card-body overlay-content">
                    <h6 class="card-title text-shadow text-uppercase">{{city.name}}</h6>                    
                  </div>
                </div>
      </div>
    </div>
    <div class="swiper-pagination swipe r-pagination-bullets"></div>
  </div>
  
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        
        swiperOption: {
          loop: true,
          slidesPerView: 5,          
          roundLengths: true,
          spaceBetween: 1,
          centeredSlides: false,
          breakpoints: {
            1200: {
                slidesPerView: 5
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
      }
    },

    beforeCreate() {
      this.$store.dispatch('city/getcities')
      this.$store.dispatch('company/getTopCompanies')
    },
    computed: mapGetters({    
    cities: 'city/cities',    
    TopCompanies: 'company/topCompanies',    
  })
    
  }
</script>
<style scoped>
.gradient-overlay .overlay-content {
    position: relative;
    z-index: 20;
}

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: .4rem;
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
}

.text-uppercase {
    text-transform: uppercase !important;
}
.card-title {
    margin-bottom: .75rem;
}
.text-shadow {
    text-shadow: 2px 2px 2px rgba(0,0,0,0.1);
}

.card-poster {
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: end;
    /* align-items: flex-end; */
    /* color: #fff; */
    border: none;
    overflow: hidden;
    box-shadow: -1 0 0.25rem rgba(0,0,0,0.075);
    min-height: 350px;
}

</style>