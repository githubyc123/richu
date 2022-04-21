<template>
  <div>
    <div v-show="headerwidth>450" class="top">
      <p class="top1">~欢迎光临河北富久新型建材有限公司企业官网！</p>
      <p class="top2">全国服务热线：***********</p>
    </div>
    <!-- 头 -->
    <div :class="headerwidth>450?'tabs':'sjtabs'">
      <img v-if="headerwidth>450" src="./../assets/fujiu/logo.png" alt="">
      <!-- <div v-else style="color:#f00;font-size:22px;font-weight:bold;position: fixed;top:0%;background-color:#999;">手机版还没想好怎么设计，先用电脑看吧</div> -->
      <h3 v-else>河北富久新型建材有限公司</h3>

      <div v-if="headerwidth>450">
        <!-- <img src="./../assets/fujiu/logo.png" alt=""> -->
        <a href="/#/fujiu">首页</a>
        <a href="/#/guanyufujiu">关于富久</a>
        <a href="/#/chanpinzhanshi">产品展示</a>
        <a href="/#/xinwenzixun">新闻资讯</a>
        <a href="/#/anquanzhanshi">安全展示</a>
        <a href="/#/lianxiwomen">联系我们</a>
      </div>
      
      <el-dropdown v-else>
        <span class="el-dropdown-link">
          菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>关于富久</el-dropdown-item>
          <el-dropdown-item>产品展示</el-dropdown-item>
          <el-dropdown-item>新闻资讯</el-dropdown-item>
          <!-- <el-dropdown-item disabled>新闻资讯</el-dropdown-item> -->
          <!-- <el-dropdown-item divided>安全展示</el-dropdown-item> -->
          <el-dropdown-item>安全展示</el-dropdown-item>
          <el-dropdown-item>联系我们</el-dropdown-item>
          <!-- <el-dropdown-item divided>联系我们</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
      
      

      <!-- <a :class="url==1?'red':''" @click="one(1)" href="/#/fujiu">首页</a> -->
      <!-- <a :class="url==2?'red':''" @click="one(2)" href="/#/guanyufujiu">关于富久</a> -->
      <!-- <a :class="url==3?'red':''" @click="one(3)" href="/#/chanpinzhanshi">产品展示</a> -->
      <!-- <a :class="url==4?'red':''" @click="one(4)" href="/#/xinwenzixun">新闻资讯</a> -->
      <!-- <a :class="url==5?'red':''" @click="one(5)" href="/#/anquanzhanshi">安全展示</a> -->
      <!-- <a :class="url==6?'red':''" @click="one(6)" href="/#/lianxiwomen">联系我们</a> -->
    </div>
    <!-- 轮播图 -->
    <div v-if="headerwidth>450" class="lunbotu">
      <el-carousel class="fujiubanner">
        <el-carousel-item v-for="(item,i) in banner" :key="i">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 手机轮播图 -->
    <!-- <el-carousel v-else :interval="1800" class="sjbanner" type="card" height="160px">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel> -->
    <!-- 手机版不显示轮播图，显示下面图片 -->
    <img v-else class="sjbanner" src="./../assets/fujiu/nobanner.png" alt="">
    <!-- 手机轮播图结束 -->
  </div>
