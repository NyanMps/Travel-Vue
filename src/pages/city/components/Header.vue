<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default{
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@style/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #ffffff
    background-color: $bgColor
    font-size: .32rem
    .back-icon
      position: absolute
      top: 0
      left: 0
      text-align: center
      width: .64rem
      font-size: .4rem
      color: #ffffff
</style>
