<template>
  <div class='toast' v-show="showT">
  <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  //插件封装
  name:'Toast',
  data() {
    return {
      msg:'',
      showT:false
    }
  },
  methods: {
    showM(msg,duration=1500){
      this.showT=true;
      this.msg=msg;
      setTimeout(() =>{
        this.showT=false;
        this.msg=''
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  padding:8px 10px;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%) ;
  color:#fff;
  background-color:rgba(0, 0, 0, 0.8);
  z-index: 999;
}
</style>