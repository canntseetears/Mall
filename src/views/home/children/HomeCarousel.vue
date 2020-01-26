<template>
  <Carousel loop autoplay>
    <CarouselItem v-for='item in banners' :key='item.link'>
      <a href="http://www.baidu.com">
        <img :src="item.image">
      </a>
    </CarouselItem>
  </Carousel>
</template>

<script>
import { CarouselItem,Carousel } from 'view-design'

import 'view-design/dist/styles/iview.css'
export default {
  components: {
    Carousel,CarouselItem
  },
  props:{
    banners:{
      type: Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 200px;
}
</style>