<template>
<div class="bg-white">  
  

<section>
  <div class="lightbox-image">
  <LightGallery
      :images="addUrl(company.pictures)"
      :index="index"
      :disable-scroll="true"
      @close="index = null"
      class="lightbox-image"
    />
    </div>
      <!-- Slider main container-->
      <div v-swiper:mySwiper="swiperOption" class="swiper-container detail-slider slider-gallery">
        <!-- Additional required wrapper-->
        <div class="swiper-wrapper">

          <!-- Slides-->
          <div class="swiper-slide" v-for="(thumb, thumbIndex) in company.pictures" :key="thumbIndex"
        @click="index = thumbIndex">
            <!--<a :href="'/img/companies/'+pic"  data-toggle="gallery-top">-->
            <img :src="'/img/companies/'+thumb" :alt="company.title" class="border pic img-fluid" >
            <!--</a>-->
          </div>

          
        </div>
        <!--<div class="swiper-pagination swiper-pagination-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>-->
      </div>
    </section>
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-7"> 
          <div class="text-block">
            <p class="text-primary"><i class="fa-map-marker-alt fa mr-1"></i> {{company.city['name'] || ''}}, <span v-if="company.metro !== null">{{company.metro['name'] + ',' || '' }}</span>  {{company.adress || '' }}</p>
            <h1>{{company.title}}</h1>
            <p class="text-muted text-uppercase mb-4">{{company.category['name'] || ''}}</p>
           
            
            <h6 class="mb-3 ">{{$t('description')}}</h6>
            <p class="text-muted font-weight-light text-justify ">{{company.description}}</p>
          
          </div>
          <div class="text-block">
            <h4 class="mb-4">{{$t('contact')}}</h4>
            <div class="row"> 
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><i class="fa fa-phone text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">{{$t('phone')}}:{{company.tell}}</span></li>
                  <li class="mb-2"><i class="fa fa-tv text-secondary w-1rem mr-3 text-center"></i> <span class="text-sm">{{$t('website')}} :<a :href="company.website" target="_blank"> {{ company.website}}</a></span></li>
                
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><i class="fa fa-envelope text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">{{$t('email')}} :<a :href="'mailto:'+company.email" target="_blank"> {{ company.email}}</a></span></li>
                  <li class="mb-2"><i class="fa fa-briefcase text-secondary w-1rem mr-3 text-center"></i><span class="text-sm">{{$t('job-schedule')}}: {{company.job_schedule}}</span></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div class="text-block" v-if="company.keywords !== null">
            <h4 class="mb-0 mb-2">{{$t('keywords')}}</h4>            
            <ul class="list-inline">             
              <li class="list-inline-item mb-2" v-for="keyword in makeArray(company.keywords)" :key="keyword"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal"><i class="fa fa-check text-primary"></i><router-link :to="'/search?keyword='+keyword"> {{keyword}}</router-link></span></li>
            </ul>
          </div>
          <div class="text-block">
            <h5 class="mb-4">{{$t('company-in-map')}}</h5>
            <div class="map-wrapper-300 mb-3">              
