<template>
  <Tabbar>
    <!-- 不需要考虑样式，只要插入几个，与插入的内容（图片与文本） -->
    <TabbarItem path="/home">
      <img src="@/assets/img/tabbar/home.svg" slot="item-icon" />
      <img src="@/assets/img/tabbar/home-active.svg" slot="item-icon-active" />
      <div slot="item-text">首页</div>
    </TabbarItem>
    <TabbarItem path="/menu">
      <img src="@/assets/img/tabbar/menu.svg" slot="item-icon" />
      <img src="@/assets/img/tabbar/menu-active.svg" slot="item-icon-active" />
      <div slot="item-text">分类</div>
    </TabbarItem>
    <TabbarItem path="/cart">
      <img src="@/assets/img/tabbar/cart.svg" slot="item-icon" />
      <img src="@/assets/img/tabbar/cart-active.svg" slot="item-icon-active" />
      <div slot="item-text">购物车</div>
    </TabbarItem>
    <TabbarItem path="/my">
      <img src="@/assets/img/tabbar/my.svg" slot="item-icon" />
      <img src="@/assets/img/tabbar/my-active.svg" slot="item-icon-active" />
      <div slot="item-text">我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from "../common/tabbar/Tabbar";
import TabbarItem from "../common/tabbar/TabbarItem";
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>
