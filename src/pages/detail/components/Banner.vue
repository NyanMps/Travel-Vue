<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-num">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{imgs.length}}
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="isShow" @close="handleClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {CommonGallary},
  props: {
    imgs: Array,
    bannerImg: String,
    sightName: String
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    handleBannerClick () {
      this.isShow = true
    },
    handleClose () {
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      display: flex
      color: #ffffff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-num
        margin-top: .14rem
        padding: 0 .4rem
        height: .4rem
        line-height: .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
