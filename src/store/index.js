import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    changeCity (ctx, name) {
      // 调用 mutations
      ctx.commit('changeCity', name)
    }
  },
  mutations: {
    changeCity (state, name) {
      state.city = name
    }
  }
})
