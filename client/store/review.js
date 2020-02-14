import axios from 'axios'
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
  UPDATE_LIKE(state, review) {
    const reviewIndex = state.review.findIndex((t) => t.id == review.id)
    Object.assign(state.review[reviewIndex], { recomend_count:review.recomend_count + 1 })    
  }
}
export const actions = {
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
      this.$axios.post(`/review/like/${review.id}`)
        .then((response) => {
          commit('UPDATE_LIKE')
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
