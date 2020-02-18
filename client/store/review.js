import axios from 'axios'
import swal from 'sweetalert2'
export const state = () => ({
  reviews: [],
  allreviews: [],
  review: {}
})
export const getters = {
  reviews: (state) => {
    return state.reviews
  },
  allReviews: (state) => {
    return state.allreviews
  },
  review: (state) => {
    return state.review
  },
  total_items: (state) => {
    return state.reviews.length
  }
}
export const mutations = {
  setReviews (state, reviews) {
    state.reviews = reviews
  },
  setAllReviews (state, allreviews) {
    state.allreviews = allreviews
  },
  setReview (state, review) {
    state.review = review
  },
  clearReviews (state) {
    state.reviews = []
  },
  add (state, value) {
    // eslint-disable-next-line no-undef
    merge(state.reviews, value)
  },
  UPDATE_LIKE(state, payload) {
    const resultIndex = state.reviews.findIndex((p) => p.id == payload.id)
      Object.assign(state.reviews[resultIndex], payload)  
  }
}
export const actions = {
  addReview({ commit }, { review}) {
    return new Promise((resolve, reject) => {
      axios.post("/review/setreview", {review})
        .then((response) => {
          
          if (response.status === 201) {
            swal({
              type: 'success',
              title: 'Отзыв',
              text: 'Отзыв успешно сохранен!',
              reverseButtons: true,
              confirmButtonText: 'OK',
              cancelButtonText:'Отмена'
            })
          }
        })
        .catch((error) => { reject(error) })
    })
  },
  async get ({ commit }, { slug }) {
    await this.$axios.get(`/reviews/${slug}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setReviews', res.data)
        }
      })
  },
  async getAll ({ commit }, { page = 1 }) {
    await this.$axios.get(`/allreviews/${page}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setAllReviews', res.data)
        }
      })
  },
  async fetch_item ({ commit }, { id }) {
    await this.$axios.get(`/reviews/${id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setReviews', res.data.data)
        }
      })
  },

  setLike({ commit }, review) {
    return new Promise((resolve, reject) => {
      this.$axios.post(`/review/like`, review)
        .then((response) => {
          if (response.status === 200) {
          commit('UPDATE_LIKE', response.data)
          resolve(response)
          }
        })
        .catch((error) => { reject(error) })
    })
  }

}
