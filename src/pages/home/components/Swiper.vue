<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="isShow">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 子组件必须是函数，ES6 可以简化
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    isShow () {
      return this.swiperList.length
    }
  }
}
</script>

<!-- 高比上宽做百分百 -->
<!-- 使用 >>> 穿透 scoped -->
<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .swiper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background: #eee
    .swiper-img
      width: 100%
</style>
