<template>
  <div class="tabbar-item" @click='itemClick'>
    <!-- 插槽：动态放icon和文字，icon包含选中与未选中 -->
    <div v-if='!isActive'><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style="activeStyle">
      <!-- 这样写可以避免slot里的：class属性被替换掉 -->
      <slot name='item-text'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'TabbarItem',
  props:{
    //通过props拿到点击时的路径名
    path:String,
    activeColor:{
      type:String,
      default:'blue'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      /**自定义传字体颜色 */
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      //跳转路由
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
.tabbar-item {
  height: 49px;
  background-color: #f6f6f6;
  text-align: center;
  flex: auto;
  font-size: 14px;
}
.tabbar-item img {
  height: 24px;
  width: 24px;
  margin-top:2px;
  /**居中文本与图标 */
  vertical-align: middle;
  margin-bottom: 1px;
}
</style>