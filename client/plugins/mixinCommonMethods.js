import Vue from 'vue'

Vue.mixin({
    methods: {
        truncate(text, limit=150){
        return text.slice(0, limit) + (text.length > limit ? '...' : '')
      }
    }
})