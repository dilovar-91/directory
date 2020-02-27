<template>
<div class="bg-white">
<client-only>
<!--<yandex-map 
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
  </yandex-map>-->
 </client-only> 
 <section>
      <div class="map-wrapper-450">
        <div id="categoryMap" class="h-100"></div>
      </div>
    </section>
  <section class="py-5 bg-gray-100 shadow">
      <div class="container">
        <h1 class="mb-4">{{ city.name || ''}}</h1>
        <p class="lead mb-5">{{city.description}}</p>
        <h5>{{$t('category')}}</h5>
        <ul class="nav nav-pills-custom">
          <li class="nav-item" v-for="category in categories" :key="category.id">
            <router-link :to="'/city/'+id+'/?category='+category.id" class="nav-link active">{{category.name}}</router-link>
          </li>          
        </ul>
      </div>
    </section>    

    <section class="py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div class="mr-3">
            <p class="mb-3 mb-md-0"><strong>{{companies.total}}</strong> results found {{category_id}}</p>
          </div>
          <div class="col-3 input-label-absolute input-label-absolute-right w-100">
            <v-select class="style-chooser selectpicker" label="name" v-model="sort" placeholder="Sort by" :options="[{id: 1, name: 'Popular'}, {id: 2, name: 'Recommended'},  {id: 3, name: 'Oldest'},  {id: 4, name: 'Closest'} ]"></v-select> 
          </div>
        </div>
        <div class="row">
          <!-- place item-->
          <div data-marker-id="59c0c8e33b1527bfe2abaf92" class="hover-animate col-sm-6 col-lg-3 mb-5" v-for="company in companies.data" :key="company.id">
                <div class="card h-100 border-0 shadow">
                  <div class="card-img-top overflow-hidden gradient-overlay"> <router-link :to="'/company/'+company.id" ><img :src="'/img/companies/'+company.pictures[0]" :alt="company.title" class="img-fluid" style="height: 185px;"></router-link>
                    <div class="card-img-overlay-bottom z-index-20">
                      <div class="media text-white text-sm align-items-center">
                        <img :src="'/img/icon/'+(company.category['icon'] ||  'ico-car.png')" class="avatar avatar-border-white mr-2">
                       <router-link :to="'/category/'+company.category['id']"> <div class="media-body text-white">{{company.category['name'] || ''}}</div></router-link>
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
        <list-pagination :page="this.page" :max-page="maxPage" route="companies" />
      </div>
    </section>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddReview from '~/components/AddReview'
import HeartButton from '~/components/HeartButton'
import ListPagination from '~/components/ListPagination'
export default {
layout: "main", 
  components: {
   AddReview,
   HeartButton,
   ListPagination,
  }, 
  head () {
    return { title: 'Компании находящийся в городе '+this.city.name,
    meta: [
        { hid: 'description', name: 'description', content: this.city.description }
    ],
    }
  },

  data: () => ({
    title: process.env.appName,
    sort: '',
  }),
  computed: {
    id() {
      return Number(this.$route.params.id)
    },
    category_id() {
      return Number(this.$route.query.category) || 0
    },

    page() {
      return Number(this.$route.params.page) || 1
    },

    maxPage() {
      return Number(this.companies.last_page)
    },
    ...mapGetters({
    authenticated: 'auth/check',
    companies: 'company/companiesByCity',    
    city: 'city/city',
    categories: 'company/categories',
    }),
    
  }, 
  async fetch({store, error, params: { id, page }}) {     
    await store.dispatch("company/companiesByCity", {id})    
    await store.dispatch("company/get_categories")    
    await store.dispatch("city/fetch_city", {id}).catch((e)=>
      error({statusCode: 404, message: 'This page could not be found'})      
      )
  },
  methods: {
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



</style>