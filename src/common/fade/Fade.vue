<template>
  <!--渐隐渐现的动画-->
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'CommonFade'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>
