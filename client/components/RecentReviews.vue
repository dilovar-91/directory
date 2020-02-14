<template>
  <section class="py-7 pt-3 pb-3">
      <div class="container">
        <div class="text-center">
          <p class="subtitle text-primary">{{$t('recent-reviews')}}</p>
          <h2 class="mb-5">{{$t('recent-review-desc')}}</h2>
        </div>        
        <!-- Slider main container-->
        <div v-swiper:mySwiper="swiperOption" class="swiper-container testimonials-slider testimonials swiper-container-horizontal">
          <!-- Additional required wrapper-->
          <div class="swiper-wrapper pt-2 pb-5" style="transform: translate3d(-4520px, 0px, 0px); transition-duration: 0ms;"><div class="swiper-slide px-3 swiper-slide-duplicate" data-swiper-slide-index="4" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div><div class="swiper-slide px-3 swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="5" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div>
            <!-- Slides-->
            <div class="swiper-slide px-3 swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div>
            <div class="swiper-slide px-3 swiper-slide-duplicate-next" data-swiper-slide-index="1" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div>
            <div class="swiper-slide px-3" data-swiper-slide-index="2" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div>
            <div class="swiper-slide px-3" data-swiper-slide-index="3" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div>
            <div class="swiper-slide px-3" data-swiper-slide-index="4" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div>
            <div class="swiper-slide px-3 swiper-slide-prev" data-swiper-slide-index="5" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div>
          <div class="swiper-slide px-3 swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div><div class="swiper-slide px-3 swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="1" style="width: 545px; margin-right: 20px;">
              <div class="testimonial card rounded-lg shadow border-0">
                <div class="testimonial-avatar"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-4/img/avatar/avatar-3.jpg" alt="..." class="img-fluid"></div>
                <div class="text">
                  <div class="testimonial-quote"><i class="fas fa-quote-right"></i></div>
                  <p class="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p><strong>Jessica Watson</strong>
                </div>
              </div>
            </div></div>
          <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-bullets-dynamic" style="width: 80px;"><span class="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main" tabindex="0" role="button" aria-label="Go to slide 1" style="left: 32px;"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active-next" tabindex="0" role="button" aria-label="Go to slide 2" style="left: 32px;"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active-next-next" tabindex="0" role="button" aria-label="Go to slide 3" style="left: 32px;"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4" style="left: 32px;"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5" style="left: 32px;"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6" style="left: 32px;"></span></div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
      </div>
    </section>
</template>
<script>
  export default {
    data () {
      return {        
        swiperOption: {
          loop: true,
          slidesPerView: 2,          
          roundLengths: true,
          spaceBetween: 1,
          centeredSlides: true,
          breakpoints: {
            1200: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            400: {
                slidesPerView: 1
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },         
        }
      }
    },
    
  }
</script>