<template>
<div>
        <h4 class="warning-text" @click="goToCompany(slug)">{{title}}</h4>
        <img src="/img/companies/`+ img[0] +`" width="350px">
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
    
  },
  methods: {
      goToCompany: function (slug = 'empty') {   
          //window.open("/company/" + id, "_blank");    
          this.$router.push("/company/"+slug)
      },
              
  }
  
}
</script>


