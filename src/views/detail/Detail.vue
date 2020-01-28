<template>
  <div id="detail">
    <DetailNav />
    <Scroll class='content'>
      <DetailCarou :pro='product'/>
      <DetailMain :pro='product'/>
    </Scroll>
  </div>  
</template>
<script>
/**
 * 详情页：goodsitem中点击push动态路由(路由映射表配置对应路由)，detail组件拿到id(去请求服务器)
 * 不应保持keep alive,每次数据都不一样，在APP中keepalive加exclude='Detail'这样就可以每次请求新的数据了（keepalive组件不会执行created钩子）
 * 
 */
import DetailNav from "./child/DetailNav";
import DetailCarou from './child/DetailCarou';
import DetailMain from './child/DetailMain';
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name:'Detail',
  components: {
    DetailNav,DetailCarou,DetailMain,Scroll
  },
  created(){
    //拿到商品ID
    this.id=this.$route.params.id
  },
  data() {
    return {
      id:null,
      product:{
        'carou':[
          'https://s5.mogucdn.com/mlcdn/c45406/191202_7jd0l28k24f6f9bd5lhd12kg42f83_640x960.jpg_640x960.v1cAC.70.webp',
          'https://s11.mogucdn.com/mlcdn/c45406/191202_5khfkh3e1a565d8a8l1lc6g7h8dbb_640x960.jpg_640x960.v1cAC.70.webp',
          'https://s5.mogucdn.com/mlcdn/c45406/191202_0l8c0kcfbbki2kc9c0bfkl3e2h2cb_640x960.jpg_640x960.v1cAC.70.webp'
        ],
        'detail':[
          'https://s5.mogucdn.com/mlcdn/c45406/191202_6f2k54e2dchch3kah83869b7hac26_800x800.jpg_468x468.webp',
          'https://s11.mogucdn.com/mlcdn/c45406/191202_0dla3g37a964egcjh44kfeaf6e687_800x800.jpg_468x468.webp',
          'https://s5.mogucdn.com/mlcdn/c45406/191202_1c0fgf3c334h2f24iiak6hf77lgld_800x836.jpg_468x468.webp',
          'https://s5.mogucdn.com/mlcdn/c45406/191202_5akbgf3afe3cg0203d571d7eigagl_800x800.jpg_468x468.webp'
        ]
      }
    }
  },
}
</script>
<style scoped>
#detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}
.content {
  background-color: #fff;
  height: calc( 100% - 44px );
}
</style>