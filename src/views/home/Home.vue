<template>
  <div id="home">
    <NavBar class="home-nav">
      <img class="left" slot="left" src="@/assets/img/navbar/position.svg" />
      <div slot="center">商品首页</div>
      <img class="right" slot="right" src="@/assets/img/navbar/scan.svg" />
    </NavBar>
    <TabControl v-show='showTabControl' class="tab-scroll" @tabClick="tabClick" ref='tabC1' />
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
      <HomeCarousel :banners="banners"></HomeCarousel>
      <HomeRecommend :recommends="recommends"></HomeRecommend>
      <Rank></Rank>
      <TabControl @tabClick="tabClick" ref='tabC'></TabControl>
      <GoodsList :goods="goods[currentTab]"></GoodsList>
    </Scroll>
    <BackTop @click.native="backtop" v-show="isShow"></BackTop>
  </div>
</template>
<script>
//keep-alive使首页不被销毁；再保持原来状态(离开保存一个位置信息，进入再加载位置)activated,deactivated
import NavBar from "@/components/common/navbar/NavBar";

import Scroll from "@/components/common/scroll/Scroll";
import HomeCarousel from "./children/HomeCarousel";
import HomeRecommend from "./children/HomeRecommend";
import Rank from "./children/Rank";
import TabControl from "@/components/content/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import BackTop from "@/components/content/backtop/BackTop";

