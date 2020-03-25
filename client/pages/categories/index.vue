<template>
<div>
   <section class="py-3 pb-0">
      <div class="container">
        <BreadCrumb title="Все категории" />     
        <h1 class="hero-heading mb-4">Все категории</h1>
        <p class="text-muted mb-5">You have no upcoming trips. Start exploring ideas for your next trip.</p>
      </div>
    </section>    
   <section class="">
      <div class="container">        
        <Category :limit="18" :grid="3"></Category>
      </div>
    </section>
</div>
</template>
<script>
import Category from '~/components/Category'
import BreadCrumb from '~/components/BreadCrumb'
import { mapGetters } from 'vuex'
export default {
  layout: 'main',
  components: {
      Category,
      BreadCrumb,
  },  
  head () {
    return { title: this.$t('category') }
  },

  data: () => ({
    title: process.env.appName,   
  }),  
}
</script>
<style scoped>
.title {
  font-size: 85px;
}

</style>