import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:1
  },
  getters: {
    getToken(state){
      return state
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
