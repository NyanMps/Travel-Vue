<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {DetailList, DetailHeader, DetailBanner},
  data () {
    return {
      list: [{
        title: '成人票',
        child: [{
          title: '三馆票'
        }, {
          title: '五馆票'
        }]
      }, {
        title: '学生票',
        child: [{
          title: '三馆票'
        }, {
          title: '五馆票'
        }]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
