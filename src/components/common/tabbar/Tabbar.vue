<template>
    <div id='tab-bar'>
      <!-- 定义插槽存放tabbar-item -->
      <slot></slot>
    </div>
</template>
<script>
export default {
  name:'Tabbar'
}
</script>
<style scoped>
  #tab-bar {
    display: flex;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 2px rgba(122, 123, 145, 0.1)
  }
</style>
