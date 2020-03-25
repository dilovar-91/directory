<template>
<div>
<section class="hero py-6 py-lg-7 text-white dark-overlay"><img src="/img/background-contact.jpg" alt="обратная связь" class="bg-image">
      <div class="container overlay-content">
        <!-- Breadcrumbs -->
        <BreadCrumb :title="$t('contact')" />
        <h1 class="hero-heading">Чем мы можем помочь вам сегодня?</h1>
      </div>
    </section>
    <section class="py-3">
      <div class="container">       
        <div class="row">
          <div class="col-md-4 text-center text-md-left mb-4 mb-md-0">
            <div class="icon-rounded mb-4 bg-primary">
               <i class="fas fa-map-marker-alt text-white"></i>
            </div>
            <h3 class="h5">Адрес</h3>
            <p class="text-muted">Новодмитровская ул., 2, корп. 1<br>Москва<br> <strong>Российская Федерация</strong></p>
          </div>
          <div class="col-md-4 text-center text-md-left mb-4 mb-md-0">
            <div class="icon-rounded mb-4 bg-primary">
              <i class="fas fa-phone text-white"></i>
            </div>
            <h3 class="h5">Телефон</h3>
            <p class="text-muted">Вы можете поговорить с этим номером телефона.</p>
            <p class="text-muted"><strong>+7 495 255 44 33</strong></p>
          </div>
          <div class="col-md-4 text-center text-md-left mb-4 mb-md-0">
            <div class="icon-rounded mb-4 bg-primary">
               <i class="fas fa-question text-white"></i>
            </div>
            <h3 class="h5">Электронная почта</h3>
            <p class="text-muted">Пожалуйста, не стесняйтесь написать нам письмо.</p>
            <ul class="list-unstyled text-muted">
              <li>info@undirect.ru</li>
              <li>support@undirect.ru</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="py-4 bg-gray-100">
      <div class="container">
        <h2 class="h4 mb-5">Обратная связь</h2>
        <div class="row">
          <div class="col-md-7 mb-5 mb-md-0">
            <form id="contact-form" method="post" action="/contact" class="form">
              <div class="controls">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="name" class="form-label">Ваше имя *</label>
                      <input type="text" name="name" id="name" placeholder="Ваше имя" required="required" class="form-control">
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="surname" class="form-label">Ваша фамилия *</label>
                      <input type="text" name="surname" id="surname" placeholder="Ваша фамилия" required="required" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">Ваш email *</label>
                  <input type="email" name="email" id="email" placeholder="Ваш email" required="required" class="form-control">
                </div>
                <div class="form-group">
                  <label for="message" class="form-label">Ваше письмо нам *</label>
                  <textarea rows="4" name="message" id="message" placeholder="Ваше письмо нам" required="required" class="form-control"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-primary">Отправить</button>
              </div>
            </form>
          </div>
          <div class="col-md-5">
            <div class="pl-lg-4">
              <p class="text-muted">Качественных площадях это бизнес центры бизнес-центре класса класса b плюс класса b и есть даже бизнес-центре класса цену это современное уже специально построенные под офис ники вот и сейчас екатеринбурге насчитывает уже больше 90 бизнес-центров еще пять планируется сдать в пятнадцатом году выпущен уже на стадии завершения деваться не достраивают их уже доделывают естественно проект нужно сделать издать и конечно у всех вопрос все видят улице.</p>
              <div class="social">
                <ul class="list-inline">
                  
                  <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-facebook"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-vk"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
</template>
<script>

import Popular from '~/components/Popular'
import RecentReviews from '~/components/RecentReviews'
import Hero from '~/components/Hero'
import BreadCrumb from '~/components/BreadCrumb'
import { mapGetters } from 'vuex'

export default {
  layout: 'main',
  components: {
      BreadCrumb
  },
  head () {
    return { title: this.$t('contact') }
  },
  data: () => ({
    title: process.env.appName,
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
