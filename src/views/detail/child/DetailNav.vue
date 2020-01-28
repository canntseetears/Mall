<template>
  <div>
    <NavBar class='detail-nav'>
      <div slot='left' class='back' @click='back'>
        <img src="@/assets/img/common/back.png">
      </div>
      <div slot='center' class='titles'>
        <div v-for='(item,i) in titles' :key='i' :class="{active:currentIndex===i}" @click='changeI(i)'>{{item}}</div>
      </div>
      <div slot='right' class='more'>
        <a href="https://www.iconfont.cn/"><img src="@/assets/img/common/more.png"></a>
      </div>
    </NavBar>
  </div>  
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name:'DetailNav',
  components: {
    NavBar
  },
  data() {
    return {
      titles:['商品','参数','推荐'],
      currentIndex:0
    }
  },
  methods: {
    changeI(i){
      this.currentIndex=i
    },
    back(){
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.titles {
  display: flex;
  justify-content:space-around;
  font-size: 18px;
}
.active {
  color: rgb(179, 24, 179);
}
.back img {
  height: 16px;
  margin-top:14px;
}
.more img {
  margin-top: 4px;
}
</style>