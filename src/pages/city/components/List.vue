<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
              <div class="item border-bottom">啊啦</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
              <div class="item border-bottom">阿拉</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  /* 自定义一像素边框颜色 */
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    bottom: 0
    right: 0
    .title
      line-height: .54rem
      background: #eee
      color: #666
      padding-left: .2rem
      font-size: .26rem
    .button-list
      /* 给右边留出导航栏 */
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          text-align: center
          border: #ccc solid .02rem
          padding: .1rem 0
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        color: #666
        padding-left: .2rem
</style>
