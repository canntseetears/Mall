<template>
  <div id='home'>
    <NavBar class='home-nav'>
      <img class='left' slot='left' src="@/assets/img/navbar/position.svg">
      <div slot='center'>商品首页</div>
      <img class='right' slot='right' src="@/assets/img/navbar/scan.svg">
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import {getHomeData} from '@/network/home.js'
export default {
  components:{
    NavBar
  },
  created() {
    //创建组件之后请求多类数据并且保存
    getHomeData().then(res=>{
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list
    })
  },
  data() {
    return {
      banners:[],
      recommends:[],
    }
  },
}
</script>

<style scoped>
  .home-nav {
    background-color: rgb(109, 42, 187);
    color:rgb(245, 245, 245);
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .left,.right {
    height: 26px;
  }
  .left {
    margin-left: 10px;
  }
  .right {
    margin-right: 10px;
  }
</style>