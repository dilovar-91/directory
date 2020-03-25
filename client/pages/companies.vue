<template>
<div>
<Hero></Hero>
<section class="py-4 bg-white">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8">
            <BreadCrumb title="Список всех организации" />
            <p class="subtitle text-primary">Список всех организации</p>            
          </div>
          <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
            <router-link :to="{ name: 'main' }" class="text-muted text-sm" >               
                {{ $t('all-city') }}<i class="fas fa-angle-double-right ml-2"></i>
            </router-link>
          </div>
        </div>
        <div class="row">
        <CityList></CityList>
        </div>
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
          <router-link :to="{ name: 'main' }" class="text-muted text-sm" >               
                {{$t('all-articles')}}<i class="fas fa-angle-double-right ml-2"></i>
          </router-link>
          </div>
        </div>
        <div class="row">
          <!-- blog item-->
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="card shadow border-0 h-100"><a href="post.html"><img src="img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="..." class="img-fluid card-img-top"/></a>
              <div class="card-body"><a href="#" class="text-uppercase text-muted text-sm letter-spacing-2">Travel </a>
                <h5 class="my-2"><a href="post.html" class="text-dark">Autumn fashion tips and tricks          </a></h5>
                <p class="text-gray-500 text-sm my-3"><i class="far fa-clock mr-2"></i>January 16, 2016</p>
                <p class="my-2 text-muted text-sm">Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege...</p><a href="post.html" class="btn btn-link pl-0">Read more<i class="fa fa-long-arrow-alt-right ml-2"></i></a>
              </div>
            </div>
          </div>
          <!-- blog item-->
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="card shadow border-0 h-100"><a href="post.html"><img src="img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="..." class="img-fluid card-img-top"/></a>
              <div class="card-body"><a href="#" class="text-uppercase text-muted text-sm letter-spacing-2">Living </a>
                <h5 class="my-2"><a href="post.html" class="text-dark">Newest photo apps          </a></h5>
                <p class="text-gray-500 text-sm my-3"><i class="far fa-clock mr-2"></i>January 16, 2016</p>
                <p class="my-2 text-muted text-sm">ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibu...</p><a href="post.html" class="btn btn-link pl-0">Read more<i class="fa fa-long-arrow-alt-right ml-2"></i></a>
              </div>
            </div>
          </div>
          <!-- blog item-->
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="card shadow border-0 h-100"><a href="post.html"><img src="img/photo/photo-1482463084673-98272196658a.jpg" alt="..." class="img-fluid card-img-top"/></a>
              <div class="card-body"><a href="#" class="text-uppercase text-muted text-sm letter-spacing-2">Travel </a>
                <h5 class="my-2"><a href="post.html" class="text-dark">Best books about Photography          </a></h5>
                <p class="text-gray-500 text-sm my-3"><i class="far fa-clock mr-2"></i>January 16, 2016</p>
                <p class="my-2 text-muted text-sm">Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.  Mauris placerat eleif...</p><a href="post.html" class="btn btn-link pl-0">Read more<i class="fa fa-long-arrow-alt-right ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

           
</div>
</template>
<script>
import CityList from '~/components/CityList'
import Popular from '~/components/Popular'
import RecentReviews from '~/components/RecentReviews'
import Hero from '~/components/Hero'
import { mapGetters } from 'vuex'

export default {
  layout: 'main',
  components: {
      CityList,
      Popular,
      RecentReviews,
      Hero
  },
  head () {
    return { title: 'Список всех организации' }
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

.laravel {
  color: #2e495e;
}

.nuxt {
  color: #00c48d;
}
</style>