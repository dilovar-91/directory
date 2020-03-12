<template>
<div>
    <section class="hero-home dark-overlay mb-5"><img src="/img/article-background.jpg" alt="" class="bg-image">
      <div class="container py-7">
        <div class="overlay-content text-center text-white">
          <h1 class="display-3 text-serif font-weight-bold text-shadow mb-0">{{article.title}}</h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container" >
        <div class="row">
          <div class="col-xl-8 col-lg-10 mx-auto">           
            <p class="py-3 mb-5 text-muted text-center font-weight-light"><img src="/img/admin.png" alt="" class="avatar mr-2">Автор: <a href="#" class="font-weight-bold">Admin</a><span class="mx-1">|</span> {{ $moment(article.created_at).utc().format('DD/MM/YYYY')}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-8 col-lg-10 mx-auto" v-html="article.content"></div>
        </div>
      </div>
    </section>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
layout: "main", 
  components: {
   
  }, 
  head () {
    return { title: this.article.title,
    meta: [
        { hid: 'description', name: 'description', content: 'Статьи о нащего команда' }
    ],
    }
  },

  data: () => ({
    title: process.env.appName,
  }),
  computed: {
    slug() {
      return String(this.$route.params.slug) || null
    }, 
    ...mapGetters({
    authenticated: 'auth/check',
    article: 'article/article', 
    }),
  },
  
  async fetch({store, params, error}) {  
    await store.dispatch("article/fetch_item", {slug:params.slug})
  },
}
</script>
<style scoped>
</style>