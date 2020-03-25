<template>
<div>
   <section class="py-3 pb-0">
      <div class="container">
        <BreadCrumb title="Все города" />     
        <h1 class="hero-heading mb-4">Все города</h1>
        <p class="text-muted mb-5">Список городов России</p>
      </div>
    </section>    
   <section class="">
      <div class="container">        
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">№</th>
      <th scope="col">Город</th>
      <th scope="col">Регион</th>
      <th scope="col">Кол-во организации на сайте</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(city, index) in list" :key="index">
      <th scope="row">{{index+1}}</th>
      <td><router-link :to="'/city/'+city.slug">{{city.name}}</router-link></td>
      <td>{{city.region  && city.region['name']}}</td>
      <td>{{city.companies_count}}</td>
    </tr>
    
  </tbody>
</table>
<infinite-loading @infinite="infiniteHandler">
  <div class="mb-4"  slot="no-more"><span class="text-primary">Городов больше нет</span></div>
  <div slot="no-results">Список пуст</div>
</infinite-loading>
      </div>
    </section>
</div>
</template>
<script>
import Category from '~/components/Category'
import BreadCrumb from '~/components/BreadCrumb'
import ListPagination from '~/components/ListPagination'
import { mapGetters } from 'vuex'
export default {
  layout: 'main',
  components: {
      Category,
      BreadCrumb,
      ListPagination
  },  
  head () {
    return { title: 'Список городов России'}
  },

  data: () => ({
    title: process.env.appName,
    page: 1,
    list: [],   
  }),

  methods: {
    infiniteHandler($state) {
      this.$axios.get(`/allcities`, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.data.length) {
          this.page += 1;
          this.list.push(...data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
}
</script>
<style scoped>
.title {
  font-size: 85px;
}

</style>