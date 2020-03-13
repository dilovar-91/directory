<template>
<div>
<router-link :to="'/company/'+slug">
        <h4 class="warning-text" v-text="title + ', ' + adress"></h4>
        <img :src="'/img/companies/'+ img" width="350px">
</router-link>
</div>
</template>
<script>
export default {
  props: {    
    img: {
      type: String,
      required: true,
      default: 'no-image.png'
    },
    title: {
      type: String,
      required: true,    
    },
    slug: {
      type: Number,
      required: true,
      default: null
    },
    adress: {
      type: String,
      required: true,
      default: null
    },
  },
}
</script>


