<template>
  <div class="bodyer">
    <!-- 主体 -->
    <div class="zhuti">
      <h2>安全展示</h2>
      <div class="xian"></div>
      <h6>河北富久新型建材有限公司</h6>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <p style="text-align:center">做过的项目展示...</p><br>
      <div>
        <img src="./../assets/fujiu/fujiuzhizhao.jpg" width="300px" alt="">
      </div>
      <!-- 联系我们 -->
      <div class="lianxiwomen">
        <p>联系我们，了解更多服务</p>
        <a href="tel:15690466667">马上联系</a>
      </div>
    </div>
    <!-- 主体结束 -->
  </div>
</template>

<script>
import Fujiufooter from '../components/Fujiufooter.vue'
import Fujiuheader from '../components/Fujiuheader.vue'
export default {
  name: 'Home',
  components: {
    Fujiufooter,
    Fujiuheader
  },
  data(){
    return{
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
  // mounted:{
    
  // },
  methods:{
    handleClick(tab, event) {
        // console.log(tab, event);
      }
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
  display: inline-block;
  /* height: 98px; */
  padding-bottom: 1px;
  padding-top: 10px;
  min-width: 900px;
}
.tabs>img{
  width: 200px;
  height: 50px;
  vertical-align:sub;
  padding-right: 40px;
  /* float: left;
  margin: 5px 10px 0 0; */
}
.tabs>a{
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  height: 58px;
  line-height: 66px;
  color: #333;
  font-family: 'microsoft Yahei','Arial','Verdana','Helvetica','sans-serif';
  padding: 0 20px;
  vertical-align:super;
}
.tabs>a:hover{
  color: red;
  border-bottom: 5px solid #0aa1ed;
  transition: 0.1s;
}
/* 轮播图 */
.fujiubanner{
  height: 400px;
}
/* 图片的容器 */
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: 400px;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  height: 400px;
}
/* 轮播图图片 */
.lunbotu{
  margin: 0;
  padding: 0;
  width: 100%;
}
.fujiubanner img{
  width: 100%;
  min-width: 750px;
  height: 400px;
}
/* 主体 */
.zhuti{
  min-width: 900px;
}
.zhuti>h2{
  margin: 20px 0 10px 0;
  color: rgb(8, 8, 124);
}
.zhuti>.xian{
  margin: 0 auto;
  width: 100px;
  border-bottom: 5px solid orange;
}
.zhuti>h6{
  font-size: 18px;
  margin: 20px auto;
}
.zhuti>.chanpin{
  width: 100%;
}
.chanpin>a{
  display: inline-block;
  margin: 0 auto;
  width: 30%;
  margin: 5px;
  border: 1px solid #999;
  font-size: 15px;
  padding:0 0 8px 0;
}
.chanpin>a:hover{
  font-size: 16px;
  font-weight: bold;
  color: #f00;
  transition: 0.8px;
}
.chanpin>a>img{
  width: 100%;
  height: 200px;
}
.sidayoushi{
  width: 100%;
  height: 330px;
}
.youshi{
  display: flex;
  justify-content: space-around;
  /* flex: 2; */
}
.youshi h2{
  /* line-height: 40px; */
  padding: 40px 0 40px 14px;
  /* background-image: url(./../assets/fujiu/contact.jpg); */
  background: url(./../assets/fujiu/title_icon.png) no-repeat left;
  background-size: 90px 90px;
  text-align: left;
}
.youshi p{
  /* line-height: 40px; */
  padding-left:66px;
  text-align: left;
}
/* .youshi p{
  line-height: 40px;
} */
.youshi>.left{
  padding: 30px;
  width: 50%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
}
.youshi>.right{
  padding: 30px 50px;
  width: 50%;
}
.youshi img{
  width: 60%;
  height:auto;
}


/*  */
.lianxiwomen{
  background: url(./../assets/fujiu/contact.jpg) no-repeat center;
  width: 100%;
  height: 198px;
  
}
.lianxiwomen>p{
  color: #fff;
  font-size: 30px;
  padding: 30px 0;
}
.lianxiwomen>a{
  color: #fff;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  width: 165px;
  height: 40px;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 8px;
  line-height: 40px;
}
/* footer */
.fujiufooter{
  width: 100%;
  background-color: #333;
  
}
.footerzhuti{
  display: flex;
  padding: 30px;
  text-align:left;
  display: flex; justify-content: space-between;
}
.footerright{
  text-align: left;
}
.footerzhuti h2,.footerzhuti h3{
  color: #fff;
}
.footerzhuti p{
  color: #999;
  height: 40px;
  line-height: 40px;
}
.erweima>img{
  width: 118px;
  height: 118px;
}
.erweima2{
  position: fixed;
  display: none;
  width: 118px;
  height: 118px;
  right: 30px;
  bottom: 80px;
}
.erweima:hover>.erweima2{
  display:block;
  width: 260px;
  height: 260px;
  transition: 0.2s;
}
.banquansuoyou{
  display: block;
  color: #999;
  border-top: 1px solid #4f5054;
  padding: 10px 0 10px 40px;
  text-align:left;

}
.banquansuoyou>a{
  color: #999;
  margin: 0 20px;
}
.banquansuoyou>a:hover{
  color: #f00;
}
</style>
