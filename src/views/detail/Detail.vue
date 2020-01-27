<template>
  <div id="detail">
    <DetailNav></DetailNav>
  </div>  
</template>
<script>
import DetailNav from "./child/DetailNav";

/**
 * 详情页：goodsitem中点击push动态路由(路由映射表配置对应路由)，detail组件拿到id(去请求服务器)
 */

export default {
  name:'Detail',
  components: {
    DetailNav
  },
  created(){
    this.id=this.$route.params.id
  },
  data() {
    return {
      id:null
    }
  },
}
</script>
<style scoped>

</style>