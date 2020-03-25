<template>
<section class="py-4"> 
      <div class="container">
       
          <p class="subtitle text-secondary">Похожие организации</p>
          <h2 class="mb-5">Вам также может понравиться</h2>
       
        <div v-swiper:mySwiper="swiperOption1" class="swiper-container swiper-container-mx-negative px-lg-5">
          <div class="swiper-wrapper pb-5">
            <div class="swiper-slide h-auto px-2" v-for="company in companies.data" :key="company.id">
              <!-- place item-->
              <div data-marker-id="59c0c8e39aa2edasd626e485d" class="w-100 h-100">
                <div class="card h-100 border-0 shadow">
                  <div class="card-img-top overflow-hidden gradient-overlay"> <img :src="'/img/companies/'+company.pictures[0]" :alt="company.title" style="height: 156px;" class="img-fluid"/><router-link :to="'/company/'+company.id" class="tile-link"></router-link>
                    <div class="card-img-overlay-bottom z-index-20">
                      <div class="media text-white text-sm align-items-center"><img :src="'/img/icon/'+(company.category['icon'] ||  'ico-car.png')" class="avatar avatar-border-white mr-2">
                        <div class="media-body">{{company.category['name']}}</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body d-flex align-items-center">
                    <div class="w-100">
                      <h6 class="card-title"><router-link :to="'/listing/'+company.id" class="text-decoration-none text-dark">{{company.title}}</router-link></h6>
                      
                      <p class="card-text text-muted">Город: {{company.city['name'] || ''}}</p>
                      <router-link :to="'/listing/'+company.id" class="btn btn-outline-primary font-weight-bold router-link-active">               
                К отзывам 
          </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- If we need pagination-->
          
           
        </div>
       <div class="swiper-scrollbar" slot="scrollbar"></div>
    </div> 
</section>
</template>
<script>
  
  import { mapGetters } from 'vuex'
  export default {
    props: {    
    title: {
      type: String,
      required: true,
      default: null
    }
    },  
    data () {
      return {
        swiperOption1: {        
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        roundLengths: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            565: {
                slidesPerView: 2
            }
        },

        // If we need pagination
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false
          }
      }
      }
    },

    beforeDestroy() {
      if (!this.$isServer) {
        window.removeEventListener("resize", this.getBrowserWidth);
      }
     },

    mounted() {      
      this.$store.dispatch('company/getRelatedCompanies', {title: this.title})
    },

    computed: mapGetters({      
    companies: 'company/companiesRelated',    
  }),
    
  }
</script>