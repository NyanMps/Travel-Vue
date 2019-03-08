<template>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
      <li class="item">D</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~@style/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    bottom: 0
    top: 1.58rem
    width: .4rem
    .item
      text-align: center
      line-height: .4rem
      color: $bgColor
</style>
