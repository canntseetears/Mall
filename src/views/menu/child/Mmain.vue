<template>
  <div class='content'>
    <div class='l'>
      <div class='l-item' v-for="(item,i) in classify" :key="i">
        <router-link :to="'/menu/'+item.router">{{item.name}}</router-link>
      </div>
    </div>
    <div class='r'>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name:'Mmain',
  data() {
    return {
      classify:[
        {name:'毛衣',router:'sweater'},
        {name:'衬衣',router:'shirt'},
        {name:'半袖',router:'tShirt'},
        {name:'外套',router:'coat'},
        {name:'短裤',router:'pants'},
        {name:'长裤',router:'longs'},
        {name:'短裙',router:'kilt'},
        {name:'长裙',router:'longuette'},
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: row;
  margin-top:8px;
  height: calc( 100% - 101px );
}
.l {
  flex: 1;
  background-color: rgb(245, 244, 244);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
}
.r {
  flex:2;
  background-color: rgb(250, 249, 255);
  overflow: hidden;
  /* display: flex; */
}
.content .l .l-item {
  height: 38px;
  width: 78px;
  border: 1px solid rgb(175, 171, 171);
  border-radius: 8px;
  font-size: 18px;
  line-height:38px;
  text-align: center;
  color: rgb(99, 94, 94);
  z-index: 8;
}
a:hover {
  color: red;
}

</style>