import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}

export default new Vuex.Store({
  state: {
    city: defaultCity
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
      // 本地存储 (低版本浏览器或者隐身模式可能会抛异常)
      try {
        localStorage.city = name
      } catch (e) {
      }
    }
  }
})
