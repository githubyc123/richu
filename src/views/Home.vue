<template>
  <div class="home">
    <!-- 内容 -->
    <div>
      <!-- 电脑轮播图 -->
      <div v-if="homeheaderwidth>550" class="banner">
        <el-carousel :interval="2600" type="card" height="333px">
          <el-carousel-item v-for="(item,i) in banner" :key="i">
            <!-- <h3 class="medium">{{ item }}</h3> -->
            <img v-lazy="item.img" alt="">
            <span>{{item.list}}</span>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 手机轮播图 -->
      <div v-else class="phonebanner">
        <van-swipe :autoplay="2600">
          <van-swipe-item v-for="(item, i) in banner" :key="i">
            <img v-lazy="item.img" />
            <span>{{item.list}}</span>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 内容 -->
      <br>
      <div>
        <h3 style="color:#f00">(点击查看喜欢内容，样式后期更新)</h3>
        <h3 style="color:#f00">(数据库将持续更新，有好建议欢迎联系)</h3>
        <!-- <h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容,更新完之前先看画吧)</h3> -->
      </div><br>
      <div class="zhuti">
        <router-link :to="item.link" v-for="(item,i) in banner" :key="i">
          <img v-lazy="item.img">
          <p>{{item.title}}</p>
          <span>{{item.list}}</span>
        </router-link>
      </div>
      <!-- 图文结束 -->
      <div>
        更多内容待更新
      </div><br>
      <div>
        更多内容待更新 
      </div><br>
      <div>
        更多内容待更新 
      </div><br>
      <div>
        更多内容待更新 
      </div><br>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
    
  },
  data(){return{
    banner:[
      {
        img:require('./../assets/web/html.jpg'),
        link:'/html',
        title:'Html',
        list:'HypeText markup language'
      },
      {
        img:require('./../assets/web/css.jpg'),
        link:'/css',
        title:'Css',
        list:'cascading style sheets'
      },
      {
        img:require('./../assets/web/js.jpg'),
        link:'/js',
        title:'JS',
        list:'javascript'
      },
      {
        img:require('./../assets/web/vue.jpg'),
        link:'/vue',
        title:'Vue',
        list:'SPA单页Web应用'
      },
      {
        img:require('./../assets/web/boot.jpg'),
        link:'/boot',
        title:'bootstrap',
        list:'响应式网页'
      },
      {
        img:require('./../assets/web/jquery.jpg'),
        link:'/jquery',
        title:'jQuery(待整理)',
        list:'待整理'
      },
      {
        img:require('./../assets/web/mysql.jpg'),
        link:'/mysql',
        title:'MySQL',
        list:'关系数据库管理系统'
      },
      {
        img:require('./../assets/web/nodejs.jpg'),
        link:'/nodejs',
        title:'Nodejs(待整理)',
        list:'待整理'
      },
      
    ],
      
    homeheaderwidth:''
    }
  },
  mounted(){
    this.homeheaderwidth=document.documentElement.clientWidth;
    console.log('home'+this.homeheaderwidth);
  },
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
}
.phonebanner{
  width: 100%;
  height: 200px;
}
.phonebanner img{
  width: 100%;
  height: 200px;
  position: relative;
}
.phonebanner span{
  position: absolute;
  bottom: 5%;
  left: 5%;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
/* .home{ */
  /* background-color: lightgrey; */
/* } */
/* .zhuti{
} */
/* 轮播图 */
.banner{
  background-image: url(./../assets/web/vue2.jpg);
  background-repeat: no-repeat;
  background-size:100% 100%;
  height: auto;
  padding-top: 15px;
}
.banner img{
  width:100%;
  height: 100%;
  position: relative;
  
}
.banner span{
  position: absolute;
  bottom: 5%;
  left: 3%;
  color: rgba(243, 231, 231, 0.947);
  font-size: 18px;
  font-weight: bold;
  z-index: 9999;
}
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  } */
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* 轮播图结束 */
.zhuti{
  width: 100%;
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.zhuti>a{
  display: block;
  margin: 20px 0;
  border:1px solid #999;
  width: 22%;
  min-width: 150px;
  overflow:hidden
}
.zhuti>a>img{
  border-bottom: 1px dashed #999;
  width: 99.99%;
}
.zhuti>a>p{
  color: rgba(80, 128, 184,0.8);
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  /* 下面为超行显示省略号 */
  padding: 0 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.zhuti>a>span{
  font-size: 0.9rem;
  color: #999;
  text-align: center;
  text-overflow:ellipsis;
  padding: 0 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.zhuti>a:hover{
  transition: 0.3s;
  border:1px solid #f00;
}
.zhuti>a:hover>p{
  transition: 0.3s;
  font-weight: bold;
  color:#f00;
}
.zhuti>a:hover>span{
  transition: 0.3s;
  font-weight: bold;
  color:rgba(80, 128, 184,0.8)
}
</style>
