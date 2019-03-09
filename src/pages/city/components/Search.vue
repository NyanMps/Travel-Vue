<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      // 用于双向绑定
      keyword: '',
      timer: null,
      list: []
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let citiesKey in this.cities) {
          this.cities[citiesKey].forEach((item) => {
            if (item.name.indexOf(this.keyword) > -1 ||
              item.spell.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@style/varibles.styl"
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      padding: 0
      height: .62rem
      line-height: .62rem
      text-align: center
      width: 100%
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    bottom: 0
    left: 0
    right: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #ffffff
</style>
