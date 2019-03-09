<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import Axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {HomeWeekend, HomeRecommend, HomeIcons, HomeSwiper, HomeHeader},
  data () {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      Axios.get('/api/index.json')
        .then(this.getHomeInfoCallback)
    },
    getHomeInfoCallback (res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    // 生命周期函数，挂载后执行
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
