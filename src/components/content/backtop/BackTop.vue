<template>
  <div class='bt'>
    <img src="@/assets/img/common/up_top.png" alt="置顶">
  </div>
</template>
<script>
export default {
  name:'BackTop'
}
</script>
<style scoped>
.bt {
  position:fixed;
  right: 10px;
  bottom:60px;
}
.bt img {
  height: 42px;
  width: 42px;
}
</style>