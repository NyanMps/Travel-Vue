<template>
  <div class="container" @click="handleClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="swiper-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        // 设置页码
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 自身或者父元素发生 dom 变化，自动刷新
        observer: true,
        observerParents: true,
        loop: false
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    z-index: 99
    display: flex
    flex-direction: column
    justify-content center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #ffffff
        bottom: -1rem
</style>
