<template>
  <div class='recommend'>
    <div v-for='item in recommends' :key="item.link" class='recommend-item'>
      <a href="http://www.taobao.com">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    recommends:{
      type: Array,
      default(){
        return [];
      }
    }
  }
}
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 5px 0 15px 0;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  font-size: 10px;
}
.recommend-item img {
  height: 70px;
  width: 70px;
}
</style>