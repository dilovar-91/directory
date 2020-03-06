<template>
<div>
    <Header />    
    <nuxt />
    <Footer />
</div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer 
  }
}
</script>
<style>
body::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
	background-color: #F5F5F5;
	border-radius: 10px;
}

body::-webkit-scrollbar
{
	width: 15px;
	background-color: #F5F5F5;
}

body::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: #007bff;
}
</style>
