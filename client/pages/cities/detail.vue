<template>
<div class="bg-white">

      <client-only>
<yandex-map 
    :coords="[company.latitude, company.longitude]"     
    zoom="13"
    :controls= "['zoomControl']"
    :scroll-zoom="false"
    style="height: 500px; display:block;"
    class="h-100"    
  >
    <ymap-marker 
       
      :coords="[company.latitude, company.longitude]" 
      @click="goToCompany()"
      marker-id="123" 
      :hint-content="company.title"      
      :balloon-template="balloonTemplate(company.id, company.title, company.pictures, company.adress)"              
      :icon="{
            layout: 'default#image',
            imageHref: '/img/car-point.png',
            imageSize: [55, 55],
            imageOffset: [-15, -35],               
        }"  
         
    />    
  </yandex-map>
 </client-only> 

 <section>
      <div class="map-wrapper-450">
        <div id="categoryMap" class="h-100"></div>
      </div>
    </section>
  <section class="py-5 bg-gray-100 shadow">
      <div class="container">
        <h1 class="mb-4">New York</h1>
        <p class="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        <h5>City Quarters            </h5>
        <ul class="nav nav-pills-custom">
          <li class="nav-item"><a href="#" class="nav-link active">Mount Vernon</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Johnstown</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Jamestown</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Hudson</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Kingston</a></li>
        </ul>
      </div>
    </section>    

    <section class="py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div class="mr-3">
            <p class="mb-3 mb-md-0"><strong>12</strong> results found</p>
          </div>
          <div>
            <label for="form_sort" class="form-label mr-2">Sort by</label>
            <select name="sort" id="form_sort" data-style="btn-selectpicker" title="" class="selectpicker">
              <option value="sortBy_0">Most popular   </option>
              <option value="sortBy_1">Recommended   </option>
              <option value="sortBy_2">Newest   </option>
              <option value="sortBy_3">Oldest   </option>
              <option value="sortBy_4">Closest   </option>
            </select>
          </div>
        </div>
        <div class="row">
          <!-- place item-->
          <div data-marker-id="59c0c8e33b1527bfe2abaf92" class="col-sm-6 col-lg-4 mb-5">
            <div class="card h-100 border-0 shadow">
              <div class="card-img-top overflow-hidden gradient-overlay"> <img src="/img/photo/photo-1484154218962-a197022b5858.jpg" alt="Modern, Well-Appointed Room" class="img-fluid"><a href="detail-rooms.html" class="tile-link"></a>
                <div class="card-img-overlay-bottom z-index-20">
                  <div class="media text-white text-sm align-items-center"><img src="/img/avatar/avatar-0.jpg" alt="Pamela" class="avatar avatar-border-white mr-2">
                    <div class="media-body">Pamela</div>
                  </div>
                </div>
                <div class="card-img-overlay-top text-right"><a href="javascript: void();" class="card-fav-icon position-relative z-index-40"> 
                    <svg class="svg-icon text-white">
                      <use xlink:href="#heart-1"> </use>
                    </svg></a></div>
              </div>
              <div class="card-body d-flex align-items-center">
                <div class="w-100">
                  <h6 class="card-title"><a href="detail-rooms.html" class="text-decoration-none text-dark">Modern, Well-Appointed Room</a></h6>
                  <div class="d-flex card-subtitle mb-3">
                    <p class="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                    <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                    </p>
                  </div>
                  <p class="card-text text-muted"><span class="h4 text-primary">$80</span> per night</p>
                </div>
              </div>
            </div>
          </div>
          <!-- place item-->
          <div data-marker-id="59c0c8e322f3375db4d89128" class="col-sm-6 col-lg-4 mb-5">
            <div class="card h-100 border-0 shadow">
              <div class="card-img-top overflow-hidden gradient-overlay"> <img src="/img/photo/photo-1426122402199-be02db90eb90.jpg" alt="Cute Quirky Garden apt, NYC adjacent" class="img-fluid"><a href="detail-rooms.html" class="tile-link"></a>
                <div class="card-img-overlay-bottom z-index-20">
                  <div class="media text-white text-sm align-items-center"><img src="/img/avatar/avatar-7.jpg" alt="John" class="avatar avatar-border-white mr-2">
                    <div class="media-body">John</div>
                  </div>
                </div>
                <div class="card-img-overlay-top text-right"><a href="javascript: void();" class="card-fav-icon position-relative z-index-40"> 
                    <svg class="svg-icon text-white">
                      <use xlink:href="#heart-1"> </use>
                    </svg></a></div>
              </div>
              <div class="card-body d-flex align-items-center">
                <div class="w-100">
                  <h6 class="card-title"><a href="detail-rooms.html" class="text-decoration-none text-dark">Cute Quirky Garden apt, NYC adjacent</a></h6>
                  <div class="d-flex card-subtitle mb-3">
                    <p class="flex-grow-1 mb-0 text-muted text-sm">Entire apartment</p>
                    <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                                  </i>
                    </p>
                  </div>
                  <p class="card-text text-muted"><span class="h4 text-primary">$121</span> per night</p>
                </div>
              </div>
            </div>
          </div>
          <!-- place item-->
          <div data-marker-id="59c0c8e3a31e62979bf147c9" class="col-sm-6 col-lg-4 mb-5">
            <div class="card h-100 border-0 shadow">
              <div class="card-img-top overflow-hidden gradient-overlay"> <img src="/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="Modern Apt - Vibrant Neighborhood!" class="img-fluid"><a href="detail-rooms.html" class="tile-link"></a>
                <div class="card-img-overlay-bottom z-index-20">
                  <div class="media text-white text-sm align-items-center"><img src="/img/avatar/avatar-8.jpg" alt="Julie" class="avatar avatar-border-white mr-2">
                    <div class="media-body">Julie</div>
                  </div>
                </div>
                <div class="card-img-overlay-top text-right"><a href="javascript: void();" class="card-fav-icon position-relative z-index-40"> 
                    <svg class="svg-icon text-white">
                      <use xlink:href="#heart-1"> </use>
                    </svg></a></div>
              </div>
              <div class="card-body d-flex align-items-center">
                <div class="w-100">
                  <h6 class="card-title"><a href="detail-rooms.html" class="text-decoration-none text-dark">Modern Apt - Vibrant Neighborhood!</a></h6>
                  <div class="d-flex card-subtitle mb-3">
                    <p class="flex-grow-1 mb-0 text-muted text-sm">Entire apartment</p>
                    <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                                  </i><i class="fa fa-star text-gray-300">                                  </i>
                    </p>
                  </div>
                  <p class="card-text text-muted"><span class="h4 text-primary">$75</span> per night</p>
                </div>
              </div>
            </div>
          </div>
          <!-- place item-->
          <div data-marker-id="59c0c8e3503eb77d487e8082" class="col-sm-6 col-lg-4 mb-5">
            <div class="card h-100 border-0 shadow">
              <div class="card-img-top overflow-hidden gradient-overlay"> <img src="/img/photo/photo-1494526585095-c41746248156.jpg" alt="Sunny Private Studio-Apartment" class="img-fluid"><a href="detail-rooms.html" class="tile-link"></a>
                <div class="card-img-overlay-bottom z-index-20">
                  <div class="media text-white text-sm align-items-center"><img src="/img/avatar/avatar-9.jpg" alt="Barbora" class="avatar avatar-border-white mr-2">
                    <div class="media-body">Barbora</div>
                  </div>
                </div>
                <div class="card-img-overlay-top text-right"><a href="javascript: void();" class="card-fav-icon position-relative z-index-40"> 
                    <svg class="svg-icon text-white">
                      <use xlink:href="#heart-1"> </use>
                    </svg></a></div>
              </div>
              <div class="card-body d-flex align-items-center">
                <div class="w-100">
                  <h6 class="card-title"><a href="detail-rooms.html" class="text-decoration-none text-dark">Sunny Private Studio-Apartment</a></h6>
                  <div class="d-flex card-subtitle mb-3">
                    <p class="flex-grow-1 mb-0 text-muted text-sm">Shared room</p>
                    <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                                  </i>
                    </p>
                  </div>
                  <p class="card-text text-muted"><span class="h4 text-primary">$93</span> per night</p>
                </div>
              </div>
            </div>
          </div>
          <!-- place item-->
          <div data-marker-id="59c0c8e39aa2eed0626e485d" class="col-sm-6 col-lg-4 mb-5">
            <div class="card h-100 border-0 shadow">
              <div class="card-img-top overflow-hidden gradient-overlay"> <img src="/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="Mid-Century Modern Garden Paradise" class="img-fluid"><a href="detail-rooms.html" class="tile-link"></a>
                <div class="card-img-overlay-bottom z-index-20">
                  <div class="media text-white text-sm align-items-center"><img src="/img/avatar/avatar-10.jpg" alt="Jack" class="avatar avatar-border-white mr-2">
                    <div class="media-body">Jack</div>
                  </div>
                </div>
                <div class="card-img-overlay-top text-right"><a href="javascript: void();" class="card-fav-icon position-relative z-index-40"> 
                    <svg class="svg-icon text-white">
                      <use xlink:href="#heart-1"> </use>
                    </svg></a></div>
              </div>
              <div class="card-body d-flex align-items-center">
                <div class="w-100">
                  <h6 class="card-title"><a href="detail-rooms.html" class="text-decoration-none text-dark">Mid-Century Modern Garden Paradise</a></h6>
                  <div class="d-flex card-subtitle mb-3">
                    <p class="flex-grow-1 mb-0 text-muted text-sm">Entire house</p>
                    <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                    </p>
                  </div>
                  <p class="card-text text-muted"><span class="h4 text-primary">$115</span> per night</p>
                </div>
              </div>
            </div>
          </div>
          <!-- place item-->
          <div data-marker-id="59c0c8e39aa2edasd626e485d" class="col-sm-6 col-lg-4 mb-5">
            <div class="card h-100 border-0 shadow">
              <div class="card-img-top overflow-hidden gradient-overlay"> <img src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="Brooklyn Life, Easy to Manhattan" class="img-fluid"><a href="detail-rooms.html" class="tile-link"></a>
                <div class="card-img-overlay-bottom z-index-20">
                  <div class="media text-white text-sm align-items-center"><img src="/img/avatar/avatar-11.jpg" alt="Stuart" class="avatar avatar-border-white mr-2">
                    <div class="media-body">Stuart</div>
                  </div>
                </div>
                <div class="card-img-overlay-top text-right"><a href="javascript: void();" class="card-fav-icon position-relative z-index-40"> 
                    <svg class="svg-icon text-white">
                      <use xlink:href="#heart-1"> </use>
                    </svg></a></div>
              </div>
              <div class="card-body d-flex align-items-center">
                <div class="w-100">
                  <h6 class="card-title"><a href="detail-rooms.html" class="text-decoration-none text-dark">Brooklyn Life, Easy to Manhattan</a></h6>
                  <div class="d-flex card-subtitle mb-3">
                    <p class="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                    <p class="flex-shrink-1 mb-0 card-stars text-xs text-right"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                                  </i>
                    </p>
                  </div>
                  <p class="card-text text-muted"><span class="h4 text-primary">$123</span> per night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Pagination -->
        <nav aria-label="Page navigation example">
          <ul class="pagination pagination-template d-flex justify-content-center">
            <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-left"></i></a></li>
            <li class="page-item active"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><a href="#" class="page-link">3</a></li>
            <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-right"></i></a></li>
          </ul>
        </nav>
      </div>
    </section>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddReview from '~/components/AddReview'
