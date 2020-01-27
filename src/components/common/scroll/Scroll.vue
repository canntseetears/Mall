<template>
  <div ref='wrapper'>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  props:{
    probeType:{
      type: Number,
      default(){
        return 0
      }
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted(){
    //query不能拿到准确DOM，应使用ref
    this.scroll=new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      click:true//解决scroll内点击的监听问题
    })
    //监听滚动位置
    this.scroll.on('scroll',positon=>this.$emit('scroll',positon))
  },
  methods:{
    scrollTo(x,y,time=450){
      //time=500默认给time赋值
      this.scroll &&this.scroll.scrollTo(x,y,time)
      //可能出现HOME中调用但是scroll还未创建即为null状态
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>
<style>
</style>