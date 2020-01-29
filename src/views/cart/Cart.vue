<template>
  <div>
    <NavBar class='nav'>
      <div slot='center'>购物车({{length}})</div>
    </NavBar>
    <CartList/>
    <CartBottom/>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from './child/CartList'
import CartBottom from './child/CartBottom'
import { mapGetters } from 'vuex'
export default {
  name:'Cart',
  components: {
    NavBar,CartList,CartBottom
  },
  computed: {
    /* cartLength(){
      return this.$store.state.cartList.length
    } */
    //...mapGetters(['cartLength'])
    //辅助函数仅仅是将store中的getter映射到局部计算属性
    ...mapGetters({
      //可以用时自定义改名
      length:'cartLength'
    })
  }
}
</script>
<style scoped>
.nav {
  background-color: rgb(100, 62, 204);
  color: aliceblue;
  font-size:20px;
  font-weight: 600;
}
</style>