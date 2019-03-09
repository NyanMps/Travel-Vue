<template>
  <div id="app">
    <!--启用缓存,重新路由后不再发请求-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
