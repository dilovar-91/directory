<template>    
    <nav aria-label="Page navigation example">
          <ul class="pagination pagination-template d-flex justify-content-center" v-if="route ==='search'">
            <li class="page-item"><nuxt-link  :to="`/${route}/${page}/?keyword=${keyword}&city=${city}&category=${category}`" class="page-link"> <i class="fa fa-angle-left"></i></nuxt-link></li>            
           <li v-for = "i in maxPage" :key="i" :class="[(i == page) ?  'page-item active' :'page-item ']">
                <nuxt-link  :to="`/${route}/${i}/?keyword=${keyword}&city=${city}&category=${category}`" class="page-link waves-effect waves-effect">
                    {{i}}
                </nuxt-link>
            </li>
            <li class="page-item">
            <nuxt-link  :to="`/${route}/${maxPage}/?keyword=${keyword}&city=${city}&category=${category}`" class="page-link waves-effect waves-effect">     
                <i class="fa fa-angle-right"></i><span ></span>       
            </nuxt-link>
            </li>            
          </ul>
          <ul class="pagination pagination-template d-flex justify-content-center" v-else>
            <li class="page-item"><nuxt-link  :to="`/${route}/1${sortType}`" href="#" class="page-link"> <i class="fa fa-angle-left"></i></nuxt-link></li>            
           <li v-for = "i in maxPage" :key="i" :class="[(i == page) ?  'page-item active' :'page-item ']">
                <nuxt-link  :to="`/${route}/${i}${sortType}`" class="page-link waves-effect waves-effect">
                    {{i}}
                </nuxt-link>
            </li>
            <li class="page-item">
            <nuxt-link  :to="`/${route}/${maxPage}${sortType}`" class="page-link waves-effect waves-effect">     
                <i class="fa fa-angle-right"></i><span ></span>       
            </nuxt-link>
            </li>            
          </ul>
    </nav>   
</template>
<script>
export default {
  props: {    
    page: {
      type: Number,
      required: true,
    },
    maxPage: {
      type: Number,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    sort: {
      type: String,
      required: false,
    },
    keyword: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    }
  },
  
  computed: {
    hasMore() {
      return this.page < this.maxPage
    },
    sortType(){
      if (this.sort ==1){
          return ''
      }
      else return '/'+this.sort
    }

  }
}
</script>