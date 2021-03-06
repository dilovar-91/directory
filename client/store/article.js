export const state = () => ({
  articles: [],
  allarticles: [],
  article: {}
})
export const getters = {
  articles: (state) => {
    return state.articles
  },
  article: (state) => {
    return state.article
  },
  total_items: (state) => {
    return state.articles.length
  }
}
export const mutations = {
  setArticles (state, articles) {
    state.articles = articles
  },
  setArticle (state, article) {
    state.article = article
  },
  clearArticles (state) {
    state.articles = []
  },
  add (state, value) {
    // eslint-disable-next-line no-undef
    merge(state.articles, value)
  }
}
export const actions = {
  async get ({ commit }, { slug }) {
    await this.$axios.get(`/article/${slug}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setArticle', res.data)
        }
      })
  },
  async getArticles ({ commit}, {limit=null }) {
    let url = ((limit !== null) ? '/articles?limit='+limit : '/articles')
    await this.$axios.get(url)
      .then((res) => {
        if (res.status === 200) {
          commit('setArticles', res.data)
        }
      })
  },
  async fetch_item ({ commit }, { slug }) {
    await this.$axios.get(`/article/${slug}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setArticle', res.data)
        }
      })
  }
}
