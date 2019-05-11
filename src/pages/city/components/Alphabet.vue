<template>
    <ul class="list">
      <!--使用 prevent 阻止事件的默认行为，修复手机端 bug-->
      <li class="item"
          :ref="data"
          @click="handleClick"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          v-for="data of letters"
          :key="data">{{data}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      timer: null,
      startY: 0
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let citiesKey in this.cities) {
        letters.push(citiesKey)
      }
      return letters
    }
  },
  // 数据被更新后，页面完成渲染后执行
  updated () {
    // 获取 A 距离标题栏的高度
    this.startY = this.$refs['A'][0].offsetTop
    console.log('[Alphabet] updated run...')
  },
  methods: {
    handleClick (e) {
      // 向外触发事件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 函数截流，避免频繁调用
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 手指距离最顶部的高度 - 标题栏的高度
          const move = e.touches[0].clientY - 43 - 36
          const index = Math.floor((move - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
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
