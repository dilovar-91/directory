<template>
<div class="bg-white">  
<VGallery :images="addUrl(company.pictures, company.is_company)" :index="index" @close="index = null" />
  <section :style="'background-image: url('+(company.is_company == 1 ? '/img/companies/' : '/img/products/')+company.pictures[0]+');'" class="pt-7 pb-5 d-flex align-items-end dark-overlay bg-cover">
     <div class="container overlay-content">
        <div class="d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-end">
          <div class="text-white mb-4 mb-lg-0">
            <div class="badge badge-pill badge-transparent px-3 py-2 mb-4"><router-link :to="'/category/'+company.category['slug']" class="text-decoration-none">{{company.category['name'] || ''}}</router-link></div>
            <h1 class="text-shadow verified text-shadow">{{company.title}}</h1>
            <BreadCrumb :title="company.title" parent="Категории" parent_url="categories" :category="company.category['name']" :category_slug="company.category['slug']" />
            <p v-if="company.is_company == 1" class="mt-3"><i class="fa-map-marker-alt fas mr-2"></i> {{company.city['name'] || ''}}, <span v-if="company.metro !== null">{{company.metro['name'] + ',' || '' }}</span>  {{company.properties.adress || '' }}</p>
            <p class="mb-0 d-flex align-items-center"><star-rating :rating="company.avg_rating" :star-size="17" :read-only="true" :show-rating="false" active-color="yellow" :glow="3"  ></star-rating> <span class="ml-2 mt-1">{{company.review_count || 0}} отзывов</span></p>
          </div>
          <div class="calltoactions"><a href="#addReview" class="btn btn-primary">{{$t('write-review')}}</a></div>
        </div>
      </div>
    </section>
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-7"> 
          <div class="text-block">
       <h6 class="mb-3 mt-2 ">{{$t('description')}}</h6>
            <p class="text-muted font-weight-light text-justify ">{{company.description}}</p>
          </div>
          
          <div class="text-block" v-if="company.keyword">
            <h4 class="mb-0 mb-2">{{$t('keywords')}}</h4>            
            <ul class="list-inline">             
              <li class="list-inline-item mb-2" v-for="keyword in makeArray(company.keywords)" :key="keyword"><span class="badge badge-pill badge-light p-3 text-muted font-weight-normal"><i class="fa fa-check text-primary"></i><router-link :to="'/search?keyword='+keyword"> {{keyword}}</router-link></span></li>
            </ul>
          </div>
          <div class="text-block" v-if="company.properties && company.properties.latitude">
            <h5 class="mb-4">{{$t('company-in-map')}}</h5>
            <div class="map-wrapper-300 mb-3">              
<client-only>
<yandex-map 
    :coords="[company.properties.latitude, company.properties.longitude]"     
    zoom="13"
    :controls= "['zoomControl']"
    :scroll-zoom="false"
    style="height: 500px; display:block;"
    class="h-100"    
  >
    <ymap-marker 
      :coords="[company.properties.latitude, company.properties.longitude]" 
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
              <!-- Gallery-->
              <h3 class="mb-4">Галерея</h3>
              <div class="row gallery ml-n1 mr-n1">
                <div class="col-lg-4 col-6 px-1 mb-2" v-for="(thumb, imageIndex) in company.pictures" :key="imageIndex" @click="index = imageIndex"><img :src="(company.is_company == 1 ? '/img/companies/' : '/img/products/')+thumb" alt="..." class="img-fluid img-thumbnail" style="height: 150px;"></div>
              </div>
            </div>          
          <div class="text-block">            
            <h5 class="mb-4 subtitle text-sm text-primary" id="reviewform"  v-if="reviews.length>0">{{$t('reviews')}}</h5>
            <h5 class="mb-4 subtitle text-sm text-primary" id="addReview"  v-else>{{$t('write-first-review')}}</h5>
            <div class="media d-block d-sm-flex review" v-for="review in reviews" :key="review.id">
              <div class="text-md-center mr-3 mr-xl-3 col-3"><img src="/img/user-pic.png" :alt="review.author" class="d-block avatar avatar-xl p-2 mb-2"><span class="text-uppercase text-muted text-sm">{{ review.author }}</span></div>
              <div class="media-body">
                <h4 class="mb-0 text">Заголовок: {{review.title || ''}} <span class="float-right" ><i class="fa fa-heart pulse" style="color:red;"  @click.prevent="setLike($event, review.id)" ></i> {{review.recomend_count }}</span></h4>
                <p class="font-weight-bold mb-0">Дата: {{ $moment(review.created_at).utc().format('DD/MM/YYYY HH:mm')  }} </p>
                <p class="text-success font-weight-bold mb-0">Преимущество: {{review.pros || ''}}</p>
                <p class="text-danger font-weight-bold mb-0">Недостатки: {{review.cons || ''}}</p>               
                <div class="mb-2">
                  <star-rating :rating="review.rating" :star-size="20" :read-only="true" :show-rating="true" active-color="#007bff" border-color="#007bff" :glow="2" ></star-rating> 
                </div>
                <p class="text-muted text-sm" v-text="review.text"></p>
              </div>
            </div>
            <div id="addReview">
            <AddReview :company_id="company.id"></AddReview>
            </div>
          </div>
         
        </div>
        <div class="col-lg-5">
          <CompanyInfo v-if="company.is_company == 1"  :info="company" />
          <InfoBar v-else :info="company" />
        </div>
      </div>
       
    </div>
    <Similar :title="company.title"></Similar>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddReview from '~/components/AddReview'
import HeartButton from '~/components/HeartButton'
import Similar from '~/components/Similar'
import BreadCrumb from '~/components/BreadCrumb'
import InfoBar from '~/components/InfoBar'
import CompanyInfo from '~/components/CompanyInfo'
export default {
layout: "main", 
  components: {
   AddReview,
   HeartButton,
   Similar,
   BreadCrumb,
   InfoBar,
   CompanyInfo,
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
            dynamicBullets: true,
            draggable: false
        },        
        } 
    
  }),
  computed: {
    ...mapGetters({
    authenticated: 'auth/check',
    company: 'company/listing',
    reviews: 'review/reviews',
    total_items: 'review/total_items',
    }), 
    id() {
      return Number(this.$route.params.id)
    },
  }, 
  async fetch({store, error, params: { id, page }}) {     
    await store.dispatch("company/fetch_listing", {id}).catch((e)=>
      error({statusCode: 404, message: 'This page could not be found'})      
      ) 
    await store.dispatch("review/fetch_item", {id})  
  },
  methods: {
      makeArray(keywords){
            return keywords.split(",");
      },
      addUrl(pictures, is_company){
        const result = [];
            for (var x in pictures) {
              result.push(
               (is_company == 1 ? '/img/companies/':'/img/products/')+pictures[x]
              )             
           }
           return result
      },
      
      setLike(e, id){   
         //console.log(id)       
        this.$store.dispatch("review/setLike", {id: id})
        e.preventDefault()  
      },

      scrollToEnd: function() {    	
      var container = this.$el.querySelector("#leaveReview");
      container.scrollTop = container.scrollHeight;
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
.text-shadow {
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: white;
}
</style>