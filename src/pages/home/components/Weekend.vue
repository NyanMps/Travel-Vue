<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- border-bottom 一像素边框-->
      <li
        class="border-bottom"
        v-for="item of weekendList"
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
  props: {
    weekendList: Array
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
