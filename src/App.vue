<template>
  <div>
    <router-view></router-view>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from '@/components/content/MainTabbar'

export default {
  name: 'app',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import './assets/css/base.css'
</style>
