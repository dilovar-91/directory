export const state = () => ({
  cities: [],
  allcities: [],
  city: {}
})
export const getters = {
  cities: (state) => {
    return state.cities
  },
  city: (state) => {
    return state.city
  },
  total_items: (state) => {
    return state.cities.length
  },
  citybyid: state  =>{
    return state.cities.find(city =>city.id = 1)
  }

}
export const mutations = {
  setcities (state, cities) {
    state.cities = cities
  },
  setcity (state, city) {
    state.city = city
  },
  clearcities (state) {
    state.cities = []
  },
  add (state, value) {
    // eslint-disable-next-line no-undef
    merge(state.cities, value)
  }
}
export const actions = {
  async get ({ commit }, { slug }) {
    await this.$axios.get(`/city/${slug}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setcity', res.data)
        }
      })
  },
  async getcities ({ commit }) {
    await this.$axios.get(`/cities`)
      .then((res) => {
        if (res.status === 200) {
          commit('setcities', res.data)
        }
      })
  },
  async fetch_city ({ commit }, { slug }) {
    await this.$axios.get(`/city/${slug}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setcity', res.data)
        }
      })
  }
}