<client-only>
<yandex-map 
    :coords="[company.latitude, company.longitude]"     
    zoom="13"
    :controls= "['zoomControl']"
    :scroll-zoom="false"
    style="height: 500px; display:block;"
    class="h-100"    
  >
    <ymap-marker 
       
      :coords="[company.latitude, company.longitude]" 
      @click="goToCompany()"
      marker-id="123" 
      :hint-content="company.title"
      :icon="{
            layout: 'default#image',
            imageHref: '/img/car-marker.png',
            imageSize: [80, 70],
            imageOffset: [-15, -35],               
        }"  
         
    />    
  </yandex-map>
 </client-only> 
            </div>
          </div>          
          <div class="text-block">            
            <h5 class="mb-4 subtitle text-sm text-primary"  v-if="reviews.length>0">{{$t('reviews')}}</h5>
            <h5 class="mb-4 subtitle text-sm text-primary"  v-else>{{$t('write-first-review')}}</h5>
            <div class="media d-block d-sm-flex review" v-for="review in reviews" :key="review.id">
              <div class="text-md-center mr-4 mr-xl-4"><img src="/img/user-pic.png" alt="Padmé Amidala" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">{{ review.author }}</span></div>
              <div class="media-body">
                <h4 class="mb-0 text">Заголовок: {{review.title || ''}} <span class="float-right" ><i class="fa fa-heart pulse" style="color:red;"  @click.prevent="setLike($event, review.id)" ></i> {{review.recomend_count }}</span></h4>
                
                <!-- <HeartButton></HeartButton>            -->

                
                <p class="font-weight-bold mb-0">Дата: {{ $moment(review.created_at).utc().format('DD/MM/YYYY HH:mm')  }} </p>
                <p class="text-success font-weight-bold mb-0">Преимущество: {{review.pros || ''}}</p>
                <p class="text-danger font-weight-bold">Недостатки: {{review.cons || ''}}</p>               
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm" v-text="review.text"></p>
              </div>
            </div>
            <AddReview :company_id="company.id"></AddReview>
          </div>
        </div>
        <div class="col-lg-5">
          <div style="top: 100px;" class=" shadow ml-lg-4 rounded sticky-top">           


            
                <div class="card-header bg-gray-100 py-2 border-0">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <h4 class="subtitle text-primary text-center">{{$t('contact')}}</h4>
                      
                    </div>
                    <svg class="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-muted">
                      <use xlink:href="#wall-clock-1"> </use>
                    </svg>
                  </div>
                </div>
                <div class="card-body">
                  <table class="table text-sm mb-0">
                    <tbody><tr>
                      <th class="pl-0 border-0">{{$t('phone')}}</th>
                      <td class="pr-0 text-right border-0">{{company.tell}}</td>
                    </tr>
                    <tr>
                      <th class="pl-0">{{$t('website')}}</th>
                      <td class="pr-0 text-right">{{company.website}}</td>
                    </tr>
                    <tr>
                      <th class="pl-0">{{$t('email')}}</th>
                      <td class="pr-0 text-right">{{company.email}}</td>
                    </tr>
                    <tr>
                      <th class="pl-0">{{$t('job-schedule')}}</th>
                      <td class="pr-0 text-right">{{company.job_schedule}}</td>
                    </tr>
                    
                  </tbody></table>
                   <div class="text-center"><a :href="company.website" class="btn btn-outline-primary btn-block" target="_blank"> <i class="far fa-paper-plane mr-2"></i>{{$t('go-to-site')}}</a></div>
                
              
                <div class="text-block pb-3">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <h6> <a href="detail-rooms.html" class="text-reset">Modern Apt - Vibrant Neighborhood</a></h6>
                      <p class="text-muted text-sm mb-0">Entire home in New York</p>
                      <div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                      </div>
                    </div><a href="detail-rooms.html"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="" width="100" class="ml-3 rounded"></a>
                  </div>
                </div>
                <div class="text-block py-3">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-3"><i class="fas fa-users fa-fw text-muted mr-2"></i>3 guests</li>
                    <li class="mb-0"><i class="far fa-calendar fa-fw text-muted mr-2"></i>Apr 17, 2019 <i class="fas fa-arrow-right fa-fw text-muted mx-3"></i>Apr 18, 2019</li>
                  </ul>
                </div>
                <div class="text-block pt-3 pb-0">
                  <table class="w-100">
                    <tbody>
                      <tr>
                        <th class="font-weight-normal py-2">$432.02 x 1 night</th>
                        <td class="text-right py-2">$432.02</td>
                      </tr>
                      <tr>
                        <th class="font-weight-normal pt-2 pb-3">Service fee</th>
                        <td class="text-right pt-2 pb-3">$67.48</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="border-top">
                        <th class="pt-3">Total</th>
                        <td class="font-weight-bold text-right pt-3">$499.50</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>  

              <div class="card-footer bg-primary-light py-4 border-0">
                <div class="media align-items-center">
                  <div class="media-body">
                    <h6 class="text-primary">Flexible – free cancellation</h6>
                    <p class="text-sm text-primary opacity-8 mb-0">Cancel within 48 hours of booking to get a full refund. <a href="#" class="text-reset ml-3">More details</a></p>
                  </div>
                  <svg class="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-2 text-primary">
                    <use xlink:href="#diploma-1"> </use>
                  </svg>
                </div>
              </div>       
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddReview from '~/components/AddReview'
import HeartButton from '~/components/HeartButton'
export default {
layout: "main", 
  components: {
   AddReview,
   HeartButton,
  }, 

  head () {
    return { title: this.company.title + ', ' + this.company.adress,
    meta: [
        { hid: 'description', name: 'description', content: this.company.description }
    ],
    }
  },

  data: () => ({
    title: process.env.appName, 
    index: null, 
    swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            991: {
                slidesPerView: 4
            },
            565: {
                slidesPerView: 3
            }
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },        
        } 
    
  }),
  computed: {
    ...mapGetters({
    authenticated: 'auth/check',
    company: 'company/item',
    reviews: 'review/reviews',
    total_items: 'review/total_items',
    }), 
    id() {
      return Number(this.$route.params.id)
    },
  }, 
  async fetch({store, error, params: { id, page }}) {     
    await store.dispatch("company/fetch_item", {id}).catch((e)=>
      error({statusCode: 404, message: 'This page could not be found'})      
      ) 
    await store.dispatch("review/fetch_item", {id})  
  },
  methods: {
      makeArray(keywords){
            return keywords.split(",");
      },
      addUrl(pictures){
        const result = [];
            for (var x in pictures) {
              result.push({
                title: this.company.title,
                url: '/img/companies/'+pictures[x]
              })            
           }
           return result
      },
      
      setLike(e, id){   
         //console.log(id)       
        this.$store.dispatch("review/setLike", {id: id})
        e.preventDefault()  
      },
  }
  
}
</script>
<style scoped>

@media screen and (min-width: 320px) {
  .pic {
  height: 165px;
  }
}

@media screen and (min-width: 540px) {
  .pic {
  height: 190px;
  }
}

@media screen and (min-width: 768px) {
  .pic {
  height: 210px;
  }
}
@media screen and (min-width: 1200px) {
  .pic {
    height: 290px;
  }
}

@media screen and (min-width: 1400px) {
  .pic {
    width: 100%;
    height: 370px;
  }
}
.pulse {
  border-radius: 100%;  
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204,169,44, 0.4);
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -webkit-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
      box-shadow: 0 0 0 20px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}

.lightbox-image {   
   
    z-index: 1070 !important;
}

#lightbox-image {   
   
    z-index: 1070 !important;
}
</style>