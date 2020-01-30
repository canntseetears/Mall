<template>
  <div class='menu'>
    <Mnav/>
    <Mmain></Mmain>
  </div>
</template>
<script>
import Mnav from './child/Mnav'
import Mmain from './child/Mmain'
export default {
  name:'Menu',
  components: {
    Mnav,Mmain
  }
}
</script>
<style scoped>
.menu {
  height: 100vh;
}
</style>