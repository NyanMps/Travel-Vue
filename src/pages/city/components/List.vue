<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
                 v-for="item of hot" :key="item.id"
                 @click="handleClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(data, key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
              <div class="item border-bottom"
                   v-for="item of data" :key="item.id"
                   @click="handleClick(item.name)"
              >{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleClick (name) {
      // 使用 Vuex 改变全局数据
      // this.$store.dispatch('changeCity', name)
      this.changeCity(name)
      // 或者可以直接调用 mutations
      // this.$store.commit('changeCity', name)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const pos = this.$refs[this.letter][0]
        this.scroll.scrollToElement(pos)
      }
    }
  },
  computed: {
    // 使用 Vuex 的便捷映射, 数组、对象皆可
    ...mapState({
      city: 'city'
    })
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
