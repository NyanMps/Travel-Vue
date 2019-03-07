<template>
  <div class="swiper">
    <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: 1,
          url: 'http://img1.qunarzz.com/piao/fusion/1609/16/bee89c87307a3302.jpg_750x200_2c6299b9.jpg'
        }, {
          id: 2,
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg'
        }, {
          id: 3,
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ad906cbe02849a504c4a4399741013a4.jpg_750x200_8ac64dcc.jpg'
        }
      ]
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
