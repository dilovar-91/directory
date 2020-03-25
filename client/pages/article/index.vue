<template>
<div>
<section class="position-relative py-6"><img src="img/photo/photo-1467987506553-8f3916508521.jpg" alt="" class="bg-image">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="bg-white rounded-lg shadow p-5"><strong class="text-uppercase text-secondary d-inline-block mb-2 text-sm">В Тренде</strong>
              
              <h1 class="mb-3 d-none">{{$t('articles')}}</h1>
              <h2 class="mb-3"><router-link :to="'/article/'+articles.data[articles.total-1].slug">{{articles.data[articles.total-1].title}}</router-link></h2>
              <div  v-html="truncate(articles.data[articles.total-1].content)"></div><router-link :to="'/article/'+articles.data[articles.total-1].slug" class="btn btn-link p-0">Читать дальше <i class="fa fa-long-arrow-alt-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-4">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12 mb-4"><BreadCrumb :title="$t('articles')" /></div>
          <div class="col-lg-4 col-sm-6 mb-4" v-for="article in articles.data" :key="article.id">
            <div class="card shadow border-0 h-100"><router-link :to="'/article/'+article.slug"><img :src="'/img/photo/'+article.pic" alt="..." class="img-fluid card-img-top"></router-link>
              <div class="card-body"><span class="text-uppercase text-muted text-sm letter-spacing-2">Советы, Статьи</span>
                <h5 class="my-2"><router-link :to="'/article/'+article.slug" class="text-dark">{{article.title}}</router-link></h5>
                <p class="text-gray-500 text-sm my-3"><i class="far fa-clock mr-2"></i>{{ $moment(article.created_at).utc().format('DD/MM/YYYY')}}</p>
                <p class="my-2 text-muted text-sm" v-html="truncate(article.content, 180)"></p>
                <router-link :to="'/article/'+article.slug" class="btn btn-link pl-0">Читать дальше<i class="fa fa-long-arrow-alt-right ml-2"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import ListPagination from '~/components/ListPagination'
import BreadCrumb from '~/components/BreadCrumb'
export default {
layout: "main", 
  components: {
   ListPagination,
   BreadCrumb,
  }, 
  head () {
    return { title: 'Страница статьи',
    meta: [
        { hid: 'description', name: 'description', content: 'Статьи о нащего команда' }
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
    ...mapGetters({
    authenticated: 'auth/check',
    articles: 'article/articles', 
    }),
  },
  methods: {
    
  }, 
  async fetch({store, params, error}) {  
    await store.dispatch("article/getArticles", {page:params.page || null})
  },
}
</script>
<style scoped>
</style>