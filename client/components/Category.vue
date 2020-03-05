<template> 
<div class="row">
          <div :class="'d-flex align-items-lg-stretch mb-4 col-lg-'+grid" v-for="category in categories" :key="category.id">
            <div :style="'background: center center url(/img/categories/'+category.background || 'no-background.png'+') no-repeat; background-size: cover;'" class="card shadow-lg border-0 w-100 border-0 hover-animate">
            <router-link :to="{ name : 'category-slug', params : { slug : category.slug, id : category.id } }" class="tile-link"></router-link>
            <!--<nuxt-link :to="'/category/'+category.slug" class="tile-link"> </nuxt-link>-->
              <div class="d-flex align-items-center h-100 text-nuxt-link justify-content-center py-6 py-lg-7">
                <h3 class="text-shadow text-uppercase mb-0 text-center">{{category.name}}</h3>
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
      default: 9
    },    
    grid: {
      type: Number,
      required: false,
      default: 4
    },    
  },
    data () {
      return {        
        
      }
    },

    created() {
      this.$store.dispatch('category/getCategories', {limit:this.limit || 9})     
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