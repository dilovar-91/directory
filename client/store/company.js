export const state = () => ({
  companies: [],
  companiesByCity: [],
  companiesByCategory: [],
  companiesByKeyword: [],
  companiesRelated: [],
  company: {},
  listing: {},
  searchResult: [],
  topCompanies: [],
  coords: [],
  cities: [],
  metros: [],  
  categories: []  
})
export const getters = {
  allCompany: (state) => {
    return state.companies
  },
  item: (state) => {
    return state.company
  },
  listing: (state) => {
    return state.listing
  },
  foundedCompany: (state) => {
    return state.searchResult
  },
  topCompanies: (state) => {
    return state.topCompanies
  },
  companiesByCity: (state) => {
    return state.companiesByCity
  },
  companiesByCategory: (state) => {
    return state.companiesByCategory
  },
  companiesByKeyword: (state) => {
    return state.companiesByKeyword
  },
  companiesRelated: (state) => {
    return state.companiesRelated
  },
  coords: (state) => {
    return state.coords
  },
  getCompanyBySlug: state => (slug) => {
    return state.companies.find(company => company.slug === slug)
  },
  totalItems: (state) => {
    return state.companies.length
  },
  totalSearch: (state) => {
    return state.searchResult.length
  },
  cities: (state) => {
    return state.cities
  },
  metros: (state) => {
    return state.metros
  },
  categories: (state) => {
    return state.categories
  }
}
export const mutations = {
  set (state, companies) {
    state.companies = companies
  },
  setCompanies (state, companies) {
    state.companies = companies
  },
  setTopCompanies (state, topCompanies) {
    state.topCompanies = topCompanies
  },
  setCompaniesByCity (state, companiesByCity) {
    state.companiesByCity = companiesByCity
  },
  setCompaniesByCategory (state, companiesByCategory) {
    state.companiesByCategory = companiesByCategory
  },
  setCompaniesByKeyword (state, companiesByKeyword) {
    state.companiesByKeyword = companiesByKeyword
  },
  setCompaniesRelated (state, companiesRelated) {
    state.companiesRelated = companiesRelated
  },
  setCompany (state, company) {
    state.company = company
  },
  setListing (state, listing) {
    state.listing = listing
  },
  setSearchResult (state, searchResult) {
    state.searchResult = searchResult
  },
  setCoords (state, coords) {
    state.coords = coords
  },
  setCities (state, cities) {
    state.cities = cities
  },
  setMetros (state, metros) {
    state.metros = metros
  },
  setCategories (state, categories) {
    state.categories = categories
  },
  clearCompanies (state) {
    state.companies = []
  },
  add (state, value) {
    // eslint-disable-next-line no-undef
    merge(state.companies, value)
  },
  remove (state, { company }) {
    state.companies.splice(state.list.indexOf(company), 1)
  }
}
export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    const res = await this.$axios.get('/companies')
    commit('set', res.data.data)
  },
  async get ({ commit }, { page, slug, sort }) {
    await this.$axios.get(`/companies?page=${page}&sort=${sort}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCompanies', res.data)
        }
      })
  },
  async getTopCompanies ({ commit }) {
    await this.$axios.get(`/topcompanies`)
      .then((res) => {
        if (res.status === 200) {
          commit('setTopCompanies', res.data)
        }
      })
  },
  async fetch_item ({ commit }, { id }) {
    await this.$axios.get(`/company/${id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCompany', res.data)
        }
      })
  },
  async fetch_listing ({ commit }, { id }) {
    await this.$axios.get(`/listing/${id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setListing', res.data)
        }
      })
  },
  async get_cities ({ commit }) {
    await this.$axios.get(`/cities`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCities', res.data)
        }
      })
  },

  async get_metros ({ commit }) {
    await this.$axios.get(`/metros`)
      .then((res) => {
        if (res.status === 200) {
          commit('setMetros', res.data)
        }
      })
  },
  async show ({ commit }, params) {
    await this.$axios.get(`/companies/${params.company_id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCompany', res.data)
        }
      })
      .catch(error => {
        console.log(error)
    });
  },
  async set ({ commit }, company) {
    await commit('set', company)
  },
  async companiesByCity ({ commit }, { page, slug, sort, category }) {
    await this.$axios.get(`/companies/city/${slug}?page=${page}&category=${category}&sort=${sort}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCompaniesByCity', res.data)
        }
      })
  },
  async companiesByCategory ({ commit }, { page, slug, sort }) {
    await this.$axios.get(`/companies/category/${slug}?page=${page}&sort=${sort}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCompaniesByCategory', res.data)
        }
      })
  },
  async get_categories ({ commit }) {
    await this.$axios.get(`/categories`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCategories', res.data)
        }
      })
  },

  async companiesByKeyword ({ commit }, { keyword, city, category, page }) {
    await this.$axios.get(`/search?keyword=${keyword}&city=${city}&category=${category}&page=${page}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCompaniesByKeyword', res.data)
        }
      })
  },

  async getRelatedCompanies ({ commit }, { title }) {
    await this.$axios.get(`/related?title=${title}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setCompaniesRelated', res.data)
        }
      })
  },
}
