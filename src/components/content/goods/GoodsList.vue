<template>
  <div class='goods'>
    <GoodsListItem v-for='(item,i) in goods' :key='i' :product='item'></GoodsListItem>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem"
export default {
  components: {
    GoodsListItem
  },
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.goods {
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;
  padding:10px 6px;
}
</style>