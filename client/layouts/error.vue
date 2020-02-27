<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <img src="/img/error-404.jpg" width="640px">
    <nuxt-link class="btn btn-danger" to="/">Вернуться на главную</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'main'
}
</script>