<template>
    <footer class="position-relative z-index-10 d-print-none">
      <!-- Main block - menus, subscribe form-->
      <div class="py-4 bg-gray-200 text-muted"> 
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="font-weight-bold text-uppercase text-dark mb-3">{{ appName }}</div>
              <p>{{$t('app-description')}}</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" target="_blank" title="twitter" class="text-muted text-hover-primary"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="facebook" class="text-muted text-hover-primary"><i class="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="instagram" class="text-muted text-hover-primary"><i class="fab fa-instagram"></i></a></li>          
              </ul>
            </div>
            
            <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 class="text-uppercase text-dark mb-3">{{$t('pages')}}</h6>
              <ul class="list-unstyled">
                <li><a href="contact.html" class="text-muted">{{$t('contact')}}                                   </a></li>
                <li><a href="pricing.html" class="text-muted">{{$t('companies-on-map')}}                                   </a></li>
                <li><a href="text.html" class="text-muted">{{$t('rules')}}                                   </a></li>
                <li><a href="faq.html" class="text-muted">{{$t('privacy')}}                                   </a></li>
               
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <h6 class="text-uppercase text-dark mb-3">{{$t('popular-cities')}}</h6>
              <ul class="list-unstyled">
                <li><router-link to="contact.html" class="text-muted">{{$t('moscow')}}                                   </router-link></li>
                <li><router-link to="pricing.html" class="text-muted">{{$t('saint-petersburg')}}                                    </router-link></li>
                <li><router-link to="text.html" class="text-muted">{{$t('krasnodar')}}                                   </router-link></li>
                <li><router-link to="faq.html" class="text-muted">{{$t('rostov')}}                                </router-link></li>
                <li><router-link to="coming-soon.html" class="text-muted">{{$t('ekaterinburg')}}                                     </router-link></li>
              </ul>
            </div>
            <div class="col-lg-3">
              <h6 class="text-uppercase text-dark mb-3">Daily Offers & Discounts</h6>
              <p class="mb-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
              <form action="#" id="newsletter-form">
                <div class="input-group mb-3">
                  <input type="email" placeholder="Your Email Address" aria-label="Your Email Address" class="form-control bg-transparent border-dark border-right-0">
                  <div class="input-group-append">
                    <button type="submit" class="btn btn-outline-dark border-left-0"> <i class="fa fa-paper-plane text-lg"></i></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Copyright section of the footer-->
      <div class="py-4 font-weight-light bg-gray-800 text-gray-300">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-left">
              <p class="text-sm mb-md-0">&copy; {{ new Date().getFullYear() }} {{appName}}. {{$t('all-rights-reserved')}}</p>
            </div>            
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  data: () => ({
    appName: process.env.appName
  }),
}
</script>