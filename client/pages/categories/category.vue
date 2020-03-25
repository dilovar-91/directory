<template>
<div class="bg-white">
  <div class="container-fluid pt-4 pb-3 border-bottom px-lg-5">
      <div class="row">
        <div class="col-xl-8">
         <BreadCrumb :title="category.name" parent="Категории" parent_url="categories" />
          <h1>Список организации п о категории <span class="primary">{{ category.name || ''}}</span></h1>
          <p class="lead text-muted">{{category.description}}</p>
          <p class="ml-2 lead text-danger font-weight-bold" v-if="companies.total <= 0" >Организации по категории "{{ category.name || ''}}" не существуют.</p>
        </div>
      </div>
    </div>  
    <section class="py-5">
      <div class="container" v-if="companies.total>0">
        <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div class="mr-3">
            <p class="mb3- mb-md-0" >Показано <strong class="text-danger">{{(companies.current_page-1)*companies.per_page+1}}-{{companies.current_page*companies.per_page}} из {{companies.total}}</strong> организации по категории <strong class="text-primary">"{{ category.name || ''}}"</strong></p>
          </div>
          <div class="col-xl-3 col-xs-4 input-label-absolute input-label-absolute-right w-100">  
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1" :value="sortSelected" @change="onChange($event)">
              <option value="1" selected="" disabled>Сортировка</option>
              <option v-for="str in [{id: 1, name: 'Популярный', type: 'rating'}, {id: 2, name: 'Имя А-Я', type: 'name'},  {id: 3, name: 'Имя Я-А', type: 'name-desc'},  {id: 4, name: 'Кол-во комментарии', type: 'comments'} ]" :key="str.id" :value="str.type" >{{str.name}}</option>
            </select>
          </div>
          </div>
        </div>
        <div :name="transition" mode="out-in">
          <!-- place item-->
          <transition-group :duration="{  enter: 2000 }" appear name="list" tag="div" class="row">
          <div data-marker-id="59c0c8e33b1527bfe2abaf92" class="col-sm-6 col-lg-3 mb-5" v-for="company in companies.data" :key="company.id">
               <div class="card h-100 border-0 shadow">
                  <div class="card-img-top overflow-hidden gradient-overlay"> <router-link :to="'/company/'+company.id" ><img :src="'/img/companies/'+company.pictures[0]" :alt="company.title" class="img-fluid" style="height: 185px;"></router-link>
                    <div class="card-img-overlay-bottom z-index-20">
                      <div class="media text-white text-sm align-items-center">
                        <img :src="'/img/icon/'+(company.category['icon'] ||  'ico-car.png')" class="avatar avatar-border-white mr-2">
                       <router-link :to="'/listing/'+company.category['slug']"> <div class="media-body text-white">{{company.category['name'] || ''}}</div></router-link>
                      </div>
                    </div>
                  </div>
                  <div class="card-body d-flex align-items-center">
                    <div class="w-100">
                      <h6 class="card-title"><router-link :to="'/listing/'+company.id"  class="text-decoration-none text-dark">{{company.title}}</router-link></h6>
                      <div class="d-flex card-subtitle mb-3">
                        <p class="flex-grow-1 mb-0 text-muted text-sm">Оценка салона: </p>
                        <p class="flex-shrink-1 mb-0 card-stars text-xs text-right mt-0">
                          <star-rating :rating="company.avg_rating || 0" :star-size="20" :read-only="true" :show-rating="false" active-color="#007bff" border-color="#007bff" ></star-rating> 
                        </p>
                      </div>
                      <p class="card-text text-muted">Город: {{company.city['name'] || ''}}</p>
                      <router-link :to="'/listing/'+company.id" class="btn btn-outline-primary font-weight-bold router-link-active">               
                        Перейти отзывам
                      </router-link>
                    </div>
                  </div>
                </div>
               
              </div>   
          </transition-group>   
          
        </div>       
        <list-pagination  :page="this.page || 1" :max-page="maxPage" :route="'category/'+category.slug" :sort="sortSelected" />
      </div>
    </section>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddReview from '~/components/AddReview'
import HeartButton from '~/components/HeartButton'
import ListPagination from '~/components/ListPagination'
import BreadCrumb from '~/components/BreadCrumb'
export default {
layout: "main", 
  components: {
   AddReview,
   HeartButton,
   ListPagination,
   BreadCrumb,
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
    transition: 'slide-right',
  }),
  computed: {
    slug() {
      return String(this.$route.params.slug) || null
    },    
    category() {      
      return this.$store.getters['category/category'] 
    },
    sortSelected() {      
      return String(this.$route.params.sort || 1)
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
    

    await Promise.all([
      store.dispatch("category/getCategories", {limit: null}),
      store.dispatch("category/fetch_category", {slug:params.slug}),
      store.dispatch("company/companiesByCategory", {page: params.page || 1, slug:params.slug, sort: params.sort || null}).catch((e)=>
      error({statusCode: 404, message: 'This page could not be found'})      
      ) 
    ])   
    
  },
  methods: {
  onChange(event) {
        this.$router.push('/category/'+this.slug+'/'+(this.page || 1)+'/'+(event.target.value || null))
    }
  }
  
}
</script>
<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 1.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}


</style>