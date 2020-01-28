<template>
  <div>
    <Carousel loop autoplay>
      <CarouselItem v-for="(items,i) in pro.carou" :key="i">
        <img :src="items">
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
import { CarouselItem,Carousel } from 'view-design'
export default {
  name:'DetailCarou',
  props: {
    pro:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
    Carousel,CarouselItem
  }
}
</script>
<style scoped>
img {
  width: 100%;
  height: 388px;
}
</style>