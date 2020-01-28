<template>
  <div class="recom">
      <div class="recom-item" v-for="(item,i) in recommend" :key="i">
        <img :src='item.ur' />
        <p style="font-size:14px;">{{item.title}}</p>
        <p>{{item.price}}</p>
      </div>
    </div>
</template>
<script>
export default {
  name:'DetailRecom',
  data() {
    return {
      recommend: [
        {
          ur:
            "https://s11.mogucdn.com/mlcdn/c45406/191109_837b5ad7ef49k2f1afha15h4ajilk_640x960.jpg",
          title: "金丝绒连衣裙女装新款潮网红高冷御姐风成熟气质丝绒蕾丝裙子秋冬",
          price: "￥119"
        },
        {
          ur:
            "https://s5.mogucdn.com/mlcdn/c45406/191215_461lb7175ke5kjiedj1f5jkag78h8_640x960.jpg",
          title: "连衣裙遮肚子配大衣内搭大码胖mm减龄显瘦蕾丝小个子气质打底裙",
          price: "￥119"
        },
        {
          ur:
            "https://s11.mogucdn.com/mlcdn/c45406/191227_0k0j98d93e70gbkk132l7hh41993j_640x960.jpg",
          title: "网红气质国风旗袍连衣裙女秋冬新款加厚洋气拜年裙轻熟风内搭裙子",
          price: "￥86"
        },
        {
          ur:
            "https://s11.mogucdn.com/mlcdn/c45406/191119_681b54ebd5f55ii80kha675j3g36c_640x960.jpg",
          title: "新款韩版蕾丝裙子长袖蛋糕裙性感V领喇叭袖不规则多层裙摆连衣裙",
          price: "￥74"
        }
      ]
    }
  }
}
</script>
<style scoped>
.recom {
  display: flex;
  margin-top: 14px;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  padding:2px 4px;
}
.recom .recom-item {
  width: 48%;
  position: relative;
}
.recom .recom-item img {
  width: 100%;
  border-radius: 5px;  
}
</style>