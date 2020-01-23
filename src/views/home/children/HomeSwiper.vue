<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/carousel";

export default {
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style>
</style>