<template>
  <div class='must'>
    <p>今日排行</p>
    <div class='l'>
      <a href="https://www.runoob.com/">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/191025_5289fkljd9d0g8i3752e1425h5k5j_150x150.gif_640x640.v1cAC.40.webp">
        <div class='text'>新人</div>
      </a>
      <a href="https://www.runoob.com/">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/191021_3bfe6agedk0j6c3e11ibjf39h05c5_135x135.jpg_640x640.v1cAC.40.webp">
        <div class='text'>上衣</div>
      </a>
      <a href="https://www.runoob.com/">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/190627_11fi4352el0f0ea614ekf48cicgch_150x150.jpg_640x640.v1cAC.40.webp">
        <div class='text'>包包</div>
      </a>
      <a href="https://www.runoob.com/">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/191021_077ifbgh909c8ba3i0h1j49ahl02c_135x135.jpg_640x640.v1cAC.40.webp">
        <div class='text'>裙子</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.must p {
  text-align: center;
  font-size: 19px;
  color: rgb(185, 30, 160);
}
.l {
  display: flex;
  justify-content:space-around;
  width: 100%;
  padding:8px 5px 2px 0;
  flex-wrap: wrap;
}
/* .must .img {
  height: 40px;
  width: 40px;
} */
.must img {
  height: 50px;
  width: 50px;
  /* margin:0 auto; */
}
.text {
  text-align: center;
  font-size: 14px;
  /* height: 30px;
  width: 30px; */
}
</style>