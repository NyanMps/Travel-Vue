import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
// @ 表示当前目录，也就是 src

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
