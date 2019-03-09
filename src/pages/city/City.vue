<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
import Axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default{
  name: 'City',
  components: {CityAlphabet, CityList, CitySearch, CityHeader},
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      Axios.get('/api/city.json')
        .then(this.cityInfoCallback)
    },
    cityInfoCallback (res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleChange (data) {
      this.letter = data
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
