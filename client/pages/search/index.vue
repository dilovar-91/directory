<template>
<div class="bg-white">
  <div class="container-fluid pt-5 pb-3 border-bottom px-lg-5">
      <div class="row">
        <div class="col-xl-8">
          <h1>Страница поиска </h1>
          <p class="lead text-muted"></p>
          <p class="ml-2 lead text-danger font-weight-bold" v-if="companies.total <= 0" >Организации по категории "{{ keyword || ''}}" не существуют.</p>
        </div>
      </div>
    </div>  
    <section class="py-5">
      <div class="container" v-if="companies.total>0">
        <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div class="mr-3">
            <p class="mb3- mb-md-0" >Показано <strong class="text-danger">{{(companies.current_page-1)*companies.per_page+1}}-{{companies.current_page*companies.per_page}} из {{companies.total}}</strong> организации по категории <strong class="text-primary">"{{ keyword || ''}}"</strong></p>
          </div>
        </div>
        <div class="row" :name="transition" mode="out-in">
          <!-- place item-->
          <transition-group :duration="{  enter: 2000 }" appear name="list" tag="div" class="row">
          <div data-marker-id="59c0c8e33b1527bfe2abaf92" class="col-sm-6 col-lg-3 mb-5" v-for="company in companies.data" :key="company.id">
                
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
                        <p class="flex-grow-1 mb-0 text-muted text-sm">Оценка салона: {{company.avg_rating || 0}}</p>
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
          </transition-group>   
          
        </div>       
        <list-pagination  :page="this.page || 1" :max-page="maxPage" :route="'search'" :keyword="keyword" :category="this.category" :city="this.city" />
      </div>
    </section>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import ListPagination from '~/components/ListPagination'
export default {
layout: "main", 
  components: {
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
    transition: 'slide-right',
  }),
  computed: {
    keyword() {
      return String(this.$route.query.keyword) || ''
    },
    category() {
      return Number(this.$route.query.category) || ''
    },
    city() {
      return Number(this.$route.query.city) || ''
    },
    page() {
      return Number(this.$route.params.page) || 1
    },
    maxPage() {
      return Number(this.companies.last_page)
    },
    ...mapGetters({
    authenticated: 'auth/check',
    companies: 'company/companiesByKeyword', 
    }),
  }, 
  async fetch({store, query, error, params}) {    
    await Promise.all([
      store.dispatch("company/companiesByKeyword", {keyword:encodeURI(query.keyword), city: query.city || '', category: query.category, page:params.page})
    ])   
  },
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