<template>
    <section style="background-image: url('https://d19m59y37dris4.cloudfront.net/directory/1-4/img/photo/restaurant-1515164783716-8e6920f3e77c.jpg');" class="pt-7 pb-5 d-flex align-items-end dark-overlay bg-cover">
      <div class="container overlay-content">
        <div class="d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-end">
          <div class="text-white mb-4 mb-lg-0">
            <div class="badge badge-pill badge-transparent px-3 py-2 mb-4">{{caregory}}</div>
            <h1 class="text-shadow verified">{{title}}</h1>
            <p><i class="fa-map-marker-alt fas mr-2"></i> 53 Broadway, Brooklyn, NY 1129</p>
            <p class="mb-0 d-flex align-items-center"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200 mr-4">                   </i>8 Reviews</p>
          </div>
          <div class="calltoactions"><a href="#leaveReview" onclick="$('#leaveReview').collapse('show')" data-smooth-scroll="" class="btn btn-primary">Leave a Review</a></div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  props: {    
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true
    },
    review_count: {
      type: Number,
      required: true
    }
  }
  
}
</script>