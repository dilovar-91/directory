<template>
<div class="bg-white">
<section style="background-image: url(img/directory.jpg);" class="d-flex align-items-center dark-overlay bg-cover">
      <div class="container py-6 py-lg-7 text-white overlay-content text-center"> 
        <div class="row">
          <div class="col-xl-10 mx-auto">
            <h1 class="display-3 font-weight-bold text-shadow" v-text="$t('hero-text')"></h1>
            <p class="text-lg text-shadow" v-text="$t('hero-desc')"></p>
          </div>
        </div>
      </div>
    </section>
    <div class="container bg-white">
      <div class="search-bar rounded p-3 p-lg-4 position-relative mt-n5 z-index-20">
        <form @submit.prevent="searchCompany" method="GET">
          <div class="row">
            <div class="col-lg-4 d-flex align-items-center form-group">
              <input type="search" :placeholder="$t('what_are_you_searching')" class="form-control form-control-sm shadow-0" v-model="search" >
            </div>
            <div class="col-md-6 col-lg-3 d-flex align-items-center form-group">
              <div class="input-label-absolute input-label-absolute-right w-100">                           
               <v-select class="style-chooser" label="name" :placeholder="$t('search_city')"  :options="cities" v-model="city"></v-select>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
              <div class="input-label-absolute input-label-absolute-right w-100">
                <v-select class="style-chooser" label="name" v-model="type" :placeholder="$t('search_service_type')" :options="categories"></v-select>  
              </div>
            </div>
            <div class="col-lg-2 form-group mb-0">
              <button type="submit" class="btn btn-primary btn-block h-100">{{$t('search_button')}} </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
    return {           
      search: '', 
      city: '',       
      type: '',
      type: ''
    }
  },
  beforeCreate() {
  this.$store.dispatch('company/get_cities')
  //this.$store.dispatch('category/get_categories')
},
  
  methods: {
        searchCompany(){
          var city = this.city.id || ''
          var type = this.type.id || ''          
          this.$router.push('/search?keyword='+this.search+'&city='+city +'&type='+type)
          this.search =''   
        
      },    

    
      
    }, 
  
   computed: mapGetters({    
    cities: 'company/cities',    
    categories: 'category/categories',    
  })
}
</script>
<style scoped>
  .vs__search {
height: calc(1.2em + 0.75rem + 2px) !important;
  }

  .rounded {
    border-radius: 0.5rem !important;
  }




  
</style>