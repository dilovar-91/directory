<template>
<div style="top: 100px;" class=" shadow ml-lg-4 rounded sticky-top">    
                <div class="card-header bg-gray-100 py-2 border-0">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <h4 class="subtitle text-primary text-center" >Информации</h4>  
                    </div>
                  </div>
                </div>
                <div class="card-body" >
                  <table class="table text-sm mb-0">
                    <tbody>
                     <tr v-if="info.properties.adress">
                      <th class="pl-0 pr-0 border-0"><i class="fas fa-map-marker-alt mr-1 text-primary"></i>{{ $t('address') }}</th>
                      <td class="pr-0 pl-0 text-right border-0">{{ info.properties.adress }}</td>
                    </tr>
                     <tr v-if="info.properties.phone">
                      <th class="pl-0 border-0"><i class="fas fa-phone mr-1 text-primary"></i>{{ $t('phone') }}</th>
                      <td class="pr-0 text-right border-0">{{ info.properties.phone }}</td>
                    </tr>
                     <tr >
                      <th class="pl-0 border-0"><i class="fas fa-calendar mr-1 text-primary"></i>{{ $t('job_schedule') }}</th>
                      <td class="pr-0 text-right border-0">{{ info.properties.job_schedule }}</td>
                    </tr>
                     <tr >
                      <th class="pl-0 border-0"><i class="fas fa-globe mr-1 text-primary"></i>{{ $t('website') }}</th>
                      <td class="pr-0 text-right border-0">{{ info.properties.website }}</td>
                    </tr>
                  </tbody>
                  </table>
                  <div class="text-block pb-3">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="text-muted text-sm mb-0">Общая оценка на основе <b class="text-danger">{{info.review_count }}</b> отзывов</p>
                      <div class="mt-n1">
                        <star-rating :rating="info.avg_rating" :star-size="20" :read-only="true" :show-rating="true" active-color="#007bff" border-color="#007bff" :glow="2" ></star-rating> 
                      </div>
                    </div><img :src="'/img/companies/'+info.pictures[0]" alt="" width="100" class="ml-3 rounded">
                  </div>
                </div>
                   <div class="text-center" v-if="info.properties && info.properties.website"><a :href="info.properties.website" class="btn btn-outline-primary btn-block" target="_blank"> <i class="far fa-paper-plane mr-2"></i>{{$t('go-to-site')}}</a></div>
                </div>  
              <div class="card-footer bg-primary-light py-4 border-0">
                <div class="media align-items-center">
                  <div class="media-body">
                    <h6 class="text-primary">Вы являетесь владельцем этой организации?</h6>
                    <p class="text-sm text-primary opacity-8 mb-0"><router-link to="/register" class="text-danger">Зарегистрируйтесь</router-link>, управляйте информациями о вашей организации и взаимодействуйте с вашими клиентами.</p>
                  </div>
                </div>
              </div>   
          </div>
</template>
<script>
export default {
  props: {    
        info: {
        type: Object,
        required: true,
        },               
        is_company: {
        type: Number,
        required: false
        }     
    }
}
</script>