import HeartButton from '~/components/HeartButton'
export default {
layout: "main", 
  components: {
   AddReview,
   HeartButton,
  }, 

  head () {
    return { title: this.company.title + ', ' + this.company.adress,
    meta: [
        { hid: 'description', name: 'description', content: this.company.description }
    ],
    }
  },

  data: () => ({
    title: process.env.appName,  
    swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            991: {
                slidesPerView: 4
            },
            565: {
                slidesPerView: 3
            }
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },        
        } 
    
  }),
  computed: {
    ...mapGetters({
    authenticated: 'auth/check',
    company: 'company/item',
    reviews: 'review/reviews',
    total_items: 'review/total_items',
    }), 
    id() {
      return Number(this.$route.params.id)
    },
  }, 
  async fetch({store, params: { id, page }}) {     
    await store.dispatch("company/fetch_item", {id})
    await store.dispatch("review/fetch_item", {id})  
  },
  methods: {
      makeArray(keywords){            
            
            return keywords.split(",");
      },
      setLike(e, id){   
         //console.log(id)       
        this.$store.dispatch("review/setLike", {id: id})
        e.preventDefault()  
      },
      
      goToCompany: function (id = 'empty') {   
          window.open("/company/" + id, "_blank");    
          //this.$router.push("/company/" + slug)
      },
      balloonTemplate: function(id=null, title='', pic=null, adress=null) {
      return `<a href="/company/`+id+`">
        <h4 class="warning-text" @click="goToCompany()">`+ title + ', ' + adress +`</h4>
        <img src="/img/company/`+ pic[0] +`" width="350px">
      </a>`
      }         
  }
  
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

@media screen and (min-width: 320px) {
  .pic {
  height: 165px;
  }
}

@media screen and (min-width: 540px) {
  .pic {
  height: 190px;
  }
}

@media screen and (min-width: 768px) {
  .pic {
  height: 210px;
  }
}
@media screen and (min-width: 1200px) {
  .pic {
    height: 290px;
  }
}

@media screen and (min-width: 1400px) {
  .pic {
    width: 100%;
    height: 370px;
  }
}
.pulse {
  border-radius: 100%;  
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204,169,44, 0.4);
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -webkit-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
      box-shadow: 0 0 0 20px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}



</style>