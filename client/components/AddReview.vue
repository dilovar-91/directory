<template>
<div class="py-5">
              <button type="button" data-toggle="collapse" data-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview" class="btn btn-outline-primary">{{$t('write-review')}}</button>
              <div id="leaveReview" class="collapse mt-4">
                <form id="contact-form" @submit.prevent="setRating" method="POST" class="form">
                  <div class="form-group">
                    <label for="name" class="form-label">Заголовок *</label>
                    <input type="text" id="title" class="form-control" placeholder="Заголовок отзыва"  v-model="review.title" required>
                  </div>
                  <div class="row">                    
                  <div class="form-group ml-3">
                    <label for="name" class="form-label">Имя *</label>
                    <input type="text" id="name" class="form-control" placeholder="Ваше имя"  v-model="review.author" required>
                  </div>
                  
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="rating" class="form-label">Оценка *</label>
                        <select name="rating" id="rating" v-model="review.rating" class="custom-select focus-shadow-0">
                          <option disabled value="" selected="selected">Выберите один из вариантов</option>
                          <option value="5" >&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                          <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                          <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                          <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                          <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label for="name" class="form-label">Эл.почта *</label>
                    <input type="text" id="name" class="form-control" placeholder="Эл.почта"  v-model="review.email">
                  </div>
                  <div class="form-group">
                    <label for="name" class="form-label">Преимущество </label>
                    <input type="text" id="name" class="form-control" placeholder="Преимущество"  v-model="review.pros">
                  </div>
                  <div class="form-group">
                    <label for="name" class="form-label">Недостатки </label>
                    <input type="text" id="title" class="form-control" placeholder="Недостатки"  v-model="review.cons">
                  </div>
                  
                  <div class="form-group">
                    <label for="review" class="form-label">Текст отзыва *</label>
                    <textarea rows="4" name="review" id="review" placeholder="Введите ваше мнение" v-model="review.text" required="required" class="form-control"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Отправить отзыв</button>
                </form>
              </div>
</div>
</template>
<script>
export default{
  props: ['company_id'],
  data(){
     return {
       review: {
                    title: '',
                    author: '',
                    email: '',
                    text: '',
                    rating: '',
                    company_id: this.company_id,
                    pros: '',
                    cons: ''                    
                },  
      rating: 0,
      title: '',
      author: '',
      text: '',
      pros: '',      
      cons: '',      
      totaluser: 0,
      totalrate: 0         
    }
  },
  created(){
   
  }, 
  methods: {
     setRating(e) {
      var review = this.review;
      console.log(review)      
      this.$store.dispatch("review/addReview", {review: review})
          
    },    
  }
}
</script>