<template>
<div class="bg-white">
 
 <section>
      <div class="map-wrapper-450">
        <div id="categoryMap" class="h-100">
<client-only>
<yandex-map 
    :coords="[city.latitude, city.longitude]"     
    zoom="10"
    :controls= "['zoomControl']"
    :scroll-zoom="false"
    style="height: 500px; display:block;"
    class="h-100"    
  >
    <div v-if="companies.total>0">
    <ymap-marker
      v-for="company in companies.data" :key="company.id"        
      :coords="[company.latitude, company.longitude]" 
      marker-type="placemark"
      marker-id="123"
      :hint-content="company.title"   
      :icon="{
            layout: 'default#image',
            imageHref: '/img/car-marker.png',
            imageSize: [78, 66],
            imageOffset: [-15, -35],               
        }"
    > 
    <Baloon :title="company.title" :slug="company.id" :img="company.pictures[0]" :adress="company.adress" slot="balloon" ></Baloon>   
    </ymap-marker> 
    </div>  
  </yandex-map>
 </client-only>

        </div>
      </div>
    </section>
  <section class="py-5 bg-gray-100 shadow">
      <div class="container">
        <h1 class="mb-4">{{ city.name || ''}}</h1>
        <p class="lead mb-5">{{city.description}}</p>
        <p class="ml-2 lead text-danger font-weight-bold" v-if="companies.total <= 0" >Организации по категории "{{ category.name || ''}}" в городе {{ city.name || ''}} не существуют.</p>
        <h5>{{$t('category')}}</h5>
        <ul class="nav nav-pills-custom" >
          <li class="nav-item" v-for="category in categories" :key="category.id">
            <router-link :to="'/city/'+slug+'/?category='+category.id" class="nav-link active">{{category.name}}</router-link>
          </li>          
        </ul>
      </div>
    </section>    
    <section class="py-5">
      <div class="container" v-if="companies.total > 0">
        <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div class="mr-3">
            <p class="mb3- mb-md-0" >Показано <strong class="text-danger">{{(companies.current_page-1)*companies.per_page+1}}-{{ ( to > companies.total ?  companies.total: to )}} из {{companies.total}}</strong> организации по городу <strong class="text-primary">"{{ city.name || ''}}"</strong></p>
          </div>
          <div class="col-3 input-label-absolute input-label-absolute-right w-100">
           <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1" :value="sortSelected" @change="onChange($event)">
              <option value="1" selected="" disabled>Сортировка</option>
              <option v-for="str in [{id: 1, name: 'Популярный', type: 'rating'}, {id: 2, name: 'Имя А-Я', type: 'name'},  {id: 3, name: 'Имя Я-А', type: 'name-desc'},  {id: 4, name: 'Кол-во комментарии', type: 'comments'} ]" :key="str.id" :value="str.type" >{{str.name}}</option>
            </select>
          </div> 
          </div>
        </div>
       
          <!-- place item-->
          <transition-group :duration="{  enter: 2000 }" appear name="list" tag="div" class="row">
          <div data-marker-id="59c0c8e33b1527bfe2abaf92" class="col-sm-6 col-lg-3 mb-5" :name="transition" mode="out-in" v-for="company in companies.data" :key="company.id">
              
                <div class="card h-100 border-0 shadow">
                  <div class="card-img-top overflow-hidden gradient-overlay"> <router-link :to="'/company/'+company.id" ><img :src="'/img/companies/'+company.pictures[0]" :alt="company.title" class="img-fluid" style="height: 185px;"></router-link>
                    <div class="card-img-overlay-bottom z-index-20">
                      <div class="media text-white text-sm align-items-center">
                        <img :src="'/img/icon/'+(company.category['icon'] ||  'ico-car.png')" class="avatar avatar-border-white mr-2">
                       <router-link :to="'/category/'+company.category['slug']"> <div class="media-body text-white">{{company.category['name'] || ''}}</div></router-link>
                      </div>
                    </div>
                    
                  </div>
                  <div class="card-body d-flex align-items-center">
                    <div class="w-100">
                      <h6 class="card-title"><router-link :to="'/company/'+company.id"  class="text-decoration-none text-dark">{{company.title}}</router-link></h6>
                     <div class="d-flex card-subtitle mb-3">
                        <p class="flex-grow-1 mb-0 text-muted text-sm">Оценка салона: </p>
                        <p class="flex-shrink-1 mb-0 card-stars text-xs text-right mt-0">
                          <star-rating :rating="company.avg_rating" :star-size="20" :read-only="true" :show-rating="false" active-color="#007bff" border-color="#007bff" ></star-rating> 
                        </p>
                      </div>
                      <p class="card-text text-muted">Город: <router-link :to="'/city/'+company.city['slug']" >{{company.city['name'] || ''}}</router-link></p>
                      <router-link :to="'/company/'+company.slug" class="btn btn-outline-primary font-weight-bold router-link-active">               
                        Перейти отзывам
                      </router-link>
                    </div>
                  </div>
                </div>
              
              </div> 
            </transition-group>
                      
          
             
        <list-pagination  :page="this.page || 1" :max-page="maxPage" :route="'city/'+city.slug" :sort="sortSelected" />
      </div>
    </section>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddReview from '~/components/AddReview'
import HeartButton from '~/components/HeartButton'
import ListPagination from '~/components/ListPagination'
import Baloon from '~/components/Baloon'
export default {
layout: "main", 
  components: {
   AddReview,
   HeartButton,
   ListPagination,
   Baloon
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
    transition: 'slide-right',    
  }),
  computed: {
    id() {
      return Number(this.$route.params.id)
    },
    to() {
      return this.companies.current_page*this.companies.per_page
    },
    slug() {
      return String(this.$route.params.slug)
    },
    sortSelected() {      
      return String(this.$route.params.sort || 1)
    },
    page() {
      return Number(this.$route.params.page) || 1
    },
    maxPage() {
      return Number(this.companies.last_page)
    },
    category() {      
      return this.$store.getters['category/category'] 
    },
    ...mapGetters({
    authenticated: 'auth/check',
    companies: 'company/companiesByCity',    
    city: 'city/city',
    categories: 'company/categories',
    }),
    
  }, 
  async fetch({store, error, params, query}) { 
    await Promise.all([
     store.dispatch("company/companiesByCity", {page: params.page || 1, slug:params.slug, sort: params.sort || '', category: query.category || ''}),    
     store.dispatch("company/get_categories"),
     store.dispatch("category/fetch_category", {slug:query.category} || ''),
     store.dispatch("city/fetch_city", {slug:params.slug}).catch((e)=>
      error({statusCode: 404, message: 'This page could not be found'})      
      )
    ])  
  },
  methods: {
      goToCompany: function (id = 'empty') {
          this.$router.push("/company/" + id)
      },
      balloonTemplate: function(id=null, title='', pic=null, adress=null) {
      return `<a href="/company/`+id+`">
        <h4 class="warning-text" @click="goToCompany()">`+ title + ', ' + adress +`</h4>
        <img src="/img/companies/`+ pic[0] +`" width="350px">
      </a>`
      },
      onChange(event) {
        this.$router.push('/city/'+this.slug+'/'+(this.page || 1)+'/'+(event.target.value || null))
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
.list-enter-active, .list-leave-active {
  transition: all 1.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>