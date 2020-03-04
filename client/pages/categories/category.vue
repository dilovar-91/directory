<template>
<div class="bg-white">
  <div class="container-fluid pt-5 pb-3 border-bottom px-lg-5">
      <div class="row">
        <div class="col-xl-8">
          <h1>Список организации по категории <span class="primary">{{ category.name || ''}}</span></h1>
          <p class="lead text-muted">{{category.description}}</p>
        </div>
      </div>
    </div>  
    <section class="py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div class="mr-3">
            <p class="mb-3 mb-md-0">Всего <strong class="text-danger">{{companies.total}}</strong> организации по категории <strong class="text-primary">"{{ category.name || ''}}"</strong> </p>
          </div>
          <div class="col-xl-3 col-xs-4 input-label-absolute input-label-absolute-right w-100">
            
          
            <v-select class="style-chooser selectpicker" label="name" v-model="sort" placeholder="Сортировка" :options="[{id: 1, name: 'Популярный'}, {id: 2, name: 'Рекомендации'},  {id: 3, name: 'Старые'},  {id: 4, name: 'Новые'} ]"></v-select> 
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
        <!--<list-pagination :page="this.page" :max-page="maxPage" route="companies" />-->
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
    return { title: 'Компании находящийся в городе ',
    meta: [
        { hid: 'description', name: 'description', content: '' }
    ],
    }
  },

  data: () => ({
    title: process.env.appName,
    sort: '',
  }),
  computed: {
    slug() {
      return String(this.$route.params.slug) || null
    },    
    category() {      
      return this.$store.getters['category/category'] 
    },
    id(){
      this.category.id
      return this.category.id
    }, 
    page() {
      return Number(this.$route.params.page) || 1
    },
    maxPage() {
      return Number(this.companies.last_page)
    },
    ...mapGetters({
    authenticated: 'auth/check',
    companies: 'company/companiesByCategory', 
    }),
    
  }, 
  async fetch({store, params, error}) {    
    await store.dispatch("category/getCategories", {limit: null})
    await store.dispatch("company/companiesByCategory", {slug:params.slug}).catch((e)=>
      error({statusCode: 404, message: 'This page could not be found'})      
      ) 
    await store.dispatch("category/fetch_category", {slug:params.slug})
  },
  methods: {
      
  }
  
}
</script>
<style scoped>
</style>