<template>
  <div class='cartlist'>
    <Scroll class='content' ref='scrol'>
      <CartItem v-for='item in cartL' :key="item.id" :product='item'/>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import CartItem from './CartItem'
import { mapGetters } from 'vuex';
export default {
  name:'CartList',
  // activated() {
  //   //刷新SCROLL，解决不能滚动问题
  //   this.$refs.scrol.refresh()
  // },
  computed: {
    ...mapGetters(['cartL'])
  },
  components: {
    Scroll,CartItem
  },
  methods: {
  }
}
</script>

<style scoped>
 .content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>