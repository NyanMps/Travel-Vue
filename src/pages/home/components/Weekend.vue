<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- border-bottom 一像素边框-->
      <li
        class="border-bottom"
        v-for="item of WeekendList"
        :key="item.id"
      >
        <div class="img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      WeekendList: [{
        id: 1,
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ef/815eec316c47c4.jpg_r_640x214_5bf7f999.jpg',
        desc: '描述描述这是描述1',
        title: '标题这是标题1'
      }, {
        id: 2,
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ef/815eec316c47c4.jpg_r_640x214_5bf7f999.jpg',
        desc: '描述描述这是描述2',
        title: '标题这是标题2'
      }, {
        id: 3,
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ef/815eec316c47c4.jpg_r_640x214_5bf7f999.jpg',
        desc: '描述描述这是描述3',
        title: '标题这是标题3'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@style/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 34%
    .item-img
      width: 100%
  .item-info
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
</style>
