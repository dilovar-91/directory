<template>
  <nav class="c-navigation-breadcrumbs" aria-label="Breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
  <ol class="c-navigation-breadcrumbs__directory">
    <li class="c-navigation-breadcrumbs__item" property="itemListElement" typeof="ListItem">
      <router-link class="c-navigation-breadcrumbs__link" to="/" property="item" typeof="WebPage">
        <span><i class="fas fa-home text-shadow"></i> </span>
        <span class="u-visually-hidden text-shadow" property="name">{{$t('home')}}</span>
      </router-link>
      <meta property="position" content="1">
    </li>
    <li v-if="parent !== null && parent_url !== null"  class="c-navigation-breadcrumbs__item" property="itemListElement" typeof="ListItem">
      <router-link  :to="'/'+parent_url" class="c-navigation-breadcrumbs__link" property="item" typeof="WebPage">
        <span property="name" class="text-shadow">{{parent}}</span>
      </router-link>
      <meta property="position" content="2">
    </li>
    <li v-if="category !== null && category_slug !== null"   class="c-navigation-breadcrumbs__item" property="itemListElement" typeof="ListItem">
      <router-link  :to="'/category/'+category_slug" class="c-navigation-breadcrumbs__link" property="item" typeof="WebPage">
        <span property="name" class="text-shadow">{{category}}</span>
      </router-link>
      <meta property="position" content="2">
    </li>
    <li class="c-navigation-breadcrumbs__item" property="itemListElement" typeof="ListItem">
      <a class="c-navigation-breadcrumbs__link" property="name" aria-current="location">{{title}}</a>
      <meta property="item" typeof="WebPage" :content="this.$route.fullPath">
      <meta property="position"  :content="parent == null ? 2 : 3">
    </li>
  </ol>
</nav>
</template>
<script>
export default {
    props: {    
        home: {
        type: String,
        required: false,
        default: 'Главная'
        },               
        title: {
        type: String,
        required: true
        },        
        parent: {
        type: String,
        required: false,
        default: null,             
        },
        parent_url: {
        type: String,
        required: false,
        default: null,             
        },
        category: {
        type: String,
        required: false,
        default: null,             
        },
        category_slug: {
        type: String,
        required: false,
        default: null,             
        },
        
    }
}
</script>
<style scoped>
.text-shadow {
  text-shadow: 1px 1px 2px black, 0 0 1em #007bff, 0 0 0.2em #007bff;
}
</style>