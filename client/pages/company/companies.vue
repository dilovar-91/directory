<template>
<div>
<Category :limit="18"></Category>
</div>
</template>
<script>
import Category from '~/components/Category'
import { mapGetters } from 'vuex'
export default {
  layout: 'main',
  components: {
      Category
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