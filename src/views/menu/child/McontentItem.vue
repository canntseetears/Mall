<template>
    <div class='con-img'>
      <img :src="g[i].img">
      <div class='con-text'>
        <p>{{g[0].title}}</p>
      </div>
    </div>
</template>
<script>
export default {
  props:{
    g:{
      type: Array,
      default:[]
    }
  }
}
</script>
<style scoped>
 .con-img img {
  height: 120px;
  width: 90px;
  margin-top:8px;
  border-radius: 5px;
}
 .con-img .con-text p {
  font-size:14px;
  width: 90px;
  height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap; 
  overflow: hidden;
}
</style>