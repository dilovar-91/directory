<template>
<div class="bg-white">
<section>
      <!-- Slider main container-->
      <div v-swiper:mySwiper="swiperOption" class="swiper-container detail-slider slider-gallery">
        <!-- Additional required wrapper-->
        <div class="swiper-wrapper">
          <!-- Slides-->
          <div class="swiper-slide"><a href="/img/photo/photo-1426122402199-be02db90eb90.jpg" data-toggle="gallery-top" title="Our street"><img src="/img/photo/photo-1426122402199-be02db90eb90.jpg" alt="Our street" class="img-fluid"></a></div>
          <div class="swiper-slide"><a href="/img/photo/photo-1512917774080-9991f1c4c750.jpg" data-toggle="gallery-top" title="Outside"><img src="/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="Outside" class="img-fluid"></a></div>
          <div class="swiper-slide"><a href="/img/photo/photo-1494526585095-c41746248156.jpg" data-toggle="gallery-top" title="Rear entrance"><img src="/img/photo/photo-1494526585095-c41746248156.jpg" alt="Rear entrance" class="img-fluid"></a></div>
          <div class="swiper-slide"><a href="/img/photo/photo-1484154218962-a197022b5858.jpg" data-toggle="gallery-top" title="Kitchen"><img src="/img/photo/photo-1484154218962-a197022b5858.jpg" alt="Kitchen" class="img-fluid"></a></div>
          <div class="swiper-slide"><a href="/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" data-toggle="gallery-top" title="Bedroom"><img src="/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="Bedroom" class="img-fluid"></a></div>
          <div class="swiper-slide"><a href="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" data-toggle="gallery-top" title="Bedroom"><img src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="Bedroom" class="img-fluid"></a></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
      </div>
    </section>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8"> 
          <div class="text-block">
            <p class="text-primary"><i class="fa-map-marker-alt fa mr-1"></i> {{company.city['name']}}, {{company.metro['name']+',' || '' }}  {{company.adress || '' }}</p>
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
          <div class="text-block">
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
      :balloon-template="balloonTemplate(company.id, company.title, company.pictures, company.adress)"              
      :icon="{
            layout: 'default#image',
            imageHref: '/img/car-point.png',
            imageSize: [55, 55],
            imageOffset: [-15, -35],               
        }"  
         
    />    
  </yandex-map>
 </client-only> 
            </div>
          </div>          
          <div class="text-block">            
            <h5 class="mb-4 subtitle text-sm text-primary">{{$t('reviews')}}</h5>
            <div class="media d-block d-sm-flex review" v-for="review in reviews" :key="review.id">
              <div class="text-md-center mr-4 mr-xl-5"><img src="/img/avatar/avatar-8.jpg" alt="Padmé Amidala" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">{{ review.author }}</span></div>
              <div class="media-body">
                <h4 class="mb-0 text">Заголовок: {{review.title || ''}} <span class="float-right" ><i class="fa fa-heart fa mr-1" style="color:red;" @submit.prevent="setLike(review.id)" ></i>{{review.recomend_count }}</span></h4>
                <HeartButton></HeartButton>           
                <p class="font-weight-bold mb-0">Дата: {{ $moment(review.created_at).utc().format('DD/MM/YYYY HH:mm')  }}</p>
                <p class="text-success font-weight-bold mb-0">Преимущество: {{review.pros || ''}}</p>
                <p class="text-danger font-weight-bold">Недостатки: {{review.cons || ''}}</p>               
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm" v-text="review.text"></p>
              </div>
            </div>
            <div class="py-5">
              <button type="button" data-toggle="collapse" data-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview" class="btn btn-outline-primary">Leave a review</button>
              <div id="leaveReview" class="collapse mt-4">
                <h5 class="mb-4">Leave a review</h5>
                <form id="contact-form" method="get" action="#" class="form">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="name" class="form-label">Your name *</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required="required" class="form-control">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="rating" class="form-label">Your rating *</label>
                        <select name="rating" id="rating" class="custom-select focus-shadow-0">
                          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                          <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                          <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                          <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                          <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">Your email *</label>
                    <input type="email" name="email" id="email" placeholder="Enter your  email" required="required" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="review" class="form-label">Review text *</label>
                    <textarea rows="4" name="review" id="review" placeholder="Enter your review" required="required" class="form-control"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Post review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div style="top: 100px;" class="p-4 shadow ml-lg-4 rounded sticky-top">
            <p class="text-muted"><span class="text-primary h2">$120</span> per night</p>
            <hr class="my-4">
            <form id="booking-form" method="get" action="#" autocomplete="off" class="form">
              <div class="form-group">
                <label for="bookingDate" class="form-label">Your stay *</label>
                <div class="datepicker-container datepicker-container-right">
                  <input type="text" name="bookingDate" id="bookingDate" placeholder="Choose your dates" required="required" class="form-control">
                </div>
              </div>
              <div class="form-group mb-4">
                <label for="guests" class="form-label">Guests *</label>
                <select name="guests" id="guests" class="form-control">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                </select>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Book your stay</button>
              </div>
            </form>
            <p class="text-muted text-sm text-center">Some additional text can be also placed here.</p>
            <hr class="my-4">
            <div class="text-center">
              <p> <a href="#" class="text-secondary text-sm"> <i class="fa fa-heart"></i> Bookmark This Listing</a></p>
              <p class="text-muted text-sm">79 people bookmarked this place </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
//import AddReview from '~/components/AddReview'
import HeartButton from '~/components/HeartButton'
export default {
layout: "main", 
  components: {
    //AddReview,
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
  async fetch({store, params: { id, page }}) {     
    await store.dispatch("company/fetch_item", {id})
    await store.dispatch("review/fetch_item", {id})  
  },
  methods: {
      makeArray(keywords){            
            console.log(keywords)
            return keywords.split(",");
      },
      setLike(id){            
        store.dispatch("review/setLike", {id})  
      },
      
      goToCompany: function (id = 'empty') {   
          window.open("/company/" + id, "_blank");    
          //this.$router.push("/company/" + slug)
      },
      balloonTemplate: function(id=null, title='', pic=null, adress=null) {
      return `<a href="/company/`+id+`">
        <h4 class="warning-text" @click="goToCompany()">`+ title + ', ' + adress +`</h4>
        <img src="/img/company/`+ pic[0] +`" width="350px">
      </a>`
      }         
  }
  
}
</script>
<style scoped>
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