import { getHomeData } from "@/network/home.js"; //封装起来，耦合度低易维护
export default {
  components: {
    NavBar,
    HomeCarousel,
    HomeRecommend,
    Rank,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    //创建组件之后请求多类数据并且保存，注意此时还没有DOM
    this.getHomeData(); //加this是因为与methods同名，否则会调用home.js导入的方法
    //this.getHomeGoods("pop");
  },
  mounted() {
    //事件总线，在goodsitem中发送
    const refresh = this.debounce(this.$refs.scroll.refresh, 1100)
    this.$bus.$on("imgL", () => {
      //防抖动,不会很快执行
      refresh()
      //获取tabcontroloffset,但是图片未加载完毕需要监听图片加载完毕
      //this.tabControlOff=this.$refs.tabC.$el.offsetTop
    });
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY=this.$refs.scroll.scroll.y
  },
  methods: {
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    tabClick(i) {
      switch (i) {
        case 0:
          this.currentTab = "pop";
          break;
        case 1:
          this.currentTab = "new";
          break;
        case 2:
          this.currentTab = "sell";
          break;
      }
      //保持真假一致
      this.$refs.tabC1.currentIndex=i
      this.$refs.tabC.currentIndex=i
    },
    backtop() {
      //SCROLL组件的封装方法
      this.$refs.scroll.scrollTo(0, 0);
    },
    scroll(p) {
      //拿到SCROLL组件的position判断置顶是否显示
      this.isShow = -p.y > 800;
      //判断tabcontrol是否吸顶
      this.showTabControl=(-p.y)>450
    },
    debounce(func,delay){
      //防抖函数
      let timer=null;
      return (...args)=>{
        if(timer) clearTimeout(timer)
        timer =setTimeout(() => {
          func.apply(this,args)
        },delay)
      }
    }
    /* getHomeGoods(type){
      axios({
        url:'https://gitee.com/colorss/json/raw/master/mall.json',
        method:'get',
        changeOrigin:true,
        headers: { "Content-Type": "application/json;charset=utf-8" },
      }).then(res=>{
        console.log(res);
      })
    } */
    /* getHomeGoods(type) {
      const p = this.goods[type].page + 1;
      getHomeGoods(type, p).then(res => {
      console.log('接口过期');
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1
      });
    } */
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: [
          {
            title: "蝶多绮2019秋冬新款套头毛衣女高领针织衫时尚洋气百搭打底衫",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191030_7dg0bc6e206d1c24555l8aj39i31h_4999x5999.jpg_640x854.v1cAC.40.webp",
            price: "¥88",
            collect: "3",
            id:6868
          },
          {
            title: "2019新款韩版秋冬时尚短款毛衣百搭纯色灯笼袖洋气毛针织衫女",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/191126_5606lli03baclk16f5j0gd3jid4bh_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥36.4",
            collect: "44",
            id:6868
          },
          {
            title: "气质交叉V领修身针织衫女韩版秋冬季时尚亮丝长袖打底上衣潮",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191117_87bd1idd0ce01g6adje9d39efcieg_3999x5999.jpg_640x854.v1cAC.40.webp",
            price: "¥46.2",
            collect: "0",
            id:6868
          },
          {
            title: "美特斯邦威复古条纹毛衣女宽松韩版春新品打底毛衫百搭潮流",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/180227_691ehhhci36le6i33526hh7i7cbkk_1000x1000.jpg_640x854.v1cAC.40.webp",
            price: "¥55",
            collect: "28",
            id:6868
          },
          {
            title:
              "推荐2019秋季新款女靴子高帮袜子鞋袜子靴弹力靴时尚流行网红女鞋",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191004_7351cbl3b04j5h62g23cg7blf2b1k_750x1000.jpg_640x854.v1cAC.40.webp",
            price: "¥168",
            collect: "1",
            id:6868
          },
          {
            title:
              "推荐2019秋季新款女靴子真皮皮靴时尚流行马丁靴单靴女鞋秋款鞋子",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191004_4g1g5c19jal0ehl108918c8e0j70k_750x1000.jpg_640x854.v1cAC.40.webp",
            price: "¥178",
            collect: "1",
            id:6868
          },
          {
            title:
              "推荐2019冬季新款韩版女靴子时尚流行短款马丁靴机车靴真皮女鞋子",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191009_4745ki9j5h687373djgka34c3i7jc_800x800.jpg_640x854.v1cAC.40.webp",
            price: "¥178",
            collect: "1",
            id:6868
          },
          {
            title:
              "2019秋冬新款男士韩版潮流休闲裤百搭运动裤宽松束脚裤学生哈伦裤潮牌工装裤ins超火九分裤",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/181028_2dfe875gbj4ae15ia394b0ca2j7c1_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥79.8",
            collect: "1184",
            id:6868
          },
          {
            title: "套装女秋冬韩版宽松大毛领羽绒棉服+百搭毛衣+显瘦打底裤三件套",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191026_74d5i05k4fe12e905a304gl72lfel_3332x4999.jpg_640x854.v1cAC.40.webp",
            price: "¥39",
            collect: "3849",
            id:6868
          },
          {
            title:
              "春装新款韩版单排扣长袖格子衬衫上衣女显瘦阔腿裤宽松显瘦牛仔背带裤两件套学生小个子时尚套装潮",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190119_5ifgf6ca54ahjc54fd7a49095d96k_800x1200.jpg_640x854.v1cAC.40.webp",
            price: "¥65",
            collect: "1.5w",
            id:6868
          },
          {
            title: "书包女韩版高中学生帆布背包大容量时尚古着2019新款双肩包",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/190805_4302ke1d5637bl174g16e9f145gk8_800x800.jpg_640x854.v1cAC.40.webp",
            price: "¥29.9",
            collect: "81",
            id:6868
          },
          {
            title: "马甲女短款2019冬季新款韩版宽松时尚羽绒棉服背心马夹外套潮",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191117_0lle780kab77bl167cbk753d4l22l_3999x5999.jpg_640x854.v1cAC.40.webp",
            price: "¥119.91",
            collect: "107",
            id:6868

          },
          {
            title: "2017秋季新款休闲鞋时尚韩版板鞋透气百搭高帮男鞋子",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/170907_7igjcccg0fgl15b931l81ehe61468_640x900.jpg_640x854.v1cAC.40.webp",
            price: "¥79.1",
            collect: "1859",
            id:6868
          },
          {
            title: "新款牛仔裤男直筒宽松坠感阔腿潮牌韩版潮流九分裤子老爹ins裤",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/190816_439ca7he7fl77ck31i3285jj90jhi_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥58.8",
            collect: "373",
            id:6868

          },
          {
            title:
              "冬季新款时尚韩版短款棉服百搭显瘦宽松潮外套加厚面包服简约女潮",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191029_4ea2a5gld8i63037ik8i2cilbk9id_2999x4499.jpg_640x854.v1cAC.40.webp",
            price: "¥97.02",
            collect: "4094",
            id:6868
          },
          {
            title:
              "日韩版潮人时尚个性创意戒指女 韩国简约玫瑰金食指指环彩金饰品",
            img:
              "https://s5.mogucdn.com/p2/170312/66588119_70fif65d97f6088k1gld9fcc541gl_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥28",
            collect: "5659",
            id:6868
          },
          {
            title: "秋冬季新款阔腿裤+时尚毛呢卫衣两件套装女学生宽松显瘦",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191007_69k47icdj2idk5egglgaad1h0b8j3_4666x6999.jpg_640x854.v1cAC.40.webp",
            price: "¥108",
            collect: "499",id:6868
          },
          {
            title:
              "哪吒魔童降世帆布鞋男高帮板鞋休闲鞋韩版潮流百搭个性休闲潮鞋男",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190919_44gfighlh91bfh6l28fkdb9jkj6j2_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥79.1",
            collect: "22",id:6868
          },
          {
            title: "2019秋冬新款时尚高领毛衣女宽松韩版针织衫加厚慵懒风套头女",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191108_840ga48k1cedha500865l1dk60k7e_3332x4999.jpg_640x854.v1cAC.40.webp",
            price: "¥69.9",
            collect: "1220",id:6868
          },
          {
            title: "炫彩2019新款棉服韩版秋冬小个子面包服+白色加绒牛仔裤套装",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191225_6gjh84a6hehe5f1d32k2c9fehdfak_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥81.2",
            collect: "239",id:6868
          }
        ],
        new: [
          {
            title:
              "限时快抢卫衣女加厚加绒秋冬新款韩版宽松外套bf慵懒风假两件网红上衣潮",
            img:
              "https://s5.mogucdn.com/mlcdn/776a41/200124_729k19c48c71agk6d688k5icfjc37_750x1125.jpg_640x854.v1cAC.40.webp",
            price: "¥45",
            collect: "4452",id:6868
          },
          {
            title: "网红同款2020春秋新款白色纯棉长袖T恤女中长款大码体恤衫",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/181220_2hjfdj6jib7akf5278abi7e4jc7ee_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥59.5",
            collect: "1918",id:6868
          },
          {
            title:
              "牛仔裤女学生秋季新款高腰泫雅直筒宽松韩版显瘦百搭阔腿老爹裤子",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190925_8gkkd277kjh0i6040gh4aek5j0jd0_750x1000.jpg_640x854.v1cAC.40.webp",
            price: "¥59",
            collect: "1.1w",id:6868
          },
          {
            title: "港风时尚微胖显瘦卫衣套装女秋冬季韩版新款打底衫休闲裤三件套",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191229_47e5h03l9ae8deh93h64k60k9ff73_6664x9996.jpg_640x854.v1cAC.40.webp",
            price: "¥24.5",
            collect: "1790",id:6868
          },
          {
            title:
              "新款少女甜美可爱无痕无钢圈波浪边蝴蝶结内衣套装学生性感小胸聚拢上托收副乳调整型胸罩文胸罩",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190116_3fg5bccllibegh232jjba3eh33iif_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥49",
            collect: "1080",id:6868
          },
          {
            title: "连帽外套女新款韩版ins潮学生宽松慵懒风加绒加厚秋冬开衫卫衣",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191017_1c2gca2hi14k36fff09fhga1chca7_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥49",
            collect: "1296",id:6868
          },
          {
            title:
              "小香风秋冬薄款网红女学生外套新款加绒宽松韩版连帽扎染色卫衣潮",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191021_8a1b8k14d7e3bji1fjc9kj2kk8536_2000x3000.jpg_640x854.v1cAC.40.webp",
            price: "¥54.78",
            collect: "406",id:6868
          },
          {
            title: "2019秋冬季新款女英伦风女鞋杨幂同款加绒短靴网红瘦瘦靴子",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190907_5hhc1e645f10127c670a3kl8g5kab_640x958.jpg_640x854.v1cAC.40.webp",
            price: "¥79",
            collect: "378",id:6868
          },
          {
            title: "蜜妃儿春秋慵懒连帽卫衣女学生2019新款宽松薄款长袖上衣",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190916_732lfhc32l6kha94il7a8b30b8517_800x1200.jpg_640x854.v1cAC.40.webp",
            price: "¥104.16",
            collect: "47",id:6868
          },
          {
            title: "牛仔衬衫女薄款2016秋季新品学院风长袖大码修身韩范牛仔衬衣",
            img:
              "https://s5.mogucdn.com/b7/pic/150129/1hdlg8_iezgezbqmfsggobqmyytambqmmyde_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥58.8",
            collect: "7037",id:6868
          },
          {
            title: "春秋新款领口织带衬衫女生日系学院风减龄上衣职业装少女感",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/200104_4962geh1h0b0ed5hikjb1ej309hd3_3332x4999.jpg_640x854.v1cAC.40.webp",
            price: "¥59",
            collect: "6",id:6868
          },
          {
            title: "妖精的口袋小香风中长款毛呢大衣秋冬季新款女复古ins外套潮",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191016_7iaj575g15ibc4lfd0de50495a6ja_800x1200.jpg_640x854.v1cAC.40.webp",
            price: "¥559.8",
            collect: "25",id:6868
          },
          {
            title: "蜜妃儿2020新款复古港味学院风长袖格子衬衫女韩版春秋潮学生",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191228_4ccaa1k4l4kl31f3a4j16bb8i6h19_800x1200.jpg_640x854.v1cAC.40.webp",
            price: "¥65.76",
            collect: "3",id:6868
          },
          {
            title: "春季牛仔外套女学生2020新款新年韩版宽松牛仔上衣百搭外套",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191229_6bai2kdfgg62ich68k7kafgcgk039_4302x6450.jpg_640x854.v1cAC.40.webp",
            price: "¥86.6",
            collect: "20",id:6868
          },
          {
            title: "时尚反光帆布鞋男鞋子韩版潮流百搭休闲潮鞋男新款板鞋休闲鞋男",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/200109_5jal03c36ek6d72c2cb97e3734eak_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥109.2",
            collect: "2",id:6868
          },
          {
            title: "外套韩版风衣女中长款2019新款连帽休闲收腰学生上衣秋季",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190730_8c654133e41f3ih4221k2kkea8kbc_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥228",
            collect: "1",id:6868
          },
          {
            title:
              "新款风衣女秋韩版气质英伦风宽松过膝中长款外套连衣裙套装两件套",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190924_258kfc1288lka47hdba8ed239i67j_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥169",
            collect: "41",id:6868
          },
          {
            title: "网红同款百搭小方包2019韩版潮油蜡皮菱格宽肩带小方包斜挎包",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191125_57g33h181ba8dck65hhgdcclkdeca_1000x1500.jpg_640x854.v1cAC.40.webp",
            price: "¥80",
            collect: "8",id:6868
          },
          {
            title:
              "温柔风chic复古气质百搭雪纺印花连衣裙女夏季新款女装韩版收腰显瘦中长款高腰A字裙子仙",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190115_0a0dj2b199jh6b24i04e4jhe8gk9i_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥78.9",
            collect: "1.5w",id:6868
          },
          {
            title: "秋冬复古套装裙女新款气质减龄毛衣+打底衫+格子半身裙三件套",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191214_5h5205b33212ljfi5gb7k9k8867eb_2000x3000.jpg_640x854.v1cAC.40.webp",
            price: "¥190.96",
            collect: "60",id:6868
          }
        ],
        sell: [
          {
            title:
              "【桃夭】 绿萝烟火 上新小包包女2019新款潮韩版百搭斜挎链条蕾丝单肩手提少女小挎包",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190220_01eejid2a8c63idfljkdd227ee9dc_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥63.99",
            collect: "2002",id:6868
          },
          {
            title:
              "【桃夭】 摇曳的微风 上新小包包女2019夏新款潮ins港风复古水桶包质感锁扣单肩斜挎包",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190321_140g0h519f4fd2agfi8h66i3d5cfh_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥66.9",
            collect: "149",id:6868
          },
          {
            title: "【桃夭】2019新款洋气毛绒菱格链条小方包韩版百搭单肩斜挎包",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/181029_3692k7jfe35jc768f7ga54fi1263j_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥59.9",
            collect: "832",id:6868
          },
          {
            title: "精选外套女百搭2019新款矮个子风衣女中长款春装休闲外衣",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190311_636f0ld2hijh8g9f7a8hghf62a50l_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥129.58",
            collect: "309",id:6868
          },
          {
            title: "麻辣零食大礼包组合辣味肉类辣条超大一箱整箱混装香辣小吃休闲",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/170707_5lhli484bh5l2bickh27k7095hibc_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥49.9",
            collect: "1050",id:6868
          },
          {
            title:
              "狗狗零食整箱训猫犬火腿肠泰迪金毛粮补钙宠物香肠批发零食大礼包",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191129_3k3e28bf47e1klf8ilbai24gec8ii_3333x4999.jpg_640x854.v1cAC.40.webp",
            price: "¥13.25",
            collect: "0",id:6868
          },
          {
            title: "新货莲子干货500g/250g去芯磨皮无心白莲子",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/191229_2i173ceak5i8dkcd91j3lbblhkd26_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥24.69",
            collect: "0",id:6868
          },
          {
            title:
              "坪源庄新货正宗枸杞子宁夏特级野生农家特优头茬大颗粒免洗红枸杞",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191201_00g325h8h8l9fb6j31j66ef8h3k8l_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥15.8",
            collect: "1",id:6868
          },
          {
            title: "【小桔GUGU专享】忆彩 精选强光混彩淡水珍珠弹力手镯",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/200104_0f0ghlblej8fk07ci3497dg9ee38a_800x800.jpg_640x854.v1cAC.40.webp",
            price: "¥999",
            collect: "4",id:6868
          },
          {
            title: "新疆若羌小红枣5斤2斤1斤 新疆小枣干红枣 零食煲汤煲粥泡茶",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191114_709gceg2k9l0d70j2b8c7f0abc5e0_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥18.9",
            collect: "1",id:6868
          },
          {
            title: "新货东北黑木耳干货特级野生小碗耳秋木耳老鼠耳干木耳肉厚",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/200101_4236cigik0122k8l11c7856le4830_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥19.8",
            collect: "0",id:6868
          },
          {
            title:
              "珍珠精选金属眼镜框女 复古圆框眼镜架眼镜男潮防辐射平光镜眼镜",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/180124_5he3ghe8j69dahl95kbeb4bd8j068_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥35",
            collect: "179",id:6868
          },
          {
            title: "王小黑精选 拉夏贝尔英伦风马丁靴",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191228_6kk95a2bfkjge1jh45cld0ia00cj6_800x800.jpg_640x854.v1cAC.40.webp",
            price: "¥399",
            collect: "1",id:6868
          },
          {
            title: "40卷32卷12卷唯美之恋卫生纸卷纸批发 家用纸巾厕纸卷筒纸",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/191120_0eec4hl23gbc0e5aai0d85d5eebce_800x800.jpg_640x854.v1cAC.40.webp",
            price: "¥13.9",
            collect: "0",id:6868
          },
          {
            title: "新疆特产特级大红枣补血泡水生吃免洗干果骏枣子",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/191116_2fg7h57dil313h02035bfgk57dech_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥20",
            collect: "3",id:6868
          },
          {
            title:
              "海洋之心纯银手链女闺蜜韩版简约时尚个性网红小众设计情侣手镯抖",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/191217_8fkhkk05geggkgl3kkg9i4eijclli_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥116.2",
            collect: "1",id:6868
          },
          {
            title: "【W吴轻轻直播专属】食为先鸭翅18g*20包 香辣麻辣鸭翅膀",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/190305_66a8jgc446ji02bf4icaa866agee0_800x800.jpg_640x854.v1cAC.40.webp",
            price: "¥29.8",
            collect: "125",id:6868
          },
          {
            title:
              "班服幼儿园园服春秋套装儿童班服秋季运动会服三年级小学生校服新",
            img:
              "https://s5.mogucdn.com/mlcdn/55cf19/191021_30g3493f1d98cc0eb34gc0k8gigh8_800x800.jpg_640x854.v1cAC.40.webp",
            price: "¥94.89",
            collect: "6",id:6868
          },
          {
            title: "高档精选霍山铁皮石斛50克礼盒",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/200117_2gkac0i2l79fdf60eb6c0h0f53ed8_1080x1080.jpg_640x854.v1cAC.40.webp",
            price: "¥8888",
            collect: "0",id:6868
          },
          {
            title:
              "精选麻辣辣条大礼包零食 儿时怀旧小吃面筋皓浩辣片混合装混搭组合整箱",
            img:
              "https://s5.mogucdn.com/mlcdn/c45406/171101_8a85jg6g48ba47i56llgje18i5e8d_640x960.jpg_640x854.v1cAC.40.webp",
            price: "¥13.5",
            collect: "938",id:6868
          }
        ]
      },
      isShow: false,
      showTabControl:false,
      tabControlOff:0,
      saveY: 0,
      currentTab: "pop" //存放点击的TAB
    };
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: rgb(109, 42, 187);
  color: rgb(245, 245, 245);
  /* 原生滚动需要加下列属性
  font-size: 16px;
  position: fixed;
  width: 100%; */
}
.left,
.right {
  height: 26px;
  margin-top: 8px;
}
.tab-scroll {
  position: relative;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content {
  height: calc(100%-93px);
  overflow: hidden;
  margin-top:44px;
} */
</style>