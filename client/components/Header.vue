<template>
<header class="header">     
      <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white py-3">
        <div class="container-fluid">
          <div class="d-flex align-items-center">
           <router-link :to="{ name: 'main' }" class="navbar-brand py-1" >               
               <img src="/img/logo.svg" alt="logo" >
              </router-link>          
            <form action="/search" id="search" class="form-inline d-none d-sm-flex ">
              <div class="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3"> 
                <label for="search_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
                <input id="search_search" :placeholder="$t('search_button')" name="keyword" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200">
                <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas"></i></button>
              </div>
            </form>
          </div>
          <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
          <!-- Navbar Collapse -->
          <div id="navbarCollapse" class="collapse navbar-collapse">
            <form action="/search" id="searchcollapsed" class="form-inline mt-4 mb-2 d-sm-none">
              <div class="input-label-absolute input-label-absolute-left input-reset w-100">
                <label for="searchcollapsed_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
                <input id="searchcollapsed_search" :placeholder="$t('search_button')"  name="keyword" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200">
                <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas">           </i></button>
              </div>
            </form>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
              <router-link :to="{ name: 'main' }" class="nav-link" active-class="active">               
                {{ $t('home') }}
              </router-link>
              </li>
              <li class="nav-item">
              <router-link :to="{ name: 'articles' }" class="nav-link" active-class="active">               
                {{ $t('articles') }}
              </router-link>
              </li>
              <li class="nav-item">
              <router-link :to="{ name: 'contact' }" class="nav-link" active-class="active">               
                {{ $t('contact') }}
              </router-link>
              </li>             
              <locale-dropdown />              
              <li class="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block">
              <router-link :to="{ name: 'add_company' }" class="btn btn-primary" >               
                {{ $t('add_company') }}
              </router-link>
              </li>
               <li  v-if="user>53"  class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark"
               href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            >
              <img :src="user.photo_url" class="rounded-circle profile-photo mr-1">
              {{ user.name }}
            </a>
            <div class="dropdown-menu">
              <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
                <fa icon="cog" fixed-width />
                {{ $t('settings') }}
              </router-link>

              <div class="dropdown-divider" />
              <a class="dropdown-item pl-3" href="#" @click.prevent="logout">
                <fa icon="sign-out-alt" fixed-width />
                {{ $t('logout') }}
              </a>
            </div>
          </li>
          </ul>
           
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: process.env.appName
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
