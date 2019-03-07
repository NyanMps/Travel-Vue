<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="icon-img-content">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
      },
      swiperList: [
        {
          id: 1,
          desc: '热门景点热门景点热门景点热门景点1',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: 2,
          desc: '热门景点2',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: 3,
          desc: '热门景点3',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: 4,
          desc: '热门景点4',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: 5,
          desc: '热门景点5',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: 6,
          desc: '热门景点6',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: 7,
          desc: '热门景点7',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: 8,
          desc: '热门景点8',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: 9,
          desc: '热门景点9',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.swiperList.forEach((item, index) => {
        const pageIndex = Math.floor(index / 8)
        if (pages[pageIndex] == null) {
          pages[pageIndex] = []
        }
        pages[pageIndex].push(item)
      })
      return pages
    }
  }
}
</script>

<!-- 宽度 100%  pb 就是宽度的 50% -->
<style lang="stylus" scoped>
  @import "~@style/varibles.styl"
  @import "~@style/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      box-sizing border-box
      padding: .1rem
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      .icon-img-content
        height: 100%
        display: block
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      color: $darkTextColor
      text-align: center
      ellipsis()
</style>
