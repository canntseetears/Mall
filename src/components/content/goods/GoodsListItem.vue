<template>
  <div class='item' @click='toDetail'>
    <div>
        <img :src="product.img" @load='imgLoad'>
      <div class='text'>
        <p>{{product.title}}</p>
        <span class='price'>{{product.price}}</span>
        <span class='collect'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAAAAABLtcWwAAAAAmJLR0QA/4ePzL8AAAJVSURBVEjHjZULb6JAFIX5///ggNYXRdRq3fog2tVqo61r3DWRNU3MqkmNNru6oS0qa63Oig9AEOTEyNzL/WRmOHOlyCkp1Uikqpy8RZ1KTi+x0eXUNZDE9XC4+Vq7BEREFoQsomi5A+QLpqdee8yF7AoQ8HU3uIXgBuiC3e+PwuLXeWARgngY/0Tw31mgjIwepFE6B4wQkPRICmDoDHzyqBvjOvhPR6COxHHi+vgHjgC5U+bhHZmm6AVf7sgWQHoqbv3DPpgXWWO3vio+SRqgtG+DajIsNMbkhMYNIazeD+bbigq0vQAdzTcl4iCpmY/QgLdNqD6YTEsmLiSLWQZ96gsabqoPm3hDcZDcAxI4SkDNPVBDlhrg4tlt/bMfA4o8IvTHXf3vEB7V91AA52oZEofC9sWtsojMztfPosiudtZYJpFYnqtfJpBUi7ZeWsRws3KuX6UQ3Z6+nflm3KnzbpQAbjftvVtfg+qC7FVA8JUYATL2oWJfX4HvYGTtAPURtwfi6BMz8IKUPZDCyAJ0kbcHcuhaANHagnSV9eamAXUn19bwzQKUTjb3vVr64zVA0KdpVQ9ZCxDH2B6Y4MoChGgH/y3pkAVg/Ecli8VRGKDXJmAO3jiFO7+/ODEkeMxNwF9DF+6madCbT1rfhiQmJkBzxup7HPBV394efEDsx/6Y6N44ABPE1Mv0ftN7w+KHOv4QNy2Vvd/+vV/B7NY1i8p7J+cBUn196v0U4Ml13qsImRdNXhi1Q3vujEtVn1zyqHnG6lYyyHDJ5pxYpDSTXGaghf8BQmofv0UdUUcAAAAASUVORK5CYII=">{{product.collect}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('imgL')
    },
    toDetail(){
      this.$router.push('/detail/'+this.product.id)
    }
  }
};
</script>
<style scoped>
.item {
  padding-bottom: 52px;
  position: relative;
  width: 48%;
}
.item img {
  width: 100%;
  border-radius: 5px;
}
.item .text {
  font-size: 10px;
  position: absolute;
  /* text-align: center; */
  bottom:5px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.item .text p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.item .text .price{
  color: rgb(24, 22, 23);
  font-weight: 600;
}
.item .text .collect {
  margin-left: 42px;
}
.item .text .collect img {
  height: 15px;
  width: 15px;
}
</style>