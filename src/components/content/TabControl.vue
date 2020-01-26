<template>
  <div class='tabcontrol'>
    <div v-for='(item,i) in titles' :key="i" class='tabc-item'>
      <span  :class='{ active:currentIndex === i}' @click='changeI(i)'>{{item}}</span>
    </div>
  </div>  
</template>
<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type: Array,
      default(){
        return ['流行','新款','精选']
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    changeI(i){
      this.currentIndex=i
      //子组件把事件传递出去点击哪个切换对应详情
      this.$emit('tabClick',i)
    }
  }
}
</script>
<style scoped>
.tabcontrol {
  display: flex;
  /* justify-content:space-around; */
  height: 40px;
  line-height: 40px;
  background-color:rgba(238, 225, 225);
  text-align: center;
}
.tabc-item {
  flex: auto;
  /* height: 40px;
  line-height: 40px; */
} 
.active {
  color:rgb(202, 31, 145);
  border-bottom: 2px solid rgb(202, 31, 145);
}
.tabc-item span {
  padding: 5px;
}
</style>