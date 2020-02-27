<template> 
<section class="py-2">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-primary">{{$t('popular-categories')}}</p>
            <h2>{{$t('whats-trending')}}</h2>
          </div>
          <div class="col-md-4 d-md-flex align-items-center justify-content-end"><router-link to="/categories" class="text-muted text-sm">
               
              {{$t('all-categories')}}<i class="fas fa-angle-double-right ml-2"></i></router-link></div>
        </div>
        <div class="row">
          <div class="d-flex align-items-lg-stretch mb-4 col-lg-4" v-for="category in categories" :key="category.id">
            <div :style="'background: center center url(/img/categories/'+category.background+') no-repeat; background-size: cover;'" class="card shadow-lg border-0 w-100 border-0 hover-animate">
            <router-link :to="{ name : 'category-slug', params : { slug : category.slug, id : category.id } }" class="tile-link"></router-link>
            <!--<nuxt-link :to="'/category/'+category.slug" class="tile-link"> </nuxt-link>-->
              <div class="d-flex align-items-center h-100 text-nuxt-link justify-content-center py-6 py-lg-7">
                <h3 class="text-shadow text-uppercase mb-0">{{category.name}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    data () {
      return {        
        
      }
    },

    beforeCreate() {
      this.$store.dispatch('category/getCategories')     
    },

    computed: mapGetters({    
    categories: 'category/categories', 
  })
    
  }
</script>
<style scoped>
.text-shadow {
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: white;
}
</style>