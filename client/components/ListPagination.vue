<template>    
    <nav aria-label="Page navigation example">
          <ul class="pagination pagination-template d-flex justify-content-center">
            <li class="page-item"><nuxt-link  :to="`/${route}/1`" href="#" class="page-link"> <i class="fa fa-angle-left"></i></nuxt-link></li>            
           <li v-for = "i in maxPage" :key="i" :class="[(i == page) ?  'page-item active' :'page-item ']">
                <nuxt-link  :to="`/${route}/${i}`" class="page-link waves-effect waves-effect">
                    {{i}}
                </nuxt-link>
            </li>
            <li class="page-item">
            <nuxt-link  :to="`/${route}/${maxPage}`" class="page-link waves-effect waves-effect">     
                <i class="fa fa-angle-right"></i><span >Последняя</span>       
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
    }
  },
  computed: {
    hasMore() {
      return this.page < this.maxPage
    }
  }
}
</script>