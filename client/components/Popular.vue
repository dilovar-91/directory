<template>
    <section class="py-4 bg-gray-100"> 
      <div class="container">
        <div class="text-center pb-lg-4">
          <p class="subtitle text-secondary">{{$t('select-company')}}</p>
          <h2 class="mb-5">{{$t('popular')}}</h2>
        </div>
      </div>
      <div class="container-fluid">
        <!-- Slider main container-->
        <client-only>
        <div v-swiper:mySwiper="swiperOption" class="swiper-container swiper-container-mx-negative items-slider-full px-lg-5">
          <!-- Additional required wrapper-->
          <div class="swiper-wrapper pb-5">
            <!-- Slides-->
            <div class="swiper-slide h-auto px-2" v-for="company in topCompanies.data" :key="company.id">
              <!-- venue item-->

<div data-marker-id="59c0c8e33b1527bfe2abaf92" class="w-100 h-100 hover-animate">
                <div class="card h-100 border-0 shadow">
                  <div class="card-img-top overflow-hidden gradient-overlay"> <img :src="'/img/companies/'+company.pictures[0]" alt="Modern, Well-Appointed Room" class="img-fluid" style="height: 166px;"><router-link :to="'/category/'+company.category['id']" class="tile-link"></router-link>
                    <div class="card-img-overlay-bottom z-index-20">
                      <div class="media text-white text-sm align-items-center"><img :src="'/img/icon/'+(company.category['icon'] ||  'ico-car.png')" class="avatar avatar-border-white mr-2">
                        <div class="media-body">{{company.category['name'] || ''}}</div>
                      </div>
                    </div>
                    
                  </div>
                  <div class="card-body d-flex align-items-center">
                    <div class="w-100">
                      <h6 class="card-title"><router-link :to="'/company/'+company.id"  class="text-decoration-none text-dark">{{company.title}}</router-link></h6>
                      <div class="d-flex card-subtitle mb-3">
                        <p class="flex-grow-1 mb-0 text-muted text-sm">Оценка салона: {{company.ratings_average || 0}}</p>
                        <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                        </p>
                      </div>
                      <p class="card-text text-muted">Город: {{company.city['name'] || ''}}</p>
                      <router-link :to="'/company/'+company.id" class="btn btn-outline-primary font-weight-bold router-link-active">               
                Перейти отзывам
          </router-link>
                    </div>
                  </div>
                </div>
              </div>

              </div>

            
          </div>
          <!-- If we need pagination-->
          <div class="swiper-pagination"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </div>
        </client-only>
        <div class="text-center mt-5">
          <router-link :to="{ name: 'companies' }" class="btn btn-outline-primary font-weight-bold" >               
                {{$t('go-to-all')}}
          </router-link>        
        </div>
      </div>
    </section>   
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    
    data () {
      return {        
        swiperOption: {
        slidesPerView: 6,
        spaceBetween: 25,
        loop: true,
        roundLengths: true,
        breakpoints: {
            1600: {
                slidesPerView: 5
            },
            1400: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 3
            },
            565: {
                slidesPerView: 2
            },
            400: {
                slidesPerView: 1
            }
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false
          }

        
        }
      }
    },

    beforeCreate() {      
      this.$store.dispatch('company/getTopCompanies')
    },

    computed: mapGetters({      
    topCompanies: 'company/topCompanies',    
  }),

  filters: {
    truncate(string, value) {
      return (string || '').substring(0, value) + '…'
    }
  }
    
  }
</script>