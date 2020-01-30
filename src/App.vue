<template>
  <div>
    <keep-alive><router-view></router-view></keep-alive>
    <MainTabbar></MainTabbar>
    <iSVG/>
  </div>
</template>

<script>
import MainTabbar from '@/components/content/MainTabbar'
import iSVG from '@/components/content/icon/SVG'

export default {
  name: 'app',
  components: {
    MainTabbar,iSVG
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
