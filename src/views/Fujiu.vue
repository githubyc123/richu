<template>
  <div class="bodyer">
    <!-- 主体 -->
    <div class="zhuti">
      <h2>产品展示</h2>
      <div class="xian"></div>
      <h6>河北富久新型建材有限公司</h6>
      <div class="chanpin">
        <a>
          <img src="./../assets/fujiu/1-1F911142UQ42.jpg">
          <p>介绍下产品</p>
        </a>
        <a>
          <img src="./../assets/fujiu/1-1F911143SA07.jpg">
          <p>介绍下产品</p>
        </a>
        <a>
          <img src="./../assets/fujiu/1-1F91114342NM.jpg">
          <p>介绍下产品</p>
        </a>
        <a>
          <img src="./../assets/fujiu/1-1F911142452261.jpg">
          <p>介绍下产品</p>
        </a>
        <a>
          <img src="./../assets/fujiu/1-1F911142640625.jpg">
          <p>介绍下产品</p>
        </a>
        <a>
          <img src="./../assets/fujiu/1-1F911143303514.jpg">
          <p>介绍下产品</p>
        </a>
      </div>
      <!-- 4大优势保驾护航 -->
      <img class="sidayoushi" src="./../assets/fujiu/advance_pic.png" alt="">
      <!-- 1234优势详情 -->
      <!-- 优势1 -->
      <div class="youshi">
        <div class="left">
          <img src="./../assets/fujiu/explain_pic1.png" alt="">
        </div>
        <div class="right">
          <!-- 右边 -->
          <h2>优势1ᅠ内容介绍</h2>
          <p>内容介绍，内容介绍，内容介绍，</p>
        </div>
      </div>
      <!-- 优势2 -->
      <div class="youshi">
        <div class="left">
          <h2>优势2ᅠ内容介绍</h2>
          <p>内容介绍，内容介绍，内容介绍，</p>
        </div>
        <div class="right">
          <img src="./../assets/fujiu/explain_pic2.png" alt="">
        </div>
      </div>
      <!-- 优势3 -->
      <div class="youshi">
        <div class="left">
          <img src="./../assets/fujiu/explain_pic3.png" alt="">
        </div>
        <div class="right">
          <h2>优势3ᅠ内容介绍</h2>
          <p>内容介绍，内容介绍，内容介绍，</p>
        </div>
      </div>
      <!-- 优势4 -->
      <div class="youshi">
        <div class="left">
          <h2>优势4ᅠ内容介绍</h2>
          <p>内容介绍，内容介绍，内容介绍，</p>
        </div>
        <div class="right">
          <img src="./../assets/fujiu/explain_pic4.png" alt="">
        </div>
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
export default {
  name: 'Home',
  components: {
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
  margin: 0;
  padding: 0;
  /* font-size: 16px; */
  width: 100%;
}
/* header内容 */
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
/* header内容结束 */
/* 主体 */
.zhuti{
  /* min-width: 900px; */
  width: 100%;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.chanpin>a{
  display: inline-block;
  margin: 0 auto;
  min-width: 150px;
  width: 30%;
  margin: 8px 5px;
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
  height: auto;
}
.chanpin>a>p{
  text-align: center;
}
.sidayoushi{
  width: 100%;
  height: auto;
  min-height: 120px;
}
.youshi{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* flex: 2; */
  /* padding:0 40px; */
}
.youshi>div{
  width: 30%;
  min-width: 150px;
  margin: 1.8rem auto;
  /* display: flex; */
  align-items: center;
  /* border-bottom: 1px dashed #999; */
}
.youshi>.left{
  /* padding: 30px 30px; */
  /* width: 50%; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
  padding-left: 5%;
}
.youshi>.right{
  /* padding: 30px 30px; */
  /* width: 50%; */
  /* margin: 0 auto; */
  padding-right: 5%;
}
.youshi h2{
  /* line-height: 40px; */
  padding: 2rem 0 2rem 0.6rem;
  /* background-image: url(./../assets/fujiu/contact.jpg); */
  background: url(./../assets/fujiu/title_icon.png) no-repeat left;
  background-size: 4rem 4rem;
  text-align: left;
  font-size: 1.1rem;
}
.youshi p{
  /* line-height: 40px; */
  padding-left:1.6rem;
  text-align: left;
}
/* .youshi p{
  line-height: 40px;
} */

.youshi img{
  width: 100%;
  height:auto;
}


/*  */
.lianxiwomen{
  background: url(./../assets/fujiu/contact.jpg) no-repeat center;
  width: 100%;
  height: 11.5rem;
  
}
.lianxiwomen>p{
  color: #fff;
  font-size: 30px;
  padding: 1.5rem 0;
}
.lianxiwomen>a{
  color: #fff;
  font-size: 1.2rem;
  display: block;
  margin: 0 auto;
  width: 9.5rem;
  height: 2rem;
  padding: 0.6rem;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  line-height: 2rem;
}

</style>
