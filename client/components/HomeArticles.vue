<template> 
<div class="row mb-5">
          <!-- blog item-->
          <div class="col-lg-4 col-sm-6 mb-4" v-for="article in articles.data" :key="article.id">
            <div class="card shadow border-0 h-100"><router-link :to="'/article/'+article.slug"><img :src="'/img/photo/'+article.pic" alt="..." class="img-fluid card-img-top"></router-link>
              <div class="card-body"><span class="text-uppercase text-muted text-sm letter-spacing-2">Советы, Статьи</span>
                <h5 class="my-2"><router-link :to="'/article/'+article.slug" class="text-dark">{{article.title}}</router-link></h5>
                <p class="text-gray-500 text-sm my-3"><i class="far fa-clock mr-2"></i>{{ $moment(article.created_at).utc().format('DD/MM/YYYY')}}</p>
                <p class="my-2 text-muted text-sm" v-html="truncate(article.content, 200)"></p>
                <router-link :to="'/article/'+article.slug" class="btn btn-link pl-0">Читать дальше<i class="fa fa-long-arrow-alt-right ml-2"></i></router-link>
              </div>
            </div>
          </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    props: {    
    limit: {
      type: Number,
      required: false,
      default: 3
    }  
  },
    data () {
      return {        
        
      }
    },
    created() {
      this.$store.dispatch('article/getArticles', {limit:3})     
    },

    computed: mapGetters({    
    articles: 'article/articles', 
  })
    
  }
</script>