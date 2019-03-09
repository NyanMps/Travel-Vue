<template>
  <div>
    <detail-banner :imgs="gallaryImgs" :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
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
import Axios from 'axios'

export default {
  name: 'Detail',
  components: {DetailList, DetailHeader, DetailBanner},
  data () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailList () {
      Axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailCallback)
    },
    getDetailCallback (res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.list = data.categoryList
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
    }
  },
  mounted () {
    this.getDetailList()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
