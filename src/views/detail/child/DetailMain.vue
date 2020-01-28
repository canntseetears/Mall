<template>
  <div>
    <div class="price">
      <div class="big">￥98</div>
      <div>
        <div>
          <del>￥140</del>
        </div>
        <div class="discount">7折</div>
      </div>
    </div>
    <div class="base">
      <div>
        <p class="base-l">绑带长袖针织连衣裙网红小香风单边斜肩个性小黑裙性感开叉裙子潮</p>
      </div>
      <a
        class="base-r"
        href="https://h5.mogu.com/user-process/login.html?ptp=32.HzHrn.0.0.6ERZz9J0&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fpickforme%2Flaunch%2Findex.html%3FitemId%3D1mok1dy%26acm%3D3.mce.1_10_1nh28.143035.0.ky4jrrOPMMdnJ.pos_0-m_547572-sd_119%26ptp%3D32.GrPvGb.0.0.mqmFtks5"
      >
        <img
          src="https://s10.mogucdn.com/mlcdn/c45406/191218_762ibk3def84blec68cbe4le770df_54x54.png"
          alt
        />
        <span>帮我选</span>
      </a>
    </div>
    <div class="freight">
      <span>免运费</span>
    </div>
    <div class="shop">
      <a href class="logo">
        <img
          src="https://s5.mogucdn.com/mlcdn/c45406/191014_3j4ba27l46khkl4j9k90960j0kd3g_178x178.png_120x120.webp"
        />
      </a>
      <a href class="logo-c">
        <div>
          <span>YiYi衣可秀</span>
        </div>
        <div>
          <span style="color:#f46;">
            推荐&nbsp;
            <img
              src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"
            />
            <img
              src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"
            />
          </span>
        </div>
        <div>
          <span>在线商品数：375</span>
        </div>
      </a>
      <span class="logo-r">进店 ></span>
    </div>
    <div v-for="(item,i) in pro.detail" :key="i" class="detail-img">
      <div class="detail-img-it">
        <img style="width:100%" :src="item" />
      </div>
    </div>
    <div class="param">
      <table width="100%">
        <tr>
          <th width="20%">尺码</th>
          <th width="20%">裙长</th>
          <th>肩宽</th>
          <th>胸围</th>
          <th>袖长</th>
        </tr>
        <tr>
          <td>均码</td>
          <td>95</td>
          <td>37</td>
          <td>66</td>
          <td>58</td>
        </tr>
        <tr>
          <td>颜色</td>
          <td colspan="4">黑色</td>
        </tr>
        <tr>
          <td>季节</td>
          <td colspan="4">秋冬</td>
        </tr>
        <tr>
          <td>材质</td>
          <td colspan="4">针织</td>
        </tr>
        <tr>
          <td>裙长</td>
          <td colspan="4">中裙 (91-105cm)</td>
        </tr>
      </table>
    </div>
    <div>
      <img style="width:100%" src="https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp">
    </div>
    <div class="recom">
      <div class="recom-item" v-for="(item,i) in recommend" :key="i">
        <img :src='item.ur' />
        <p style="font-size:14px;">{{item.title}}</p>
        <p>{{item.price}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailMain",
  props: {
    pro: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      recommend: [
        {
          ur:
            "https://s11.mogucdn.com/mlcdn/c45406/191109_837b5ad7ef49k2f1afha15h4ajilk_640x960.jpg",
          title: "金丝绒连衣裙女装新款潮网红高冷御姐风成熟气质丝绒蕾丝裙子秋冬",
          price: "￥119"
        },
        {
          ur:
            "https://s5.mogucdn.com/mlcdn/c45406/191215_461lb7175ke5kjiedj1f5jkag78h8_640x960.jpg",
          title: "连衣裙遮肚子配大衣内搭大码胖mm减龄显瘦蕾丝小个子气质打底裙",
          price: "￥119"
        },
        {
          ur:
            "https://s11.mogucdn.com/mlcdn/c45406/191227_0k0j98d93e70gbkk132l7hh41993j_640x960.jpg",
          title: "网红气质国风旗袍连衣裙女秋冬新款加厚洋气拜年裙轻熟风内搭裙子",
          price: "￥86"
        },
        {
          ur:
            "https://s11.mogucdn.com/mlcdn/c45406/191119_681b54ebd5f55ii80kha675j3g36c_640x960.jpg",
          title: "新款韩版蕾丝裙子长袖蛋糕裙性感V领喇叭袖不规则多层裙摆连衣裙",
          price: "￥74"
        }
      ]
    };
  }
};
</script>
<style scoped>
.price {
  display: flex;
  flex-direction: row;
}
.price .big {
  width: 100px;
  font-size: 36px;
}
.price .discount {
  color: red;
  background-color: rgb(219, 163, 198);
}
del {
  color: rgb(151, 149, 149);
}
.base {
  height: 30px;
  width: 100%;
  display: flex;
  margin-top: 7px;
}
.base .base-l {
  width: 200px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.base-r {
  color: rgb(156, 152, 152);
  margin-left: 28px;
}
.base-r img {
  height: 12px;
  width: 12px;
}
.freight {
  color: rgb(156, 152, 152);
  height: 50px;
  margin-left: 0;
  border-bottom: 5px solid rgb(156, 149, 149);
}
.shop {
  display: flex;
  height: 96px;
  border-bottom: 5px solid rgb(156, 149, 149);
}
.shop .logo img {
  height: 54px;
  width: 54px;
  margin-left: 10px;
  margin-top: 14px;
}
.logo-c {
  margin-left: 12px;
  margin-top: 6px;
  color: rgb(36, 34, 34);
}
.logo-c img {
  height: 12px;
  width: 12px;
}
.logo-r {
  margin-left: 34px;
  margin-top: 26px;
  color: rgb(31, 25, 41);
}
.detail-img {
  margin-top: 10px;
  width: 100%;
  /* display: flex; */
}
.detail-img .detail-img-it img {
  /* flex: auto; */
  width: 320px;
}
.param table {
  border-collapse: collapse;
  margin-top: 5px;
}
.param th {
  text-align: center;
  height: 42px;
}
.param td {
  text-align: center;
  height: 42px;
}
.param tr {
  border-bottom: 1px solid rgb(219, 212, 212);
}
.recom {
  display: flex;
  margin-top: 14px;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  padding:2px 4px;
}
.recom .recom-item {
  width: 48%;
  position: relative;
}
.recom .recom-item img {
  width: 100%;
border-radius: 5px;  

}
</style>