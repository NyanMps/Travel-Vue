<template>
    <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
        <!-- border-bottom 一像素边框-->
        <li
          class="item border-bottom"
          v-for="item of RecommendList"
          :key="item.id"
        >
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      RecommendList: [{
        id: 1,
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201402/25/aafec297c9838bab7c5ba84b1cbaad57.jpg_250x250_c1ae475d.jpg',
        desc: '描述描述这是描述1',
        title: '标题这是标题1'
      }, {
        id: 2,
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201402/25/aafec297c9838bab7c5ba84b1cbaad57.jpg_250x250_c1ae475d.jpg',
        desc: '描述描述这是描述2',
        title: '标题这是标题2'
      }, {
        id: 3,
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201402/25/aafec297c9838bab7c5ba84b1cbaad57.jpg_250x250_c1ae475d.jpg',
        desc: '描述描述这是描述3',
        title: '标题这是标题3'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@style/mixins.styl"
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