</template>
<script>
export default {
  components:{
  },
  data(){
    return{
      // url:1,
      true:true,
      headerwidth:'',
      activeName: 'second',
      banner:[
        require('./../assets/fujiu/banner01.jpg'),
        require('./../assets/fujiu/banner02.jpg'),
        require('./../assets/fujiu/banner03.jpg'),
        require('./../assets/fujiu/banner04.jpg'),
        require('./../assets/fujiu/banner05.jpg')
      ]
    }
  },
  mounted(){
    this.headerwidth = document.documentElement.clientWidth;
  //   this.url=window.location.hash.substring(2);
  //   if(this.url==fujiu){
  //     this.url=1;
  //     console.log(this.url);
  //   }else if(this.url==guanyufujiu){
  //     this.url=2;
  //     console.log(this.url);
  //   }else if(this.url==chanpinzhanshi){
  //     this.url=3;
  //     console.log(this.url);
  //   }else if(this.url==xinwenzixun){
  //     this.url=4;
  //     console.log(this.url);
  //   }else if(this.url==anquanzhanshi){
  //     this.url=5;
  //     console.log(this.url);
  //   }else if(this.url==lianxiwomen){
  //     this.url=6;
  //     console.log(this.url);
  //   }
  },
  methods:{
    handleClick(tab, event) {
        // console.log(tab, event);
    },
    // one(e){
    //   this.url=e;
    //   console.log(e,this.stop);
    // }
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.bodyer{
  width: 100%;
}

.top{
  width: 100%;
  min-width: 900px;
  height: 34px;
  background-color: #eee;
  font-family: 'microsoft Yahei','Arial','Verdana','Helvetica','sans-serif';
}

.top>.top1{
  font-size: 17px;
  line-height: 34px;
  float: left;
  padding-left: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.top>.top2{
  float: right;
  font-size: 13px;
  color: red;
  line-height: 34px;
  padding-right: 100px;
}
.tabs{
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  overflow: hidden;
  /* height: 98px; */
  padding-bottom: 1px;
  padding-top: 10px;
  /* min-width: 900px; */
}
.sjtabs{
  width: 100%;
  position: fixed;
  left: 0%;
  top: 0%;
}

.tabs>img{
  width: 200px;
  height: 50px;
  vertical-align:sub;
  /* padding-right: 40px; */
  /* float: left;
  margin: 5px 10px 0 0; */
}
.tabs>div{
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  overflow: hidden;
}
.tabs>div>a{
  display: inline-block;
  font-size: 1.1rem;
  font-weight: bold;
  min-width: 4.4rem;
  height: 4rem;
  line-height: 4.4rem;
  color: #333;
  font-family: 'microsoft Yahei','Arial','Verdana','Helvetica','sans-serif';
  padding: 0 5px;
  vertical-align:super;
  border-bottom: 5px solid rgba(255, 255, 255, 0);
}
.tabs>div>a:hover{
  color: red;
  border-bottom: 5px solid #0aa1ed;
  transition: 0.1s;
}
.sjtabs>h3{
  background-color: #0aa1ed;
  color: #eee;
  padding: 20px 0;
}
.el-dropdown-link {
    position: fixed;
    top: 25px;
    left: 10px;
    width: 45px;
    height: 30px;
    cursor: pointer;
    color: #eee;
    font-size: 14px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.sjtabs>div{
  position: fixed;
  top: 50px;
  left:15px;
  /* float: left; */
  display: flex;
  flex-flow: column;
  width: 30px;
  /* border: 1px solid rgb(30, 27, 27); */
  /* border-radius: 8px; */
  padding: 5px 0;
  margin-bottom: 14px;
  /* justify-items: top; */
  
}


/* 轮播图 */
.fujiubanner{
  height: 400px;
}

/* 图片的容器 */
.fujiubanner .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: 400px;
}
.fujiubanner .el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  height: 400px;
}
/* 轮播图图片 */
.fujiubanner .lunbotu{
  margin: 0;
  padding: 0;
  width: 100%;
}
.fujiubanner img{
  width: 100%;
  min-width: 750px;
  height: 400px;
}


.sjbanner{
  margin-top: 59px;
  width: 100%;
  height: 200px;
  /* background-color: rgba(255, 255, 255, 0.236); */
}
/* .sjbanner .banner{
  background-image: url(./../assets/7pc.jpg);
  background-repeat: no-repeat;
  background-size:100% 100%;
  height: auto;
  padding-top: 15px;
}
.sjbanner img{
  width:100%;
  height: 100%;
} */
</style>