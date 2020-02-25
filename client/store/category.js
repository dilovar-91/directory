export const state = () => ({
  categories: [],
  allcategories: [],
  category: {}
})
export const getters = {
  categories: (state) => {
    return state.categories
  },
  category: (state) => {
    return state.category
  },
  total_items: (state) => {
    return state.categories.length
  },
  categorybyid: state  =>{
    return state.categories.find(category =>category.id = 1)
  }

}
export const mutations = {
  setCategories (state, categories) {
    state.categories = categories
  },
  setCategory (state, category) {
    state.category = category
  },
  clearCategories (state) {
    state.categories = []
  },
  add (state, value) {
    // eslint-disable-next-line no-undef
    merge(state.categories, value)
  }
}
export const actions = {
  async get ({ commit }, { slug }) {
    await this.$axios.get(`/category/${slug}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCategory', res.data)
        }
      })
  },
  async getCategories ({ commit }) {
    await this.$axios.get(`/categories`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCategories', res.data)         
        }
      })
  },
  async fetch_category ({ commit }, { slug }) {
    await this.$axios.get(`/category/${slug}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCategory', res.data)
        }
      })
  }
}
