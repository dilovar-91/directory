<template>
<div>
<Hero></Hero>
<section class="py-4 bg-white">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-primary">{{$t('select-city')}}</p>            
          </div>
          <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
            <router-link :to="{ name: 'cities' }" class="text-muted text-sm" >               
                {{ $t('all-city') }}<i class="fas fa-angle-double-right ml-2"></i>
            </router-link>
          </div>
        </div>
        <div class="row">
        <CityList></CityList>
        </div>
      </div>
    </section>

    <section class="py-2">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-primary">{{$t('popular-categories')}}</p>
            <h2>{{$t('whats-trending')}}</h2>
          </div>
          <div class="col-md-4 d-md-flex align-items-center justify-content-end"><router-link to="/categories" class="text-muted text-sm">
               
              {{$t('all-categories')}}<i class="fas fa-angle-double-right ml-2"></i></router-link></div>
        </div>
        <Category></Category>
      </div>
    </section>
    <Popular></Popular>
    <RecentReviews></RecentReviews>
    <section class="py-4 bg-gray-100"> 
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <p class="subtitle text-secondary">{{$t('interest-articles')}}</p>
            <h2>{{$t('from-our-team')}}</h2>
          </div>
          <div class="col-md-4 d-md-flex align-items-center justify-content-end">
          <router-link :to="{ name: 'articles' }" class="text-muted text-sm" >               
                {{$t('all-articles')}}<i class="fas fa-angle-double-right ml-2"></i>
          </router-link>
          </div>
        </div>
        <HomeArticles :limit="3"></HomeArticles>
      </div>
    </section>
</div>
</template>
<script>
import CityList from '~/components/CityList'
import Category from '~/components/Category'
import Popular from '~/components/Popular'
import HomeArticles from '~/components/HomeArticles'
import RecentReviews from '~/components/RecentReviews'
import Hero from '~/components/Hero'
import { mapGetters } from 'vuex'

export default {
  layout: 'main',
  components: {
      CityList,
      Popular,
      HomeArticles,
      Category,
      RecentReviews,
      Hero
  },
  head () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: process.env.appName,   
  }),

}
</script>
<style scoped>

</style>